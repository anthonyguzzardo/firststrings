// @region types
export type Tour = 'ATP' | 'WTA';
export type Handedness = 'right' | 'left';
export type BackhandStyle = 'one-handed' | 'two-handed';
export type Surface = 'hard' | 'clay' | 'grass' | 'carpet';
export type PlayerStatus = 'active' | 'retired';
export type Era = 'pre-open' | 'open-classic' | 'modern' | 'current';

export interface ShotPalette {
  serveSpeedKmh?: number;
  forehandSpeedKmh?: number;
  backhandSpeedKmh?: number;
  forehandRpm?: number;
  backhandRpm?: number;
  signatureShots: string[];
  weakness?: string;
}

export interface CareerStats {
  grandSlams: number;
  weeksAtNumberOne?: number;
  yearEndNumberOne?: number;
  careerHighRanking: number;
  turnedPro?: number;
  retiredYear?: number;
}

// @region titles
export type TitleTier =
  | 'grand-slam'
  | 'olympics-gold'
  | 'atp-finals' | 'wta-finals'
  | 'masters-1000' | 'wta-1000'
  | 'atp-500' | 'wta-500'
  | 'atp-250' | 'wta-250'
  | 'next-gen-finals'
  | 'pre-open-major';

export interface Title {
  year: number;
  tournament: string;
  city?: string;
  surface?: Surface;
  tier: TitleTier;
  opponent?: string;
  score?: string;
}

export const TIER_ORDER: TitleTier[] = [
  'grand-slam',
  'olympics-gold',
  'atp-finals', 'wta-finals',
  'next-gen-finals',
  'masters-1000', 'wta-1000',
  'atp-500', 'wta-500',
  'atp-250', 'wta-250',
  'pre-open-major',
];

export function tierLabel(tier: TitleTier): string {
  switch (tier) {
    case 'grand-slam': return 'Grand Slam';
    case 'olympics-gold': return 'Olympic Gold';
    case 'atp-finals': return 'ATP Finals';
    case 'wta-finals': return 'WTA Finals';
    case 'masters-1000': return 'ATP Masters 1000';
    case 'wta-1000': return 'WTA 1000';
    case 'atp-500': return 'ATP 500';
    case 'wta-500': return 'WTA 500';
    case 'atp-250': return 'ATP 250';
    case 'wta-250': return 'WTA 250';
    case 'next-gen-finals': return 'Next Gen ATP Finals';
    case 'pre-open-major': return 'Pre-Open Era Major';
  }
}

export function tierShort(tier: TitleTier): string {
  switch (tier) {
    case 'grand-slam': return 'Slam';
    case 'olympics-gold': return 'Olympic Gold';
    case 'atp-finals': case 'wta-finals': return 'YE Finals';
    case 'masters-1000': case 'wta-1000': return '1000';
    case 'atp-500': case 'wta-500': return '500';
    case 'atp-250': case 'wta-250': return '250';
    case 'next-gen-finals': return 'Next Gen';
    case 'pre-open-major': return 'Pre-Open Major';
  }
}

export type SlamKey = 'ao' | 'rg' | 'wim' | 'uso';

export function slamKeyOf(tournament: string): SlamKey | null {
  const t = tournament.toLowerCase();
  if (t.includes('australian')) return 'ao';
  if (t.includes('french') || t.includes('roland')) return 'rg';
  if (t.includes('wimbledon')) return 'wim';
  if (t.includes('us open') || t.includes('united states')) return 'uso';
  return null;
}

export function slamLabel(key: SlamKey): string {
  return { ao: 'Australian Open', rg: 'Roland Garros', wim: 'Wimbledon', uso: 'US Open' }[key];
}

export function groupTitlesByTier(titles: Title[]): Map<TitleTier, Title[]> {
  const map = new Map<TitleTier, Title[]>();
  for (const tier of TIER_ORDER) map.set(tier, []);
  for (const t of titles) {
    const arr = map.get(t.tier) ?? [];
    arr.push(t);
    map.set(t.tier, arr);
  }
  for (const [k, arr] of map) {
    arr.sort((a, b) => a.year - b.year || a.tournament.localeCompare(b.tournament));
    map.set(k, arr);
  }
  return map;
}
// @endregion titles

export interface Player {
  slug: string;
  fullName: string;
  shortName: string;
  tour: Tour;
  bornIso: string;
  birthplace: string;
  heightCm: number;
  handedness: Handedness;
  backhandStyle: BackhandStyle;
  era: Era[];
  styleOfPlay: string[];
  surfaceStrengths: Surface[];
  shotPalette: ShotPalette;
  career: CareerStats;
  bio: string;
  signatureMatch?: string;
  rivalries?: string[];
  status: PlayerStatus;
  dataConfidence?: 'verified' | 'approximate';
  imagePath?: string;
  titles?: Title[];
  equipment?: Equipment;
  ledger?: CareerLedger;
}
// @endregion types

// @region equipment-and-ledger
export interface RacketSpec {
  brand: string;
  model: string;
  weightG?: number;
  headSizeSqIn?: number;
  stringPattern?: string;
  frameMaterial?: string;
  notes?: string;
  [extra: string]: unknown;
}

export interface StringSpec {
  mains?: string;
  crosses?: string;
  brand?: string;
  tensionLbsMains?: number;
  tensionLbsCrosses?: number;
  gauge?: string;
  notes?: string;
  [extra: string]: unknown;
}

export interface ShoeSpec {
  brand: string;
  model: string;
  designer?: string;
  notes?: string;
  [extra: string]: unknown;
}

export type SponsorEntry =
  | string
  | string[]
  | { brand: string; category?: string; since?: number; notes?: string; [extra: string]: unknown };

export function sponsorBrand(s: SponsorEntry): string {
  if (typeof s === 'string') return s;
  if (Array.isArray(s)) return s.join(', ');
  return s.brand;
}

export function sponsorMeta(s: SponsorEntry): string | undefined {
  if (typeof s === 'string' || Array.isArray(s)) return undefined;
  const parts = [s.category, s.since ? `since ${s.since}` : null, s.notes].filter(Boolean) as string[];
  return parts.length > 0 ? parts.join(' · ') : undefined;
}

export interface Equipment {
  racket: RacketSpec;
  strings?: StringSpec;
  shoes?: ShoeSpec;
  apparelSponsor?: SponsorEntry;
  otherSponsors?: SponsorEntry[];
  notes?: string;
  [extra: string]: unknown;
}

export interface MatchRecord {
  wins?: number;
  losses?: number;
  winPct?: number;
  [extra: string]: unknown;
}

export interface SurfaceSplits {
  hard?: MatchRecord;
  clay?: MatchRecord;
  grass?: MatchRecord;
  carpet?: MatchRecord;
}

export interface CareerLedger {
  prizeMoneyUsd?: number | null;
  matchRecord?: MatchRecord | null;
  surfaceSplits?: SurfaceSplits;
  asOfIso?: string;
  source?: string | string[];
  [extra: string]: unknown;
}

export function formatPrizeMoneyUsd(amount: number): string {
  if (amount >= 1_000_000) {
    const m = amount / 1_000_000;
    return `$${m >= 100 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`;
  return `$${amount.toLocaleString('en-US')}`;
}

export function winPct(record?: MatchRecord | null): string | undefined {
  if (!record) return undefined;
  if (typeof record.winPct === 'number') return `${record.winPct.toFixed(1)}%`;
  if (record.wins === undefined || record.losses === undefined) return undefined;
  const total = record.wins + record.losses;
  if (total === 0) return undefined;
  return `${((record.wins / total) * 100).toFixed(1)}%`;
}
// @endregion equipment-and-ledger

// @region accessors
import { players } from './libPlayersData';

export function getAllPlayers(): Player[] {
  return [...players].sort((a, b) => a.shortName.localeCompare(b.shortName));
}

export function getPlayerBySlug(slug: string): Player | undefined {
  return players.find((p) => p.slug === slug);
}

export function getPlayersByTour(tour: Tour): Player[] {
  return getAllPlayers().filter((p) => p.tour === tour);
}

export function getPlayersByEra(era: Era): Player[] {
  return getAllPlayers().filter((p) => p.era.includes(era));
}

export function getPlayersByBackhand(style: BackhandStyle): Player[] {
  return getAllPlayers().filter((p) => p.backhandStyle === style);
}

export function getActivePlayers(): Player[] {
  return getAllPlayers().filter((p) => p.status === 'active');
}

export function getLegends(): Player[] {
  return getAllPlayers().filter((p) => p.status === 'retired');
}
// @endregion accessors

// @region formatting
export function formatAge(bornIso: string, asOfIso: string = new Date().toISOString()): number {
  const born = new Date(bornIso);
  const asOf = new Date(asOfIso);
  let age = asOf.getFullYear() - born.getFullYear();
  const m = asOf.getMonth() - born.getMonth();
  if (m < 0 || (m === 0 && asOf.getDate() < born.getDate())) age--;
  return age;
}

export function formatHeight(cm: number): string {
  const inches = cm / 2.54;
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches - feet * 12);
  return `${cm} cm · ${feet}'${remainingInches}"`;
}

export function getPlayerImagePath(player: Player): string {
  return player.imagePath ?? '/players/_placeholder.svg';
}

export function eraLabel(era: Era): string {
  switch (era) {
    case 'pre-open': return 'Pre-Open';
    case 'open-classic': return 'Open Era — Classic';
    case 'modern': return 'Modern';
    case 'current': return 'Current';
  }
}
// @endregion formatting
