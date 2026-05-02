// Curated player roster. Active-player career stats verified against ATP/WTA
// tour sites and Wikipedia in May 2026 — refresh after any major tournament.
// Retired-player stats are final ledgers. Speed/RPM figures are typical-match
// values, not historical maximums, unless noted.
import type { Player } from './libPlayers';

export const players: Player[] = [
  {
    slug: 'roger-federer',
    fullName: 'Roger Federer',
    shortName: 'Federer',
    tour: 'ATP',
    bornIso: '1981-08-08',
    birthplace: 'Basel, Switzerland',
    heightCm: 185,
    handedness: 'right',
    backhandStyle: 'one-handed',
    era: ['modern', 'current'],
    styleOfPlay: ['all-court', 'attacking baseliner', 'transition artist'],
    surfaceStrengths: ['grass', 'hard', 'clay'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 130,
      forehandRpm: 2700,
      signatureShots: ['inside-out forehand', 'kick serve', 'sliced one-handed backhand', 'SABR (Sneak Attack By Roger)'],
      weakness: 'high backhand on slow surfaces',
    },
    career: {
      grandSlams: 20,
      weeksAtNumberOne: 310,
      yearEndNumberOne: 5,
      careerHighRanking: 1,
      turnedPro: 1998,
      retiredYear: 2022,
    },
    bio: "The aesthete's player. Federer's tennis was an argument that beauty and effectiveness need not be opposed — a forehand whipped from anywhere on the court, a kick serve no one could read, footwork that made him appear unhurried even in extremity. Twenty Slams, five year-end #1s, and the longest reign of cultural reverence the sport has known.",
    signatureMatch: 'Wimbledon 2008 Final vs Nadal',
    rivalries: ['rafael-nadal', 'novak-djokovic'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      { year: 2001, tournament: 'Milan', city: 'Milan', surface: 'carpet', tier: 'atp-250', opponent: 'Julien Boutter', score: '6-4 6-7(7) 6-4' },
      { year: 2002, tournament: 'Sydney', city: 'Sydney', surface: 'hard', tier: 'atp-250', opponent: 'Juan Ignacio Chela', score: '6-3 6-3' },
      { year: 2002, tournament: 'Hamburg', city: 'Hamburg', surface: 'clay', tier: 'masters-1000', opponent: 'Marat Safin', score: '6-1 6-3 6-4' },
      { year: 2002, tournament: 'Vienna', city: 'Vienna', surface: 'hard', tier: 'atp-250', opponent: 'Jiri Novak', score: '6-4 6-1 3-6 6-4' },
      { year: 2003, tournament: 'Marseille', city: 'Marseille', surface: 'hard', tier: 'atp-250', opponent: 'Jonas Bjorkman', score: '6-2 7-6(6)' },
      { year: 2003, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Jiri Novak', score: '6-1 7-6(2)' },
      { year: 2003, tournament: 'Munich', city: 'Munich', surface: 'clay', tier: 'atp-250', opponent: 'Jarkko Nieminen', score: '6-1 6-4' },
      { year: 2003, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-250', opponent: 'Nicolas Kiefer', score: '6-1 6-3' },
      { year: 2003, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Mark Philippoussis', score: '7-6(5) 6-2 7-6(3)' },
      { year: 2003, tournament: 'Gstaad', city: 'Gstaad', surface: 'clay', tier: 'atp-250', opponent: 'Radek Stepanek', score: '5-7 6-3 6-3 1-6 6-3' },
      { year: 2003, tournament: 'Vienna', city: 'Vienna', surface: 'hard', tier: 'atp-250', opponent: 'Carlos Moya', score: '6-3 6-3 6-3' },
      { year: 2003, tournament: 'ATP Finals', city: 'Houston', surface: 'hard', tier: 'atp-finals', opponent: 'Andre Agassi', score: '6-3 6-0 6-4' },
      { year: 2004, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Marat Safin', score: '7-6(3) 6-4 6-2' },
      { year: 2004, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Feliciano Lopez', score: '4-6 6-1 6-2' },
      { year: 2004, tournament: 'Indian Wells', city: 'Indian Wells', surface: 'hard', tier: 'masters-1000', opponent: 'Tim Henman', score: '6-3 6-3' },
      { year: 2004, tournament: 'Hamburg', city: 'Hamburg', surface: 'clay', tier: 'masters-1000', opponent: 'Guillermo Coria', score: '4-6 6-4 6-2 6-3' },
      { year: 2004, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-250', opponent: 'Mardy Fish', score: '6-0 6-3' },
      { year: 2004, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Andy Roddick', score: '4-6 7-5 7-6(3) 6-4' },
      { year: 2004, tournament: 'Gstaad', city: 'Gstaad', surface: 'clay', tier: 'atp-250', opponent: 'Igor Andreev', score: '6-2 6-3 5-7 6-3' },
      { year: 2004, tournament: 'Toronto', city: 'Toronto', surface: 'hard', tier: 'masters-1000', opponent: 'Andy Roddick', score: '7-5 6-3' },
      { year: 2004, tournament: 'US Open', city: 'New York', surface: 'hard', tier: 'grand-slam', opponent: 'Lleyton Hewitt', score: '6-0 7-6(3) 6-0' },
      { year: 2004, tournament: 'Bangkok', city: 'Bangkok', surface: 'hard', tier: 'atp-250', opponent: 'Andy Roddick', score: '6-4 6-0' },
      { year: 2004, tournament: 'ATP Finals', city: 'Houston', surface: 'hard', tier: 'atp-finals', opponent: 'Lleyton Hewitt', score: '6-3 6-2' },
      { year: 2005, tournament: 'Doha', city: 'Doha', surface: 'hard', tier: 'atp-250', opponent: 'Ivan Ljubicic', score: '6-3 6-1' },
      { year: 2005, tournament: 'Rotterdam', city: 'Rotterdam', surface: 'hard', tier: 'atp-500', opponent: 'Ivan Ljubicic', score: '5-7 7-5 7-6(7)' },
      { year: 2005, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Ivan Ljubicic', score: '6-1 6-7(6) 6-3' },
      { year: 2005, tournament: 'Indian Wells', city: 'Indian Wells', surface: 'hard', tier: 'masters-1000', opponent: 'Lleyton Hewitt', score: '6-2 6-4 6-4' },
      { year: 2005, tournament: 'Miami', city: 'Miami', surface: 'hard', tier: 'masters-1000', opponent: 'Rafael Nadal', score: '2-6 6-7(4) 7-6(5) 6-3 6-1' },
      { year: 2005, tournament: 'Hamburg', city: 'Hamburg', surface: 'clay', tier: 'masters-1000', opponent: 'Richard Gasquet', score: '6-3 7-5 7-6(4)' },
      { year: 2005, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-250', opponent: 'Marat Safin', score: '6-4 6-7(6) 6-4' },
      { year: 2005, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Andy Roddick', score: '6-2 7-6(2) 6-4' },
      { year: 2005, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'Andy Roddick', score: '6-3 7-5' },
      { year: 2005, tournament: 'US Open', city: 'New York', surface: 'hard', tier: 'grand-slam', opponent: 'Andre Agassi', score: '6-3 2-6 7-6(1) 6-1' },
      { year: 2005, tournament: 'Bangkok', city: 'Bangkok', surface: 'hard', tier: 'atp-250', opponent: 'Andy Murray', score: '6-3 7-5' },
      { year: 2006, tournament: 'Doha', city: 'Doha', surface: 'hard', tier: 'atp-250', opponent: 'Gael Monfils', score: '6-3 7-6(5)' },
      { year: 2006, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Marcos Baghdatis', score: '5-7 7-5 6-0 6-2' },
      { year: 2006, tournament: 'Indian Wells', city: 'Indian Wells', surface: 'hard', tier: 'masters-1000', opponent: 'James Blake', score: '7-5 6-3 6-0' },
      { year: 2006, tournament: 'Miami', city: 'Miami', surface: 'hard', tier: 'masters-1000', opponent: 'Ivan Ljubicic', score: '7-6(5) 7-6(4) 7-6(6)' },
      { year: 2006, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-250', opponent: 'Tomas Berdych', score: '6-0 6-7(4) 6-2' },
      { year: 2006, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Rafael Nadal', score: '6-0 7-6(5) 6-7(2) 6-3' },
      { year: 2006, tournament: 'Toronto', city: 'Toronto', surface: 'hard', tier: 'masters-1000', opponent: 'Richard Gasquet', score: '2-6 6-3 6-2' },
      { year: 2006, tournament: 'US Open', city: 'New York', surface: 'hard', tier: 'grand-slam', opponent: 'Andy Roddick', score: '6-2 4-6 7-5 6-1' },
      { year: 2006, tournament: 'Tokyo', city: 'Tokyo', surface: 'hard', tier: 'atp-500', opponent: 'Tim Henman', score: '6-3 6-3' },
      { year: 2006, tournament: 'Madrid', city: 'Madrid', surface: 'hard', tier: 'masters-1000', opponent: 'Fernando Gonzalez', score: '7-5 6-1 6-0' },
      { year: 2006, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-250', opponent: 'Fernando Gonzalez', score: '6-3 6-2 7-6(3)' },
      { year: 2006, tournament: 'ATP Finals', city: 'Shanghai', surface: 'hard', tier: 'atp-finals', opponent: 'James Blake', score: '6-0 6-3 6-4' },
      { year: 2007, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Fernando Gonzalez', score: '7-6(2) 6-4 6-4' },
      { year: 2007, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Mikhail Youzhny', score: '6-4 6-3' },
      { year: 2007, tournament: 'Hamburg', city: 'Hamburg', surface: 'clay', tier: 'masters-1000', opponent: 'Rafael Nadal', score: '2-6 6-2 6-0' },
      { year: 2007, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Rafael Nadal', score: '7-6(7) 4-6 7-6(3) 2-6 6-2' },
      { year: 2007, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'James Blake', score: '6-1 6-4' },
      { year: 2007, tournament: 'US Open', city: 'New York', surface: 'hard', tier: 'grand-slam', opponent: 'Novak Djokovic', score: '7-6(4) 7-6(2) 6-4' },
      { year: 2007, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-250', opponent: 'Jarkko Nieminen', score: '6-3 6-4' },
      { year: 2007, tournament: 'ATP Finals', city: 'Shanghai', surface: 'hard', tier: 'atp-finals', opponent: 'David Ferrer', score: '6-2 6-3 6-2' },
      { year: 2008, tournament: 'Estoril', city: 'Estoril', surface: 'clay', tier: 'atp-250', opponent: 'Nikolay Davydenko', score: '7-6(5) 1-2 ret.' },
      { year: 2008, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-250', opponent: 'Philipp Kohlschreiber', score: '6-3 6-4' },
      { year: 2008, tournament: 'US Open', city: 'New York', surface: 'hard', tier: 'grand-slam', opponent: 'Andy Murray', score: '6-2 7-5 6-2' },
      { year: 2008, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-250', opponent: 'David Nalbandian', score: '6-3 6-4' },
      { year: 2009, tournament: 'Madrid', city: 'Madrid', surface: 'clay', tier: 'masters-1000', opponent: 'Rafael Nadal', score: '6-4 6-4' },
      { year: 2009, tournament: 'French Open', city: 'Paris', surface: 'clay', tier: 'grand-slam', opponent: 'Robin Soderling', score: '6-1 7-6(1) 6-4' },
      { year: 2009, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Andy Roddick', score: '5-7 7-6(6) 7-6(5) 3-6 16-14' },
      { year: 2009, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'Novak Djokovic', score: '6-1 7-5' },
      { year: 2009, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Novak Djokovic', score: '6-3 6-4' },
      { year: 2010, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Andy Murray', score: '6-3 6-4 7-6(11)' },
      { year: 2010, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'Mardy Fish', score: '6-7(5) 7-6(1) 6-4' },
      { year: 2010, tournament: 'Stockholm', city: 'Stockholm', surface: 'hard', tier: 'atp-250', opponent: 'Florian Mayer', score: '6-4 6-3' },
      { year: 2010, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Novak Djokovic', score: '6-4 3-6 6-1' },
      { year: 2010, tournament: 'ATP Finals', city: 'London', surface: 'hard', tier: 'atp-finals', opponent: 'Rafael Nadal', score: '6-3 3-6 6-1' },
      { year: 2011, tournament: 'Doha', city: 'Doha', surface: 'hard', tier: 'atp-250', opponent: 'Nikolay Davydenko', score: '6-3 6-4' },
      { year: 2011, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Kei Nishikori', score: '6-1 6-3' },
      { year: 2011, tournament: 'Paris', city: 'Paris', surface: 'hard', tier: 'masters-1000', opponent: 'Jo-Wilfried Tsonga', score: '6-1 7-6(3)' },
      { year: 2011, tournament: 'ATP Finals', city: 'London', surface: 'hard', tier: 'atp-finals', opponent: 'Jo-Wilfried Tsonga', score: '6-3 6-7(6) 6-3' },
      { year: 2012, tournament: 'Rotterdam', city: 'Rotterdam', surface: 'hard', tier: 'atp-500', opponent: 'Juan Martin del Potro', score: '6-1 6-4' },
      { year: 2012, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Andy Murray', score: '7-5 6-4' },
      { year: 2012, tournament: 'Indian Wells', city: 'Indian Wells', surface: 'hard', tier: 'masters-1000', opponent: 'John Isner', score: '7-6(7) 6-3' },
      { year: 2012, tournament: 'Madrid', city: 'Madrid', surface: 'clay', tier: 'masters-1000', opponent: 'Tomas Berdych', score: '3-6 7-5 7-5' },
      { year: 2012, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Andy Murray', score: '4-6 7-5 6-3 6-4' },
      { year: 2012, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'Novak Djokovic', score: '6-0 7-6(7)' },
      { year: 2012, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Juan Martin del Potro', score: '6-4 6-7(4) 7-6(3)' },
      { year: 2013, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-500', opponent: 'Mikhail Youzhny', score: '6-7(5) 6-3 6-4' },
      { year: 2014, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Tomas Berdych', score: '3-6 6-4 6-3' },
      { year: 2014, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-500', opponent: 'Alejandro Falla', score: '7-6(2) 7-6(3)' },
      { year: 2014, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'David Ferrer', score: '6-3 1-6 6-2' },
      { year: 2014, tournament: 'Shanghai', city: 'Shanghai', surface: 'hard', tier: 'masters-1000', opponent: 'Gilles Simon', score: '7-6(6) 7-6(2)' },
      { year: 2014, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'David Goffin', score: '6-2 6-2' },
      { year: 2015, tournament: 'Brisbane', city: 'Brisbane', surface: 'hard', tier: 'atp-250', opponent: 'Milos Raonic', score: '6-4 6-7(2) 6-4' },
      { year: 2015, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Novak Djokovic', score: '6-3 7-5' },
      { year: 2015, tournament: 'Istanbul', city: 'Istanbul', surface: 'clay', tier: 'atp-250', opponent: 'Pablo Cuevas', score: '6-3 7-6(11)' },
      { year: 2015, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-500', opponent: 'Andreas Seppi', score: '7-6(1) 6-4' },
      { year: 2015, tournament: 'Cincinnati', city: 'Cincinnati', surface: 'hard', tier: 'masters-1000', opponent: 'Novak Djokovic', score: '7-6(1) 6-3' },
      { year: 2015, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Rafael Nadal', score: '6-3 5-7 6-3' },
      { year: 2017, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Rafael Nadal', score: '6-4 3-6 6-1 3-6 6-3' },
      { year: 2017, tournament: 'Indian Wells', city: 'Indian Wells', surface: 'hard', tier: 'masters-1000', opponent: 'Stan Wawrinka', score: '6-4 7-5' },
      { year: 2017, tournament: 'Miami', city: 'Miami', surface: 'hard', tier: 'masters-1000', opponent: 'Rafael Nadal', score: '6-3 6-4' },
      { year: 2017, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-500', opponent: 'Alexander Zverev', score: '6-1 6-3' },
      { year: 2017, tournament: 'Wimbledon', city: 'London', surface: 'grass', tier: 'grand-slam', opponent: 'Marin Cilic', score: '6-3 6-1 6-4' },
      { year: 2017, tournament: 'Shanghai', city: 'Shanghai', surface: 'hard', tier: 'masters-1000', opponent: 'Rafael Nadal', score: '6-4 6-3' },
      { year: 2017, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Juan Martin del Potro', score: '6-7(5) 6-4 6-3' },
      { year: 2018, tournament: 'Australian Open', city: 'Melbourne', surface: 'hard', tier: 'grand-slam', opponent: 'Marin Cilic', score: '6-2 6-7(5) 6-3 3-6 6-1' },
      { year: 2018, tournament: 'Rotterdam', city: 'Rotterdam', surface: 'hard', tier: 'atp-500', opponent: 'Grigor Dimitrov', score: '6-2 6-2' },
      { year: 2018, tournament: 'Stuttgart', city: 'Stuttgart', surface: 'grass', tier: 'atp-250', opponent: 'Milos Raonic', score: '6-4 7-6(3)' },
      { year: 2018, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Marius Copil', score: '7-6(5) 6-4' },
      { year: 2019, tournament: 'Dubai', city: 'Dubai', surface: 'hard', tier: 'atp-500', opponent: 'Stefanos Tsitsipas', score: '6-4 6-4' },
      { year: 2019, tournament: 'Miami', city: 'Miami', surface: 'hard', tier: 'masters-1000', opponent: 'John Isner', score: '6-1 6-4' },
      { year: 2019, tournament: 'Halle', city: 'Halle', surface: 'grass', tier: 'atp-500', opponent: 'David Goffin', score: '7-6(2) 6-1' },
      { year: 2019, tournament: 'Basel', city: 'Basel', surface: 'hard', tier: 'atp-500', opponent: 'Alex de Minaur', score: '6-2 6-2' },
    ],
    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Pro Staff RF97 Autograph",
        "weightG": 340,
        "headSizeSqIn": 97
      },
      "strings": {
        "mains": "Wilson Natural Gut 16",
        "crosses": "Luxilon ALU Power Rough 16L",
        "tensionLbsMains": 48.5,
        "tensionLbsCrosses": 45
      },
      "shoes": {
        "brand": "Nike",
        "model": "NikeCourt Zoom Vapor 9.5 Tour"
      },
      "apparelSponsor": "Uniqlo",
      "otherSponsors": [
        "Rolex",
        "Mercedes-Benz",
        "Lindt",
        "Credit Suisse",
        "Moet & Chandon",
        "Sunrise",
        "Wilson",
        "NetJets",
        "Barilla",
        "On"
      ],
      "notes": "Reverse hybrid stringer (natural gut in mains, poly in crosses). Switched apparel from Nike to Uniqlo at Wimbledon 2018 on a 10-year ~$300M deal but kept Nike footwear since Uniqlo has no tennis shoe line. Retail RF97 Autograph specs are ~340g unstrung (357g strung); Federer's personal frames were customized heavier (~366g strung)."
    },
    ledger: {
      "prizeMoneyUsd": 130594339,
      "matchRecord": {
        "wins": 1251,
        "losses": 275
      },
      "asOfIso": "2022-09-23",
      "source": "ATP Tour + Wikipedia (Roger Federer career statistics)"
    },

  },
  {
    slug: 'rafael-nadal',
    fullName: 'Rafael Nadal',
    shortName: 'Nadal',
    tour: 'ATP',
    bornIso: '1986-06-03',
    birthplace: 'Manacor, Mallorca, Spain',
    heightCm: 185,
    handedness: 'left',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['aggressive baseliner', 'topspin generator', 'physical fighter'],
    surfaceStrengths: ['clay', 'hard', 'grass'],
    shotPalette: {
      serveSpeedKmh: 195,
      forehandSpeedKmh: 130,
      forehandRpm: 3200,
      signatureShots: ['lasso forehand', 'banana shot', 'cross-court topspin forehand', 'inside-out forehand to backhand corner'],
      weakness: 'high backhand under pressure',
    },
    career: {
      grandSlams: 22,
      weeksAtNumberOne: 209,
      yearEndNumberOne: 5,
      careerHighRanking: 1,
      turnedPro: 2001,
      retiredYear: 2024,
    },
    bio: 'If Federer is light, Nadal is gravity. He turned topspin into a weapon and Roland Garros into a 14-Slam fiefdom. Left-handed, full-throated, relentless — Nadal redefined what physical and mental commitment looked like on a tennis court, and made every long rally feel like a referendum on willpower.',
    signatureMatch: 'Wimbledon 2008 Final vs Federer',
    rivalries: ['roger-federer', 'novak-djokovic'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2004,
        "tournament": "Sopot",
        "city": "Sopot",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Jose Acasuso",
        "score": "6-3, 6-4"
      },
      {
        "year": 2005,
        "tournament": "Brasil Open",
        "city": "Costa do Sauipe",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Alberto Martin",
        "score": "6-0, 6-7(2), 6-1"
      },
      {
        "year": 2005,
        "tournament": "Mexican Open",
        "city": "Acapulco",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Albert Montanes",
        "score": "6-1, 6-0"
      },
      {
        "year": 2005,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Guillermo Coria",
        "score": "6-3, 6-1, 0-6, 7-5"
      },
      {
        "year": 2005,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Juan Carlos Ferrero",
        "score": "6-1, 7-6(4), 6-3"
      },
      {
        "year": 2005,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Guillermo Coria",
        "score": "6-4, 3-6, 6-3, 4-6, 7-6(6)"
      },
      {
        "year": 2005,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Mariano Puerta",
        "score": "6-7(6), 6-3, 6-1, 7-5"
      },
      {
        "year": 2005,
        "tournament": "Bastad",
        "city": "Bastad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Tomas Berdych",
        "score": "2-6, 6-2, 6-4"
      },
      {
        "year": 2005,
        "tournament": "Stuttgart Open",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Gaston Gaudio",
        "score": "6-3, 6-3, 6-4"
      },
      {
        "year": 2005,
        "tournament": "Canada Masters",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andre Agassi",
        "score": "6-3, 4-6, 6-2"
      },
      {
        "year": 2005,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Guillermo Coria",
        "score": "5-7, 6-1, 6-2"
      },
      {
        "year": 2005,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Ivan Ljubicic",
        "score": "3-6, 2-6, 6-3, 6-4, 7-6(3)"
      },
      {
        "year": 2006,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Roger Federer",
        "score": "2-6, 6-4, 6-4"
      },
      {
        "year": 2006,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-2, 6-7(2), 6-3, 7-6(5)"
      },
      {
        "year": 2006,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Tommy Robredo",
        "score": "6-4, 6-4, 6-0"
      },
      {
        "year": 2006,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-7(0), 7-6(5), 6-4, 2-6, 7-6(5)"
      },
      {
        "year": 2006,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "1-6, 6-1, 6-4, 7-6(4)"
      },
      {
        "year": 2007,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "6-2, 7-5"
      },
      {
        "year": 2007,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-4, 6-4"
      },
      {
        "year": 2007,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Guillermo Canas",
        "score": "6-3, 6-4"
      },
      {
        "year": 2007,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Fernando Gonzalez",
        "score": "6-2, 6-2"
      },
      {
        "year": 2007,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "6-3, 4-6, 6-3, 6-4"
      },
      {
        "year": 2007,
        "tournament": "Stuttgart Open",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Stan Wawrinka",
        "score": "6-4, 7-6(2)"
      },
      {
        "year": 2008,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "7-5, 7-5"
      },
      {
        "year": 2008,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "6-1, 4-6, 6-1"
      },
      {
        "year": 2008,
        "tournament": "Hamburg Masters",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "7-5, 6-7(3), 6-3"
      },
      {
        "year": 2008,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "6-1, 6-3, 6-0"
      },
      {
        "year": 2008,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Novak Djokovic",
        "score": "7-6(6), 7-5"
      },
      {
        "year": 2008,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "6-4, 6-4, 6-7(5), 6-7(8), 9-7"
      },
      {
        "year": 2008,
        "tournament": "Canada Masters",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Nicolas Kiefer",
        "score": "6-3, 6-2"
      },
      {
        "year": 2008,
        "tournament": "Olympics",
        "city": "Beijing",
        "surface": "hard",
        "tier": "olympics-gold",
        "opponent": "Fernando Gonzalez",
        "score": "6-3, 7-6(2), 6-3"
      },
      {
        "year": 2009,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "7-5, 3-6, 7-6(3), 3-6, 6-2"
      },
      {
        "year": 2009,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "6-1, 6-2"
      },
      {
        "year": 2009,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "6-3, 2-6, 6-1"
      },
      {
        "year": 2009,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "6-2, 7-5"
      },
      {
        "year": 2009,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "7-6(2), 6-2"
      },
      {
        "year": 2010,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Fernando Verdasco",
        "score": "6-0, 6-1"
      },
      {
        "year": 2010,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "David Ferrer",
        "score": "7-5, 6-2"
      },
      {
        "year": 2010,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-4, 7-6(5)"
      },
      {
        "year": 2010,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Robin Soderling",
        "score": "6-4, 6-2, 6-4"
      },
      {
        "year": 2010,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Tomas Berdych",
        "score": "6-3, 7-5, 6-4"
      },
      {
        "year": 2010,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "6-4, 5-7, 6-4, 6-2"
      },
      {
        "year": 2010,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Gael Monfils",
        "score": "6-1, 7-5"
      },
      {
        "year": 2011,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "David Ferrer",
        "score": "6-4, 7-5"
      },
      {
        "year": 2011,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "6-2, 6-4"
      },
      {
        "year": 2011,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "7-5, 7-6(3), 5-7, 6-1"
      },
      {
        "year": 2012,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "6-3, 6-1"
      },
      {
        "year": 2012,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "7-6(1), 7-5"
      },
      {
        "year": 2012,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "7-5, 6-3"
      },
      {
        "year": 2012,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "6-4, 6-3, 2-6, 7-5"
      },
      {
        "year": 2013,
        "tournament": "VTR Open",
        "city": "Vina del Mar",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Horacio Zeballos",
        "score": "6-7(2), 7-6(6), 4-6"
      },
      {
        "year": 2013,
        "tournament": "Brasil Open",
        "city": "Sao Paulo",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "David Nalbandian",
        "score": "6-2, 6-3"
      },
      {
        "year": 2013,
        "tournament": "Mexican Open",
        "city": "Acapulco",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "6-0, 6-2"
      },
      {
        "year": 2013,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Juan Martin del Potro",
        "score": "4-6, 6-3, 6-4"
      },
      {
        "year": 2013,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Nicolas Almagro",
        "score": "6-4, 6-3"
      },
      {
        "year": 2013,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Stan Wawrinka",
        "score": "6-2, 6-4"
      },
      {
        "year": 2013,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-1, 6-3"
      },
      {
        "year": 2013,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "David Ferrer",
        "score": "6-3, 6-2, 6-3"
      },
      {
        "year": 2013,
        "tournament": "Canada Masters",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Milos Raonic",
        "score": "6-2, 6-2"
      },
      {
        "year": 2013,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "John Isner",
        "score": "7-6(8), 7-6(3)"
      },
      {
        "year": 2013,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "6-2, 3-6, 6-4, 6-1"
      },
      {
        "year": 2014,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Gael Monfils",
        "score": "6-1, 6-7(5), 6-2"
      },
      {
        "year": 2014,
        "tournament": "Rio Open",
        "city": "Rio de Janeiro",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Alexandr Dolgopolov",
        "score": "6-3, 7-6(3)"
      },
      {
        "year": 2014,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Kei Nishikori",
        "score": "2-6, 6-4, 3-0 ret."
      },
      {
        "year": 2014,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "3-6, 7-5, 6-2, 6-4"
      },
      {
        "year": 2015,
        "tournament": "Argentina Open",
        "city": "Buenos Aires",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Juan Monaco",
        "score": "6-4, 6-1"
      },
      {
        "year": 2015,
        "tournament": "Stuttgart Open",
        "city": "Stuttgart",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Viktor Troicki",
        "score": "7-6(3), 6-3"
      },
      {
        "year": 2015,
        "tournament": "Hamburg Open",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Fabio Fognini",
        "score": "7-5, 7-5"
      },
      {
        "year": 2016,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Gael Monfils",
        "score": "7-5, 5-7, 6-0"
      },
      {
        "year": 2016,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Kei Nishikori",
        "score": "6-4, 7-5"
      },
      {
        "year": 2017,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Albert Ramos Vinolas",
        "score": "6-1, 6-3"
      },
      {
        "year": 2017,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Dominic Thiem",
        "score": "6-4, 6-1"
      },
      {
        "year": 2017,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Dominic Thiem",
        "score": "7-6(8), 6-4"
      },
      {
        "year": 2017,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Stan Wawrinka",
        "score": "6-2, 6-3, 6-1"
      },
      {
        "year": 2017,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Kevin Anderson",
        "score": "6-3, 6-3, 6-4"
      },
      {
        "year": 2017,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Nick Kyrgios",
        "score": "6-2, 6-1"
      },
      {
        "year": 2018,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Kei Nishikori",
        "score": "6-3, 6-2"
      },
      {
        "year": 2018,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-2, 6-1"
      },
      {
        "year": 2018,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Alexander Zverev",
        "score": "6-1, 1-6, 6-3"
      },
      {
        "year": 2018,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Dominic Thiem",
        "score": "6-4, 6-3, 6-2"
      },
      {
        "year": 2018,
        "tournament": "Canada Masters",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-2, 7-6(4)"
      },
      {
        "year": 2019,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "6-0, 4-6, 6-1"
      },
      {
        "year": 2019,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Dominic Thiem",
        "score": "6-3, 5-7, 6-1, 6-1"
      },
      {
        "year": 2019,
        "tournament": "Canada Masters",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Daniil Medvedev",
        "score": "6-3, 6-0"
      },
      {
        "year": 2019,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Daniil Medvedev",
        "score": "7-5, 6-3, 5-7, 4-6, 6-4"
      },
      {
        "year": 2019,
        "tournament": "ATP Finals",
        "city": "London",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "",
        "score": ""
      },
      {
        "year": 2020,
        "tournament": "Mexican Open",
        "city": "Acapulco",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Taylor Fritz",
        "score": "6-3, 6-2"
      },
      {
        "year": 2020,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "6-0, 6-2, 7-5"
      },
      {
        "year": 2021,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-4, 6-7(6), 7-5"
      },
      {
        "year": 2021,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "7-5, 1-6, 6-3"
      },
      {
        "year": 2022,
        "tournament": "Melbourne Summer Set",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Maxime Cressy",
        "score": "7-6(2), 6-3"
      },
      {
        "year": 2022,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Daniil Medvedev",
        "score": "2-6, 6-7(5), 6-4, 6-4, 7-5"
      },
      {
        "year": 2022,
        "tournament": "Mexican Open",
        "city": "Acapulco",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Cameron Norrie",
        "score": "6-4, 7-6(5)"
      },
      {
        "year": 2022,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Casper Ruud",
        "score": "6-3, 6-3, 6-0"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Babolat",
        "model": "Pure Aero (pro stock based on AeroPro Drive Original mold; consumer-facing endorsement: Pure Aero Rafa / Pure Aero Rafa Origin)",
        "headSizeSqIn": 100,
        "stringPattern": "16x19"
      },
      "strings": {
        "mains": "Babolat RPM Blast",
        "crosses": "Babolat RPM Blast",
        "tensionLbsMains": 55,
        "tensionLbsCrosses": 55
      },
      "shoes": {
        "brand": "Nike",
        "model": "NikeCourt Air Zoom Vapor Cage 4 Rafa"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Kia",
        "Richard Mille",
        "Babolat",
        "Telefonica",
        "Banco Sabadell"
      ],
      "notes": "Famous bandana, tape on fingers, sleeveless shirts pre-2009; later Nike Rafa line. Does not vary tension between mains and crosses. Babolat released a 92-unit limited Pure Aero Rafa Retirement racket in 2024 to mark his career."
    },
    ledger: {
      "prizeMoneyUsd": 134946100,
      "matchRecord": {
        "wins": 1124,
        "losses": 222
      },
      "surfaceSplits": {
        "hard": {
          "wins": 518,
          "winPct": 0.774
        },
        "clay": {
          "wins": 484,
          "winPct": 0.905
        },
        "grass": {
          "wins": 76,
          "winPct": 0.792
        }
      },
      "asOfIso": "2024-11-19",
      "source": "ATP + Wikipedia"
    },

  },
  {
    slug: 'novak-djokovic',
    fullName: 'Novak Djokovic',
    shortName: 'Djokovic',
    tour: 'ATP',
    bornIso: '1987-05-22',
    birthplace: 'Belgrade, Serbia',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['counterpuncher', 'baseline', 'defense-into-offense'],
    surfaceStrengths: ['hard', 'grass', 'clay'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 130,
      backhandSpeedKmh: 130,
      signatureShots: ['cross-court two-handed backhand', 'return of serve', 'down-the-line backhand', 'drop shot'],
      weakness: 'high-bouncing topspin to the forehand on slow clay',
    },
    career: {
      grandSlams: 24,
      weeksAtNumberOne: 428,
      yearEndNumberOne: 8,
      careerHighRanking: 1,
      turnedPro: 2003,
    },
    bio: 'The most complete defender ever to play, and the man who turned defense into offense in a single shot. Djokovic\'s flexibility, return of serve, and refusal to break under pressure built a 24-Slam case for him as the greatest of his era — perhaps any era.',
    signatureMatch: 'Wimbledon 2019 Final vs Federer',
    rivalries: ['roger-federer', 'rafael-nadal', 'andy-murray'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2006,
        "tournament": "Dutch Open",
        "city": "Amersfoort",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Nicolas Massu",
        "score": "7-6(5), 6-4"
      },
      {
        "year": 2006,
        "tournament": "Moselle Open",
        "city": "Metz",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jurgen Melzer",
        "score": "6-3, 6-2"
      },
      {
        "year": 2007,
        "tournament": "Adelaide International",
        "city": "Adelaide",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Chris Guccione",
        "score": "6-3, 6-7(6), 6-4"
      },
      {
        "year": 2007,
        "tournament": "Estoril Open",
        "city": "Estoril",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Richard Gasquet",
        "score": "7-6(7), 0-6, 6-1"
      },
      {
        "year": 2007,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Guillermo Canas",
        "score": "6-3, 6-2, 6-4"
      },
      {
        "year": 2007,
        "tournament": "Rogers Cup",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "7-6(2), 2-6, 7-6(2)"
      },
      {
        "year": 2007,
        "tournament": "Vienna Open",
        "city": "Vienna",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Stan Wawrinka",
        "score": "6-4, 6-0"
      },
      {
        "year": 2008,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Jo-Wilfried Tsonga",
        "score": "4-6, 6-4, 6-3, 7-6(2)"
      },
      {
        "year": 2008,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Mardy Fish",
        "score": "6-2, 5-7, 6-3"
      },
      {
        "year": 2008,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Stan Wawrinka",
        "score": "4-6, 6-3, 6-3"
      },
      {
        "year": 2008,
        "tournament": "Tennis Masters Cup",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Nikolay Davydenko",
        "score": "6-1, 7-5"
      },
      {
        "year": 2009,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "7-5, 6-3"
      },
      {
        "year": 2009,
        "tournament": "Serbia Open",
        "city": "Belgrade",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Lukasz Kubot",
        "score": "6-3, 7-6(0)"
      },
      {
        "year": 2009,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Marin Cilic",
        "score": "6-2, 7-6(4)"
      },
      {
        "year": 2009,
        "tournament": "Swiss Indoors",
        "city": "Basel",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Roger Federer",
        "score": "6-4, 4-6, 6-2"
      },
      {
        "year": 2009,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Gael Monfils",
        "score": "6-2, 5-7, 7-6(3)"
      },
      {
        "year": 2010,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Mikhail Youzhny",
        "score": "7-5, 5-7, 6-3"
      },
      {
        "year": 2010,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "David Ferrer",
        "score": "6-2, 6-4"
      },
      {
        "year": 2011,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andy Murray",
        "score": "6-4, 6-2, 6-3"
      },
      {
        "year": 2011,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Roger Federer",
        "score": "6-3, 6-3"
      },
      {
        "year": 2011,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "4-6, 6-3, 6-2"
      },
      {
        "year": 2011,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "4-6, 6-3, 7-6(4)"
      },
      {
        "year": 2011,
        "tournament": "Serbia Open",
        "city": "Belgrade",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Feliciano Lopez",
        "score": "7-6(4), 6-2"
      },
      {
        "year": 2011,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "7-5, 6-4"
      },
      {
        "year": 2011,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "6-4, 6-4"
      },
      {
        "year": 2011,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Rafael Nadal",
        "score": "6-4, 6-1, 1-6, 6-3"
      },
      {
        "year": 2011,
        "tournament": "Rogers Cup",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Mardy Fish",
        "score": "6-2, 3-6, 6-4"
      },
      {
        "year": 2011,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Rafael Nadal",
        "score": "6-2, 6-4, 6-7(3), 6-1"
      },
      {
        "year": 2012,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Rafael Nadal",
        "score": "5-7, 6-4, 6-2, 6-7(5), 7-5"
      },
      {
        "year": 2012,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "6-1, 7-6(4)"
      },
      {
        "year": 2012,
        "tournament": "Rogers Cup",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Richard Gasquet",
        "score": "6-3, 6-2"
      },
      {
        "year": 2012,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Jo-Wilfried Tsonga",
        "score": "7-6(4), 6-2"
      },
      {
        "year": 2012,
        "tournament": "Shanghai Masters",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "5-7, 7-6(11), 6-3"
      },
      {
        "year": 2012,
        "tournament": "ATP World Tour Finals",
        "city": "London",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Roger Federer",
        "score": "7-6(6), 7-5"
      },
      {
        "year": 2013,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andy Murray",
        "score": "6-7(2), 7-6(3), 6-3, 6-2"
      },
      {
        "year": 2013,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Tomas Berdych",
        "score": "7-5, 6-3"
      },
      {
        "year": 2013,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "6-2, 7-6(1)"
      },
      {
        "year": 2013,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Rafael Nadal",
        "score": "6-3, 6-4"
      },
      {
        "year": 2013,
        "tournament": "Shanghai Masters",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Juan Martin del Potro",
        "score": "6-1, 3-6, 7-6(3)"
      },
      {
        "year": 2013,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "David Ferrer",
        "score": "7-5, 7-5"
      },
      {
        "year": 2013,
        "tournament": "ATP World Tour Finals",
        "city": "London",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Rafael Nadal",
        "score": "6-3, 6-4"
      },
      {
        "year": 2014,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "3-6, 6-3, 7-6(3)"
      },
      {
        "year": 2014,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "6-3, 6-3"
      },
      {
        "year": 2014,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Rafael Nadal",
        "score": "4-6, 6-3, 6-3"
      },
      {
        "year": 2014,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "6-7(7), 6-4, 7-6(4), 5-7, 6-4"
      },
      {
        "year": 2014,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Tomas Berdych",
        "score": "6-0, 6-2"
      },
      {
        "year": 2014,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Milos Raonic",
        "score": "6-2, 6-3"
      },
      {
        "year": 2014,
        "tournament": "ATP World Tour Finals",
        "city": "London",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Roger Federer",
        "score": "walkover"
      },
      {
        "year": 2015,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andy Murray",
        "score": "7-6(5), 6-7(4), 6-3, 6-0"
      },
      {
        "year": 2015,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-3, 6-7(5), 6-2"
      },
      {
        "year": 2015,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "7-6(3), 4-6, 6-0"
      },
      {
        "year": 2015,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Tomas Berdych",
        "score": "7-5, 4-6, 6-3"
      },
      {
        "year": 2015,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-4, 6-3"
      },
      {
        "year": 2015,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "7-6(1), 6-7(10), 6-4, 6-3"
      },
      {
        "year": 2015,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "6-4, 5-7, 6-4, 6-4"
      },
      {
        "year": 2015,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Rafael Nadal",
        "score": "6-2, 6-2"
      },
      {
        "year": 2015,
        "tournament": "Shanghai Masters",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jo-Wilfried Tsonga",
        "score": "6-2, 6-4"
      },
      {
        "year": 2015,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "6-2, 6-4"
      },
      {
        "year": 2015,
        "tournament": "ATP World Tour Finals",
        "city": "London",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Roger Federer",
        "score": "6-3, 6-4"
      },
      {
        "year": 2016,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Rafael Nadal",
        "score": "6-1, 6-2"
      },
      {
        "year": 2016,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andy Murray",
        "score": "6-1, 7-5, 7-6(3)"
      },
      {
        "year": 2016,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Milos Raonic",
        "score": "6-2, 6-0"
      },
      {
        "year": 2016,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Kei Nishikori",
        "score": "6-3, 6-3"
      },
      {
        "year": 2016,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Andy Murray",
        "score": "6-2, 3-6, 6-3"
      },
      {
        "year": 2016,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Andy Murray",
        "score": "3-6, 6-1, 6-2, 6-4"
      },
      {
        "year": 2016,
        "tournament": "Rogers Cup",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Kei Nishikori",
        "score": "6-3, 7-5"
      },
      {
        "year": 2017,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Andy Murray",
        "score": "6-3, 5-7, 6-4"
      },
      {
        "year": 2017,
        "tournament": "Eastbourne International",
        "city": "Eastbourne",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Gael Monfils",
        "score": "6-3, 6-4"
      },
      {
        "year": 2018,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Kevin Anderson",
        "score": "6-2, 6-2, 7-6(3)"
      },
      {
        "year": 2018,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-4, 6-4"
      },
      {
        "year": 2018,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Juan Martin del Potro",
        "score": "6-3, 7-6(4), 6-3"
      },
      {
        "year": 2018,
        "tournament": "Shanghai Masters",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Borna Coric",
        "score": "6-3, 6-4"
      },
      {
        "year": 2019,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Rafael Nadal",
        "score": "6-3, 6-2, 6-3"
      },
      {
        "year": 2019,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-3, 6-4"
      },
      {
        "year": 2019,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Roger Federer",
        "score": "7-6(5), 1-6, 7-6(4), 4-6, 13-12(3)"
      },
      {
        "year": 2019,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John Millman",
        "score": "6-3, 6-2"
      },
      {
        "year": 2019,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Denis Shapovalov",
        "score": "6-3, 6-4"
      },
      {
        "year": 2020,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Dominic Thiem",
        "score": "6-4, 4-6, 2-6, 6-3, 6-4"
      },
      {
        "year": 2020,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-3, 6-4"
      },
      {
        "year": 2020,
        "tournament": "Cincinnati Masters",
        "city": "New York",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Milos Raonic",
        "score": "1-6, 6-3, 6-4"
      },
      {
        "year": 2020,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Diego Schwartzman",
        "score": "7-5, 6-3"
      },
      {
        "year": 2021,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Daniil Medvedev",
        "score": "7-5, 6-2, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Belgrade Open",
        "city": "Belgrade",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Alex Molcan",
        "score": "6-4, 6-3"
      },
      {
        "year": 2021,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-7(6), 2-6, 6-3, 6-2, 6-4"
      },
      {
        "year": 2021,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Matteo Berrettini",
        "score": "6-7(4), 6-4, 6-4, 6-3"
      },
      {
        "year": 2021,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Daniil Medvedev",
        "score": "4-6, 6-3, 6-3"
      },
      {
        "year": 2022,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-0, 7-6(5)"
      },
      {
        "year": 2022,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Nick Kyrgios",
        "score": "4-6, 6-3, 6-4, 7-6(3)"
      },
      {
        "year": 2022,
        "tournament": "Tel Aviv Watergen Open",
        "city": "Tel Aviv",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Marin Cilic",
        "score": "6-3, 6-4"
      },
      {
        "year": 2022,
        "tournament": "Astana Open",
        "city": "Astana",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-3, 6-4"
      },
      {
        "year": 2022,
        "tournament": "ATP Finals",
        "city": "Turin",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Casper Ruud",
        "score": "7-5, 6-3"
      },
      {
        "year": 2023,
        "tournament": "Adelaide International",
        "city": "Adelaide",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Sebastian Korda",
        "score": "6-7(8), 7-6(3), 6-4"
      },
      {
        "year": 2023,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-3, 7-6(4), 7-6(5)"
      },
      {
        "year": 2023,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Casper Ruud",
        "score": "7-6(1), 6-3, 7-5"
      },
      {
        "year": 2023,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Carlos Alcaraz",
        "score": "5-7, 7-6(7), 7-6(4)"
      },
      {
        "year": 2023,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Daniil Medvedev",
        "score": "6-3, 7-6(5), 6-3"
      },
      {
        "year": 2023,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Grigor Dimitrov",
        "score": "6-4, 6-3"
      },
      {
        "year": 2023,
        "tournament": "ATP Finals",
        "city": "Turin",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Jannik Sinner",
        "score": "6-3, 6-3"
      },
      {
        "year": 2024,
        "tournament": "Olympic Games",
        "city": "Paris",
        "surface": "clay",
        "tier": "olympics-gold",
        "opponent": "Carlos Alcaraz",
        "score": "7-6(3), 7-6(2)"
      },
      {
        "year": 2025,
        "tournament": "Geneva Open",
        "city": "Geneva",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Hubert Hurkacz",
        "score": "5-7, 7-6(2), 7-6(2)"
      },
      {
        "year": 2025,
        "tournament": "Hellenic Championship",
        "city": "Athens",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Lorenzo Musetti",
        "score": "4-6, 6-3, 7-5"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Head",
        "model": "Speed Pro (custom paint job; pro stock PT113B chassis)",
        "weightG": 359,
        "headSizeSqIn": 95,
        "stringPattern": "18x19",
        "balanceCm": 32.8,
        "swingweight": 370,
        "flexRA": 60,
        "gripSize": "4 3/8"
      },
      "strings": {
        "mains": "Babolat VS Touch Natural Gut 16",
        "crosses": "Luxilon ALU Power Rough 16L",
        "tensionLbsMains": 59,
        "tensionLbsCrosses": 55
      },
      "shoes": {
        "brand": "Asics",
        "model": "Court FF 3 Novak"
      },
      "apparelSponsor": "Lacoste",
      "otherSponsors": [
        "Hublot",
        "Head",
        "Asics",
        "Raiffeisen Bank International",
        "Adidas (former apparel, pre-2009)",
        "Sergio Tacchini (former apparel, 2009-2012)",
        "Uniqlo (former apparel, 2012-2017)",
        "Peugeot (former, ended after 2022)"
      ],
      "notes": "Endorses retail Head Speed Pro but plays a customized PT113B pro stock chassis (95 sq in, 18x19) with a Speed Pro paint job. Hybrid string setup: natural gut mains for feel, Luxilon poly rough crosses for spin/control. Apparel timeline: Adidas -> Sergio Tacchini (2009) -> Uniqlo (2012-2017) -> Lacoste (2017-present). Asics footwear since January 2018."
    },
    ledger: {
      "prizeMoneyUsd": 192688360,
      "matchRecord": {
        "wins": 1139,
        "losses": 233,
        "winPct": 0.83
      },
      "surfaceSplits": {
        "hard": {
          "wins": 648,
          "losses": 113,
          "winPct": 0.852
        },
        "clay": {
          "wins": 275,
          "losses": 68,
          "winPct": 0.802
        },
        "grass": {
          "wins": 121,
          "losses": 19,
          "winPct": 0.864
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour + Wikipedia (Novak Djokovic career statistics); prize money figure dated Feb 27, 2026"
    },

  },
  {
    slug: 'jannik-sinner',
    fullName: 'Jannik Sinner',
    shortName: 'Sinner',
    tour: 'ATP',
    bornIso: '2001-08-16',
    birthplace: 'San Candido, Italy',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['flat-hitter', 'aggressive baseliner', 'court-craft'],
    surfaceStrengths: ['hard', 'clay', 'grass'],
    shotPalette: {
      serveSpeedKmh: 205,
      forehandSpeedKmh: 135,
      backhandSpeedKmh: 130,
      signatureShots: ['flat down-the-line backhand', 'inside-in forehand', 'first serve out wide on the deuce side'],
      weakness: 'occasional dip in second-serve points',
    },
    career: {
      grandSlams: 4,
      weeksAtNumberOne: 69,
      yearEndNumberOne: 1,
      careerHighRanking: 1,
      turnedPro: 2018,
    },
    bio: "Quiet feet and a quieter face — Sinner's tennis is precision tuned to a frequency the rest of the tour is still learning. Four majors (Australian Open '24 and '25, US Open '24, Wimbledon '25), the 2024 year-end #1, and a rivalry with Alcaraz that the next decade of men's tennis will be measured by.",
    rivalries: ['carlos-alcaraz'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2019,
        "tournament": "Next Gen ATP Finals",
        "city": "Milan",
        "surface": "hard",
        "tier": "next-gen-finals",
        "opponent": "Alex de Minaur",
        "score": "4-2, 4-1, 4-2"
      },
      {
        "year": 2020,
        "tournament": "Sofia Open",
        "city": "Sofia",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Vasek Pospisil",
        "score": "6-4, 3-6, 7-6(7-3)"
      },
      {
        "year": 2021,
        "tournament": "Great Ocean Road Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Stefano Travaglia",
        "score": "7-6(7-4), 6-4"
      },
      {
        "year": 2021,
        "tournament": "Citi Open",
        "city": "Washington",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Mackenzie McDonald",
        "score": "7-5, 4-6, 7-5"
      },
      {
        "year": 2021,
        "tournament": "Sofia Open",
        "city": "Sofia",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Gael Monfils",
        "score": "6-3, 6-4"
      },
      {
        "year": 2021,
        "tournament": "European Open",
        "city": "Antwerp",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Diego Schwartzman",
        "score": "6-2, 6-2"
      },
      {
        "year": 2022,
        "tournament": "Croatia Open",
        "city": "Umag",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Carlos Alcaraz",
        "score": "6-7(5), 6-1, 6-1"
      },
      {
        "year": 2023,
        "tournament": "Open Sud de France",
        "city": "Montpellier",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Maxime Cressy",
        "score": "7-6(3), 6-3"
      },
      {
        "year": 2023,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Alex de Minaur",
        "score": "6-4, 6-1"
      },
      {
        "year": 2023,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Daniil Medvedev",
        "score": "7-6(2), 7-6(2)"
      },
      {
        "year": 2023,
        "tournament": "Erste Bank Open",
        "city": "Vienna",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Daniil Medvedev",
        "score": "7-6(7), 4-6, 6-3"
      },
      {
        "year": 2024,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Daniil Medvedev",
        "score": "3-6, 3-6, 6-4, 6-4, 6-3"
      },
      {
        "year": 2024,
        "tournament": "ABN AMRO Open",
        "city": "Rotterdam",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Alex de Minaur",
        "score": "7-5, 6-4"
      },
      {
        "year": 2024,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Grigor Dimitrov",
        "score": "6-3, 6-1"
      },
      {
        "year": 2024,
        "tournament": "Halle Open",
        "city": "Halle",
        "surface": "grass",
        "tier": "atp-500",
        "opponent": "Hubert Hurkacz",
        "score": "7-6(8), 7-6(2)"
      },
      {
        "year": 2024,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Frances Tiafoe",
        "score": "7-6(4), 6-2"
      },
      {
        "year": 2024,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Taylor Fritz",
        "score": "6-3, 6-4, 7-5"
      },
      {
        "year": 2024,
        "tournament": "Shanghai Masters",
        "city": "Shanghai",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Novak Djokovic",
        "score": "7-6(4), 6-3"
      },
      {
        "year": 2024,
        "tournament": "ATP Finals",
        "city": "Turin",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Taylor Fritz",
        "score": "6-4, 6-4"
      },
      {
        "year": 2025,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Alexander Zverev",
        "score": "6-3, 7-6(7-4), 6-3"
      },
      {
        "year": 2025,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Carlos Alcaraz",
        "score": "4-6, 6-4, 6-4, 6-4"
      },
      {
        "year": 2025,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Learner Tien",
        "score": "6-2, 6-2"
      },
      {
        "year": 2025,
        "tournament": "Erste Bank Open",
        "city": "Vienna",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Alexander Zverev",
        "score": "3-6, 6-3, 7-5"
      },
      {
        "year": 2025,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Felix Auger-Aliassime",
        "score": "6-4, 7-6(4)"
      },
      {
        "year": 2025,
        "tournament": "ATP Finals",
        "city": "Turin",
        "surface": "hard",
        "tier": "atp-finals",
        "opponent": "Carlos Alcaraz",
        "score": "7-6(4), 7-5"
      },
      {
        "year": 2026,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Daniil Medvedev",
        "score": "7-6(6), 7-6(4)"
      },
      {
        "year": 2026,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jiri Lehecka",
        "score": "6-4, 6-4"
      },
      {
        "year": 2026,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Carlos Alcaraz",
        "score": "7-6(5), 6-3"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Head",
        "model": "Speed Pro (pro-stock TGT 301.4, based on Graphene Touch Speed MP)",
        "weightG": 300,
        "headSizeSqIn": 100
      },
      "strings": {
        "mains": "Head Hawk Touch",
        "crosses": "Head Hawk Touch",
        "tensionLbsMains": 61,
        "tensionLbsCrosses": 61
      },
      "shoes": {
        "brand": "Nike",
        "model": "Zoom GP Challenge 1"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Head",
        "Rolex",
        "Lavazza",
        "Alfa Romeo",
        "Technogym",
        "Parmigiano Reggiano",
        "Gucci",
        "Allianz"
      ],
      "notes": "Signed reported 10-year, ~$150M Nike apparel/footwear deal (2022). Racquet is a pro-stock frame (TGT 301.4) painted as the Speed Pro; unstrung spec is 300g/100sq.in./16x19. Custom strung weight ~325g, balance ~33.3cm, swing weight ~331. Strings reported as Head Hawk Touch poly at ~61 lbs (28 kg)."
    },
    ledger: {
      "prizeMoneyUsd": 61191211,
      "matchRecord": {
        "wins": 29,
        "losses": 2
      },
      "surfaceSplits": {
        "hard": {
          "wins": 19,
          "losses": 2
        },
        "clay": {
          "wins": 9,
          "losses": 0
        },
        "grass": {
          "wins": 0,
          "losses": 0
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour player page (s0ag); Wikipedia '2026 Jannik Sinner tennis season' and 'Jannik Sinner career statistics'; tennis.com / tennis365 prize-money reports (Apr 2026)"
    },

  },
  {
    slug: 'carlos-alcaraz',
    fullName: 'Carlos Alcaraz',
    shortName: 'Alcaraz',
    tour: 'ATP',
    bornIso: '2003-05-05',
    birthplace: 'El Palmar, Murcia, Spain',
    heightCm: 183,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['all-court', 'shotmaker', 'aggressive baseliner'],
    surfaceStrengths: ['clay', 'grass', 'hard'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 140,
      forehandRpm: 3000,
      signatureShots: ['drop shot', 'running forehand pass', 'forehand winner from defense', 'serve-and-volley'],
      weakness: 'occasional decision-making under fatigue',
    },
    career: {
      grandSlams: 7,
      weeksAtNumberOne: 66,
      yearEndNumberOne: 2,
      careerHighRanking: 1,
      turnedPro: 2018,
    },
    bio: "The full inheritance. Alcaraz brings Federer's hands, Nadal's heart, and Djokovic's range into a single body — and at the 2026 Australian Open completed the Career Grand Slam to reach seven majors before his 23rd birthday. The ceiling stopped being a ceiling.",
    rivalries: ['jannik-sinner', 'novak-djokovic'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2021,
        "tournament": "Croatia Open Umag",
        "city": "Umag",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Richard Gasquet",
        "score": "6-2, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Next Gen ATP Finals",
        "city": "Milan",
        "surface": "hard",
        "tier": "next-gen-finals",
        "opponent": "Sebastian Korda",
        "score": "4-3(5), 4-2, 4-2"
      },
      {
        "year": 2022,
        "tournament": "Rio Open",
        "city": "Rio de Janeiro",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Diego Schwartzman",
        "score": "6-4, 6-2"
      },
      {
        "year": 2022,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Casper Ruud",
        "score": "7-5, 6-4"
      },
      {
        "year": 2022,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Pablo Carreno Busta",
        "score": "6-3, 6-2"
      },
      {
        "year": 2022,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Alexander Zverev",
        "score": "6-3, 6-1"
      },
      {
        "year": 2022,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Casper Ruud",
        "score": "6-4, 2-6, 7-6(1), 6-3"
      },
      {
        "year": 2023,
        "tournament": "Argentina Open",
        "city": "Buenos Aires",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Cameron Norrie",
        "score": "6-3, 7-5"
      },
      {
        "year": 2023,
        "tournament": "BNP Paribas Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Daniil Medvedev",
        "score": "6-3, 6-2"
      },
      {
        "year": 2023,
        "tournament": "Barcelona Open",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Stefanos Tsitsipas",
        "score": "6-3, 6-4"
      },
      {
        "year": 2023,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Jan-Lennard Struff",
        "score": "6-4, 3-6, 6-3"
      },
      {
        "year": 2023,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-500",
        "opponent": "Alex de Minaur",
        "score": "6-4, 6-4"
      },
      {
        "year": 2023,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "1-6, 7-6(6), 6-1, 3-6, 6-4"
      },
      {
        "year": 2024,
        "tournament": "BNP Paribas Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Daniil Medvedev",
        "score": "7-6(5), 6-1"
      },
      {
        "year": 2024,
        "tournament": "Roland Garros",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Alexander Zverev",
        "score": "6-3, 2-6, 5-7, 6-1, 6-2"
      },
      {
        "year": 2024,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "6-2, 6-2, 7-6(4)"
      },
      {
        "year": 2024,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Jannik Sinner",
        "score": "6-7(6), 6-4, 7-6(3)"
      },
      {
        "year": 2025,
        "tournament": "ABN AMRO Open",
        "city": "Rotterdam",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Alex de Minaur",
        "score": "6-4, 3-6, 6-2"
      },
      {
        "year": 2025,
        "tournament": "Monte-Carlo Masters",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Lorenzo Musetti",
        "score": "3-6, 6-1, 6-0"
      },
      {
        "year": 2025,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Jannik Sinner",
        "score": "7-6(5), 6-1"
      },
      {
        "year": 2025,
        "tournament": "Roland Garros",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Jannik Sinner",
        "score": "4-6, 6-7(4), 6-4, 7-6(3), 7-6(10-2)"
      },
      {
        "year": 2025,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-500",
        "opponent": "Jiri Lehecka",
        "score": "7-5, 6-7(5), 6-2"
      },
      {
        "year": 2025,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jannik Sinner",
        "score": "5-0 ret."
      },
      {
        "year": 2025,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Jannik Sinner",
        "score": "6-2, 3-6, 6-1, 6-4"
      },
      {
        "year": 2025,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Taylor Fritz",
        "score": "6-4, 6-4"
      },
      {
        "year": 2026,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Novak Djokovic",
        "score": "2-6, 6-2, 6-3, 7-5"
      },
      {
        "year": 2026,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Arthur Fils",
        "score": "6-2, 6-1"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Babolat",
        "model": "Pure Aero (endorsed; plays a Pure Aero VS-based pro stock layup with Pure Aero 98 paint job)",
        "weightG": 318,
        "headSizeSqIn": 98
      },
      "strings": {
        "mains": "Babolat RPM Blast 1.30 (16)",
        "crosses": "Babolat RPM Blast 1.30 (16)",
        "tensionLbsMains": 55,
        "tensionLbsCrosses": 53
      },
      "shoes": {
        "brand": "Nike",
        "model": "NikeCourt Air Zoom Vapor 12 (Carlos Alcaraz PE)"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Babolat",
        "Rolex",
        "BMW",
        "Calvin Klein",
        "Louis Vuitton",
        "Sunreef Yachts",
        "Itau",
        "Isdin",
        "ElPozo"
      ],
      "notes": "Babolat partnership extended through 2030 (Sept 2024). Endorses the retail Pure Aero family but plays a customized Pure Aero VS-based 98 sq.in. layup with a Pure Aero 98 paint job; spec ~318g unstrung, 16x19. Strings: full-bed Babolat RPM Blast 1.30 at 55/53 lbs (has experimented with Babolat RPM Team for a softer feel). Nike apparel and footwear under a 10-year extension reported around $15M+/yr; current on-court shoe is a Carlos Alcaraz player edition of the NikeCourt Air Zoom Vapor 12. Also a brand ambassador for Rolex (since 2022), Calvin Klein (since 2023), Louis Vuitton (since June 2023), BMW (extended 2026), and Sunreef Yachts (Mar 2026)."
    },
    ledger: {
      "prizeMoneyUsd": 64959077,
      "matchRecord": {
        "wins": 372,
        "losses": 93
      },
      "surfaceSplits": {
        "hard": {
          "wins": 170,
          "losses": 44
        },
        "clay": {
          "wins": 169,
          "losses": 44
        },
        "grass": {
          "wins": 33,
          "losses": 5
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour player page (a0e2); Wikipedia 'Carlos Alcaraz', 'Carlos Alcaraz career statistics', '2026 Carlos Alcaraz tennis season'; Tennis.com prize-money tracker (overtook Murray after 2026 Monte-Carlo final, $64,959,077); Tennis Warehouse / Babolat product pages and partnership release (Sept 2024)"
    },

  },
  {
    slug: 'pete-sampras',
    fullName: 'Pete Sampras',
    shortName: 'Sampras',
    tour: 'ATP',
    bornIso: '1971-08-12',
    birthplace: 'Washington, D.C., USA',
    heightCm: 185,
    handedness: 'right',
    backhandStyle: 'one-handed',
    era: ['modern'],
    styleOfPlay: ['serve-and-volley', 'all-court', 'attacking'],
    surfaceStrengths: ['grass', 'hard', 'carpet'],
    shotPalette: {
      serveSpeedKmh: 210,
      forehandSpeedKmh: 130,
      signatureShots: ['second-serve kicker', 'running forehand', 'slam-dunk smash', 'cross-court forehand volley'],
      weakness: 'extended baseline rallies on slow clay',
    },
    career: {
      grandSlams: 14,
      weeksAtNumberOne: 286,
      yearEndNumberOne: 6,
      careerHighRanking: 1,
      turnedPro: 1988,
      retiredYear: 2002,
    },
    bio: 'The serve was a guillotine, the running forehand a magic trick. Sampras owned the 90s with quiet, almost monastic focus — 14 Slams when 14 was the ceiling, a serve-and-volley game preserved like a final flame.',
    signatureMatch: 'US Open 1990 Final vs Agassi',
    rivalries: ['andre-agassi', 'jim-courier'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1990,
        "tournament": "Philadelphia (US Pro Indoor)",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Andres Gomez",
        "score": "7-6, 7-5, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Manchester Open",
        "city": "Manchester",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Todd Witsken",
        "score": "3-6, 6-3, 6-2"
      },
      {
        "year": 1990,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andre Agassi",
        "score": "6-4, 6-3, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Grand Slam Cup",
        "city": "Munich",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Brad Gilbert",
        "score": "6-3, 6-4, 6-2"
      },
      {
        "year": 1991,
        "tournament": "Los Angeles Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Brad Gilbert",
        "score": "6-2, 6-7, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Indianapolis (US Hard Court Championships)",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Boris Becker",
        "score": "7-6, 3-6, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Lyon Grand Prix",
        "city": "Lyon",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Olivier Delaitre",
        "score": "6-1, 6-1"
      },
      {
        "year": 1991,
        "tournament": "ATP Tour World Championships",
        "city": "Frankfurt",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Jim Courier",
        "score": "3-6, 7-6(7-5), 6-3, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Philadelphia (US Pro Indoor)",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Jim Courier",
        "score": "7-6, 6-4, 2-6, 7-6"
      },
      {
        "year": 1992,
        "tournament": "Kitzbuhel",
        "city": "Kitzbuhel",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Alberto Mancini",
        "score": "6-3, 6-7, 6-4, 7-5"
      },
      {
        "year": 1992,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Ivan Lendl",
        "score": "6-3, 3-6, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Indianapolis (US Hard Court Championships)",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Jim Courier",
        "score": "6-4, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Lyon Grand Prix",
        "city": "Lyon",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Petr Korda",
        "score": "6-3, 7-6"
      },
      {
        "year": 1993,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Michael Stich",
        "score": "7-6, 7-5, 6-3"
      },
      {
        "year": 1993,
        "tournament": "Miami (Lipton Championships)",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "MaliVai Washington",
        "score": "5-7, 6-3, 6-3, 6-2"
      },
      {
        "year": 1993,
        "tournament": "Tokyo (Japan Open)",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Brad Gilbert",
        "score": "6-2, 6-2, 6-2"
      },
      {
        "year": 1993,
        "tournament": "Hong Kong Open (Salem Open)",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jim Courier",
        "score": "6-3, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Jim Courier",
        "score": "7-6, 7-6, 3-6, 6-3"
      },
      {
        "year": 1993,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Cedric Pioline",
        "score": "6-4, 6-4, 6-3"
      },
      {
        "year": 1993,
        "tournament": "Lyon Grand Prix",
        "city": "Lyon",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Marc Rosset",
        "score": "6-4, 6-7, 6-3"
      },
      {
        "year": 1993,
        "tournament": "Antwerp (European Community Championships)",
        "city": "Antwerp",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Magnus Gustafsson",
        "score": "7-6, 6-3, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "7-5, 6-3, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Todd Martin",
        "score": "7-6, 6-4, 6-4"
      },
      {
        "year": 1994,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Petr Korda",
        "score": "4-6, 6-3, 3-6, 6-3, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Miami (Lipton Championships)",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andre Agassi",
        "score": "5-7, 6-3, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Boris Becker",
        "score": "6-1, 6-2, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Goran Ivanisevic",
        "score": "7-6, 7-6, 6-0"
      },
      {
        "year": 1994,
        "tournament": "Osaka (Salem Open)",
        "city": "Osaka",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Lionel Roux",
        "score": "6-2, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Tokyo Indoor (Seiko Super Tennis)",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Michael Chang",
        "score": "6-4, 6-2, 6-4"
      },
      {
        "year": 1994,
        "tournament": "Antwerp (European Community Championships)",
        "city": "Antwerp",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Magnus Larsson",
        "score": "7-6, 6-4, 6-3"
      },
      {
        "year": 1994,
        "tournament": "ATP Tour World Championships",
        "city": "Frankfurt",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Boris Becker",
        "score": "4-6, 6-3, 7-5, 6-2"
      },
      {
        "year": 1995,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Andre Agassi",
        "score": "7-5, 6-3, 7-5"
      },
      {
        "year": 1995,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Guy Forget",
        "score": "7-6, 7-6"
      },
      {
        "year": 1995,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Boris Becker",
        "score": "6-7, 6-2, 6-4, 6-2"
      },
      {
        "year": 1995,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andre Agassi",
        "score": "6-4, 6-3, 4-6, 7-5"
      },
      {
        "year": 1995,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "carpet",
        "tier": "masters-1000",
        "opponent": "Boris Becker",
        "score": "7-6, 6-4, 6-4"
      },
      {
        "year": 1996,
        "tournament": "San Jose (Sybase Open)",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Andre Agassi",
        "score": "6-2, 6-3"
      },
      {
        "year": 1996,
        "tournament": "Memphis (Kroger St. Jude)",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Todd Martin",
        "score": "6-4, 7-6"
      },
      {
        "year": 1996,
        "tournament": "Hong Kong Open (Salem Open)",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Michael Chang",
        "score": "6-4, 3-6, 6-4"
      },
      {
        "year": 1996,
        "tournament": "Tokyo (Japan Open)",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Richey Reneberg",
        "score": "6-4, 7-5"
      },
      {
        "year": 1996,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Michael Chang",
        "score": "6-1, 6-4, 7-6"
      },
      {
        "year": 1996,
        "tournament": "Indianapolis (RCA Championships)",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Goran Ivanisevic",
        "score": "7-6, 7-6"
      },
      {
        "year": 1996,
        "tournament": "Basel (Davidoff Swiss Indoors)",
        "city": "Basel",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Hendrik Dreekmann",
        "score": "7-5, 6-0, 6-2"
      },
      {
        "year": 1996,
        "tournament": "ATP Tour World Championships",
        "city": "Hanover",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Boris Becker",
        "score": "3-6, 7-6, 7-6, 6-7, 6-4"
      },
      {
        "year": 1997,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Carlos Moya",
        "score": "6-2, 6-3, 6-3"
      },
      {
        "year": 1997,
        "tournament": "San Jose (Sybase Open)",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Greg Rusedski",
        "score": "6-2, 6-7, 6-4"
      },
      {
        "year": 1997,
        "tournament": "Philadelphia (Advanta Championships)",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Patrick Rafter",
        "score": "7-6, 4-6, 7-6, 6-3"
      },
      {
        "year": 1997,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Cedric Pioline",
        "score": "6-4, 6-2, 6-4"
      },
      {
        "year": 1997,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Thomas Muster",
        "score": "6-3, 6-4"
      },
      {
        "year": 1997,
        "tournament": "Munich (Grand Slam Cup)",
        "city": "Munich",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Patrick Rafter",
        "score": "6-2, 6-4, 7-5"
      },
      {
        "year": 1997,
        "tournament": "Paris Masters",
        "city": "Paris",
        "surface": "carpet",
        "tier": "masters-1000",
        "opponent": "Greg Rusedski",
        "score": "6-1, 6-4, 6-3"
      },
      {
        "year": 1997,
        "tournament": "ATP Tour World Championships",
        "city": "Hanover",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Yevgeny Kafelnikov",
        "score": "6-3, 6-2, 6-2"
      },
      {
        "year": 1998,
        "tournament": "Philadelphia (Advanta Championships)",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Thomas Enqvist",
        "score": "7-5, 7-6"
      },
      {
        "year": 1998,
        "tournament": "Atlanta (AT&T Challenge)",
        "city": "Atlanta",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Jason Stoltenberg",
        "score": "6-7, 6-3, 7-6"
      },
      {
        "year": 1998,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Goran Ivanisevic",
        "score": "6-7, 7-6, 6-4, 3-6, 6-2"
      },
      {
        "year": 1998,
        "tournament": "Vienna (CA-TennisTrophy)",
        "city": "Vienna",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Karol Kucera",
        "score": "6-3, 7-6, 6-1"
      },
      {
        "year": 1999,
        "tournament": "Cincinnati Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Patrick Rafter",
        "score": "7-6, 6-3"
      },
      {
        "year": 1999,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Tim Henman",
        "score": "6-7, 6-4, 7-6"
      },
      {
        "year": 1999,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Andre Agassi",
        "score": "6-3, 6-4, 7-5"
      },
      {
        "year": 1999,
        "tournament": "Los Angeles Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Andre Agassi",
        "score": "7-6, 7-6"
      },
      {
        "year": 1999,
        "tournament": "ATP Tour World Championships",
        "city": "Hanover",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Andre Agassi",
        "score": "6-1, 7-5, 6-4"
      },
      {
        "year": 2000,
        "tournament": "Miami (Ericsson Open)",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Gustavo Kuerten",
        "score": "6-1, 6-7, 7-6, 7-6"
      },
      {
        "year": 2000,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Patrick Rafter",
        "score": "6-7, 7-6, 6-4, 6-2"
      },
      {
        "year": 2002,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Andre Agassi",
        "score": "6-3, 6-4, 5-7, 6-4"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Pro Staff Original 6.0 85",
        "headSizeSqIn": 85,
        "stringPattern": "16x18",
        "lengthIn": 27,
        "stockUnstrungWeightG": 340,
        "playerCustomizedStrungWeightG": 384,
        "playerSwingWeightStrung": 367,
        "balanceCm": 32.3,
        "balanceNote": "approx 6 pts head-light strung (player customized)",
        "beamWidthMm": 17,
        "construction": "Braided graphite + Kevlar (approx 80/20)",
        "stiffnessRA": 69,
        "customization": "Custom-molded leather handle; lead tape added during balancing by personal stringer; played Pro Staff Original his entire pro career and refused to switch frames",
        "notes": "One of the smallest head sizes ever used by a top-tier pro in the modern era. Wilson kept producing the frame for him long after retail discontinuation."
      },
      "strings": {
        "brand": "Babolat",
        "model": "VS Touch (natural gut)",
        "gauge": "16 (1.30 mm)",
        "setup": "full bed natural gut",
        "tensionLbs": 70,
        "tensionKg": 32,
        "notes": "Strung well above the frame's recommended 50-60 lb range. Sampras used the same VS natural gut setup for essentially his entire pro career."
      },
      "shoes": {
        "brand": "Nike",
        "model": "Air Oscillate",
        "designer": "Tinker Hatfield",
        "introducedYear": 1997,
        "notes": "First worn at the 1996 Australian Open; Sampras stuck with the original Air Oscillate for the rest of his career, even after Nike released the Air Oscillate 2 in 1999. He wore the Air Oscillate for his final career match (2002 US Open final vs. Agassi)."
      },
      "apparelSponsor": {
        "brand": "Nike",
        "since": 1994,
        "notes": "Switched from Sergio Tacchini to Nike in 1994 and remained a Nike athlete through the end of his career."
      },
      "otherSponsors": [
        {
          "brand": "Wilson",
          "category": "racquets",
          "notes": "Career-long racquet sponsorship"
        },
        {
          "brand": "Babolat",
          "category": "strings",
          "notes": "VS Touch natural gut"
        },
        {
          "brand": "Movado",
          "category": "watches"
        },
        {
          "brand": "Pilot Pen",
          "category": "endorsement"
        }
      ],
      "notes": "Full-career setup: Wilson Pro Staff Original 6.0 85 / Babolat VS natural gut / Nike Air Oscillate / Nike apparel. Sampras was one of the most equipment-stable champions in tennis history - he never changed frames or string types during his pro career."
    },
    ledger: {
      "prizeMoneyUsd": 43280489,
      "matchRecord": {
        "wins": 762,
        "losses": 222,
        "winPct": 0.774
      },
      "surfaceSplits": {
        "hard": {
          "wins": 429,
          "losses": 103,
          "winPct": 0.806
        },
        "grass": {
          "wins": 101,
          "losses": 20,
          "winPct": 0.835
        },
        "clay": {
          "wins": 90,
          "losses": 54,
          "winPct": 0.625
        },
        "carpet": {
          "wins": 142,
          "losses": 45,
          "winPct": 0.759,
          "caveat": "approximate; carpet record derived from totals minus other surface splits and may be off by a small margin"
        }
      },
      "singlesTitles": 64,
      "grandSlamTitles": 14,
      "weeksAtNo1": 286,
      "yearEndNo1Finishes": 6,
      "asOfIso": "2002-09-08",
      "asOfNote": "Retired after winning 2002 US Open (Sept 8, 2002). Career numbers are final.",
      "source": [
        "https://en.wikipedia.org/wiki/Pete_Sampras",
        "https://en.wikipedia.org/wiki/Pete_Sampras_career_statistics",
        "https://www.atptour.com/en/players/pete-sampras/s402/overview",
        "https://www.atptour.com/en/players/pete-sampras/s402/atp-win-loss",
        "https://www.tennisfame.com/hall-of-famers/inductees/pete-sampras"
      ]
    },

  },
  {
    slug: 'john-mcenroe',
    fullName: 'John McEnroe',
    shortName: 'McEnroe',
    tour: 'ATP',
    bornIso: '1959-02-16',
    birthplace: 'Wiesbaden, West Germany (raised New York)',
    heightCm: 180,
    handedness: 'left',
    backhandStyle: 'one-handed',
    era: ['open-classic'],
    styleOfPlay: ['serve-and-volley', 'touch artist', 'attacking'],
    surfaceStrengths: ['grass', 'carpet', 'hard'],
    shotPalette: {
      serveSpeedKmh: 180,
      signatureShots: ['lefty slice serve out wide', 'half-volley', 'angled drop volley', 'sliced one-handed backhand'],
      weakness: 'high-bouncing topspin from the baseline',
    },
    career: {
      grandSlams: 7,
      weeksAtNumberOne: 170,
      yearEndNumberOne: 4,
      careerHighRanking: 1,
      turnedPro: 1978,
      retiredYear: 1992,
    },
    bio: "Touch and temper in equal measure. McEnroe's hands were softer than anyone's, his anger louder than anyone's, and his serve-and-volley game an art form that closed an era. Seven Slams, a left-handed serve that bent space, and a mind everyone wanted to know.",
    signatureMatch: 'Wimbledon 1980 Final vs Borg',
    rivalries: ['bjorn-borg', 'jimmy-connors', 'ivan-lendl'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1978,
        "tournament": "Hartford",
        "city": "Hartford",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Larry Gottfried",
        "score": "6-3, 7-6"
      },
      {
        "year": 1978,
        "tournament": "Trans American Open",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Dick Stockton",
        "score": "7-6, 7-6"
      },
      {
        "year": 1978,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tim Gullikson",
        "score": "6-2, 6-2"
      },
      {
        "year": 1978,
        "tournament": "Benson & Hedges Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tim Gullikson",
        "score": "7-5, 6-2, 6-2"
      },
      {
        "year": 1978,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Arthur Ashe",
        "score": "6-7, 6-3, 7-5"
      },
      {
        "year": 1979,
        "tournament": "New Orleans WCT",
        "city": "New Orleans",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vitas Gerulaitis",
        "score": "6-3, 6-2"
      },
      {
        "year": 1979,
        "tournament": "Milan Indoor",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Harold Solomon",
        "score": "6-2, 6-1"
      },
      {
        "year": 1979,
        "tournament": "Richmond WCT",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Eddie Dibbs",
        "score": "6-3, 6-1"
      },
      {
        "year": 1979,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Bjorn Borg",
        "score": "7-5, 4-6, 6-2, 7-6"
      },
      {
        "year": 1979,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Victor Pecci",
        "score": "6-7, 6-1, 6-1"
      },
      {
        "year": 1979,
        "tournament": "South Orange",
        "city": "South Orange",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Peter Fleming",
        "score": "7-6, 6-3"
      },
      {
        "year": 1979,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Vitas Gerulaitis",
        "score": "7-5, 6-3, 6-3"
      },
      {
        "year": 1979,
        "tournament": "Trans American Open",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Peter Fleming",
        "score": "6-4, 6-7, 7-6"
      },
      {
        "year": 1979,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Gene Mayer",
        "score": "6-7, 6-3, 6-3"
      },
      {
        "year": 1979,
        "tournament": "Benson & Hedges Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Harold Solomon",
        "score": "6-2, 6-3, 6-1"
      },
      {
        "year": 1980,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Jimmy Connors",
        "score": "6-7, 7-6, 6-1, 7-5"
      },
      {
        "year": 1980,
        "tournament": "U.S. National Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Gene Mayer",
        "score": "7-6, 6-1, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Milan Indoor",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Bjorn Borg",
        "score": "3-6, 6-3, 6-1"
      },
      {
        "year": 1980,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jose Luis Clerc",
        "score": "5-7, 6-3, 6-2, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Kim Warwick",
        "score": "6-3, 6-1"
      },
      {
        "year": 1980,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Bjorn Borg",
        "score": "7-6, 6-1, 6-7, 5-7, 6-4"
      },
      {
        "year": 1980,
        "tournament": "Trans American Open",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "John Sadri",
        "score": "6-3, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Benson & Hedges Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Gene Mayer",
        "score": "6-4, 6-3, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Bjorn Borg",
        "score": "6-7, 6-3, 7-6"
      },
      {
        "year": 1981,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Jimmy Connors",
        "score": "6-3, 6-3, 4-6, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Milan Indoor",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Bjorn Borg",
        "score": "7-6, 6-4"
      },
      {
        "year": 1981,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Brian Gottfried",
        "score": "7-6, 7-5"
      },
      {
        "year": 1981,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Bjorn Borg",
        "score": "4-6, 7-6, 7-6, 6-4"
      },
      {
        "year": 1981,
        "tournament": "ATP Championships",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Chris Lewis",
        "score": "6-3, 6-3"
      },
      {
        "year": 1981,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "6-7, 6-2, 6-4"
      },
      {
        "year": 1981,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Bjorn Borg",
        "score": "4-6, 6-2, 6-4, 6-3"
      },
      {
        "year": 1981,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tomas Smid",
        "score": "6-3, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Benson & Hedges Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Brian Gottfried",
        "score": "6-3, 6-3, 6-3"
      },
      {
        "year": 1981,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Johan Kriek",
        "score": "6-1, 6-2, 6-4"
      },
      {
        "year": 1982,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "4-6, 6-4, 6-2, 6-2"
      },
      {
        "year": 1982,
        "tournament": "La Quinta",
        "city": "La Quinta",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Yannick Noah",
        "score": "6-3, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Vitas Gerulaitis",
        "score": "6-3, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Benson & Hedges Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Brian Gottfried",
        "score": "6-3, 6-2, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Ivan Lendl",
        "score": "6-4, 6-4, 6-2"
      },
      {
        "year": 1983,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "4-6, 7-6, 6-4, 6-3"
      },
      {
        "year": 1983,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Ivan Lendl",
        "score": "6-2, 4-6, 6-3, 6-7, 7-6"
      },
      {
        "year": 1983,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jose Higueras",
        "score": "6-2, 6-2, 6-3"
      },
      {
        "year": 1983,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Tim Mayotte",
        "score": "6-3, 6-2"
      },
      {
        "year": 1983,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Chris Lewis",
        "score": "6-2, 6-2, 6-2"
      },
      {
        "year": 1983,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Tomas Smid",
        "score": "6-2, 6-3"
      },
      {
        "year": 1983,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Ivan Lendl",
        "score": "6-3, 6-4, 6-4"
      },
      {
        "year": 1984,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Jimmy Connors",
        "score": "6-3, 6-3, 6-1"
      },
      {
        "year": 1984,
        "tournament": "Richmond WCT",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jimmy Connors",
        "score": "5-7, 6-1, 6-3"
      },
      {
        "year": 1984,
        "tournament": "Madrid",
        "city": "Madrid",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Tomas Smid",
        "score": "6-2, 6-3, 6-3"
      },
      {
        "year": 1984,
        "tournament": "Brussels",
        "city": "Brussels",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vijay Amritraj",
        "score": "6-3, 6-2"
      },
      {
        "year": 1984,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Jimmy Connors",
        "score": "6-1, 6-2, 6-3"
      },
      {
        "year": 1984,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "6-4, 6-2, 6-4"
      },
      {
        "year": 1984,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Leif Shiras",
        "score": "6-1, 3-6, 6-2"
      },
      {
        "year": 1984,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Jimmy Connors",
        "score": "6-1, 6-1, 6-2"
      },
      {
        "year": 1984,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Vitas Gerulaitis",
        "score": "6-0, 6-3"
      },
      {
        "year": 1984,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Ivan Lendl",
        "score": "6-3, 6-4, 6-1"
      },
      {
        "year": 1984,
        "tournament": "Trans American Open",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Eliot Teltscher",
        "score": "7-5, 6-0"
      },
      {
        "year": 1984,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Mats Wilander",
        "score": "6-2, 3-6, 6-2"
      },
      {
        "year": 1984,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Ivan Lendl",
        "score": "7-5, 6-0, 6-4"
      },
      {
        "year": 1985,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Miloslav Mecir",
        "score": "6-1, 6-3, 6-2"
      },
      {
        "year": 1985,
        "tournament": "WCT Houston Shootout",
        "city": "Houston",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Kevin Curren",
        "score": "6-3, 6-3"
      },
      {
        "year": 1985,
        "tournament": "Milan Indoor",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Anders Jarryd",
        "score": "6-3, 6-4"
      },
      {
        "year": 1985,
        "tournament": "Atlanta WCT",
        "city": "Atlanta",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Stefan Edberg",
        "score": "6-1, 6-2"
      },
      {
        "year": 1985,
        "tournament": "Chicago",
        "city": "Chicago",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jimmy Connors",
        "score": "7-6, 6-3"
      },
      {
        "year": 1985,
        "tournament": "Volvo International",
        "city": "Stratton Mountain",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Ivan Lendl",
        "score": "7-6, 6-2"
      },
      {
        "year": 1985,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Ivan Lendl",
        "score": "7-5, 6-3"
      },
      {
        "year": 1985,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Mats Wilander",
        "score": "1-6, 7-6, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Volvo Los Angeles",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Robert Seguso",
        "score": "7-5, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Trans American Open",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Stefan Edberg",
        "score": "7-6, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Scottsdale",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Stefan Edberg",
        "score": "6-2, 7-6"
      },
      {
        "year": 1988,
        "tournament": "Detroit",
        "city": "Detroit",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jimmy Connors",
        "score": "6-3, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Stefan Edberg",
        "score": "6-2, 6-2"
      },
      {
        "year": 1989,
        "tournament": "RCA Championships",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jay Berger",
        "score": "6-4, 4-6, 6-4"
      },
      {
        "year": 1989,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Brad Gilbert",
        "score": "6-3, 6-3, 7-6"
      },
      {
        "year": 1989,
        "tournament": "Lyon",
        "city": "Lyon",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jakob Hlasek",
        "score": "6-1, 6-3, 7-6"
      },
      {
        "year": 1990,
        "tournament": "Davidoff Swiss Indoors",
        "city": "Basel",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Goran Ivanisevic",
        "score": "6-7, 4-6, 7-6, 6-3, 6-4"
      },
      {
        "year": 1991,
        "tournament": "Volvo Tennis Chicago",
        "city": "Chicago",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Patrick McEnroe",
        "score": "3-6, 6-2, 6-4"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Dunlop",
        "model": "Max 200G",
        "weightG": 355,
        "headSizeSqIn": 85
      },
      "strings": {
        "mains": "natural gut",
        "tensionLbsMains": 50
      },
      "shoes": {
        "brand": "Nike",
        "model": "Mac Attack"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Dunlop"
      ],
      "notes": "Final-career setup (~1992). McEnroe used the Dunlop Maxply Fort wood frame through 1982, then switched to the graphite Dunlop Max 200G in 1983 and stayed with that frame family through retirement. Strung natural gut at notably low tension (~49-52 lbs). Apparel sponsor was Sergio Tacchini through most of his prime (late 1970s-1980s); by the late 1980s/early 1990s Nike was his primary apparel and footwear sponsor. Famous continental grip and exaggerated closed-stance, side-on service motion."
    },

  },
  {
    slug: 'jim-courier',
    fullName: 'Jim Courier',
    shortName: 'Courier',
    tour: 'ATP',
    bornIso: '1970-08-17',
    birthplace: 'Sanford, Florida, USA',
    heightCm: 185,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['modern'],
    styleOfPlay: ['aggressive baseliner', 'flat-hitter', 'big forehand'],
    surfaceStrengths: ['clay', 'hard'],
    shotPalette: {
      serveSpeedKmh: 195,
      forehandSpeedKmh: 130,
      signatureShots: ['open-stance inside-out forehand', 'flat two-handed backhand', 'first-strike forehand from the middle'],
      weakness: 'low-bouncing surfaces and serve-and-volley pressure',
    },
    career: {
      grandSlams: 4,
      weeksAtNumberOne: 58,
      yearEndNumberOne: 1,
      careerHighRanking: 1,
      turnedPro: 1988,
      retiredYear: 2000,
    },
    bio: 'Buzzcut and bandana, two-fisted backhand, and an open-stance forehand that flattened the ball into the corner. Courier was the bridge between the wood-era touch artists and the power baseliners — four majors, time at #1, and underrated as both a player and now a Davis Cup mind.',
    rivalries: ['pete-sampras', 'andre-agassi'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1989,
        "tournament": "Swiss Indoors",
        "city": "Basel",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Stefan Edberg",
        "score": "7-6, 3-6, 2-6, 6-0, 7-5"
      },
      {
        "year": 1991,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Guy Forget",
        "score": "4-6, 6-3, 4-6, 6-3, 7-6(4)"
      },
      {
        "year": 1991,
        "tournament": "Lipton International Players Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "David Wheaton",
        "score": "4-6, 6-3, 6-4"
      },
      {
        "year": 1991,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Andre Agassi",
        "score": "3-6, 6-4, 2-6, 6-1, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Stefan Edberg",
        "score": "6-3, 3-6, 6-4, 6-2"
      },
      {
        "year": 1992,
        "tournament": "Suntory Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Richard Krajicek",
        "score": "6-4, 6-4, 7-6(3)"
      },
      {
        "year": 1992,
        "tournament": "Salem Open Hong Kong",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Michael Chang",
        "score": "7-5, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Carlos Costa",
        "score": "7-6(3), 6-0, 6-4"
      },
      {
        "year": 1992,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Petr Korda",
        "score": "7-5, 6-2, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Stefan Edberg",
        "score": "6-2, 6-1, 2-6, 7-5"
      },
      {
        "year": 1993,
        "tournament": "Kroger St. Jude International",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Todd Martin",
        "score": "5-7, 7-6(4), 7-6(4)"
      },
      {
        "year": 1993,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Wayne Ferreira",
        "score": "6-3, 6-3, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Goran Ivanisevic",
        "score": "6-1, 6-2, 6-2"
      },
      {
        "year": 1993,
        "tournament": "RCA Championships",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Boris Becker",
        "score": "7-5, 6-3"
      },
      {
        "year": 1995,
        "tournament": "Australian Men's Hardcourt Championships",
        "city": "Adelaide",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Arnaud Boetsch",
        "score": "6-2, 7-5"
      },
      {
        "year": 1995,
        "tournament": "MassMutual Championships",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Mark Philippoussis",
        "score": "7-6(2), 6-4"
      },
      {
        "year": 1995,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Andre Agassi",
        "score": "6-3, 6-4"
      },
      {
        "year": 1995,
        "tournament": "Davidoff Swiss Indoors",
        "city": "Basel",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jan Siemerink",
        "score": "6-7(2), 7-6(5), 5-7, 6-2, 7-5"
      },
      {
        "year": 1996,
        "tournament": "Comcast U.S. Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Chris Woodruff",
        "score": "6-4, 6-3"
      },
      {
        "year": 1997,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tim Henman",
        "score": "7-5, 6-7(5), 6-2"
      },
      {
        "year": 1997,
        "tournament": "Infiniti Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Thomas Enqvist",
        "score": "6-4, 6-4"
      },
      {
        "year": 1997,
        "tournament": "Nokia Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Magnus Gustafsson",
        "score": "7-6(10), 3-6, 6-3"
      },
      {
        "year": 1998,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Orlando",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Michael Chang",
        "score": "7-5, 3-6, 7-5"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Pro Staff Original 6.0 85 (Kevlar/graphite, midsize); later versions including a Pro Staff 6.6 'Stars and Stripes' personalized paint job",
        "headSizeSqIn": 85,
        "stringPattern": "16x18"
      },
      "apparelSponsor": "Nike (from October 1992; reportedly six-year, ~$27M deal); previously Diadora (through 1992)",
      "notes": "Trademark backwards/forwards baseball cap (often credited as starting the cap-on-court trend after his 1989 Basel title) and bandana underneath. Most associated with the Wilson Pro Staff 85. Predominantly a baseliner with a heavy Western-grip forehand."
    },
    ledger: {
      "prizeMoneyUsd": 14033132,
      "matchRecord": {
        "wins": 506,
        "losses": 237
      },
      "asOfIso": "2000-05-15",
      "source": "ATP Tour player page + Wikipedia"
    },

  },
  {
    slug: 'rod-laver',
    fullName: 'Rod Laver',
    shortName: 'Laver',
    tour: 'ATP',
    bornIso: '1938-08-09',
    birthplace: 'Rockhampton, Queensland, Australia',
    heightCm: 173,
    handedness: 'left',
    backhandStyle: 'one-handed',
    era: ['pre-open', 'open-classic'],
    styleOfPlay: ['all-court', 'serve-and-volley', 'wristy attacker'],
    surfaceStrengths: ['grass', 'clay', 'hard', 'carpet'],
    shotPalette: {
      signatureShots: ['lefty topspin forehand', 'sliced one-handed backhand', 'serve-and-volley to the body', 'lob volley'],
    },
    career: {
      grandSlams: 11,
      careerHighRanking: 1,
      turnedPro: 1962,
      retiredYear: 1979,
    },
    bio: 'The original. Two calendar Grand Slams (one as an amateur in 1962, one in the Open Era in 1969), a left-handed wrist that could carve any spin, and a foundational influence on everyone who came after. The only man to do it — twice.',
    rivalries: ['ken-rosewall'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1960,
        "tournament": "Australian Championships",
        "city": "Brisbane",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Neale Fraser",
        "score": "5-7, 3-6, 6-3, 8-6, 8-6"
      },
      {
        "year": 1961,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Chuck McKinley",
        "score": "6-3, 6-1, 6-4"
      },
      {
        "year": 1961,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Roy Emerson"
      },
      {
        "year": 1961,
        "tournament": "U.S. Indoor Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Whitney Reed"
      },
      {
        "year": 1962,
        "tournament": "Australian Championships",
        "city": "Brisbane",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Roy Emerson",
        "score": "8-6, 0-6, 6-4, 6-4"
      },
      {
        "year": 1962,
        "tournament": "French Championships",
        "city": "Paris",
        "surface": "clay",
        "tier": "pre-open-major",
        "opponent": "Roy Emerson",
        "score": "3-6, 2-6, 6-3, 9-7, 6-2"
      },
      {
        "year": 1962,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Martin Mulligan",
        "score": "6-2, 6-2, 6-1"
      },
      {
        "year": 1962,
        "tournament": "U.S. Championships",
        "city": "New York",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Roy Emerson",
        "score": "6-2, 6-4, 5-7, 6-4"
      },
      {
        "year": 1962,
        "tournament": "Italian Championships",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Roy Emerson"
      },
      {
        "year": 1962,
        "tournament": "German Championships",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Martin Mulligan"
      },
      {
        "year": 1962,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Roy Emerson"
      },
      {
        "year": 1962,
        "tournament": "Swiss Championships",
        "city": "Gstaad",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1962,
        "tournament": "Irish Championships",
        "city": "Dublin",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1962,
        "tournament": "New South Wales Championships",
        "city": "Sydney",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1962,
        "tournament": "Queensland Championships",
        "city": "Brisbane",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1962,
        "tournament": "Victorian Championships",
        "city": "Melbourne",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1963,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Lew Hoad"
      },
      {
        "year": 1964,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Pancho Gonzales"
      },
      {
        "year": 1964,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall",
        "score": "7-5, 4-6, 5-7, 8-6, 8-6"
      },
      {
        "year": 1965,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Andres Gimeno"
      },
      {
        "year": 1966,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall"
      },
      {
        "year": 1966,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall"
      },
      {
        "year": 1967,
        "tournament": "Wimbledon Pro",
        "city": "London",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall",
        "score": "6-2, 6-2, 12-10"
      },
      {
        "year": 1967,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Andres Gimeno"
      },
      {
        "year": 1967,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall"
      },
      {
        "year": 1967,
        "tournament": "French Pro Championship",
        "city": "Paris",
        "surface": "clay",
        "tier": "pre-open-major",
        "opponent": "Andres Gimeno"
      },
      {
        "year": 1968,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Tony Roche",
        "score": "6-3, 6-4, 6-2"
      },
      {
        "year": 1968,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Ken Rosewall",
        "score": "4-6, 6-0, 6-0"
      },
      {
        "year": 1968,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "grass",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall"
      },
      {
        "year": 1968,
        "tournament": "French Pro Championship",
        "city": "Paris",
        "surface": "clay",
        "tier": "pre-open-major",
        "opponent": "John Newcombe"
      },
      {
        "year": 1968,
        "tournament": "Madison Square Garden Pro",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1968,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "pre-open-major",
        "opponent": "Ken Rosewall"
      },
      {
        "year": 1969,
        "tournament": "Australian Open",
        "city": "Brisbane",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Andres Gimeno",
        "score": "6-3, 6-4, 7-5"
      },
      {
        "year": 1969,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Ken Rosewall",
        "score": "6-4, 6-3, 6-4"
      },
      {
        "year": 1969,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "John Newcombe",
        "score": "6-4, 5-7, 6-4, 6-4"
      },
      {
        "year": 1969,
        "tournament": "US Open",
        "city": "New York",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Tony Roche",
        "score": "7-9, 6-1, 6-2, 6-2"
      },
      {
        "year": 1969,
        "tournament": "South African Open",
        "city": "Johannesburg",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Tom Okker"
      },
      {
        "year": 1969,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "grass",
        "tier": "atp-500",
        "opponent": "Tony Roche"
      },
      {
        "year": 1969,
        "tournament": "Madison Square Garden Pro",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1969,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1969,
        "tournament": "Philadelphia U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1969,
        "tournament": "Wembley British Indoor",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tony Roche"
      },
      {
        "year": 1969,
        "tournament": "Howard Hughes Open",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1969,
        "tournament": "Berkeley Open",
        "city": "Berkeley",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "St. Louis Open",
        "city": "St. Louis",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "Fort Worth Open",
        "city": "Fort Worth",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "Anaheim Open",
        "city": "Anaheim",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "Bristol Open",
        "city": "Bristol",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "Tucson",
        "city": "Tucson",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1969,
        "tournament": "South Orange",
        "city": "South Orange",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Tennis Champions Classic",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1970,
        "tournament": "Sydney Dunlop Open",
        "city": "Sydney",
        "surface": "grass",
        "tier": "atp-500",
        "opponent": "Tony Roche"
      },
      {
        "year": 1970,
        "tournament": "Philadelphia U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tony Roche"
      },
      {
        "year": 1970,
        "tournament": "Wembley British Indoor",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1970,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1970,
        "tournament": "South African Open",
        "city": "Johannesburg",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1970,
        "tournament": "St. Louis WCT",
        "city": "St. Louis",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Vancouver",
        "city": "Vancouver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Fort Worth WCT",
        "city": "Fort Worth",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Salisbury U.S. Pro Indoor",
        "city": "Salisbury",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Macon WCT",
        "city": "Macon",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1970,
        "tournament": "Las Vegas Howard Hughes Open",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1970,
        "tournament": "Wembley Pro",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1971,
        "tournament": "Tennis Champions Classic",
        "city": "United States",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1971,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jan Kodes",
        "score": "7-5, 6-3, 6-3"
      },
      {
        "year": 1971,
        "tournament": "WCT Sydney",
        "city": "Sydney",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1971,
        "tournament": "WCT Bologna",
        "city": "Bologna",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1971,
        "tournament": "WCT Toronto",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1971,
        "tournament": "WCT Vancouver",
        "city": "Vancouver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1971,
        "tournament": "WCT Fort Worth",
        "city": "Fort Worth",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1972,
        "tournament": "WCT Richmond",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1972,
        "tournament": "WCT Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1972,
        "tournament": "WCT Washington",
        "city": "Washington",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1972,
        "tournament": "WCT Houston",
        "city": "Houston",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1973,
        "tournament": "WCT Hong Kong",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1973,
        "tournament": "WCT Houston",
        "city": "Houston",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1973,
        "tournament": "WCT Toronto",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1973,
        "tournament": "WCT Denver",
        "city": "Denver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1973,
        "tournament": "Alan King Tennis Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1973,
        "tournament": "U.S. Pro Championships",
        "city": "Boston",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Tom Okker"
      },
      {
        "year": 1973,
        "tournament": "John Player Trophy",
        "city": "Nottingham",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "WCT Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1974,
        "tournament": "WCT Houston",
        "city": "Houston",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "WCT Tokyo",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "WCT Las Vegas",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Alan King Tennis Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Arthur Ashe"
      },
      {
        "year": 1974,
        "tournament": "Palm Desert",
        "city": "Palm Desert",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "WCT Orlando",
        "city": "Orlando",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "WCT La Costa",
        "city": "La Costa",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "WCT Hilton Head",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "Alan King Tennis Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1975,
        "tournament": "WCT Tucson",
        "city": "Tucson",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1976,
        "tournament": "WCT Detroit Indoor",
        "city": "Detroit",
        "surface": "carpet",
        "tier": "atp-250"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Dunlop",
        "model": "Maxply Fort",
        "frameMaterial": "wood (laminated ash/sycamore)",
        "notes": "Primary racket through the bulk of his amateur and professional career (late 1950s through early 1970s). Strung with natural gut. The Maxply Fort was a flagship Dunlop wood frame, ~14 oz strung, ~65 sq in head."
      },
      "lateCareerRacket": {
        "brand": "Donnay",
        "model": "Borg Pro (graphite/composite variants)",
        "notes": "Switched from wood to Donnay composite/graphite frames in the mid-to-late 1970s, in line with the broader transition away from wood."
      },
      "notes": "Pre-modern era: most equipment specs (string tension, exact weight, grip size) and apparel/sponsor arrangements are sparsely documented or were informal endorsement deals typical of the 1960s-70s. Laver was famously left-handed with a strong topspin game built around a heavy wood frame."
    },
    ledger: {
      "prizeMoneyUsd": null,
      "matchRecord": null,
      "asOfIso": "2026-05-02",
      "source": "Wikipedia (Rod Laver), Dunlop Maxply Fort references, vintage racquet history sources",
      "notes": "Career prize money for Laver is not consistently reported. He is widely cited as the first tennis player to surpass $1,000,000 in career prize money (1971), but a definitive total earnings figure is not available. Detailed career W-L is also disputed across sources (amateur, registered-pro/pre-1968 tour, and Open Era records were tracked separately)."
    },

  },
  {
    slug: 'ivan-lendl',
    fullName: 'Ivan Lendl',
    shortName: 'Lendl',
    tour: 'ATP',
    bornIso: '1960-03-07',
    birthplace: 'Ostrava, Czechoslovakia',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'one-handed',
    era: ['open-classic', 'modern'],
    styleOfPlay: ['power baseliner', 'fitness pioneer', 'big forehand'],
    surfaceStrengths: ['clay', 'hard', 'carpet'],
    shotPalette: {
      serveSpeedKmh: 195,
      forehandSpeedKmh: 130,
      signatureShots: ['inside-out forehand', 'kick second serve', 'topspin one-handed backhand', 'cross-court forehand passing shot'],
      weakness: 'grass-court footing and low slices',
    },
    career: {
      grandSlams: 8,
      weeksAtNumberOne: 270,
      yearEndNumberOne: 4,
      careerHighRanking: 1,
      turnedPro: 1978,
      retiredYear: 1994,
    },
    bio: 'The man who built the modern professional. Lendl trained, ate, and thought about tennis with a discipline the sport had never seen, and dragged the men\'s game into the 80s and 90s with him. Eight Slams, eight straight US Open finals, and a coaching second act that built Murray\'s majors.',
    rivalries: ['john-mcenroe', 'jimmy-connors', 'mats-wilander'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1980,
        "tournament": "Houston",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Eddie Dibbs",
        "score": "6-1, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Hong Kong",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Brian Teacher",
        "score": "6-3, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Taipei",
        "city": "Taipei",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vijay Amritraj",
        "score": "7-5, 5-7, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Tokyo Outdoor",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "John Sadri",
        "score": "6-3, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Basel",
        "city": "Basel",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Yannick Noah",
        "score": "6-3, 6-3, 4-6, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Barcelona",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Tomas Smid",
        "score": "6-3, 6-3, 6-3"
      },
      {
        "year": 1980,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Bjorn Borg",
        "score": "4-6, 6-3, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Strasbourg",
        "city": "Strasbourg",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Yannick Noah",
        "score": "7-6, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Genoa WCT",
        "city": "Genoa",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Eliot Teltscher",
        "score": "6-2, 6-3"
      },
      {
        "year": 1981,
        "tournament": "Munich WCT",
        "city": "Munich",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-3, 6-2"
      },
      {
        "year": 1981,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jose-Luis Clerc",
        "score": "6-4, 6-4, 6-2"
      },
      {
        "year": 1981,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Guillermo Vilas",
        "score": "6-3, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Madrid",
        "city": "Madrid",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Pablo Arraya",
        "score": "6-3, 6-2, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Barcelona",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Balazs Taroczy",
        "score": "6-2, 6-2, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Basel",
        "city": "Basel",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Wojtek Fibak",
        "score": "6-3, 6-2, 7-6"
      },
      {
        "year": 1981,
        "tournament": "Vienna",
        "city": "Vienna",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Brian Gottfried",
        "score": "1-6, 6-0, 6-1, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Vitas Gerulaitis",
        "score": "6-7, 2-6, 7-6, 6-2, 6-4"
      },
      {
        "year": 1982,
        "tournament": "Genoa WCT",
        "city": "Genoa",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vitas Gerulaitis",
        "score": "6-7, 6-4, 6-4, 6-3"
      },
      {
        "year": 1982,
        "tournament": "Delray Beach",
        "city": "Delray Beach",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Eliot Teltscher",
        "score": "6-3, 6-1"
      },
      {
        "year": 1982,
        "tournament": "Strasbourg",
        "city": "Strasbourg",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vince Van Patten",
        "score": "6-3, 6-1"
      },
      {
        "year": 1982,
        "tournament": "Naples WCT",
        "city": "Naples",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Wojtek Fibak",
        "score": "6-4, 6-2, 6-1"
      },
      {
        "year": 1982,
        "tournament": "Frankfurt WCT",
        "city": "Frankfurt",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Yannick Noah",
        "score": "6-2, 6-1, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Houston WCT",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Yannick Noah",
        "score": "6-3, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Munich WCT",
        "city": "Munich",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-2, 6-2, 6-2"
      },
      {
        "year": 1982,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "John McEnroe",
        "score": "6-2, 3-6, 6-3, 6-3"
      },
      {
        "year": 1982,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Guillermo Vilas",
        "score": "7-6, 6-3, 6-2"
      },
      {
        "year": 1982,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Peter McNamara",
        "score": "7-5, 6-2, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Washington",
        "city": "Washington",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Gene Mayer",
        "score": "6-3, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Cincinnati",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Steve Denton",
        "score": "6-2, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Hartford",
        "city": "Hartford",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-3, 6-3"
      },
      {
        "year": 1982,
        "tournament": "Wembley",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-2, 6-2, 7-5"
      },
      {
        "year": 1982,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "John McEnroe",
        "score": "6-4, 6-4, 6-2"
      },
      {
        "year": 1983,
        "tournament": "Detroit",
        "city": "Detroit",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jimmy Arias",
        "score": "6-3, 6-1"
      },
      {
        "year": 1983,
        "tournament": "Munich WCT",
        "city": "Munich",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Tomas Smid",
        "score": "6-2, 6-3, 6-3"
      },
      {
        "year": 1983,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Mats Wilander",
        "score": "6-2, 6-3, 7-5"
      },
      {
        "year": 1983,
        "tournament": "Hilton Head WCT",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Sammy Giammalva",
        "score": "6-3, 6-1"
      },
      {
        "year": 1983,
        "tournament": "Hong Kong",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Wojtek Fibak",
        "score": "6-3, 6-3"
      },
      {
        "year": 1983,
        "tournament": "Tokyo Outdoor",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-1, 6-1"
      },
      {
        "year": 1983,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "John McEnroe",
        "score": "6-4, 6-4, 6-4"
      },
      {
        "year": 1984,
        "tournament": "Luxembourg",
        "city": "Luxembourg",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Tomas Smid",
        "score": "7-6, 7-6"
      },
      {
        "year": 1984,
        "tournament": "Milan",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Mats Wilander",
        "score": "6-3, 6-3"
      },
      {
        "year": 1984,
        "tournament": "Brussels",
        "city": "Brussels",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vitas Gerulaitis",
        "score": "6-3, 6-2, 6-3"
      },
      {
        "year": 1984,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Andres Gomez",
        "score": "3-6, 6-1, 6-3, 6-3"
      },
      {
        "year": 1984,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "John McEnroe",
        "score": "3-6, 2-6, 6-4, 7-5, 7-5"
      },
      {
        "year": 1984,
        "tournament": "Toronto Indoor",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Eliot Teltscher",
        "score": "6-2, 6-3"
      },
      {
        "year": 1984,
        "tournament": "Wembley",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-2, 7-5, 7-5"
      },
      {
        "year": 1985,
        "tournament": "Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-1, 6-7, 7-5, 4-6, 7-6"
      },
      {
        "year": 1985,
        "tournament": "Brussels",
        "city": "Brussels",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Stefan Edberg",
        "score": "7-5, 6-3"
      },
      {
        "year": 1985,
        "tournament": "Milan",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tim Mayotte",
        "score": "7-5, 6-3"
      },
      {
        "year": 1985,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-3, 6-2, 6-2"
      },
      {
        "year": 1985,
        "tournament": "Boca West WCT",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tim Mayotte",
        "score": "6-3, 6-1"
      },
      {
        "year": 1985,
        "tournament": "Queen's Club",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Pat Cash",
        "score": "6-3, 4-6, 6-3"
      },
      {
        "year": 1985,
        "tournament": "Washington",
        "city": "Washington",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Yannick Noah",
        "score": "4-6, 6-3, 7-5"
      },
      {
        "year": 1985,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "7-5, 6-3"
      },
      {
        "year": 1985,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "John McEnroe",
        "score": "7-6, 6-3, 6-4"
      },
      {
        "year": 1985,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Pat Cash",
        "score": "6-7, 7-6, 6-3, 6-2"
      },
      {
        "year": 1985,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Boris Becker",
        "score": "6-2, 7-6, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Tim Mayotte",
        "score": "6-7, 7-6, 6-2, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Fort Myers",
        "city": "Fort Myers",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tim Mayotte",
        "score": "6-3, 6-2"
      },
      {
        "year": 1986,
        "tournament": "Milan",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Yannick Noah",
        "score": "6-4, 6-1"
      },
      {
        "year": 1986,
        "tournament": "Boca West WCT",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tim Mayotte",
        "score": "6-2, 6-3"
      },
      {
        "year": 1986,
        "tournament": "Rome",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Emilio Sanchez",
        "score": "7-5, 4-6, 6-1, 6-1"
      },
      {
        "year": 1986,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Mikael Pernfors",
        "score": "6-3, 6-2, 6-4"
      },
      {
        "year": 1986,
        "tournament": "Stratton Mountain",
        "city": "Stratton Mountain",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Boris Becker",
        "score": "6-4, 6-3"
      },
      {
        "year": 1986,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Miloslav Mecir",
        "score": "6-4, 6-2, 6-0"
      },
      {
        "year": 1986,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Boris Becker",
        "score": "6-4, 6-4, 6-4"
      },
      {
        "year": 1987,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Miloslav Mecir",
        "score": "6-4, 6-2, 6-2"
      },
      {
        "year": 1987,
        "tournament": "Lipton (Key Biscayne)",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Mats Wilander",
        "score": "4-6, 6-2, 7-5, 6-4"
      },
      {
        "year": 1987,
        "tournament": "Hamburg",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Henri Leconte",
        "score": "6-1, 6-1, 6-0"
      },
      {
        "year": 1987,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Mats Wilander",
        "score": "7-5, 6-2, 3-6, 7-6"
      },
      {
        "year": 1987,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stefan Edberg",
        "score": "6-4, 7-6"
      },
      {
        "year": 1987,
        "tournament": "Cincinnati",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stefan Edberg",
        "score": "6-4, 6-1"
      },
      {
        "year": 1987,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Mats Wilander",
        "score": "6-7, 6-0, 7-6, 6-4"
      },
      {
        "year": 1987,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Mats Wilander",
        "score": "6-2, 6-2, 6-3"
      },
      {
        "year": 1988,
        "tournament": "Scottsdale",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jakob Hlasek",
        "score": "6-2, 6-1"
      },
      {
        "year": 1988,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Martin Jaite",
        "score": "0-6, 6-1, 7-6, 6-1"
      },
      {
        "year": 1988,
        "tournament": "Forest Hills WCT",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jimmy Arias",
        "score": "6-1, 6-2, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Rome",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Guillermo Perez Roldan",
        "score": "2-6, 6-7, 6-3, 6-1, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Queen's Club",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Boris Becker",
        "score": "6-4, 6-3"
      },
      {
        "year": 1988,
        "tournament": "Washington",
        "city": "Washington",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Jimmy Connors",
        "score": "6-1, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Kevin Curren",
        "score": "7-6, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Jakob Hlasek",
        "score": "6-4, 6-7, 6-7, 6-3, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Miloslav Mecir",
        "score": "6-2, 6-2, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Stuttgart Indoor",
        "city": "Stuttgart",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Brad Gilbert",
        "score": "6-2, 6-2, 6-1"
      },
      {
        "year": 1989,
        "tournament": "Indian Wells",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Tim Mayotte",
        "score": "7-5, 6-3, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Lipton (Key Biscayne)",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Thomas Muster",
        "score": "walkover"
      },
      {
        "year": 1989,
        "tournament": "Forest Hills WCT",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Aaron Krickstein",
        "score": "6-3, 6-2, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Hamburg",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Kent Carlsson",
        "score": "6-1, 6-3, 6-3"
      },
      {
        "year": 1989,
        "tournament": "Queen's Club",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Christo van Rensburg",
        "score": "7-6, 6-3"
      },
      {
        "year": 1989,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-1, 6-3"
      },
      {
        "year": 1989,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Brad Gilbert",
        "score": "6-4, 6-3, 4-6, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Masters Grand Prix",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Boris Becker",
        "score": "6-4, 7-6, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Stefan Edberg",
        "score": "4-6, 7-6, 5-2 ret."
      },
      {
        "year": 1990,
        "tournament": "Toronto Indoor",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "masters-1000",
        "opponent": "Andre Agassi",
        "score": "7-6, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Queen's Club",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Boris Becker",
        "score": "6-3, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Long Island",
        "city": "Long Island",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Brad Gilbert",
        "score": "6-3, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Stefan Edberg",
        "score": "6-3, 4-6, 6-3, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Sydney NSW Open",
        "city": "Sydney",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Wally Masur",
        "score": "6-3, 6-1"
      },
      {
        "year": 1992,
        "tournament": "Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Petr Korda",
        "score": "6-2, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Todd Martin",
        "score": "6-4, 6-4"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Adidas / Mizuno",
        "model": "Adidas GTX Pro (mid-1980s, one of the early all-graphite frames; signature 'Lendl' painted models including GTX Pro-T) -> Mizuno Pro Light 90 / Pro Series (late 1980s through retirement, 1989-1994)",
        "headSizeSqIn": 90,
        "stringPattern": "18x20"
      },
      "strings": {
        "mains": "Natural gut",
        "crosses": "Natural gut",
        "tensionLbsMains": 70,
        "tensionLbsCrosses": 70,
        "notes": "Lendl was famous for stringing extremely tight (reported 70+ lbs, well above tour norms of the era) with natural gut, contributing to his heavy, flat ball strike."
      },
      "shoes": {
        "brand": "Adidas",
        "model": "Adidas Lendl Competition / Lendl Supreme (signature line throughout the 1980s)"
      },
      "apparelSponsor": "Adidas",
      "otherSponsors": [
        "Adidas",
        "Mizuno",
        "Avis",
        "Kabuki / various endorsements"
      ],
      "notes": "Switched from a Kneissl White Star wood frame at the start of his career to the Adidas GTX Pro graphite around 1981-1982 (one of the first stars to commit to a full-graphite frame). Moved to Mizuno (Pro Light 90 series) circa 1989 after Adidas exited the racquet business. Pioneer of professional fitness/conditioning culture in tennis: rigorous off-court training, diet, and clay-court drills attributed to his methodical regime. Wore the iconic Adidas Lendl apparel line; mustache and methodical pre-serve routine became visual signatures."
    },
    ledger: {
      "prizeMoneyUsd": 21262417,
      "matchRecord": {
        "wins": 1068,
        "losses": 242
      },
      "singlesTitles": 94,
      "grandSlamTitles": 8,
      "weeksAtNo1": 270,
      "yearEndNo1": [
        1985,
        1986,
        1987,
        1989
      ],
      "surfaceSplits": {
        "hard": {
          "winPct": 0.823
        },
        "clay": {
          "winPct": 0.818
        },
        "grass": {
          "winPct": 0.704
        },
        "carpet": {
          "winPct": 0.835
        }
      },
      "asOfIso": "1994-12-31",
      "source": "ATP + Wikipedia (career totals at retirement, December 1994)"
    },

  },
  {
    slug: 'andre-agassi',
    fullName: 'Andre Agassi',
    shortName: 'Agassi',
    tour: 'ATP',
    bornIso: '1970-04-29',
    birthplace: 'Las Vegas, Nevada, USA',
    heightCm: 180,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['modern', 'current'],
    styleOfPlay: ['aggressive baseliner', 'returner', 'clean ball-striker'],
    surfaceStrengths: ['hard', 'clay', 'grass'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 130,
      signatureShots: ['return of serve', 'flat two-handed backhand down the line', 'inside-out forehand', 'short-ball forehand winner'],
      weakness: 'serve under pressure',
    },
    career: {
      grandSlams: 8,
      weeksAtNumberOne: 101,
      yearEndNumberOne: 1,
      careerHighRanking: 1,
      turnedPro: 1986,
      retiredYear: 2006,
    },
    bio: "From the rebel who refused Wimbledon's whites to the elder statesman who shaved his head and won majors into his 30s — Agassi's career was a study in reinvention. Eight majors, a career Slam, and the cleanest contact in the game.",
    signatureMatch: 'US Open 1990 Final vs Sampras',
    rivalries: ['pete-sampras', 'jim-courier'],
    status: 'retired',
    dataConfidence: 'verified',
    equipment: {
      "racket": {
        "brand": "Head",
        "model": "Head Liquidmetal Radical (final years; endorsement line: Radical. Pro-stock chassis was a Head Pro Tour 630/PT57A painted as the current Radical model)",
        "headSizeSqIn": 98,
        "stringPattern": "18x20"
      },
      "strings": {
        "mains": "Kirschbaum Touch Multifibre (natural-gut alternative; some sources cite Babolat VS natural gut earlier)",
        "crosses": "Kirschbaum Touch Multifibre",
        "tensionLbsMains": 62,
        "tensionLbsCrosses": 62
      },
      "shoes": {
        "brand": "Nike",
        "model": "Nike Air Zoom Breathe 2K4 / Nike Air Tech Challenge series (the Tech Challenge II in 1990 with neon lava accents is the iconic silhouette)"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Canon (Rebel camera, 'Image is Everything' campaign, late 1980s-1990s)",
        "Head",
        "Mountain Dew",
        "Longines (post-retirement)",
        "Genworth Financial"
      ],
      "notes": "Racket history: Prince Pro (junior years) -> Donnay Pro One (late 1980s, used at his 1988 breakthrough and 1990/1991 French Open finals) -> signed with Head in 1993 and stayed with Head through retirement, cycling through paint jobs (Radical Tour, Ti.Radical, Liquidmetal Radical, Flexpoint Radical) all built on the same Head PT57A pro-stock mold. Apparel: Nike from 1988 onward. Iconic looks include the 1988-90 acid-wash denim shorts with neon lycra compression tights, the hot-pink/black Tech Challenge kits, and the bandana over long hair (later a shaved head from ~1995). Skipped Wimbledon 1988-1990 partly because of the all-white dress code clashing with his Nike contract."
    },
    ledger: {
      "prizeMoneyUsd": 31152975,
      "matchRecord": {
        "wins": 870,
        "losses": 274
      },
      "surfaceSplits": {
        "hard": {
          "wins": 519,
          "winPct": 0.781
        },
        "clay": {
          "wins": 165,
          "winPct": 0.717
        },
        "grass": {
          "wins": 70,
          "winPct": 0.737
        },
        "carpet": {
          "wins": 116,
          "winPct": 0.784
        }
      },
      "asOfIso": "2006-09-03",
      "source": "ATP + Wikipedia + Tennis Warehouse vintage racquet pages + Agassi 'Open' (2009)"
    },

    titles: [
      {
        "year": 1987,
        "tournament": "Sul America Open",
        "city": "Itaparica",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Luiz Mattar",
        "score": "7-6, 6-2"
      },
      {
        "year": 1988,
        "tournament": "U.S. National Indoor",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Mikael Pernfors",
        "score": "6-4, 6-4, 7-5"
      },
      {
        "year": 1988,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Charleston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Jimmy Arias",
        "score": "6-2, 6-2"
      },
      {
        "year": 1988,
        "tournament": "WCT Tournament of Champions",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Slobodan Zivojinovic",
        "score": "7-5, 7-6(2), 7-5"
      },
      {
        "year": 1988,
        "tournament": "Mercedes Cup",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Andres Gomez",
        "score": "6-4, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Volvo International",
        "city": "Stratton Mountain",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Paul Annacone",
        "score": "6-2, 6-4"
      },
      {
        "year": 1988,
        "tournament": "Livingston Open",
        "city": "Livingston",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jeff Tarango",
        "score": "6-2, 6-2"
      },
      {
        "year": 1989,
        "tournament": "Prudential-Bache Securities Classic",
        "city": "Orlando",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Brad Gilbert",
        "score": "6-2, 6-1"
      },
      {
        "year": 1990,
        "tournament": "Volvo Tennis San Francisco",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Todd Witsken",
        "score": "6-1, 6-3"
      },
      {
        "year": 1990,
        "tournament": "Lipton International Players Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Stefan Edberg",
        "score": "6-1, 6-4, 0-6, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Sovran Bank Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Jim Grabb",
        "score": "6-1, 6-4"
      },
      {
        "year": 1990,
        "tournament": "ATP Tour World Championships",
        "city": "Frankfurt",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Stefan Edberg",
        "score": "5-7, 7-6(5), 7-5, 6-2"
      },
      {
        "year": 1991,
        "tournament": "Prudential-Bache Securities Classic",
        "city": "Orlando",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Derrick Rostagno",
        "score": "6-2, 1-6, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Sovran Bank Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Petr Korda",
        "score": "6-3, 6-4"
      },
      {
        "year": 1992,
        "tournament": "AT&T Challenge",
        "city": "Atlanta",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Pete Sampras",
        "score": "7-5, 6-4"
      },
      {
        "year": 1992,
        "tournament": "The Championships, Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Goran Ivanisevic",
        "score": "6-7(8), 6-4, 6-4, 1-6, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Ivan Lendl",
        "score": "3-6, 6-2, 6-0"
      },
      {
        "year": 1993,
        "tournament": "Volvo Tennis San Francisco",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Brad Gilbert",
        "score": "6-2, 6-7(4), 6-2"
      },
      {
        "year": 1993,
        "tournament": "Purex Tennis Championships",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Marcos Ondruska",
        "score": "6-2, 3-6, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Scottsdale Open",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Luiz Mattar",
        "score": "7-6(5), 6-3"
      },
      {
        "year": 1994,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jason Stoltenberg",
        "score": "6-4, 6-4"
      },
      {
        "year": 1994,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Michael Stich",
        "score": "6-1, 7-6(5), 7-5"
      },
      {
        "year": 1994,
        "tournament": "CA Tennis Trophy",
        "city": "Vienna",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Michael Stich",
        "score": "7-6(4), 4-6, 6-2, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Paris Open",
        "city": "Paris",
        "surface": "carpet",
        "tier": "masters-1000",
        "opponent": "Marc Rosset",
        "score": "6-3, 6-3, 4-6, 7-5"
      },
      {
        "year": 1995,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Pete Sampras",
        "score": "4-6, 6-1, 7-6(6), 6-4"
      },
      {
        "year": 1995,
        "tournament": "Sybase Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Michael Chang",
        "score": "6-2, 1-6, 6-3"
      },
      {
        "year": 1995,
        "tournament": "Lipton Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Pete Sampras",
        "score": "3-6, 6-2, 7-6(3)"
      },
      {
        "year": 1995,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stefan Edberg",
        "score": "6-4, 2-6, 7-5"
      },
      {
        "year": 1995,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Pete Sampras",
        "score": "3-6, 6-2, 6-3"
      },
      {
        "year": 1995,
        "tournament": "Thriftway ATP Championships",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Michael Chang",
        "score": "7-5, 6-2"
      },
      {
        "year": 1995,
        "tournament": "Volvo International",
        "city": "New Haven",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Richard Krajicek",
        "score": "3-6, 7-6(3), 6-3"
      },
      {
        "year": 1996,
        "tournament": "Lipton Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Goran Ivanisevic",
        "score": "3-0 ret."
      },
      {
        "year": 1996,
        "tournament": "Olympic Games",
        "city": "Atlanta",
        "surface": "hard",
        "tier": "olympics-gold",
        "opponent": "Sergi Bruguera",
        "score": "6-2, 6-3, 6-1"
      },
      {
        "year": 1996,
        "tournament": "Western & Southern Financial Group Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Michael Chang",
        "score": "7-6(4), 6-4"
      },
      {
        "year": 1998,
        "tournament": "Sybase Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Pete Sampras",
        "score": "6-2, 6-4"
      },
      {
        "year": 1998,
        "tournament": "Franklin Templeton Classic",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Jason Stoltenberg",
        "score": "6-4, 6-2"
      },
      {
        "year": 1998,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Scott Draper",
        "score": "6-2, 6-0"
      },
      {
        "year": 1998,
        "tournament": "Mercedes-Benz Cup",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tim Henman",
        "score": "6-7(4), 6-3, 6-4"
      },
      {
        "year": 1998,
        "tournament": "Czech Indoor",
        "city": "Ostrava",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jiri Novak",
        "score": "6-1, 6-2"
      },
      {
        "year": 1999,
        "tournament": "Salem Open",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Boris Becker",
        "score": "6-7(4), 6-4, 6-4"
      },
      {
        "year": 1999,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Andrei Medvedev",
        "score": "1-6, 2-6, 6-4, 6-3, 6-4"
      },
      {
        "year": 1999,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Yevgeny Kafelnikov",
        "score": "7-6(3), 6-1"
      },
      {
        "year": 1999,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Todd Martin",
        "score": "6-4, 6-7(5), 6-7(2), 6-3, 6-2"
      },
      {
        "year": 1999,
        "tournament": "Paris Open",
        "city": "Paris",
        "surface": "carpet",
        "tier": "masters-1000",
        "opponent": "Marat Safin",
        "score": "7-6(5), 6-2, 4-6, 6-4"
      },
      {
        "year": 2000,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Yevgeny Kafelnikov",
        "score": "3-6, 6-3, 6-2, 6-4"
      },
      {
        "year": 2001,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Arnaud Clement",
        "score": "6-4, 6-2, 6-2"
      },
      {
        "year": 2001,
        "tournament": "Indian Wells Masters",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Pete Sampras",
        "score": "7-6(5), 7-5, 6-1"
      },
      {
        "year": 2001,
        "tournament": "Ericsson Open",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jan-Michael Gambill",
        "score": "7-6(4), 6-1, 6-0"
      },
      {
        "year": 2001,
        "tournament": "Mercedes-Benz Cup",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Pete Sampras",
        "score": "6-4, 6-2"
      },
      {
        "year": 2002,
        "tournament": "Franklin Templeton Classic",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Nicolas Escude",
        "score": "6-2, 7-5"
      },
      {
        "year": 2002,
        "tournament": "NASDAQ-100 Open",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Roger Federer",
        "score": "6-3, 6-3, 3-6, 6-4"
      },
      {
        "year": 2002,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "masters-1000",
        "opponent": "Tommy Haas",
        "score": "6-3, 6-3, 6-0"
      },
      {
        "year": 2002,
        "tournament": "Madrid Masters",
        "city": "Madrid",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Jiri Novak",
        "score": "w/o"
      },
      {
        "year": 2003,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Rainer Schuettler",
        "score": "6-2, 6-2, 6-1"
      },
      {
        "year": 2003,
        "tournament": "Siebel Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Davide Sanguinetti",
        "score": "6-3, 6-1"
      },
      {
        "year": 2003,
        "tournament": "NASDAQ-100 Open",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Carlos Moya",
        "score": "6-3, 6-3"
      },
      {
        "year": 2003,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Andy Roddick",
        "score": "3-6, 6-3, 6-4"
      },
      {
        "year": 2004,
        "tournament": "Western & Southern Financial Group Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Lleyton Hewitt",
        "score": "6-3, 3-6, 6-2"
      },
      {
        "year": 2005,
        "tournament": "Mercedes-Benz Cup",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Gilles Muller",
        "score": "6-4, 7-5"
      }
    ],

  },
  {
    slug: 'bjorn-borg',
    fullName: 'Björn Borg',
    shortName: 'Borg',
    tour: 'ATP',
    bornIso: '1956-06-06',
    birthplace: 'Södertälje, Sweden',
    heightCm: 180,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['open-classic'],
    styleOfPlay: ['baseline', 'topspin generator', 'ice-cold competitor'],
    surfaceStrengths: ['clay', 'grass'],
    shotPalette: {
      serveSpeedKmh: 180,
      signatureShots: ['heavy topspin forehand', 'two-handed backhand passing shot', 'kick serve', 'cross-court loop'],
    },
    career: {
      grandSlams: 11,
      weeksAtNumberOne: 109,
      yearEndNumberOne: 2,
      careerHighRanking: 1,
      turnedPro: 1973,
      retiredYear: 1983,
    },
    bio: 'The original cool. Borg won 11 Slams before he was 26 and then walked away, leaving a generation chasing the meaning of his absence. His topspin and his stillness were both ahead of their time.',
    signatureMatch: 'Wimbledon 1980 Final vs McEnroe',
    rivalries: ['john-mcenroe', 'jimmy-connors'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1974,
        "tournament": "London Indoor (WCT)",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Mark Cox",
        "score": "6-3, 6-3, 6-2"
      },
      {
        "year": 1974,
        "tournament": "San Francisco (WCT)",
        "city": "San Francisco",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Tom Okker",
        "score": "7-6, 6-3"
      },
      {
        "year": 1974,
        "tournament": "Barcelona",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Manuel Orantes",
        "score": "6-2, 6-2, 6-4"
      },
      {
        "year": 1974,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Manuel Orantes",
        "score": "2-6, 6-7, 6-0, 6-1, 6-1"
      },
      {
        "year": 1974,
        "tournament": "Båstad",
        "city": "Båstad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Pato Cornejo",
        "score": "6-2, 6-2"
      },
      {
        "year": 1974,
        "tournament": "US Pro (Boston)",
        "city": "Boston",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Tom Okker",
        "score": "7-6, 6-1, 6-1"
      },
      {
        "year": 1974,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Mark Cox",
        "score": "6-4, 6-2, 6-3"
      },
      {
        "year": 1974,
        "tournament": "São Paulo",
        "city": "São Paulo",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Manuel Orantes",
        "score": "6-3, 6-1"
      },
      {
        "year": 1974,
        "tournament": "Buenos Aires",
        "city": "Buenos Aires",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Guillermo Vilas",
        "score": "6-2, 6-3, 6-1"
      },
      {
        "year": 1975,
        "tournament": "Sarasota",
        "city": "Sarasota",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Eddie Dibbs",
        "score": "6-3, 6-2"
      },
      {
        "year": 1975,
        "tournament": "WCT Caracas",
        "city": "Caracas",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Raúl Ramírez",
        "score": "6-3, 7-6"
      },
      {
        "year": 1975,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Manuel Orantes",
        "score": "6-2, 6-3, 6-3"
      },
      {
        "year": 1975,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Manuel Orantes",
        "score": "6-1, 3-6, 6-3, 1-0 ret."
      },
      {
        "year": 1975,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Rod Laver",
        "score": "1-6, 7-5, 3-6, 6-4, 6-2"
      },
      {
        "year": 1975,
        "tournament": "Båstad",
        "city": "Båstad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Adriano Panatta",
        "score": "6-2, 6-2, 6-1"
      },
      {
        "year": 1975,
        "tournament": "US Pro (Boston)",
        "city": "Boston",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Harold Solomon",
        "score": "6-3, 5-7, 6-1, 6-2"
      },
      {
        "year": 1975,
        "tournament": "São Paulo",
        "city": "São Paulo",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Guillermo Vilas",
        "score": "6-2, 6-3"
      },
      {
        "year": 1976,
        "tournament": "WCT Richmond",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Brian Gottfried",
        "score": "6-4, 6-2"
      },
      {
        "year": 1976,
        "tournament": "WCT Toronto",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Wojtek Fibak",
        "score": "6-3, 6-2"
      },
      {
        "year": 1976,
        "tournament": "Nice",
        "city": "Nice",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Manuel Orantes",
        "score": "6-3, 6-3"
      },
      {
        "year": 1976,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Ilie Năstase",
        "score": "6-4, 6-2, 9-7"
      },
      {
        "year": 1976,
        "tournament": "US Pro Indoor (Philadelphia)",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Brian Gottfried",
        "score": "6-4, 6-2, 6-3"
      },
      {
        "year": 1977,
        "tournament": "WCT Birmingham",
        "city": "Birmingham",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-4, 6-3"
      },
      {
        "year": 1977,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Brian Gottfried",
        "score": "5-7, 6-2, 6-0, 7-6"
      },
      {
        "year": 1977,
        "tournament": "WCT Denver",
        "city": "Denver",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Dick Stockton",
        "score": "6-7, 6-4, 6-3"
      },
      {
        "year": 1977,
        "tournament": "Las Vegas (Alan King Classic)",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Stan Smith",
        "score": "6-3, 6-1, 4-6, 7-6"
      },
      {
        "year": 1977,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Jimmy Connors",
        "score": "3-6, 6-2, 6-1, 5-7, 6-4"
      },
      {
        "year": 1977,
        "tournament": "Båstad",
        "city": "Båstad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Antonio Muñoz",
        "score": "6-1, 6-2, 6-2"
      },
      {
        "year": 1977,
        "tournament": "Tokyo (Gunze World)",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Manuel Orantes",
        "score": "6-3, 6-3"
      },
      {
        "year": 1977,
        "tournament": "Hong Kong",
        "city": "Hong Kong",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Tom Gorman",
        "score": "6-2, 6-1"
      },
      {
        "year": 1978,
        "tournament": "WCT Birmingham",
        "city": "Birmingham",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Harold Solomon",
        "score": "7-5, 6-2"
      },
      {
        "year": 1978,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Raúl Ramírez",
        "score": "5-7, 6-0, 6-1, 6-1"
      },
      {
        "year": 1978,
        "tournament": "Las Vegas (Alan King Classic)",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Harold Solomon",
        "score": "6-7, 6-2, 6-1, 6-2"
      },
      {
        "year": 1978,
        "tournament": "WCT Tournament of Champions (Forest Hills)",
        "city": "New York",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Eddie Dibbs",
        "score": "3-6, 6-1, 6-2, 6-2"
      },
      {
        "year": 1978,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Adriano Panatta",
        "score": "1-6, 6-3, 6-1, 4-6, 6-3"
      },
      {
        "year": 1978,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Guillermo Vilas",
        "score": "6-1, 6-1, 6-3"
      },
      {
        "year": 1978,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Jimmy Connors",
        "score": "6-2, 6-2, 6-3"
      },
      {
        "year": 1978,
        "tournament": "Båstad",
        "city": "Båstad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Pavel Složil",
        "score": "6-2, 6-1"
      },
      {
        "year": 1978,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "John McEnroe",
        "score": "6-3, 6-2"
      },
      {
        "year": 1979,
        "tournament": "WCT Richmond",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Harold Solomon",
        "score": "6-3, 6-1"
      },
      {
        "year": 1979,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Vitas Gerulaitis",
        "score": "6-2, 6-1, 6-3"
      },
      {
        "year": 1979,
        "tournament": "WCT Las Vegas",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-7, 6-1, 4-6, 6-3, 6-2"
      },
      {
        "year": 1979,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "John McEnroe",
        "score": "6-7, 6-1, 6-2, 7-6"
      },
      {
        "year": 1979,
        "tournament": "WCT Tournament of Champions (Düsseldorf)",
        "city": "Düsseldorf",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Harold Solomon",
        "score": "6-7, 6-1, 6-0"
      },
      {
        "year": 1979,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Víctor Pecci",
        "score": "6-3, 6-1, 6-7, 6-4"
      },
      {
        "year": 1979,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Roscoe Tanner",
        "score": "6-7, 6-1, 3-6, 6-3, 6-4"
      },
      {
        "year": 1979,
        "tournament": "Båstad",
        "city": "Båstad",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Stan Smith",
        "score": "7-6, 6-2"
      },
      {
        "year": 1979,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-3, 6-3"
      },
      {
        "year": 1979,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John Sadri",
        "score": "6-3, 6-4, 6-3"
      },
      {
        "year": 1979,
        "tournament": "Year-end Masters",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Vitas Gerulaitis",
        "score": "6-2, 6-2"
      },
      {
        "year": 1980,
        "tournament": "WCT Richmond",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Harold Solomon",
        "score": "6-3, 6-2"
      },
      {
        "year": 1980,
        "tournament": "WCT Milan",
        "city": "Milan",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "John McEnroe",
        "score": "3-6, 6-3, 6-1"
      },
      {
        "year": 1980,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Guillermo Vilas",
        "score": "6-1, 6-0, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Las Vegas (Alan King Classic)",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Harold Solomon",
        "score": "2-6, 6-2, 6-3, 6-2"
      },
      {
        "year": 1980,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Vitas Gerulaitis",
        "score": "6-4, 6-1, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "John McEnroe",
        "score": "1-6, 7-5, 6-3, 6-7, 8-6"
      },
      {
        "year": 1980,
        "tournament": "Stuttgart Outdoor",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Guillermo Vilas",
        "score": "1-6, 7-6, 6-2"
      },
      {
        "year": 1980,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Iván Lendl",
        "score": "4-6, 6-2, 6-1"
      },
      {
        "year": 1980,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "6-3, 6-4"
      },
      {
        "year": 1980,
        "tournament": "Year-end Masters",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Iván Lendl",
        "score": "6-4, 6-2, 6-2"
      },
      {
        "year": 1981,
        "tournament": "WCT Richmond",
        "city": "Richmond",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Iván Lendl",
        "score": "6-2, 6-1"
      },
      {
        "year": 1981,
        "tournament": "Monte Carlo",
        "city": "Monte Carlo",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Iván Lendl",
        "score": "6-1, 3-6, 6-2, 4-6, 6-3"
      },
      {
        "year": 1981,
        "tournament": "WCT Las Vegas",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Johan Kriek",
        "score": "6-1, 6-2, 6-2"
      },
      {
        "year": 1981,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Iván Lendl",
        "score": "6-1, 6-4, 6-3"
      },
      {
        "year": 1981,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Iván Lendl",
        "score": "6-1, 4-6, 6-2, 3-6, 6-1"
      },
      {
        "year": 1981,
        "tournament": "Stuttgart Outdoor",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Peter McNamara",
        "score": "6-3, 7-5"
      },
      {
        "year": 1981,
        "tournament": "Geneva",
        "city": "Geneva",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Vitas Gerulaitis",
        "score": "6-2, 7-5"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Donnay",
        "model": "Borg Pro (signature wood frame); previously Bancroft Player's Special early in career",
        "stringPattern": "wood-era stringing (no modern grommet/pattern spec)"
      },
      "strings": {
        "notes": "Famously strung at extremely high tensions, frequently cited around 80 lbs (~36 kg), reportedly using natural gut. Strings often broke overnight from the tension."
      },
      "shoes": {
        "brand": "Diadora",
        "model": "Borg Elite (signature leather court shoe)"
      },
      "apparelSponsor": "Fila",
      "otherSponsors": [
        "Donnay",
        "Diadora",
        "Fila",
        "Tuborg",
        "SAAB"
      ],
      "notes": "Iconic look: Fila pinstriped polo and shorts, Fila terrycloth headband holding back long blond hair. Used a heavy wood Donnay frame well after most peers transitioned to graphite/composite, contributing to his early retirement and a failed mid-1990s comeback when he refused to switch to a modern racket."
    },
    ledger: {
      "prizeMoneyUsd": 3655751,
      "matchRecord": {
        "wins": 654,
        "losses": 140
      },
      "titlesSingles": 64,
      "grandSlamSinglesTitles": 11,
      "weeksAtNo1": 109,
      "yearEndNo1": [
        1979,
        1980
      ],
      "asOfIso": "1983-01-01",
      "source": "ATP + Wikipedia (figures reflect career through January 1983 retirement; brief 1991-1993 comeback excluded as it produced no wins on the main tour and minimal additional prize money)"
    },

  },
  {
    slug: 'jimmy-connors',
    fullName: 'Jimmy Connors',
    shortName: 'Connors',
    tour: 'ATP',
    bornIso: '1952-09-02',
    birthplace: 'East St. Louis, Illinois, USA',
    heightCm: 178,
    handedness: 'left',
    backhandStyle: 'two-handed',
    era: ['open-classic'],
    styleOfPlay: ['flat-hitter', 'aggressive returner', 'fighter'],
    surfaceStrengths: ['hard', 'grass', 'carpet', 'clay'],
    shotPalette: {
      signatureShots: ['flat two-handed backhand', 'cross-court forehand return', 'wide lefty serve', 'down-the-line backhand pass'],
    },
    career: {
      grandSlams: 8,
      weeksAtNumberOne: 268,
      yearEndNumberOne: 5,
      careerHighRanking: 1,
      turnedPro: 1972,
      retiredYear: 1996,
    },
    bio: 'Two-handed backhand, lefty shotgun forehand, and a refusal to lose. Connors won 109 ATP titles, eight majors, and at 39 years old made one last US Open semifinal that no one watching has ever forgotten.',
    signatureMatch: 'US Open 1991 Quarterfinal vs Krickstein',
    rivalries: ['bjorn-borg', 'john-mcenroe', 'ivan-lendl'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1972,
        "tournament": "Jacksonville Open",
        "city": "Jacksonville",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Clark Graebner",
        "score": "7-5, 6-4"
      },
      {
        "year": 1972,
        "tournament": "Roanoke International",
        "city": "Roanoke",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Vladimir Zednik",
        "score": "6-4, 7-6"
      },
      {
        "year": 1972,
        "tournament": "Queen's Club Championships",
        "city": "London",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "John Paish",
        "score": "6-2, 6-3"
      },
      {
        "year": 1972,
        "tournament": "Buckeye Tennis Championships",
        "city": "Columbus",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Andrew Pattison",
        "score": "7-5, 6-3, 7-5"
      },
      {
        "year": 1972,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Guillermo Vilas",
        "score": "6-3, 6-3"
      },
      {
        "year": 1972,
        "tournament": "Pacific Coast Championships",
        "city": "Albany (CA)",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Roscoe Tanner",
        "score": "6-2, 7-6"
      },
      {
        "year": 1973,
        "tournament": "Baltimore International",
        "city": "Baltimore",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "6-4, 7-5"
      },
      {
        "year": 1973,
        "tournament": "Roanoke International",
        "city": "Roanoke",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Ian Fletcher",
        "score": "6-2, 6-3"
      },
      {
        "year": 1973,
        "tournament": "Salt Lake City Open",
        "city": "Salt Lake City",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Paul Gerken",
        "score": "6-1, 6-2"
      },
      {
        "year": 1973,
        "tournament": "U.S. National Indoor Championships",
        "city": "Salisbury",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Karl Meiler",
        "score": "3-6, 7-6, 7-6, 6-3"
      },
      {
        "year": 1973,
        "tournament": "Bergen County Indoor",
        "city": "Paramus",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Clark Graebner",
        "score": "6-1, 6-2"
      },
      {
        "year": 1973,
        "tournament": "Coliseum Mall International",
        "city": "Hampton",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Ilie Nastase",
        "score": "4-6, 6-3, 7-5, 6-3"
      },
      {
        "year": 1973,
        "tournament": "U.S. Pro Tennis Championships",
        "city": "Boston",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Arthur Ashe",
        "score": "6-3, 4-6, 6-4, 3-6, 6-2"
      },
      {
        "year": 1973,
        "tournament": "Buckeye Tennis Championships",
        "city": "Columbus",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Charlie Pasarell",
        "score": "3-6, 6-3, 6-3"
      },
      {
        "year": 1973,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Tom Okker",
        "score": "7-5, 7-6"
      },
      {
        "year": 1973,
        "tournament": "Quebec International",
        "city": "Quebec City",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Marty Riessen",
        "score": "6-1, 6-4, 6-7, 6-0"
      },
      {
        "year": 1973,
        "tournament": "South African Open",
        "city": "Johannesburg",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Arthur Ashe",
        "score": "6-4, 7-6, 6-3"
      },
      {
        "year": 1974,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Phil Dent",
        "score": "7-6, 6-4, 4-6, 6-3"
      },
      {
        "year": 1974,
        "tournament": "Roanoke International",
        "city": "Roanoke",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Little Rock",
        "city": "Little Rock",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Sandy Mayer",
        "score": "7-5, 6-3"
      },
      {
        "year": 1974,
        "tournament": "U.S. National Indoor Championships",
        "city": "Salisbury",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Frew McMillan",
        "score": "6-4, 6-3, 6-2"
      },
      {
        "year": 1974,
        "tournament": "Coliseum Mall International",
        "city": "Hampton",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Salt Lake City Open",
        "city": "Salt Lake City",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Tempe Rotary Classic",
        "city": "Tempe",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "U.S. Clay Court Championships",
        "city": "Indianapolis",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Bjorn Borg",
        "score": "5-7, 6-3, 6-4"
      },
      {
        "year": 1974,
        "tournament": "Manchester Open",
        "city": "Manchester",
        "surface": "grass",
        "tier": "atp-250"
      },
      {
        "year": 1974,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Ken Rosewall",
        "score": "6-1, 6-1, 6-4"
      },
      {
        "year": 1974,
        "tournament": "U.S. Open",
        "city": "New York",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Ken Rosewall",
        "score": "6-1, 6-0, 6-1"
      },
      {
        "year": 1974,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1974,
        "tournament": "South African Open",
        "city": "Johannesburg",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Arthur Ashe",
        "score": "7-6, 6-3, 6-1"
      },
      {
        "year": 1975,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "U.S. National Indoor Championships",
        "city": "Salisbury",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1975,
        "tournament": "American Airlines Tennis Games",
        "city": "Tucson",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1975,
        "tournament": "Coliseum Mall International",
        "city": "Hampton",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Jan Kodes",
        "score": "3-6, 6-3, 6-0"
      },
      {
        "year": 1975,
        "tournament": "Denver WCT",
        "city": "Denver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "Bahamas Open",
        "city": "Nassau",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "Boca Raton",
        "city": "Boca Raton",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1975,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1975,
        "tournament": "Stockholm Open",
        "city": "Stockholm",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Adriano Panatta",
        "score": "4-6, 6-3, 7-5"
      },
      {
        "year": 1976,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Bjorn Borg",
        "score": "7-6, 6-4, 6-0"
      },
      {
        "year": 1976,
        "tournament": "American Airlines Tennis Games",
        "city": "Palm Springs",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "Las Vegas Alan King Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "Hilton Head",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1976,
        "tournament": "Memphis",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "Caracas",
        "city": "Caracas",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1976,
        "tournament": "U.S. Clay Court Championships",
        "city": "Indianapolis",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "South Orange",
        "city": "South Orange",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1976,
        "tournament": "U.S. Open",
        "city": "New York",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Bjorn Borg",
        "score": "6-4, 3-6, 7-6, 6-4"
      },
      {
        "year": 1976,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1976,
        "tournament": "Hollywood, Florida",
        "city": "Hollywood (FL)",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1977,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1977,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1977,
        "tournament": "Pepsi Grand Slam",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1977,
        "tournament": "Las Vegas Alan King Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1977,
        "tournament": "Forest Hills WCT",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1977,
        "tournament": "South Orange",
        "city": "South Orange",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1977,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1977,
        "tournament": "Masters",
        "city": "New York",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "Bjorn Borg",
        "score": "6-4, 1-6, 6-4"
      },
      {
        "year": 1978,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1978,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1978,
        "tournament": "ABN World Tennis Tournament",
        "city": "Rotterdam",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1978,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1978,
        "tournament": "Denver WCT",
        "city": "Denver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1978,
        "tournament": "Washington Star International",
        "city": "Washington",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1978,
        "tournament": "U.S. Clay Court Championships",
        "city": "Indianapolis",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1978,
        "tournament": "Volvo International",
        "city": "Stowe",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1978,
        "tournament": "U.S. Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Bjorn Borg",
        "score": "6-4, 6-2, 6-2"
      },
      {
        "year": 1978,
        "tournament": "Sydney Indoor",
        "city": "Sydney",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "Las Vegas Alan King Classic",
        "city": "Las Vegas",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "WCT Invitational",
        "city": "Forest Hills",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "Atlanta WCT",
        "city": "Atlanta",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1979,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1979,
        "tournament": "Toronto Indoor",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "U.S. Clay Court Championships",
        "city": "Indianapolis",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1979,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1980,
        "tournament": "U.S. Pro Indoor",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1980,
        "tournament": "Birmingham International Indoor",
        "city": "Birmingham (AL)",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1980,
        "tournament": "WCT Finals",
        "city": "Dallas",
        "surface": "carpet",
        "tier": "atp-finals",
        "opponent": "John McEnroe",
        "score": "2-6, 7-6, 6-1, 6-2"
      },
      {
        "year": 1980,
        "tournament": "La Quinta",
        "city": "La Quinta",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1980,
        "tournament": "North Conway",
        "city": "North Conway",
        "surface": "clay",
        "tier": "atp-500"
      },
      {
        "year": 1980,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1981,
        "tournament": "Congoleum Classic",
        "city": "La Quinta",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1981,
        "tournament": "Brussels",
        "city": "Brussels",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1981,
        "tournament": "ABN World Tennis Tournament",
        "city": "Rotterdam",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1981,
        "tournament": "Wembley Championships",
        "city": "London",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "John McEnroe",
        "score": "3-6, 2-6, 6-3, 6-4, 6-2"
      },
      {
        "year": 1982,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1982,
        "tournament": "Congoleum Classic",
        "city": "La Quinta",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1982,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "John McEnroe",
        "score": "3-6, 6-3, 6-7, 7-6, 6-4"
      },
      {
        "year": 1982,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1982,
        "tournament": "U.S. Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Ivan Lendl",
        "score": "6-3, 6-2, 4-6, 6-4"
      },
      {
        "year": 1982,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1982,
        "tournament": "Volvo Masters Hartford",
        "city": "Hartford",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1983,
        "tournament": "U.S. National Indoor Championships",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1983,
        "tournament": "Toronto Indoor",
        "city": "Toronto",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1983,
        "tournament": "U.S. Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Ivan Lendl",
        "score": "6-3, 6-7, 7-5, 6-0"
      },
      {
        "year": 1983,
        "tournament": "Vancouver Tennis Classic",
        "city": "Vancouver",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1984,
        "tournament": "Congoleum Classic",
        "city": "La Quinta",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Ivan Lendl",
        "score": "6-3, 7-6"
      },
      {
        "year": 1984,
        "tournament": "Boca West",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "atp-250"
      },
      {
        "year": 1984,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1984,
        "tournament": "Pacific Southwest Open",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "atp-500"
      },
      {
        "year": 1984,
        "tournament": "Tokyo Indoor",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "atp-500",
        "opponent": "Ivan Lendl"
      },
      {
        "year": 1985,
        "tournament": "Memphis U.S. Indoor",
        "city": "Memphis",
        "surface": "carpet",
        "tier": "atp-500"
      },
      {
        "year": 1988,
        "tournament": "Sovran Bank Tennis Classic",
        "city": "Washington",
        "surface": "clay",
        "tier": "atp-250"
      },
      {
        "year": 1988,
        "tournament": "Toulouse Grand Prix",
        "city": "Toulouse",
        "surface": "carpet",
        "tier": "atp-250"
      },
      {
        "year": 1989,
        "tournament": "Toulouse Grand Prix",
        "city": "Toulouse",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "John McEnroe",
        "score": "6-3, 6-3"
      },
      {
        "year": 1989,
        "tournament": "Tel Aviv Open",
        "city": "Tel Aviv",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Gilad Bloom",
        "score": "2-6, 6-2, 6-1"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Wilson T2000 (steel, 1968-mid 1980s); later Wilson Pro Staff Sting and Wilson Pro Staff Original 6.0 (graphite)",
        "headSizeSqIn": 65,
        "stringPattern": "16x19"
      },
      "strings": {
        "mains": "Natural gut",
        "crosses": "Natural gut",
        "tensionLbsMains": 65,
        "tensionLbsCrosses": 65
      },
      "shoes": {
        "brand": "Converse",
        "model": "Converse leather court shoes (1970s-80s); later Nike"
      },
      "apparelSponsor": "Sergio Tacchini (later Wilson)",
      "otherSponsors": [
        "Wilson",
        "Converse",
        "Nike (late career)"
      ],
      "notes": "Connors was virtually the only top pro to play the steel-strung Wilson T2000, a wiry, oddly-strung frame that gave his flat two-handed backhand a unique sound. He resisted the move to graphite far longer than peers, eventually transitioning to the Wilson Pro Staff Sting and Pro Staff Original 6.0 in the mid-1980s. Apparel sponsorship was inconsistent for stretches of his career; Sergio Tacchini was his most identifiable apparel association, and Wilson covered him in later years. Famously left-handed, two-handed backhand, flat groundstrokes, charged the net behind returns."
    },
    ledger: {
      "prizeMoneyUsd": 8641040,
      "matchRecord": {
        "wins": 1274,
        "losses": 283
      },
      "surfaceSplits": {
        "hard": {
          "wins": 500,
          "winPct": 0.831
        },
        "clay": {
          "wins": 269,
          "winPct": 0.788
        },
        "grass": {
          "wins": 159,
          "winPct": 0.832
        },
        "carpet": {
          "wins": 346,
          "winPct": 0.837
        }
      },
      "asOfIso": "1996-09-30",
      "source": "ATP + Wikipedia"
    },

  },
  {
    slug: 'andy-roddick',
    fullName: 'Andy Roddick',
    shortName: 'Roddick',
    tour: 'ATP',
    bornIso: '1982-08-30',
    birthplace: 'Omaha, Nebraska, USA',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['modern', 'current'],
    styleOfPlay: ['serve dominant', 'big forehand', 'aggressive baseliner'],
    surfaceStrengths: ['hard', 'grass'],
    shotPalette: {
      serveSpeedKmh: 240,
      forehandSpeedKmh: 135,
      signatureShots: ['first serve T on the deuce side', 'forehand short-ball put-away', 'backhand chip return'],
      weakness: 'second-serve return and movement on slow clay',
    },
    career: {
      grandSlams: 1,
      weeksAtNumberOne: 13,
      yearEndNumberOne: 1,
      careerHighRanking: 1,
      turnedPro: 2000,
      retiredYear: 2012,
    },
    bio: 'The biggest serve American tennis ever produced. Roddick won the 2003 US Open and spent the next decade defending the home patch against three of the greatest players ever. The serve was a weapon; the heart was bigger.',
    signatureMatch: 'Wimbledon 2009 Final vs Federer',
    rivalries: ['roger-federer'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2001,
        "tournament": "Verizon Tennis Challenge",
        "city": "Atlanta",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Xavier Malisse",
        "score": "6-2, 6-4"
      },
      {
        "year": 2001,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Hyung-Taik Lee",
        "score": "7-5, 6-3"
      },
      {
        "year": 2001,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Sjeng Schalken",
        "score": "6-2, 6-3"
      },
      {
        "year": 2002,
        "tournament": "Kroger St. Jude International",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "James Blake",
        "score": "6-4, 3-6, 7-5"
      },
      {
        "year": 2002,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Pete Sampras",
        "score": "7-6(11-9), 6-3"
      },
      {
        "year": 2003,
        "tournament": "Open de Tenis Comunidad Valenciana / Sankt Pölten",
        "city": "Sankt Pölten",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Nikolay Davydenko",
        "score": "6-3, 6-2"
      },
      {
        "year": 2003,
        "tournament": "Stella Artois Championships",
        "city": "London (Queen's Club)",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Sebastien Grosjean",
        "score": "6-3, 6-3"
      },
      {
        "year": 2003,
        "tournament": "RCA Championships",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Paradorn Srichaphan",
        "score": "7-6(7-2), 6-4"
      },
      {
        "year": 2003,
        "tournament": "Canada Masters (Rogers Cup)",
        "city": "Montreal",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "David Nalbandian",
        "score": "6-1, 6-3"
      },
      {
        "year": 2003,
        "tournament": "Western & Southern Financial Group Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Mardy Fish",
        "score": "4-6, 7-6(7-3), 7-6(7-4)"
      },
      {
        "year": 2003,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Juan Carlos Ferrero",
        "score": "6-3, 7-6(7-2), 6-3"
      },
      {
        "year": 2004,
        "tournament": "SAP Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Mardy Fish",
        "score": "7-6(15-13), 6-4"
      },
      {
        "year": 2004,
        "tournament": "NASDAQ-100 Open (Miami Masters)",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Guillermo Coria",
        "score": "6-7(2-7), 6-3, 6-1, ret."
      },
      {
        "year": 2004,
        "tournament": "Stella Artois Championships",
        "city": "London (Queen's Club)",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Sebastien Grosjean",
        "score": "7-6(7-4), 6-4"
      },
      {
        "year": 2004,
        "tournament": "RCA Championships",
        "city": "Indianapolis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Nicolas Kiefer",
        "score": "6-2, 6-3"
      },
      {
        "year": 2004,
        "tournament": "Western & Southern Financial Group Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Juan Carlos Ferrero",
        "score": "6-3, 6-4"
      },
      {
        "year": 2005,
        "tournament": "SAP Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Cyril Saulnier",
        "score": "6-0, 6-4"
      },
      {
        "year": 2005,
        "tournament": "U.S. Men's Clay Court Championships",
        "city": "Houston",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Sebastien Grosjean",
        "score": "6-2, 6-2"
      },
      {
        "year": 2005,
        "tournament": "Stella Artois Championships",
        "city": "London (Queen's Club)",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Ivo Karlovic",
        "score": "7-6, 7-6"
      },
      {
        "year": 2005,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "James Blake",
        "score": "7-5, 6-3"
      },
      {
        "year": 2005,
        "tournament": "Grand Prix de Tennis de Lyon",
        "city": "Lyon",
        "surface": "carpet",
        "tier": "atp-250",
        "opponent": "Gael Monfils",
        "score": "6-3, 6-2"
      },
      {
        "year": 2006,
        "tournament": "Western & Southern Financial Group Masters",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Juan Carlos Ferrero",
        "score": "6-3, 6-4"
      },
      {
        "year": 2007,
        "tournament": "Artois Championships",
        "city": "London (Queen's Club)",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Nicolas Mahut",
        "score": "4-6, 7-6(9-7), 7-6(7-2)"
      },
      {
        "year": 2007,
        "tournament": "Legg Mason Tennis Classic",
        "city": "Washington, D.C.",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "John Isner",
        "score": "6-4, 7-6(7-4)"
      },
      {
        "year": 2008,
        "tournament": "SAP Open",
        "city": "San Jose",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Radek Stepanek",
        "score": "6-4, 7-5"
      },
      {
        "year": 2008,
        "tournament": "Dubai Tennis Championships",
        "city": "Dubai",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Feliciano Lopez",
        "score": "6-7(8-10), 6-4, 6-2"
      },
      {
        "year": 2009,
        "tournament": "Regions Morgan Keegan Championships",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Radek Stepanek",
        "score": "7-5, 7-5"
      },
      {
        "year": 2010,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Radek Stepanek",
        "score": "7-6(7-2), 7-6(9-7)"
      },
      {
        "year": 2010,
        "tournament": "Sony Ericsson Open (Miami Masters)",
        "city": "Miami",
        "surface": "hard",
        "tier": "masters-1000",
        "opponent": "Tomas Berdych",
        "score": "7-5, 6-4"
      },
      {
        "year": 2011,
        "tournament": "Regions Morgan Keegan Championships",
        "city": "Memphis",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Milos Raonic",
        "score": "7-6(9-7), 6-7(11-13), 7-5"
      },
      {
        "year": 2012,
        "tournament": "AEGON International",
        "city": "Eastbourne",
        "surface": "grass",
        "tier": "atp-250",
        "opponent": "Andreas Seppi",
        "score": "6-3, 6-2"
      },
      {
        "year": 2012,
        "tournament": "Atlanta Tennis Championships",
        "city": "Atlanta",
        "surface": "hard",
        "tier": "atp-250",
        "opponent": "Gilles Muller",
        "score": "1-6, 7-6, 6-2"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Babolat",
        "model": "Pure Drive (multiple iterations across career; final endorsement Pure Drive Roddick / Pure Drive GT 2012). Played a customized pro-stock based on the Pure Drive mold.",
        "headSizeSqIn": 100,
        "stringPattern": "16x19"
      },
      "strings": {
        "mains": "Babolat Pro Hurricane Tour",
        "crosses": "Babolat VS Touch natural gut (hybrid)",
        "tensionLbsMains": 62,
        "tensionLbsCrosses": 62
      },
      "shoes": {
        "brand": "Lacoste",
        "model": "Lacoste performance tennis shoe (late-career; previously Reebok)"
      },
      "apparelSponsor": "Lacoste",
      "otherSponsors": [
        "Babolat",
        "Lacoste",
        "Rolex",
        "American Express",
        "SAP",
        "Reebok (early career)"
      ],
      "notes": "Renowned for one of the fastest flat serves in history, peaking at 155 mph (249 km/h) in 2004 - then a world record. Right-handed, two-handed backhand. Apparel: Reebok early in career, switched to Lacoste in 2005 and stayed with them through retirement. Babolat Pure Drive was his racket for his entire pro career; specific iterations included the original Pure Drive, Pure Drive Plus, Pure Drive Roddick, and Pure Drive GT (2012)."
    },
    ledger: {
      "prizeMoneyUsd": 20640030,
      "matchRecord": {
        "wins": 612,
        "losses": 213
      },
      "surfaceSplits": {
        "hard": {
          "wins": 462,
          "winPct": 0.76
        },
        "clay": {
          "wins": 67,
          "winPct": 0.62
        },
        "grass": {
          "wins": 83,
          "winPct": 0.804
        }
      },
      "asOfIso": "2012-09-05",
      "source": "ATP + Wikipedia + Tennis Warehouse"
    },

  },
  {
    slug: 'joao-fonseca',
    fullName: 'João Fonseca',
    shortName: 'Fonseca',
    tour: 'ATP',
    bornIso: '2006-08-21',
    birthplace: 'Rio de Janeiro, Brazil',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['aggressive baseliner', 'first-strike', 'big forehand'],
    surfaceStrengths: ['hard', 'clay'],
    shotPalette: {
      serveSpeedKmh: 210,
      forehandSpeedKmh: 140,
      signatureShots: ['forehand winner from anywhere', 'first serve out wide', 'inside-in forehand'],
    },
    career: {
      grandSlams: 0,
      careerHighRanking: 24,
      turnedPro: 2023,
    },
    bio: "Brazilian tennis hadn't had a star this exciting in a generation. Fonseca exploded into 2024 with the Next Gen Finals title, broke into the top 25 by late 2025, and arrived with a forehand that already produces ATP-tour winners. The ceiling is unwritten.",
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2024,
        "tournament": "Next Gen ATP Finals",
        "city": "Jeddah",
        "surface": "hard",
        "tier": "next-gen-finals",
        "opponent": "Learner Tien",
        "score": "2-4, 4-3(8), 4-0, 4-2"
      },
      {
        "year": 2025,
        "tournament": "Argentina Open",
        "city": "Buenos Aires",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Francisco Cerundolo",
        "score": "6-4, 7-6(1)"
      },
      {
        "year": 2025,
        "tournament": "Swiss Indoors",
        "city": "Basel",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Alejandro Davidovich Fokina",
        "score": "6-3, 6-4"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Yonex",
        "model": "VCORE 98 (custom; pro-stock based on older 16x20 mold, painted as current VCORE 98)",
        "weightG": 305,
        "headSizeSqIn": 98
      },
      "strings": {
        "mains": "Yonex Poly Tour Strike 1.25",
        "crosses": "Yonex Poly Tour Strike 1.20",
        "tensionLbsMains": 50,
        "tensionLbsCrosses": 48
      },
      "shoes": {
        "brand": "On",
        "model": "The Roger Pro 3"
      },
      "apparelSponsor": "On",
      "otherSponsors": [
        "Yonex",
        "On",
        "Rolex",
        "Banco BTG Pactual",
        "Itau",
        "Engie",
        "Brahma",
        "IMG"
      ],
      "notes": "User-supplied 'Ezone' tip did not verify: Fonseca is a Yonex contracted player but uses the VCORE 98 (control/spin frame), not Ezone. Multiple sources confirm a hybrid Poly Tour Strike setup (1.25 mains / 1.20 crosses) at roughly 50/48 lbs; close-up photos show a 16x20 string pattern, suggesting a customized pro-stock based on the 2018-era VCORE SV 98 mold rather than the current retail 16x19. Strung with overgrip, leather grip, lead at 3/9/12 and throat: ~356g and ~335 SW playing spec. On apparel/footwear deal signed in 2023 (when he was 16) via Roger Federer's brand; current shoe is The Roger Pro 3 introduced for the 2025-26 off-season. Managed by IMG; family-run team."
    },
    ledger: {
      "prizeMoneyUsd": 3233646,
      "matchRecord": {
        "wins": 48,
        "losses": 31
      },
      "surfaceSplits": {
        "hard": {
          "wins": 27,
          "losses": 17
        },
        "clay": {
          "wins": 14,
          "losses": 12
        },
        "grass": {
          "wins": 7,
          "losses": 2
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour player page (f0fv); Wikipedia 'Joao Fonseca (tennis)'; Rio Open player profile; tennis365 Monte Carlo prize-money report (Apr 2026); Tennisnerd / Tenniscompanion / impactingtennis racquet profiles; tennis.com 'Geared Up' feature"
    },

  },
  {
    slug: 'arthur-fils',
    fullName: 'Arthur Fils',
    shortName: 'Fils',
    tour: 'ATP',
    bornIso: '2004-06-12',
    birthplace: 'Bondoufle, France',
    heightCm: 188,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['athletic baseliner', 'big forehand', 'first-strike'],
    surfaceStrengths: ['hard', 'clay'],
    shotPalette: {
      serveSpeedKmh: 215,
      forehandSpeedKmh: 140,
      signatureShots: ['flat forehand', 'first serve T', 'inside-out forehand'],
    },
    career: {
      grandSlams: 0,
      careerHighRanking: 14,
      turnedPro: 2021,
    },
    bio: "France's brightest hope in years. Fils brings athleticism and a willingness to play big in big moments — a forehand that flattens, a serve that bites, and the kind of confidence that suggests he expects to be top 10 sooner than later.",
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2023,
        "tournament": "Open Parc Auvergne-Rhone-Alpes",
        "city": "Lyon",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Francisco Cerundolo",
        "score": "6-3, 7-5"
      },
      {
        "year": 2024,
        "tournament": "Hamburg European Open",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Alexander Zverev",
        "score": "6-3, 3-6, 7-6(1)"
      },
      {
        "year": 2024,
        "tournament": "Japan Open",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "atp-500",
        "opponent": "Ugo Humbert",
        "score": "5-7, 7-6(6), 6-3"
      },
      {
        "year": 2026,
        "tournament": "Barcelona Open Banc Sabadell",
        "city": "Barcelona",
        "surface": "clay",
        "tier": "atp-500",
        "opponent": "Andrey Rublev",
        "score": "6-2, 7-6(2)"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Babolat",
        "model": "Pure Aero 98 (2026 line)",
        "weightG": 305,
        "headSizeSqIn": 98,
        "stringPattern": "16x20"
      },
      "strings": {
        "mains": "Babolat RPM Blast",
        "crosses": "Babolat RPM Blast",
        "tensionLbsMains": 50,
        "tensionLbsCrosses": 50
      },
      "shoes": {
        "brand": "Asics",
        "model": "Gel-Resolution / Gel-X (recently spotted in Gel X)"
      },
      "apparelSponsor": "Lacoste",
      "otherSponsors": [
        "Babolat",
        "Asics",
        "Lacoste"
      ],
      "notes": "Reportedly switched from Pure Aero (16x19) family to the Pure Aero 98 (16x20) for more control. Strung weight ~340g per Tennisnerd. Tension reported 22-23 kg (49-51 lbs) RPM Blast in both mains and crosses, adjusted to court conditions. Head-to-toe Lacoste apparel deal signed late 2023; Asics is the current footwear partner (previously seen in Lacoste shoes). Babolat racquet sponsor since junior days."
    },
    ledger: {
      "prizeMoneyUsd": 7553720,
      "matchRecord": {
        "wins": 101,
        "losses": 63
      },
      "surfaceSplits": {
        "hard": {
          "wins": 55,
          "losses": 33,
          "winPct": 0.625
        },
        "clay": {
          "wins": 35,
          "losses": 17,
          "winPct": 0.673
        },
        "grass": {
          "wins": 6,
          "losses": 5,
          "winPct": 0.545
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour player page (f0f1); Wikipedia 'Arthur Fils'; Tennis.com 'Geared Up: Arthur Fils' (Babolat/Lacoste/Asics); Tennisnerd Arthur Fils racquet profile; Tennishead 2026 win-rate article; Perfect Tennis prize-money tracker"
    },

  },
  {
    slug: 'rafael-jodar',
    fullName: 'Rafael Jódar',
    shortName: 'Jódar',
    tour: 'ATP',
    bornIso: '2006-09-17',
    birthplace: 'Spain',
    heightCm: 185,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['baseliner', 'topspin', 'breakthrough'],
    surfaceStrengths: ['clay', 'hard'],
    shotPalette: {
      signatureShots: ['heavy topspin forehand', 'rallying two-handed backhand'],
    },
    career: {
      grandSlams: 0,
      careerHighRanking: 34,
      turnedPro: 2023,
    },
    bio: "A young Spanish star of the post-Nadal generation. Jódar broke through in early 2026 — winning the Grand Prix Hassan II in Marrakech and beating Alex de Minaur in Madrid — and arrived in the top 40 before his 20th birthday. The ceiling is being written in real time.",
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2026,
        "tournament": "Grand Prix Hassan II",
        "city": "Marrakech",
        "surface": "clay",
        "tier": "atp-250",
        "opponent": "Marco Trungelliti",
        "score": "6-3, 6-2"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Head",
        "model": "Speed MP (pro stock, code TGT/PT 339)",
        "headSizeSqIn": 100
      },
      "strings": {
        "mains": "Head Lynx Tour",
        "crosses": "Head Lynx Tour",
        "notes": "Reported as full bed of Head Lynx Tour; specific tension not publicly documented."
      },
      "notes": "Frame is a Head pro stock (TGT/PT 339) painted as the Speed MP. Apparel and footwear sponsor not publicly confirmed in available reporting; on-court he wears Head racquets but his clothing/shoe deal has not been widely reported as of May 2026."
    },
    ledger: {
      "prizeMoneyUsd": 940574,
      "matchRecord": {
        "wins": 17,
        "losses": 7
      },
      "surfaceSplits": {
        "clay": {
          "wins": 12,
          "losses": 1
        }
      },
      "asOfIso": "2026-05-02",
      "source": "ATP Tour player page (j0dz); Wikipedia 'Rafael Jódar'; Tennisnerd pro-stock racquet profile; The Tennis Gazette / Puntodebreak / TennisUpToDate (Apr 2026); tennisstats.com 2026 season record. Career-high No. 34 set 29 Apr 2026."
    },

  },
  {
    slug: 'serena-williams',
    fullName: 'Serena Williams',
    shortName: 'S. Williams',
    tour: 'WTA',
    bornIso: '1981-09-26',
    birthplace: 'Saginaw, Michigan, USA',
    heightCm: 175,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['modern', 'current'],
    styleOfPlay: ['power baseliner', 'serve dominant', 'aggressive returner'],
    surfaceStrengths: ['hard', 'grass', 'clay'],
    shotPalette: {
      serveSpeedKmh: 205,
      forehandSpeedKmh: 145,
      signatureShots: ['flat first serve up the T', 'cross-court forehand', 'flat two-handed backhand winner'],
    },
    career: {
      grandSlams: 23,
      weeksAtNumberOne: 319,
      yearEndNumberOne: 5,
      careerHighRanking: 1,
      turnedPro: 1995,
      retiredYear: 2022,
    },
    bio: 'The most overpowering force the women\'s game has ever seen — and one of its most complete competitors. Twenty-three Slams, a serve that defined the era, and a will to win that turned every comeback into a coronation.',
    signatureMatch: 'Australian Open 2017 Final vs Venus',
    rivalries: ['venus-williams', 'maria-sharapova'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1999,
        "tournament": "Open Gaz de France",
        "city": "Paris",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Amélie Mauresmo",
        "score": "6-2, 3-6, 7-6(4)"
      },
      {
        "year": 1999,
        "tournament": "Evert Cup",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Steffi Graf",
        "score": "6-3, 3-6, 7-5"
      },
      {
        "year": 1999,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Martina Hingis",
        "score": "6-3, 7-6(4)"
      },
      {
        "year": 2000,
        "tournament": "Faber Grand Prix",
        "city": "Hannover",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Denisa Chládková",
        "score": "6-1, 6-1"
      },
      {
        "year": 2000,
        "tournament": "Acura Classic",
        "city": "Los Angeles",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Lindsay Davenport",
        "score": "4-6, 6-4, 7-6(0)"
      },
      {
        "year": 2000,
        "tournament": "Toyota Princess Cup",
        "city": "Tokyo",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Julie Halard-Decugis",
        "score": "6-3, 6-4"
      },
      {
        "year": 2001,
        "tournament": "Indian Wells Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Kim Clijsters",
        "score": "4-6, 6-4, 6-2"
      },
      {
        "year": 2001,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jennifer Capriati",
        "score": "6-1, 6-7(7), 6-3"
      },
      {
        "year": 2002,
        "tournament": "Scottsdale Open",
        "city": "Scottsdale",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Jennifer Capriati",
        "score": "6-2, 6-1"
      },
      {
        "year": 2002,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jennifer Capriati",
        "score": "7-5, 7-6(4)"
      },
      {
        "year": 2002,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Justine Henin",
        "score": "7-6(6), 6-4"
      },
      {
        "year": 2002,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "7-5, 6-3"
      },
      {
        "year": 2002,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "7-6(4), 6-3"
      },
      {
        "year": 2002,
        "tournament": "Acura Classic",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Kim Clijsters",
        "score": "7-5, 6-3"
      },
      {
        "year": 2002,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "6-4, 6-3"
      },
      {
        "year": 2003,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "7-6(4), 3-6, 6-4"
      },
      {
        "year": 2003,
        "tournament": "Open Gaz de France",
        "city": "Paris",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Amélie Mauresmo",
        "score": "6-3, 6-1"
      },
      {
        "year": 2003,
        "tournament": "Sony Ericsson Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jennifer Capriati",
        "score": "4-6, 6-4, 6-1"
      },
      {
        "year": 2003,
        "tournament": "Family Circle Cup",
        "city": "Charleston",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Justine Henin",
        "score": "6-3, 6-3"
      },
      {
        "year": 2003,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "4-6, 6-4, 6-2"
      },
      {
        "year": 2004,
        "tournament": "NASDAQ-100 Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Elena Dementieva",
        "score": "6-1, 6-1"
      },
      {
        "year": 2004,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Svetlana Kuznetsova",
        "score": "4-6, 7-5, 6-3"
      },
      {
        "year": 2005,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Lindsay Davenport",
        "score": "2-6, 6-3, 6-0"
      },
      {
        "year": 2007,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Maria Sharapova",
        "score": "6-1, 6-2"
      },
      {
        "year": 2007,
        "tournament": "Sony Ericsson Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Justine Henin",
        "score": "0-6, 7-5, 6-3"
      },
      {
        "year": 2008,
        "tournament": "Bangalore Open",
        "city": "Bangalore",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Patty Schnyder",
        "score": "7-5, 6-3"
      },
      {
        "year": 2008,
        "tournament": "Family Circle Cup",
        "city": "Charleston",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Vera Zvonareva",
        "score": "6-4, 3-6, 6-3"
      },
      {
        "year": 2008,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Jelena Janković",
        "score": "6-4, 7-5"
      },
      {
        "year": 2008,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Vera Zvonareva",
        "score": "6-4, 6-1"
      },
      {
        "year": 2009,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Dinara Safina",
        "score": "6-0, 6-3"
      },
      {
        "year": 2009,
        "tournament": "Sony Ericsson Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Victoria Azarenka",
        "score": "6-3, 6-1"
      },
      {
        "year": 2009,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "7-6(3), 6-2"
      },
      {
        "year": 2009,
        "tournament": "WTA Tour Championships",
        "city": "Doha",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Venus Williams",
        "score": "6-2, 7-6(4)"
      },
      {
        "year": 2010,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Justine Henin",
        "score": "6-4, 3-6, 6-2"
      },
      {
        "year": 2010,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Vera Zvonareva",
        "score": "6-3, 6-2"
      },
      {
        "year": 2011,
        "tournament": "Bank of the West Classic",
        "city": "Stanford",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Marion Bartoli",
        "score": "7-5, 6-1"
      },
      {
        "year": 2011,
        "tournament": "Rogers Cup",
        "city": "Toronto",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Samantha Stosur",
        "score": "6-4, 6-2"
      },
      {
        "year": 2012,
        "tournament": "Family Circle Cup",
        "city": "Charleston",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Lucie Šafářová",
        "score": "6-0, 6-1"
      },
      {
        "year": 2012,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Victoria Azarenka",
        "score": "6-1, 6-3"
      },
      {
        "year": 2012,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Agnieszka Radwańska",
        "score": "6-1, 5-7, 6-2"
      },
      {
        "year": 2012,
        "tournament": "Olympic Games",
        "city": "London",
        "surface": "grass",
        "tier": "olympics-gold",
        "opponent": "Maria Sharapova",
        "score": "6-0, 6-1"
      },
      {
        "year": 2012,
        "tournament": "Bank of the West Classic",
        "city": "Stanford",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Coco Vandeweghe",
        "score": "7-5, 6-3"
      },
      {
        "year": 2012,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Victoria Azarenka",
        "score": "6-2, 2-6, 7-5"
      },
      {
        "year": 2012,
        "tournament": "WTA Championships",
        "city": "Istanbul",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Maria Sharapova",
        "score": "6-4, 6-3"
      },
      {
        "year": 2013,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Anastasia Pavlyuchenkova",
        "score": "6-2, 6-1"
      },
      {
        "year": 2013,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Maria Sharapova",
        "score": "4-6, 6-3, 6-0"
      },
      {
        "year": 2013,
        "tournament": "Family Circle Cup",
        "city": "Charleston",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Jelena Janković",
        "score": "3-6, 6-0, 6-2"
      },
      {
        "year": 2013,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Maria Sharapova",
        "score": "6-1, 6-4"
      },
      {
        "year": 2013,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Victoria Azarenka",
        "score": "6-1, 6-3"
      },
      {
        "year": 2013,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Maria Sharapova",
        "score": "6-4, 6-4"
      },
      {
        "year": 2013,
        "tournament": "Bank of the West Classic",
        "city": "Stanford",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Agnieszka Radwańska",
        "score": "7-6(7), 6-3"
      },
      {
        "year": 2013,
        "tournament": "Rogers Cup",
        "city": "Toronto",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Sorana Cîrstea",
        "score": "6-2, 6-0"
      },
      {
        "year": 2013,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Victoria Azarenka",
        "score": "7-5, 6-7(6), 6-1"
      },
      {
        "year": 2013,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jelena Janković",
        "score": "6-2, 6-2"
      },
      {
        "year": 2013,
        "tournament": "WTA Championships",
        "city": "Istanbul",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Li Na",
        "score": "2-6, 6-3, 6-0"
      },
      {
        "year": 2014,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Victoria Azarenka",
        "score": "6-4, 7-5"
      },
      {
        "year": 2014,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Li Na",
        "score": "7-5, 6-1"
      },
      {
        "year": 2014,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Maria Sharapova",
        "score": "6-1, 6-4"
      },
      {
        "year": 2014,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Sara Errani",
        "score": "6-3, 6-0"
      },
      {
        "year": 2014,
        "tournament": "Stanford Classic",
        "city": "Stanford",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Angelique Kerber",
        "score": "7-6(1), 6-3"
      },
      {
        "year": 2014,
        "tournament": "Western & Southern Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Ana Ivanovic",
        "score": "6-4, 6-1"
      },
      {
        "year": 2014,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Caroline Wozniacki",
        "score": "6-3, 6-3"
      },
      {
        "year": 2014,
        "tournament": "WTA Finals",
        "city": "Singapore",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Simona Halep",
        "score": "6-3, 6-0"
      },
      {
        "year": 2015,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Maria Sharapova",
        "score": "6-3, 7-6(5)"
      },
      {
        "year": 2015,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Carla Suárez Navarro",
        "score": "6-2, 6-0"
      },
      {
        "year": 2015,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Petra Kvitová",
        "score": "6-2, 6-4"
      },
      {
        "year": 2015,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Lucie Šafářová",
        "score": "6-3, 6-7(2), 6-2"
      },
      {
        "year": 2015,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Garbiñe Muguruza",
        "score": "6-4, 6-4"
      },
      {
        "year": 2015,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Simona Halep",
        "score": "6-3, 7-6(5)"
      },
      {
        "year": 2016,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Madison Keys",
        "score": "7-6(5), 6-3"
      },
      {
        "year": 2016,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Angelique Kerber",
        "score": "7-5, 6-3"
      },
      {
        "year": 2017,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Venus Williams",
        "score": "6-4, 6-4"
      },
      {
        "year": 2020,
        "tournament": "Auckland Open",
        "city": "Auckland",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Jessica Pegula",
        "score": "6-3, 6-4"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Blade SW102 Autograph (Countervail)",
        "headSize": "102 sq in",
        "weight": "320g unstrung",
        "pattern": "18x19",
        "notes": "Final-career frame; her signature oversize Blade. Earlier in career used Wilson Hammer/nCode/K Factor lines."
      },
      "strings": {
        "mains": "Wilson Natural Gut 16",
        "crosses": "Luxilon 4G 16L",
        "tension": "approx. 60-62 lbs",
        "setup": "Hybrid (gut/poly)"
      },
      "shoes": {
        "brand": "Nike",
        "model": "NikeCourt Flare 2 (signature silhouette in late career)"
      },
      "apparelSponsor": {
        "brand": "Nike",
        "details": "Long-term Nike apparel deal (since 2003, after leaving Puma). Wore custom Nike x Serena Williams Design Crew kits at her final tournaments (2022 US Open black-and-rhinestone outfit)."
      },
      "otherSponsors": [
        "Gatorade",
        "Beats by Dre",
        "JPMorgan Chase",
        "Aston Martin",
        "Lincoln (Ford)",
        "IBM",
        "Audemars Piguet",
        "Bumble",
        "DirecTV",
        "Intel",
        "Michelob Ultra",
        "Pepsi",
        "Stuart Weitzman",
        "Berlei (lingerie)",
        "Wheels Up",
        "Tonal",
        "Upwork",
        "Lego",
        "Secret deodorant"
      ],
      "notes": "Serena also founded her own businesses/brands: S by Serena (apparel, 2018), Serena Ventures (VC firm), Wyn Beauty (cosmetics, post-retirement 2024). At 2022 US Open she wore diamond-encrusted Nike outfit and gold-laced NikeCourt Flare 2 shoes."
    },
    ledger: {
      "prizeMoneyUsd": 94816730,
      "matchRecord": {
        "wins": 858,
        "losses": 156,
        "winPct": 0.846
      },
      "surfaceSplits": {
        "hard": {
          "wins": 553,
          "losses": 95
        },
        "clay": {
          "wins": 134,
          "losses": 30
        },
        "grass": {
          "wins": 124,
          "losses": 16
        },
        "carpet": {
          "wins": 47,
          "losses": 15
        }
      },
      "titles": {
        "singles": 73,
        "doubles": 23,
        "grandSlamSingles": 23,
        "grandSlamDoubles": 14,
        "grandSlamMixed": 2,
        "olympicGold": 4
      },
      "weeksAtNo1": 319,
      "yearEndNo1": 5,
      "asOfIso": "2022-09-02",
      "source": "WTA Tour player profile, Wikipedia (Serena Williams career statistics), Tennis Warehouse pro player gear page"
    },

  },
  {
    slug: 'steffi-graf',
    fullName: 'Steffi Graf',
    shortName: 'Graf',
    tour: 'WTA',
    bornIso: '1969-06-14',
    birthplace: 'Mannheim, West Germany',
    heightCm: 175,
    handedness: 'right',
    backhandStyle: 'one-handed',
    era: ['open-classic', 'modern'],
    styleOfPlay: ['aggressive baseliner', 'footwork', 'inside-out forehand'],
    surfaceStrengths: ['grass', 'clay', 'hard', 'carpet'],
    shotPalette: {
      serveSpeedKmh: 175,
      forehandSpeedKmh: 130,
      signatureShots: ['inside-out forehand', 'sliced one-handed backhand', 'kick serve'],
      weakness: 'high-bouncing balls to the backhand',
    },
    career: {
      grandSlams: 22,
      weeksAtNumberOne: 377,
      yearEndNumberOne: 8,
      careerHighRanking: 1,
      turnedPro: 1982,
      retiredYear: 1999,
    },
    bio: 'A backhand mostly sliced and a forehand that punished anything floating — Graf\'s economy and footwork built the only Golden Slam in tennis history (1988). 22 majors and a generation of younger players who never quite caught her.',
    signatureMatch: 'French Open 1988 Final vs Zvereva',
    rivalries: ['monica-seles', 'martina-navratilova'],
    status: 'retired',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 1986,
        "tournament": "Family Circle Cup",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Chris Evert",
        "score": "6-4, 7-5"
      },
      {
        "year": 1986,
        "tournament": "Bausch & Lomb Championships",
        "city": "Amelia Island",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Gabriela Sabatini",
        "score": "6-4, 7-5"
      },
      {
        "year": 1986,
        "tournament": "U.S. Clay Court Championships",
        "city": "Indianapolis",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Gabriela Sabatini",
        "score": "6-1, 6-3"
      },
      {
        "year": 1986,
        "tournament": "German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Martina Navratilova",
        "score": "6-2, 6-3"
      },
      {
        "year": 1986,
        "tournament": "United Jersey Bank Classic",
        "city": "Mahwah",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Molly Van Nostrand",
        "score": "7-5, 6-1"
      },
      {
        "year": 1986,
        "tournament": "Pan Pacific Open",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Manuela Maleeva",
        "score": "6-4, 6-2"
      },
      {
        "year": 1986,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Helena Sukova",
        "score": "4-6, 6-2, 6-4"
      },
      {
        "year": 1986,
        "tournament": "Pretty Polly Classic",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Catarina Lindqvist",
        "score": "6-3, 6-3"
      },
      {
        "year": 1987,
        "tournament": "Virginia Slims of Washington",
        "city": "Washington, D.C.",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Zina Garrison",
        "score": "6-1, 6-2"
      },
      {
        "year": 1987,
        "tournament": "U.S. Women's Hard Court Championships",
        "city": "San Antonio",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Lori McNeil",
        "score": "6-3, 6-2"
      },
      {
        "year": 1987,
        "tournament": "Lipton International Players Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Chris Evert",
        "score": "6-1, 6-2, 6-1"
      },
      {
        "year": 1987,
        "tournament": "Virginia Slims of Florida",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Chris Evert",
        "score": "6-1, 6-3"
      },
      {
        "year": 1987,
        "tournament": "Family Circle Cup",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Manuela Maleeva",
        "score": "6-2, 4-6, 6-3"
      },
      {
        "year": 1987,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Isabel Cueto",
        "score": "6-2, 6-1"
      },
      {
        "year": 1987,
        "tournament": "German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Claudia Kohde-Kilsch",
        "score": "6-2, 6-3"
      },
      {
        "year": 1987,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Martina Navratilova",
        "score": "6-4, 4-6, 8-6"
      },
      {
        "year": 1987,
        "tournament": "Pan Pacific Open",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Helena Sukova",
        "score": "6-2, 6-3"
      },
      {
        "year": 1987,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Hana Mandlikova",
        "score": "6-2, 6-2"
      },
      {
        "year": 1987,
        "tournament": "Virginia Slims Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "wta-finals",
        "opponent": "Gabriela Sabatini",
        "score": "4-6, 6-4, 6-0, 6-4"
      },
      {
        "year": 1988,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Chris Evert",
        "score": "6-1, 7-6"
      },
      {
        "year": 1988,
        "tournament": "U.S. Women's Hard Court Championships",
        "city": "San Antonio",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Sabrina Goles",
        "score": "6-2, 6-1"
      },
      {
        "year": 1988,
        "tournament": "Lipton International Players Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Chris Evert",
        "score": "6-4, 6-4"
      },
      {
        "year": 1988,
        "tournament": "WTA German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Helena Sukova",
        "score": "6-3, 6-2"
      },
      {
        "year": 1988,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Natasha Zvereva",
        "score": "6-0, 6-0"
      },
      {
        "year": 1988,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Martina Navratilova",
        "score": "5-7, 6-2, 6-1"
      },
      {
        "year": 1988,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Katerina Maleeva",
        "score": "6-4, 6-2"
      },
      {
        "year": 1988,
        "tournament": "Player's Challenge",
        "city": "Mahwah",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Pam Shriver",
        "score": "6-2, 6-2"
      },
      {
        "year": 1988,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Gabriela Sabatini",
        "score": "6-3, 3-6, 6-1"
      },
      {
        "year": 1988,
        "tournament": "Olympic Games",
        "city": "Seoul",
        "surface": "hard",
        "tier": "olympics-gold",
        "opponent": "Gabriela Sabatini",
        "score": "6-3, 6-3"
      },
      {
        "year": 1988,
        "tournament": "Brighton International",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Manuela Maleeva",
        "score": "6-2, 6-0"
      },
      {
        "year": 1989,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Helena Sukova",
        "score": "6-4, 6-4"
      },
      {
        "year": 1989,
        "tournament": "Virginia Slims of Washington",
        "city": "Washington, D.C.",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Zina Garrison",
        "score": "6-2, 6-2"
      },
      {
        "year": 1989,
        "tournament": "U.S. Women's Hard Court Championships",
        "city": "San Antonio",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Ann Henricksson",
        "score": "6-1, 6-4"
      },
      {
        "year": 1989,
        "tournament": "Virginia Slims of Florida",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Chris Evert",
        "score": "4-6, 6-2, 6-3"
      },
      {
        "year": 1989,
        "tournament": "Family Circle Cup",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Natasha Zvereva",
        "score": "6-1, 6-1"
      },
      {
        "year": 1989,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Jana Novotna",
        "score": "walkover"
      },
      {
        "year": 1989,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Gabriela Sabatini",
        "score": "6-3, 6-1"
      },
      {
        "year": 1989,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Martina Navratilova",
        "score": "6-2, 6-7, 6-1"
      },
      {
        "year": 1989,
        "tournament": "Great American Bank Classic",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Zina Garrison",
        "score": "6-4, 7-5"
      },
      {
        "year": 1989,
        "tournament": "Player's Challenge",
        "city": "Mahwah",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Andrea Temesvari",
        "score": "6-3, 6-1"
      },
      {
        "year": 1989,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Martina Navratilova",
        "score": "3-6, 7-5, 6-1"
      },
      {
        "year": 1989,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Jana Novotna",
        "score": "6-1, 7-6"
      },
      {
        "year": 1989,
        "tournament": "Midland Bank Championships",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Monica Seles",
        "score": "7-5, 6-4"
      },
      {
        "year": 1989,
        "tournament": "Virginia Slims Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "wta-finals",
        "opponent": "Martina Navratilova",
        "score": "6-4, 7-5, 2-6, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Mary Joe Fernandez",
        "score": "6-3, 6-4"
      },
      {
        "year": 1990,
        "tournament": "Pan Pacific Open",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-1, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Bausch & Lomb Championships",
        "city": "Amelia Island",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 6-4"
      },
      {
        "year": 1990,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Monica Seles",
        "score": "7-6, 6-4"
      },
      {
        "year": 1990,
        "tournament": "Canadian Open",
        "city": "Montreal",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jennifer Capriati",
        "score": "6-1, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Mazda Tennis Classic",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Jennifer Capriati",
        "score": "6-2, 6-1"
      },
      {
        "year": 1990,
        "tournament": "Pathmark Tennis Classic",
        "city": "Mahwah",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Jennifer Capriati",
        "score": "6-3, 5-7, 6-4"
      },
      {
        "year": 1990,
        "tournament": "Sparkassen Cup",
        "city": "Leipzig",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Anke Huber",
        "score": "6-3, 6-3"
      },
      {
        "year": 1990,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Gabriela Sabatini",
        "score": "6-3, 6-2"
      },
      {
        "year": 1990,
        "tournament": "Midland Bank Championships",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Monica Seles",
        "score": "6-3, 7-6"
      },
      {
        "year": 1991,
        "tournament": "U.S. Women's Hard Court Championships",
        "city": "San Antonio",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Monica Seles",
        "score": "6-4, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Monica Seles",
        "score": "5-7, 7-6, 6-3"
      },
      {
        "year": 1991,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 4-6, 7-5"
      },
      {
        "year": 1991,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Gabriela Sabatini",
        "score": "6-4, 3-6, 8-6"
      },
      {
        "year": 1991,
        "tournament": "Sparkassen Cup",
        "city": "Leipzig",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Anke Huber",
        "score": "6-1, 6-3"
      },
      {
        "year": 1991,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Gabriela Sabatini",
        "score": "6-4, 6-1"
      },
      {
        "year": 1991,
        "tournament": "Midland Bank Championships",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Gabriela Sabatini",
        "score": "6-4, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Virginia Slims of Florida",
        "city": "Boca Raton",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-2, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Citizen Cup",
        "city": "Hamburg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Monica Seles",
        "score": "6-3, 6-7, 6-4"
      },
      {
        "year": 1992,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Monica Seles",
        "score": "6-2, 6-1"
      },
      {
        "year": 1992,
        "tournament": "Sparkassen Cup",
        "city": "Leipzig",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Anke Huber",
        "score": "6-1, 6-3"
      },
      {
        "year": 1992,
        "tournament": "European Indoors",
        "city": "Zurich",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Anke Huber",
        "score": "6-1, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Midland Bank Championships",
        "city": "Brighton",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Jana Novotna",
        "score": "6-2, 6-3"
      },
      {
        "year": 1992,
        "tournament": "Virginia Slims of Philadelphia",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Lori McNeil",
        "score": "7-6, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Virginia Slims of Florida",
        "city": "Delray Beach",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-1, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Family Circle Cup",
        "city": "Hilton Head",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-1, 6-3"
      },
      {
        "year": 1993,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Mary Joe Fernandez",
        "score": "7-6, 6-2"
      },
      {
        "year": 1993,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Mary Joe Fernandez",
        "score": "4-6, 6-2, 6-4"
      },
      {
        "year": 1993,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Jana Novotna",
        "score": "7-6, 1-6, 6-4"
      },
      {
        "year": 1993,
        "tournament": "Mazda Tennis Classic",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 6-2"
      },
      {
        "year": 1993,
        "tournament": "Canadian Open",
        "city": "Toronto",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-1, 6-3"
      },
      {
        "year": 1993,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Helena Sukova",
        "score": "6-3, 6-3"
      },
      {
        "year": 1993,
        "tournament": "Sparkassen Cup",
        "city": "Leipzig",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Anke Huber",
        "score": "6-2, 6-1"
      },
      {
        "year": 1993,
        "tournament": "Virginia Slims Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "wta-finals",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-1, 6-4, 3-6, 6-1"
      },
      {
        "year": 1994,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-0, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Pan Pacific Open",
        "city": "Tokyo",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Kimiko Date",
        "score": "6-2, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Evert Cup",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Amanda Coetzer",
        "score": "6-0, 6-4"
      },
      {
        "year": 1994,
        "tournament": "Virginia Slims of Florida",
        "city": "Delray Beach",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Natasha Zvereva",
        "score": "6-3, 6-1"
      },
      {
        "year": 1994,
        "tournament": "Lipton Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Natasha Zvereva",
        "score": "4-6, 6-1, 6-2"
      },
      {
        "year": 1994,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Anke Huber",
        "score": "6-3, 6-7, 6-3"
      },
      {
        "year": 1994,
        "tournament": "Acura Classic",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Mary Pierce",
        "score": "6-3, 7-6"
      },
      {
        "year": 1995,
        "tournament": "Open Gaz de France",
        "city": "Paris",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Mary Pierce",
        "score": "7-6, 6-3"
      },
      {
        "year": 1995,
        "tournament": "Virginia Slims of Florida",
        "city": "Delray Beach",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Anke Huber",
        "score": "6-1, 6-2"
      },
      {
        "year": 1995,
        "tournament": "Lipton Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Kimiko Date",
        "score": "6-1, 6-4"
      },
      {
        "year": 1995,
        "tournament": "Houston Open",
        "city": "Houston",
        "surface": "clay",
        "tier": "wta-250",
        "opponent": "Amanda Coetzer",
        "score": "6-2, 6-1"
      },
      {
        "year": 1995,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "7-5, 4-6, 6-0"
      },
      {
        "year": 1995,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "4-6, 6-1, 7-5"
      },
      {
        "year": 1995,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Monica Seles",
        "score": "7-6, 0-6, 6-3"
      },
      {
        "year": 1995,
        "tournament": "Advanta Championships",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "wta-250",
        "opponent": "Iva Majoli",
        "score": "6-2, 6-3"
      },
      {
        "year": 1995,
        "tournament": "WTA Tour Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "wta-finals",
        "opponent": "Anke Huber",
        "score": "6-1, 2-6, 6-1, 4-6, 6-3"
      },
      {
        "year": 1996,
        "tournament": "Evert Cup",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Conchita Martinez",
        "score": "7-6, 7-6"
      },
      {
        "year": 1996,
        "tournament": "Lipton Championships",
        "city": "Key Biscayne",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Chanda Rubin",
        "score": "6-1, 6-3"
      },
      {
        "year": 1996,
        "tournament": "Lufthansa Cup German Open",
        "city": "Berlin",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Brenda Schultz-McCarthy",
        "score": "6-2, 6-1"
      },
      {
        "year": 1996,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 6-7, 10-8"
      },
      {
        "year": 1996,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Arantxa Sanchez Vicario",
        "score": "6-3, 7-5"
      },
      {
        "year": 1996,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Monica Seles",
        "score": "7-5, 6-4"
      },
      {
        "year": 1996,
        "tournament": "Chase Championships",
        "city": "New York",
        "surface": "carpet",
        "tier": "wta-finals",
        "opponent": "Martina Hingis",
        "score": "6-3, 4-6, 6-0, 4-6, 6-0"
      },
      {
        "year": 1997,
        "tournament": "Internationaux de Strasbourg",
        "city": "Strasbourg",
        "surface": "clay",
        "tier": "wta-250",
        "opponent": "Kimberly Po",
        "score": "6-3, 6-3"
      },
      {
        "year": 1998,
        "tournament": "Pilot Pen International",
        "city": "New Haven",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Jana Novotna",
        "score": "7-5, 6-3"
      },
      {
        "year": 1998,
        "tournament": "Sparkassen Cup",
        "city": "Leipzig",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Jana Novotna",
        "score": "6-4, 5-7, 6-1"
      },
      {
        "year": 1998,
        "tournament": "Advanta Championships",
        "city": "Philadelphia",
        "surface": "carpet",
        "tier": "wta-500",
        "opponent": "Nathalie Tauziat",
        "score": "6-3, 6-2"
      },
      {
        "year": 1999,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Martina Hingis",
        "score": "4-6, 7-5, 6-2"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Wilson Pro Staff 7.5 (final-career frame, late 1990s); earlier Wilson Pro Staff Original 6.0 85 (Mid 1980s through mid 1990s); Dunlop Max 200G in early career (mid-1980s)",
        "headSizeSqIn": 95,
        "stringPattern": "16x18"
      },
      "strings": {
        "mains": "Natural gut",
        "crosses": "Natural gut",
        "tensionLbsMains": 62,
        "tensionLbsCrosses": 62,
        "notes": "Tension figures are approximate; period reports vary between low-60s and high-60s lbs."
      },
      "shoes": {
        "brand": "Adidas",
        "model": "Adidas Stefani / Adidas Barricade-era court shoes (late 1990s)"
      },
      "apparelSponsor": "Adidas",
      "otherSponsors": [
        "Wilson",
        "Adidas",
        "Opel",
        "Rexona"
      ],
      "notes": "Right-handed, one-handed slice backhand with a topspin two-hander used sparingly; her trademark inside-out forehand was one of the most punishing shots in tennis history. Final-tournament racket was the Wilson Pro Staff 7.5 (95 sq in), an evolution of the Pro Staff line she had used since her teens. Adidas was her lifelong apparel/footwear sponsor — she remained one of their flagship athletes through retirement and beyond. Style: aggressive baseliner with elite footwork, slice backhand to set up forehand, attacked the net selectively."
    },
    ledger: {
      "prizeMoneyUsd": 21895277,
      "matchRecord": {
        "wins": 900,
        "losses": 115
      },
      "titlesSingles": 107,
      "grandSlamSinglesTitles": 22,
      "weeksAtNo1": 377,
      "yearEndNo1": [
        1987,
        1988,
        1989,
        1990,
        1993,
        1994,
        1995,
        1996
      ],
      "surfaceSplits": {
        "hard": {
          "winPct": 0.886
        },
        "clay": {
          "winPct": 0.898
        },
        "grass": {
          "winPct": 0.901
        },
        "carpet": {
          "winPct": 0.886
        }
      },
      "asOfIso": "1999-08-13",
      "source": "WTA + Wikipedia (figures reflect career through August 13, 1999 retirement announcement; includes the 1988 Golden Slam — all four majors plus Olympic gold)"
    },

  },
  {
    slug: 'aryna-sabalenka',
    fullName: 'Aryna Sabalenka',
    shortName: 'Sabalenka',
    tour: 'WTA',
    bornIso: '1998-05-05',
    birthplace: 'Minsk, Belarus',
    heightCm: 182,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['power baseliner', 'first-strike', 'big serve'],
    surfaceStrengths: ['hard', 'clay'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 145,
      signatureShots: ['flat first serve', 'crosscourt forehand winner', 'down-the-line backhand'],
      weakness: 'serve consistency under tension',
    },
    career: {
      grandSlams: 4,
      weeksAtNumberOne: 86,
      yearEndNumberOne: 2,
      careerHighRanking: 1,
      turnedPro: 2015,
    },
    bio: 'The hardest hitter on tour and the most consistent winner on it — Sabalenka turned a sometimes-fragile serve and a fearsome forehand into four majors, back-to-back year-end #1 finishes (2024, 2025), and a sustained reign at the top. Power without compromise.',
    rivalries: ['iga-swiatek', 'coco-gauff'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2018,
        "tournament": "Connecticut Open",
        "city": "New Haven",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Carla Suarez Navarro",
        "score": "6-1, 6-4"
      },
      {
        "year": 2018,
        "tournament": "Wuhan Open",
        "city": "Wuhan",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Anett Kontaveit",
        "score": "6-3, 6-3"
      },
      {
        "year": 2019,
        "tournament": "Shenzhen Open",
        "city": "Shenzhen",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Alison Riske",
        "score": "4-6, 7-6(2), 6-3"
      },
      {
        "year": 2019,
        "tournament": "Wuhan Open",
        "city": "Wuhan",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Alison Riske",
        "score": "6-3, 3-6, 6-1"
      },
      {
        "year": 2019,
        "tournament": "WTA Elite Trophy",
        "city": "Zhuhai",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Kiki Bertens",
        "score": "6-4, 6-2"
      },
      {
        "year": 2020,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Petra Kvitova",
        "score": "6-3, 6-3"
      },
      {
        "year": 2020,
        "tournament": "Ostrava Open",
        "city": "Ostrava",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Victoria Azarenka",
        "score": "6-2, 6-2"
      },
      {
        "year": 2020,
        "tournament": "Linz Open",
        "city": "Linz",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Elise Mertens",
        "score": "7-5, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Abu Dhabi Open",
        "city": "Abu Dhabi",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Veronika Kudermetova",
        "score": "6-2, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Ashleigh Barty",
        "score": "6-0, 3-6, 6-4"
      },
      {
        "year": 2023,
        "tournament": "Adelaide International 1",
        "city": "Adelaide",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Linda Noskova",
        "score": "6-3, 7-6(4)"
      },
      {
        "year": 2023,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Elena Rybakina",
        "score": "4-6, 6-3, 6-4"
      },
      {
        "year": 2023,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Iga Swiatek",
        "score": "6-3, 3-6, 6-3"
      },
      {
        "year": 2024,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Zheng Qinwen",
        "score": "6-3, 6-2"
      },
      {
        "year": 2024,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jessica Pegula",
        "score": "6-3, 7-5"
      },
      {
        "year": 2024,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Jessica Pegula",
        "score": "7-5, 7-5"
      },
      {
        "year": 2024,
        "tournament": "Wuhan Open",
        "city": "Wuhan",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Zheng Qinwen",
        "score": "6-3, 5-7, 6-3"
      },
      {
        "year": 2025,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Polina Kudermetova",
        "score": "4-6, 6-3, 6-2"
      },
      {
        "year": 2025,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jessica Pegula",
        "score": "7-5, 6-2"
      },
      {
        "year": 2025,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Coco Gauff",
        "score": "6-3, 7-6(3)"
      },
      {
        "year": 2025,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Amanda Anisimova",
        "score": "6-3, 7-6(3)"
      },
      {
        "year": 2026,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Marta Kostyuk",
        "score": "6-4, 6-3"
      },
      {
        "year": 2026,
        "tournament": "Indian Wells Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Elena Rybakina",
        "score": "3-6, 6-3, 7-6(8-6)"
      },
      {
        "year": 2026,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Wilson",
        "model": "Blade 98 v9 (endorsed: 18x20; also uses Blade 98 v9 'Fighter Edition' 16x19 co-designed with her, and has been testing the Blade V10 98 18x20)",
        "headSizeSqIn": 98,
        "stringPattern": "18x20",
        "strungWeightG": 324,
        "balanceCm": 32.7,
        "swingWeight": 326
      },
      "strings": {
        "mains": "Luxilon Alu Power",
        "crosses": "Luxilon Element (cross; some sources say Luxilon Ace - reports vary by season)",
        "tensionLbsMains": 51,
        "tensionLbsCrosses": 51,
        "notes": "Tension reported in the ~50-52 lbs (~23 kg) range; exact tension fluctuates with conditions"
      },
      "shoes": {
        "brand": "Nike",
        "model": "Nike Zoom NXT (with custom tiger-themed colorways released by Nike in 2025 to mark her No. 1 status)"
      },
      "apparelSponsor": "Nike",
      "otherSponsors": [
        "Wilson (racket/string)",
        "Whoop (fitness wearable)",
        "Nike (head-to-toe apparel/footwear)"
      ],
      "notes": "Known as 'The Tiger of Minsk' (also 'Tiger' / 'Tigress'); has a large tiger tattoo on her left forearm and was born in the Year of the Tiger (1998). Two-handed backhand, right-handed, big-serve baseliner. Nike launched her first custom signature/tiger-themed kit in May 2025 after she reached No. 1. The Wilson Blade 98 v9 'Fighter Edition' (16x19) is a limited-edition frame she co-designed with Wilson and used at the 2025 US Open; her primary endorsement frame remains the Blade 98 18x20. Whoop band is visible on her wrist in matches."
    },
    ledger: {
      "prizeMoneyUsd": 49026518,
      "matchRecord": {
        "wins": 439,
        "losses": 173
      },
      "surfaceSplits": {
        "hard": {
          "notes": "dominant surface; majority of titles and Slam wins on hard"
        },
        "clay": {
          "notes": "2025 Madrid + Stuttgart titles; reached 2023 & 2025 Roland Garros SF/F"
        },
        "grass": {
          "notes": "best result Wimbledon SF (2021, 2023, 2025)"
        }
      },
      "currentRankingWta": 1,
      "season2026Record": {
        "wins": 22,
        "losses": 1
      },
      "asOfIso": "2026-05-02",
      "source": "WTA player page (320760); Wikipedia 'Aryna Sabalenka' & 'Aryna Sabalenka career statistics' & '2026 Aryna Sabalenka tennis season'; Tennis Warehouse / Tennisnerd racquet pages; tennisuptodate.com career prize-money leaders (Apr 2026); Tennis365 sponsor profile; Last Word on Sports (May 2025) Nike custom-gear launch"
    },

  },
  {
    slug: 'elena-rybakina',
    fullName: 'Elena Rybakina',
    shortName: 'Rybakina',
    tour: 'WTA',
    bornIso: '1999-06-17',
    birthplace: 'Moscow, Russia (representing Kazakhstan)',
    heightCm: 184,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['serve dominant', 'flat-hitter', 'baseliner'],
    surfaceStrengths: ['grass', 'hard'],
    shotPalette: {
      serveSpeedKmh: 200,
      forehandSpeedKmh: 140,
      signatureShots: ['first serve out wide', 'flat two-handed backhand', 'inside-out forehand'],
    },
    career: {
      grandSlams: 2,
      careerHighRanking: 2,
      turnedPro: 2017,
    },
    bio: "Six-foot serve, six-foot frame. After Wimbledon 2022 announced her, the 2026 Australian Open confirmed her — a comeback from 0-3 down in the third against Sabalenka for her second major. Few players hold serve more easily.",
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2019,
        "tournament": "Bucharest Open",
        "city": "Bucharest",
        "surface": "clay",
        "tier": "wta-250",
        "opponent": "Patricia Tig",
        "score": "6-2, 6-0"
      },
      {
        "year": 2020,
        "tournament": "Hobart International",
        "city": "Hobart",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Zhang Shuai",
        "score": "7-6(7), 6-3"
      },
      {
        "year": 2022,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Ons Jabeur",
        "score": "3-6, 6-2, 6-2"
      },
      {
        "year": 2023,
        "tournament": "Indian Wells Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Aryna Sabalenka",
        "score": "7-6(11), 6-4"
      },
      {
        "year": 2023,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Anhelina Kalinina",
        "score": "6-4, 1-0 ret."
      },
      {
        "year": 2024,
        "tournament": "Brisbane International",
        "city": "Brisbane",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Aryna Sabalenka",
        "score": "6-0, 6-3"
      },
      {
        "year": 2024,
        "tournament": "Abu Dhabi Open",
        "city": "Abu Dhabi",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Daria Kasatkina",
        "score": "6-1, 6-4"
      },
      {
        "year": 2024,
        "tournament": "Porsche Tennis Grand Prix",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Marta Kostyuk",
        "score": "6-2, 6-2"
      },
      {
        "year": 2025,
        "tournament": "Internationaux de Strasbourg",
        "city": "Strasbourg",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Liudmila Samsonova",
        "score": "6-1, 6-7(2), 6-1"
      },
      {
        "year": 2025,
        "tournament": "Ningbo Open",
        "city": "Ningbo",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Ekaterina Alexandrova",
        "score": "3-6, 6-0, 6-2"
      },
      {
        "year": 2025,
        "tournament": "WTA Finals",
        "city": "Riyadh",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Aryna Sabalenka",
        "score": "6-3, 7-6(0)"
      },
      {
        "year": 2026,
        "tournament": "Australian Open",
        "city": "Melbourne",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Aryna Sabalenka",
        "score": "6-4, 4-6, 6-4"
      },
      {
        "year": 2026,
        "tournament": "Porsche Tennis Grand Prix",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Karolina Muchova",
        "score": "7-5, 6-1"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Yonex",
        "model": "VCORE 100 (paint job over older pro-stock frame; reportedly based on a VCORE SV/2018-era mold)",
        "weightG": 300,
        "headSizeSqIn": 100
      },
      "strings": {
        "mains": "Yonex Poly Tour Fire 1.25 (red)",
        "crosses": "Yonex Poly Tour Fire 1.25 (red)",
        "tensionLbsMains": 56,
        "tensionLbsCrosses": 56
      },
      "shoes": {
        "brand": "Yonex",
        "model": "Power Cushion Eclipsion / Sonicage (Yonex on-court footwear)"
      },
      "apparelSponsor": "Yonex",
      "otherSponsors": [
        "Yonex",
        "Red Bull",
        "Wilson (historical)",
        "Adidas (former, through early 2023)",
        "Nike (former, 2016-2019)"
      ],
      "notes": "Rybakina signed a full kit deal with Yonex ahead of the 2023 French Open, switching from Adidas (apparel/shoes) to Yonex for racquets, clothing, and footwear. Frame is officially marketed as a VCORE 100 (16x19, 100 sq.in., 300g unstrung), though tennis-gear analysts (Tennisnerd) note her actual on-court frame is a pro-stock layup painted as the current VCORE 100 (likely a VCORE SV-era mold from ~2018). Strung weight reported around 320g with swingweight ~324. Strings: full bed of Yonex Poly Tour Fire 1.25 (red) at ~56 lbs. Yonex announced she will move to the 8th-generation VCORE (2026) series. Red Bull continued as a personal sponsor through 2025."
    },
    ledger: {
      "prizeMoneyUsd": 24440000,
      "matchRecord": {
        "wins": 27,
        "losses": 5
      },
      "surfaceSplits": {
        "hard": {
          "wins": 19,
          "losses": 5
        },
        "clay": {
          "wins": 8,
          "losses": 0
        },
        "grass": {
          "wins": 0,
          "losses": 0
        }
      },
      "asOfIso": "2026-05-02",
      "source": "Wikipedia 'Elena Rybakina' and '2026 Elena Rybakina tennis season'; WTA player page (324166); Tennis Warehouse / Tennisnerd racquet profile; tennis365 / tennisuptodate 2026 prize-money leaders (Apr 2026); EssentiallySports career-earnings report (2026)"
    },

  },
  {
    slug: 'coco-gauff',
    fullName: 'Coco Gauff',
    shortName: 'Gauff',
    tour: 'WTA',
    bornIso: '2004-03-13',
    birthplace: 'Atlanta, Georgia, USA',
    heightCm: 175,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['athletic counterpuncher', 'defense-into-offense', 'evolving forehand'],
    surfaceStrengths: ['hard', 'clay'],
    shotPalette: {
      serveSpeedKmh: 185,
      forehandSpeedKmh: 130,
      backhandSpeedKmh: 130,
      signatureShots: ['cross-court two-handed backhand', 'sliding defensive backhand', 'forehand approach'],
      weakness: 'forehand under pressure (the long-running development project)',
    },
    career: {
      grandSlams: 2,
      careerHighRanking: 2,
      turnedPro: 2018,
    },
    bio: 'Athletic, articulate, and the youngest American to win the US Open since Serena — then the 2025 French Open winner over the clay-court field, with the forehand finally arriving when it had to. The defense and footspeed were always elite; now there are two majors to match.',
    rivalries: ['iga-swiatek', 'aryna-sabalenka'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2019,
        "tournament": "Upper Austria Ladies Linz",
        "city": "Linz",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Jelena Ostapenko",
        "score": "6-3, 1-6, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Emilia-Romagna Open",
        "city": "Parma",
        "surface": "clay",
        "tier": "wta-250",
        "opponent": "Wang Qiang",
        "score": "6-1, 6-3"
      },
      {
        "year": 2023,
        "tournament": "ASB Classic",
        "city": "Auckland",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Rebeka Masarova",
        "score": "6-1, 6-1"
      },
      {
        "year": 2023,
        "tournament": "Mubadala Citi DC Open",
        "city": "Washington",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Maria Sakkari",
        "score": "6-2, 6-3"
      },
      {
        "year": 2023,
        "tournament": "Western & Southern Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Karolina Muchova",
        "score": "6-3, 6-4"
      },
      {
        "year": 2023,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Aryna Sabalenka",
        "score": "2-6, 6-3, 6-2"
      },
      {
        "year": 2024,
        "tournament": "ASB Classic",
        "city": "Auckland",
        "surface": "hard",
        "tier": "wta-250",
        "opponent": "Elina Svitolina",
        "score": "6-7(4), 6-3, 6-3"
      },
      {
        "year": 2024,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Karolina Muchova",
        "score": "6-1, 6-3"
      },
      {
        "year": 2024,
        "tournament": "WTA Finals",
        "city": "Riyadh",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Zheng Qinwen",
        "score": "3-6, 6-4, 7-6(2)"
      },
      {
        "year": 2025,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Aryna Sabalenka",
        "score": "6-7(5), 6-2, 6-4"
      },
      {
        "year": 2025,
        "tournament": "Wuhan Open",
        "city": "Wuhan",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jessica Pegula",
        "score": "6-4, 7-5"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Head",
        "model": "Speed Pro (pro-stock PT339.2, painted as Head Boom MP for retail endorsement)",
        "weightG": 310,
        "headSizeSqIn": 100
      },
      "strings": {
        "mains": "Luxilon Alu Power",
        "crosses": "Luxilon Alu Power",
        "tensionLbsMains": 53,
        "tensionLbsCrosses": 53
      },
      "shoes": {
        "brand": "New Balance",
        "model": "Coco CG2"
      },
      "apparelSponsor": "New Balance",
      "otherSponsors": [
        "Head",
        "New Balance",
        "Bose",
        "UPS",
        "Rolex",
        "Barilla",
        "Baker Tilly",
        "Carol's Daughter",
        "Naked Juice"
      ],
      "notes": "Gauff plays a Head pro-stock frame designated PT339.2 (a softer layup of an older Speed MP mold) painted as the Head Boom MP / Speed MP for retail; unstrung spec ~100 sq.in. / 16x19. Strings reported as Luxilon Alu Power at ~53 lbs (24 kg). Apparel/footwear by New Balance since age 14 (signed before turning pro, exiting Nike's junior program early); current signature shoe is the Coco CG2 (released 2024)."
    },
    ledger: {
      "prizeMoneyUsd": 31722551,
      "matchRecord": {
        "wins": 15,
        "losses": 6
      },
      "surfaceSplits": {
        "hard": {
          "wins": 12,
          "losses": 4
        },
        "clay": {
          "wins": 3,
          "losses": 2
        },
        "grass": {
          "wins": 0,
          "losses": 0
        }
      },
      "asOfIso": "2026-05-02",
      "source": "WTA player page (328560); Wikipedia 'Coco Gauff' and 'Coco Gauff career statistics'; WTA career prize money rankings (Apr 20, 2026 - $31,722,551, 11th all-time); Tennis Warehouse / Tennisnerd / Dadracket pro-player gear pages; reporting on 2026 Australian Open, Dubai, Indian Wells, Miami, Stuttgart, Madrid results"
    },

  },
  {
    slug: 'iga-swiatek',
    fullName: 'Iga Świątek',
    shortName: 'Świątek',
    tour: 'WTA',
    bornIso: '2001-05-31',
    birthplace: 'Warsaw, Poland',
    heightCm: 176,
    handedness: 'right',
    backhandStyle: 'two-handed',
    era: ['current'],
    styleOfPlay: ['heavy topspin baseliner', 'clay specialist', 'aggressive returner'],
    surfaceStrengths: ['clay', 'hard'],
    shotPalette: {
      serveSpeedKmh: 175,
      forehandSpeedKmh: 130,
      forehandRpm: 3500,
      signatureShots: ['heavy topspin forehand', 'cross-court two-handed backhand', 'kick second serve'],
    },
    career: {
      grandSlams: 6,
      weeksAtNumberOne: 125,
      yearEndNumberOne: 2,
      careerHighRanking: 1,
      turnedPro: 2016,
    },
    bio: 'A clay-court genius who turned topspin into terror — six majors and a Polish flag flying high atop the WTA in the early 2020s. Świątek\'s heavy ball and unrelenting focus rewrote the women\'s game; she ceded #1 to Sabalenka in 2024 but the body of work is already historic.',
    rivalries: ['aryna-sabalenka', 'coco-gauff'],
    status: 'active',
    dataConfidence: 'verified',
    titles: [
      {
        "year": 2020,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Sofia Kenin",
        "score": "6-4, 6-1"
      },
      {
        "year": 2021,
        "tournament": "Adelaide International",
        "city": "Adelaide",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Belinda Bencic",
        "score": "6-2, 6-2"
      },
      {
        "year": 2021,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Karolina Pliskova",
        "score": "6-0, 6-0"
      },
      {
        "year": 2022,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Anett Kontaveit",
        "score": "6-2, 6-0"
      },
      {
        "year": 2022,
        "tournament": "BNP Paribas Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Maria Sakkari",
        "score": "6-4, 6-1"
      },
      {
        "year": 2022,
        "tournament": "Miami Open",
        "city": "Miami",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Naomi Osaka",
        "score": "6-4, 6-0"
      },
      {
        "year": 2022,
        "tournament": "Stuttgart Open",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Aryna Sabalenka",
        "score": "6-2, 6-2"
      },
      {
        "year": 2022,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Ons Jabeur",
        "score": "6-2, 6-2"
      },
      {
        "year": 2022,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Coco Gauff",
        "score": "6-1, 6-3"
      },
      {
        "year": 2022,
        "tournament": "US Open",
        "city": "New York",
        "surface": "hard",
        "tier": "grand-slam",
        "opponent": "Ons Jabeur",
        "score": "6-2, 7-6(5)"
      },
      {
        "year": 2022,
        "tournament": "San Diego Open",
        "city": "San Diego",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Donna Vekic",
        "score": "6-3, 3-6, 6-0"
      },
      {
        "year": 2023,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Jessica Pegula",
        "score": "6-3, 6-0"
      },
      {
        "year": 2023,
        "tournament": "Stuttgart Open",
        "city": "Stuttgart",
        "surface": "clay",
        "tier": "wta-500",
        "opponent": "Aryna Sabalenka",
        "score": "6-3, 6-4"
      },
      {
        "year": 2023,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Karolina Muchova",
        "score": "6-2, 5-7, 6-4"
      },
      {
        "year": 2023,
        "tournament": "Warsaw Open",
        "city": "Warsaw",
        "surface": "clay",
        "tier": "wta-250",
        "opponent": "Laura Siegemund",
        "score": "6-0, 6-1"
      },
      {
        "year": 2023,
        "tournament": "China Open",
        "city": "Beijing",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Liudmila Samsonova",
        "score": "6-2, 6-2"
      },
      {
        "year": 2023,
        "tournament": "WTA Finals",
        "city": "Cancun",
        "surface": "hard",
        "tier": "wta-finals",
        "opponent": "Jessica Pegula",
        "score": "6-1, 6-0"
      },
      {
        "year": 2024,
        "tournament": "Qatar Open",
        "city": "Doha",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Elena Rybakina",
        "score": "7-6(8), 6-2"
      },
      {
        "year": 2024,
        "tournament": "BNP Paribas Open",
        "city": "Indian Wells",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Maria Sakkari",
        "score": "6-4, 6-0"
      },
      {
        "year": 2024,
        "tournament": "Madrid Open",
        "city": "Madrid",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Aryna Sabalenka",
        "score": "7-5, 4-6, 7-6(7)"
      },
      {
        "year": 2024,
        "tournament": "Italian Open",
        "city": "Rome",
        "surface": "clay",
        "tier": "wta-1000",
        "opponent": "Aryna Sabalenka",
        "score": "6-2, 6-3"
      },
      {
        "year": 2024,
        "tournament": "French Open",
        "city": "Paris",
        "surface": "clay",
        "tier": "grand-slam",
        "opponent": "Jasmine Paolini",
        "score": "6-2, 6-1"
      },
      {
        "year": 2025,
        "tournament": "Wimbledon",
        "city": "London",
        "surface": "grass",
        "tier": "grand-slam",
        "opponent": "Amanda Anisimova",
        "score": "6-0, 6-0"
      },
      {
        "year": 2025,
        "tournament": "Cincinnati Open",
        "city": "Cincinnati",
        "surface": "hard",
        "tier": "wta-1000",
        "opponent": "Jasmine Paolini",
        "score": "7-5, 6-4"
      },
      {
        "year": 2025,
        "tournament": "Korea Open",
        "city": "Seoul",
        "surface": "hard",
        "tier": "wta-500",
        "opponent": "Ekaterina Alexandrova",
        "score": "1-6, 7-6(3), 7-5"
      }
    ],

    equipment: {
      "racket": {
        "brand": "Tecnifibre",
        "model": "Tempo 298 IGA (signature; Tfight-derived layup, formerly TRebound 298 / TFight 305 RS pro-stock)",
        "weightG": 298,
        "headSizeSqIn": 98
      },
      "strings": {
        "mains": "Tecnifibre Razor Code 1.25mm (17g)",
        "crosses": "Tecnifibre Razor Code 1.25mm (17g)",
        "tensionLbsMains": 53,
        "tensionLbsCrosses": 53
      },
      "shoes": {
        "brand": "On",
        "model": "The Roger Pro 2 / On signature tennis prototype"
      },
      "apparelSponsor": "On",
      "otherSponsors": [
        "Tecnifibre",
        "On",
        "Rolex",
        "Visa",
        "Porsche",
        "Lancome",
        "Xiaomi",
        "Red Bull",
        "Lexus (Toyota)",
        "Oshee"
      ],
      "notes": "Plays the famous yellow Tecnifibre Tempo 298 IGA signature frame (16x19, 27in, 4 pts head-light, swingweight ~320, 98 sq.in., 298g unstrung). Strings full-bed Razor Code co-poly at ~52-53 lbs (24 kg). Left Asics for On in March 2023 in a head-to-toe apparel + footwear deal (first tennis player signed by On alongside Ben Shelton); On has been iterating on a custom Swiatek tennis shoe. Non-tennis: Visa global ambassador, Porsche Brand Ambassador (Stuttgart connection), Lancome beauty deal, plus Rolex, Xiaomi, Red Bull, Lexus, Oshee."
    },
    ledger: {
      "prizeMoneyUsd": 44936775,
      "matchRecord": {
        "wins": 13,
        "losses": 7
      },
      "surfaceSplits": {
        "hard": {
          "wins": 9,
          "losses": 6
        },
        "clay": {
          "wins": 4,
          "losses": 1
        },
        "grass": {
          "wins": 0,
          "losses": 0
        }
      },
      "asOfIso": "2026-05-02",
      "source": "WTA player page (326408) and WTA Career Prize Money Leaders (Apr 20, 2026); Wikipedia 'Iga Swiatek' and 'Iga Swiatek career statistics'; tennis365 Madrid Open 2026 prize-money report; Tennis Warehouse / Tecnifibre product pages for Tempo 298 IGA specs; Tennis.com 'Signature Stick' feature; Retail Dive / SportsPro coverage of On signing (Mar 2023)"
    },

  },
];
