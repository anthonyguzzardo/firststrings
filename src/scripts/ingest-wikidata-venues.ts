/**
 * Pull tennis venues from Wikidata via SPARQL and upsert into td_venue.
 *
 *   npm run ingest:venues
 *
 * Idempotent: matches on name (lowercase) — re-runs update existing rows
 * with any new fields.
 */
import { sql } from '../lib/libDb';

const ENDPOINT = 'https://query.wikidata.org/sparql';

const QUERY = `
SELECT DISTINCT
  ?venue ?venueLabel
  (SAMPLE(?capacity) AS ?cap)
  (SAMPLE(?coord)    AS ?coordSample)
  (SAMPLE(?yearOpen) AS ?year)
  (SAMPLE(?countryLabel) AS ?country)
  (SAMPLE(?countryCode)  AS ?countryCode)
  (SAMPLE(?cityLabel)    AS ?city)
WHERE {
  ?venue wdt:P641 wd:Q847.                   # sport = tennis
  ?venue wdt:P31/wdt:P279* wd:Q1076486.       # subclass of sports venue
  OPTIONAL { ?venue wdt:P1083 ?capacity. FILTER(?capacity > 1000) }
  OPTIONAL { ?venue wdt:P625 ?coord. }
  OPTIONAL {
    ?venue wdt:P571 ?inception.
    BIND(YEAR(?inception) AS ?yearOpen)
  }
  OPTIONAL {
    ?venue wdt:P17 ?country.
    ?country rdfs:label ?countryLabel. FILTER(LANG(?countryLabel) = "en")
    OPTIONAL { ?country wdt:P298 ?countryCode. }
  }
  OPTIONAL {
    ?venue wdt:P131 ?city.
    ?city rdfs:label ?cityLabel. FILTER(LANG(?cityLabel) = "en")
  }
  ?venue rdfs:label ?venueLabel. FILTER(LANG(?venueLabel) = "en")
}
GROUP BY ?venue ?venueLabel
ORDER BY DESC(?cap)
LIMIT 500
`.trim();

interface Binding<T> { type: string; value: T }
interface Row {
  venue?: Binding<string>;
  venueLabel?: Binding<string>;
  cap?: Binding<string>;
  coordSample?: Binding<string>;
  year?: Binding<string>;
  country?: Binding<string>;
  countryCode?: Binding<string>;
  city?: Binding<string>;
}

interface SparqlResp { results: { bindings: Row[] } }

async function fetchVenues(): Promise<Row[]> {
  const url = `${ENDPOINT}?query=${encodeURIComponent(QUERY)}&format=json`;
  const resp = await fetch(url, {
    headers: {
      'accept': 'application/sparql-results+json',
      'user-agent': 'firststrings/0.1 (https://firststrings.tennis; agguzzy91@gmail.com)',
    },
  });
  if (!resp.ok) throw new Error(`Wikidata HTTP ${resp.status}`);
  const j = await resp.json() as SparqlResp;
  return j.results.bindings;
}

function parseCoord(coord?: string): { lat: number | null; lon: number | null } {
  if (!coord) return { lat: null, lon: null };
  // "Point(lon lat)"
  const m = /^Point\(([-\d.]+)\s+([-\d.]+)\)$/.exec(coord);
  if (!m) return { lat: null, lon: null };
  return { lon: parseFloat(m[1]!), lat: parseFloat(m[2]!) };
}

async function main(): Promise<void> {
  console.log('[venues] querying Wikidata...');
  const rows = await fetchVenues();
  console.log(`[venues] ${rows.length} bindings returned`);

  let upserted = 0;
  for (const r of rows) {
    const name = r.venueLabel?.value;
    if (!name) continue;
    const { lat, lon } = parseCoord(r.coordSample?.value);
    const capacity = r.cap?.value ? parseInt(r.cap.value, 10) : null;
    const yearBuilt = r.year?.value ? parseInt(r.year.value, 10) : null;
    const city = r.city?.value ?? null;
    const countryName = r.country?.value ?? null;
    const countryCode = r.countryCode?.value ?? null;

    // Resolve / create country row.
    let countryId: bigint | null = null;
    if (countryCode) {
      const found = await sql<Array<{ country_id: bigint }>>`
        SELECT country_id FROM td_country WHERE code_iso2 = ${countryCode.toUpperCase()}
        LIMIT 1
      `;
      if (found[0]) {
        countryId = found[0].country_id;
      } else if (countryName && countryCode.length === 2) {
        const inserted = await sql<Array<{ country_id: bigint }>>`
          INSERT INTO td_country (code_iso2, code_iso3, name, created_by, modified_by)
          VALUES (${countryCode.toUpperCase()}, ${countryCode.toUpperCase()}, ${countryName},
                  'ingest-wikidata-venues', 'ingest-wikidata-venues')
          ON CONFLICT (code_iso2) DO UPDATE SET name = EXCLUDED.name
          RETURNING country_id
        `;
        countryId = inserted[0]?.country_id ?? null;
      }
    }

    // Upsert venue keyed by lower(name).
    await sql`
      INSERT INTO td_venue
        (name, city, country_id, capacity, year_built, lat, lon, created_by, modified_by)
      VALUES
        (${name}, ${city}, ${countryId}, ${capacity}, ${yearBuilt}, ${lat}, ${lon},
         'ingest-wikidata-venues', 'ingest-wikidata-venues')
      ON CONFLICT DO NOTHING
    `;
    // Also update if it already exists with new info (no unique constraint
    // on name, so we have to do this manually if the INSERT was skipped).
    if (capacity !== null || lat !== null || yearBuilt !== null) {
      await sql`
        UPDATE td_venue
        SET capacity   = COALESCE(capacity, ${capacity}),
            year_built = COALESCE(year_built, ${yearBuilt}),
            lat        = COALESCE(lat, ${lat}),
            lon        = COALESCE(lon, ${lon}),
            city       = COALESCE(city, ${city}),
            country_id = COALESCE(country_id, ${countryId}),
            modified_by = 'ingest-wikidata-venues',
            dttm_modified_utc = NOW()
        WHERE lower(name) = lower(${name})
      `;
    }
    upserted++;
    if (upserted % 50 === 0) process.stdout.write(`  ${upserted}/${rows.length}\r`);
  }
  console.log(`\n[venues] ✓ ${upserted} venue rows upserted`);

  const sample = await sql<Array<{ name: string; capacity: number | null; city: string | null }>>`
    SELECT name, capacity, city FROM td_venue ORDER BY capacity DESC NULLS LAST LIMIT 6
  `;
  console.log('[venues] sample (top by capacity):');
  for (const v of sample) {
    console.log(`         ${v.name.padEnd(40)} ${(v.capacity ?? 0).toLocaleString().padStart(7)} ${v.city ?? ''}`);
  }
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
