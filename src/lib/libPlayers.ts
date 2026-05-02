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
}
// @endregion types

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

export function eraLabel(era: Era): string {
  switch (era) {
    case 'pre-open': return 'Pre-Open';
    case 'open-classic': return 'Open Era — Classic';
    case 'modern': return 'Modern';
    case 'current': return 'Current';
  }
}
// @endregion formatting
