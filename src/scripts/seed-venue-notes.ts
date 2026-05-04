/**
 * Hand-curated editorial notes for the iconic tennis venues. Run after
 * `npm run ingest:venues` to attach. The /venues card renders `notes`
 * when present.
 *
 *   npm run seed:venue-notes
 *
 * Idempotent — re-runs overwrite the notes for matched venues.
 *
 * Voice: short, restrained, observational. Stays out of the players' way.
 * If a note doesn't pull its weight in 60 words, drop it.
 */
import { sql } from '../lib/libDb';

interface Entry { match: string; notes: string }

const NOTES: Entry[] = [
  {
    match: 'Court Philippe-Chatrier',
    notes:
      "The amphitheatre at Roland-Garros, opened in 1928 as a debt the French Federation paid to the Four Musketeers for bringing home the Davis Cup. Clay so red it stains shoes for a season. The retractable roof, added 2020, didn't change the bounce — only the rain plans.",
  },
  {
    match: 'Arthur Ashe Stadium',
    notes:
      "The largest tennis-only arena in the world. Steel ringed by 22,547 seats that turn the second week of the US Open into something between a tournament and a music festival. Roof closed at 16:30 most nights regardless — Queens wind is its own opponent.",
  },
  {
    match: 'Rod Laver Arena',
    notes:
      "Named for the only player to win every Slam in the same year — twice. Plexicushion underfoot until 2008, GreenSet since. The retractable roof was the first of its kind on a Slam court (1988) and it still defines what a January night final feels like.",
  },
  {
    match: 'Indian Wells Tennis Garden',
    notes:
      "16,100 seats in the Coachella Valley. Larry Ellison bought the tournament in 2009 and the grounds turned into an open-air museum: pink-bougainvillea walkways, courts named for Stadium 1–9. The desert dryness gives the ball an extra meter of bounce.",
  },
  {
    match: 'Wimbledon',
    notes:
      "The All England Lawn Tennis & Croquet Club. Eighteen grass courts shaved every morning, two more dedicated to practice. A queue worth queueing for. The only Slam where the colour scheme is older than the open era.",
  },
  {
    match: 'Accor Arena',
    notes:
      "Bercy, Paris. The arena dresses up as a hill, glass-and-grass on the outside, indoor hard inside every November for the Rolex Paris Masters. Four times Djokovic has lifted the trophy here — more than at any other Masters 1000 venue.",
  },
  {
    match: 'St. Jakobshalle',
    notes:
      "Basel's brutalist concert hall doubles as Roger Federer's home tournament from 1998 onward. He won the Swiss Indoors ten times. Locals call it the Joggeli. The acoustics, fittingly, were built for the symphony.",
  },
  {
    match: 'Wiener Stadthalle',
    notes:
      "Built in 1958 as Vienna's all-purpose hall. The Erste Bank Open's late-October slot makes it the indoor-tour bellwether: whoever's serving well in Halle D usually finishes the year at the ATP Finals.",
  },
  {
    match: 'Hanns-Martin-Schleyer-Halle',
    notes:
      "Stuttgart's principal indoor arena. Named for an industrialist murdered by the Red Army Faction in 1977 — a name kept despite recurring debate. Tennis lives here in the autumn months between handball seasons.",
  },
  {
    match: 'Hallenstadion',
    notes:
      "Zurich's indoor athletic core since 1939. Tennis was a fixture in the 1970s and '80s — Borg vs. Connors here, McEnroe vs. Lendl there — before the venue's calendar tilted entirely toward hockey and concerts.",
  },
  {
    match: 'Festhalle Frankfurt',
    notes:
      "Round building, art-nouveau dome, 13,500 seats. The Tour Finals lived here from 1990–1995 — Becker's last great years, the era when the year-end title still meant the player on form, not the player on points.",
  },
  {
    match: 'Court Suzanne-Lenglen',
    notes:
      "Roland-Garros's secondary stadium, named for the Frenchwoman who turned tennis into theatre in the 1920s. The ceremonial entry is via a tunnel cut beneath Avenue Gordon Bennett — players emerge into clay light a beat after they expect to.",
  },
];

async function main(): Promise<void> {
  let updated = 0;
  let missed = 0;
  for (const e of NOTES) {
    const result = await sql`
      UPDATE td_venue
      SET notes = ${e.notes},
          modified_by = 'seed-venue-notes',
          dttm_modified_utc = NOW()
      WHERE lower(name) = lower(${e.match})
      RETURNING venue_id
    `;
    if (result.length === 0) {
      missed++;
      console.warn(`[venue-notes] no venue matching "${e.match}"`);
    } else {
      updated++;
      console.log(`[venue-notes] ✓ ${e.match} (${result.length} row${result.length === 1 ? '' : 's'})`);
    }
  }
  console.log(`[venue-notes] ${updated} updated, ${missed} unmatched (${NOTES.length} total).`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
