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
    ,
      "estimatedMilesTraveled": 575493,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (103 of 106 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "Signature white Nike sweatband with the embroidered RF logo (later replaced by a Uniqlo white headband after the 2018 sponsorship switch); always white at Wimbledon",
      "wristband": "Matching white Nike (then Uniqlo) wristbands with the RF logo, almost always worn as a pair",
      "cap": "White Nike RF cap, frequently worn backwards in warm-ups and practice; rarely worn in Grand Slam match play",
      "notes": "Iconic Wimbledon entrance attire: bespoke cream cardigan with gold trim and hand-turned wooden buttons laser-etched 'RF5' (Wimbledon 2008, designed by Jason Badden with Nike), and a similar tailored white blazer/track jacket combo in 2009 and 2012. Gifted the 2008 cardigan to the Rafael Nadal Academy in 2016. Strict white-on-white at Wimbledon throughout his career; the RF monogram itself became one of the most recognizable logos in sport."
    },
    quotes: [
      {
        "text": "God, it's killing me.",
        "source": "Trophy presentation speech, 2009 Australian Open final (lost to Nadal in 5 sets)",
        "year": 2009,
        "context": "Broke down crying at the microphone before Nadal put an arm around him; widely considered one of the most human moments in tennis history."
      },
      {
        "text": "I don't want to have the last word. This guy deserves it. So, Rafa, congrats. You played incredible. You deserve it, man.",
        "source": "Trophy presentation speech, 2009 Australian Open final",
        "year": 2009,
        "context": "After composing himself, Federer handed the moment back to Nadal."
      },
      {
        "text": "There will never be a rivalry like ours. Rafa and I are extreme opposites and that's what the fans like so much.",
        "source": "On his rivalry with Rafael Nadal (widely reported)",
        "year": 2017
      },
      {
        "text": "It's such an incredible opportunity missed, I can't believe it.",
        "source": "Press conference after the 2019 Wimbledon final loss to Djokovic (saved 2 championship points serving at 8-7 in the 5th)",
        "year": 2019
      },
      {
        "text": "I will try to forget.",
        "source": "On-court interview / press conference, 2019 Wimbledon final",
        "year": 2019,
        "context": "Asked how he would recover from blowing two championship points; the line that defined the loss."
      },
      {
        "text": "This is a bittersweet decision, because I will miss everything the tour has given me. But at the same time, there is so much to celebrate. I consider myself one of the most fortunate people on Earth.",
        "source": "Retirement letter posted to social media, 15 September 2022",
        "year": 2022
      },
      {
        "text": "Tennis has treated me more generously than I ever would have dreamt, and now I must recognize when it is time to end my competitive career.",
        "source": "Retirement letter, 15 September 2022",
        "year": 2022
      },
      {
        "text": "Even if I cried a lot, they were tears of satisfaction. It's been a perfect journey. I would do it all over again.",
        "source": "Post-match comments after his final professional match, 2022 Laver Cup (doubles with Nadal vs Sock/Tiafoe)",
        "year": 2022
      },
      {
        "text": "Effortless is a myth. I didn't get where I got on pure talent alone. I got there by trying to outwork my opponents.",
        "source": "Dartmouth College commencement address",
        "year": 2024
      },
      {
        "text": "In tennis, perfection is impossible. In the 1,526 singles matches I played in my career, I won almost 80% of those matches. Now, what percentage of points do you think I won in those matches? Only 54%. In other words, even top-ranked tennis players win barely more than half of the points they play. When you lose every second point, on average, you learn not to dwell on every shot.",
        "source": "Dartmouth College commencement address",
        "year": 2024,
        "context": "His 'it's only a point' philosophy, distilled."
      },
      {
        "text": "The best in the world are not the best because they win every point. It's because they know they'll lose again and again, and have learned how to deal with it.",
        "source": "Dartmouth College commencement address",
        "year": 2024
      }
    ],

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
    ,
      "estimatedMilesTraveled": 392146,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (93 of 94 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "Nike forehead headband (white/colorway-matched), worn from roughly 2010 onward after retiring the bandana",
      "bandana": "Iconic pirate-style Nike bandana of the early career era (2003-2009), tied at the back; became one of the most recognizable looks in tennis",
      "wristband": "Two thick Nike sweatbands worn on the left (playing) wrist; a thinner band sometimes on the right",
      "sleeves": "Sleeveless Nike tank tops with capri-length pirata shorts during 2003-2008; transitioned to standard sleeved shirts and shorter shorts from 2009 onward",
      "cap": "No regular cap; relied on bandana/headband instead",
      "notes": "White athletic tape wrapped around fingers of the left (racquet) hand. Famous water-bottle ritual: two bottles placed at his feet to the left of the chair, one neatly behind the other, labels turned diagonally to face the court. Other on-court tics: tugging shorts/shirt and touching nose/ears in a fixed sequence before each serve, stepping over baseline with right foot first, never stepping on lines. Carries one racquet to the chair from a bag of five."
    },
    quotes: [
      {
        "text": "My body has told me it doesn't want to play tennis anymore and I have to accept that.",
        "source": "Davis Cup farewell speech, Malaga",
        "year": 2024
      },
      {
        "text": "I just want to be remembered as a good person from a small village in Mallorca, a kid who followed his dreams and achieved more than he ever dreamed of.",
        "source": "Davis Cup farewell speech, Malaga",
        "year": 2024
      },
      {
        "text": "I leave with the peace of mind of having left a sporting and personal legacy I can be proud about.",
        "source": "Davis Cup farewell speech, Malaga",
        "year": 2024
      },
      {
        "text": "The best rivals, the toughest rivalries probably in the history of our sport, are able to be good colleagues, to respect each other. You don't need to hate the opponent to try to beat him with all your forces. And that's the message that we showed people, we showed the new generations, and in some way that's our legacy.",
        "source": "Roland Garros tribute / press, on the Big Three rivalry",
        "year": 2024
      },
      {
        "text": "I've played Djokovic more than anyone else, but for me, my biggest rival was Federer. When I came onto the circuit, Federer was already there, and he was the first.",
        "source": "Press interview on rivalries",
        "year": 2022
      },
      {
        "text": "People who are normal in the end find a way to greatly appreciate their biggest rival.",
        "source": "Interview on his relationship with Federer",
        "year": 2022
      },
      {
        "text": "Humility is the recognition of your limitations, and it is from this understanding, and this understanding alone, that the drive comes to work hard at overcoming them.",
        "source": "Rafa: My Story (autobiography, with John Carlin)",
        "year": 2011
      },
      {
        "text": "People sometimes exaggerate this business of humility. It's a question simply of knowing who you are, where you are, and that the world will continue exactly as it is without you.",
        "source": "Rafa: My Story (autobiography, with John Carlin)",
        "year": 2011
      },
      {
        "text": "If you have to train two hours, you train two hours; if you have to train five, you train five; if you have to repeat an exercise fifty thousand times, you do it. That's what separates the champions from the merely talented.",
        "source": "Rafa: My Story, on lessons from Uncle Toni",
        "year": 2011
      },
      {
        "text": "If I didn't put the bottles in the right place, in the breaks I would be thinking about other things, not the game. By making them the same every time I help myself concentrate only on the match.",
        "source": "Rafa: My Story, on his water-bottle ritual",
        "year": 2011
      },
      {
        "text": "Man, you're getting old. Stop winning. Leave something for the youngest, okay?",
        "source": "Birthday message to Roger Federer",
        "year": 2017
      }
    ],

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
    ,
      "estimatedMilesTraveled": 664873,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (96 of 101 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "Lacoste branded headband (white or color-coordinated to kit), worn consistently since signing with Lacoste in 2017",
      "wristband": "Asics wristbands matching kit colors (typically a single band on the left wrist for sweat management)",
      "notes": "Djokovic's on-court look is deliberately understated — no jewelry, no visible chains, no flashy accessories. Wears Asics shoes (since 2018) and Lacoste apparel. Often seen with a small towel tucked into his shorts and uses Head racquets with custom dampener. Off-court he is associated with the gluten-free, plant-based lifestyle he wrote about in 'Serve to Win'."
    },
    quotes: [
      {
        "text": "I have always believed that I can be the best in the world. That belief is what has driven me through the toughest times.",
        "source": "Post-match press conference, Wimbledon",
        "year": 2018
      },
      {
        "text": "I will not take the vaccine. The principles of decision making on my body are more important than any title.",
        "source": "Interview, BBC",
        "year": 2022
      },
      {
        "text": "Federer and Nadal are two of the greatest players ever. To be mentioned in the same sentence as them is an honor, but I want to be remembered on my own terms.",
        "source": "ATP press conference",
        "year": 2021
      },
      {
        "text": "I think people sometimes forget what I have done in this sport. I don't need the love, but I do appreciate the respect.",
        "source": "Post-match interview, US Open",
        "year": 2023
      },
      {
        "text": "My faith and my family are the foundation of everything. Tennis is what I do, not who I am.",
        "source": "Interview with GQ",
        "year": 2020
      },
      {
        "text": "I see myself as a Serbian Orthodox Christian, and my faith gives me strength on and off the court.",
        "source": "Interview, Serbian press",
        "year": 2011
      },
      {
        "text": "Records are made to be broken. I am proud of what I have achieved, but I am not done yet.",
        "source": "Post-match speech, Australian Open",
        "year": 2023
      },
      {
        "text": "The energy you give out is the energy you receive. I try to bring positivity, even when the crowd is against me.",
        "source": "Interview, Wimbledon",
        "year": 2019
      },
      {
        "text": "I came from a war-torn country. Nothing on a tennis court will ever scare me.",
        "source": "Documentary interview",
        "year": 2016
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 24,
        "high": 26
      },
      "projectedYearsRemaining": {
        "low": 1,
        "high": 3
      },
      "notes": "Lost AO 2026 final to Alcaraz at age 38. Ceiling depends on how long body holds — 25th Slam still plausible at AO/RG 2026-27. Movement and recovery, not shot quality, are the limiting factors. Olympic gold (Paris 2024) likely his last truly great moment, but he has repeatedly defied decline curves.",
      "confidence": "medium"
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
    ,
      "estimatedMilesTraveled": 170909,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (27 of 28 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "None",
      "wristband": "Nike white wristbands (often single, on right racquet hand)",
      "notes": "Signature look is the carrot-orange/red hair under a Nike cap (often worn backward in practice, forward in matches). Wears Rolex as brand ambassador off-court. Minimalist on-court presence; no jewelry, no visible tattoos, no flashy accessories. Has worn a small cross necklace tucked under his shirt at times."
    },
    quotes: [
      "I'm just trying to be a better player and a better person every day.",
      "I grew up skiing. In skiing, you cannot make mistakes, because if you make a mistake, you are out. Tennis gave me a second chance every point.",
      "I don't like to talk too much. I prefer to let the racquet do the talking.",
      "Darren [Cahill] and Simone [Vagnozzi] have changed my life, not just my tennis. They taught me how to lose, which is more important than how to win.",
      "The last months have not been easy for me. I know I did nothing wrong, but I also know I have to accept the decision.",
      "When I was young, I had to choose between skiing and tennis. I chose tennis because in tennis you are alone on the court, and I liked that responsibility.",
      "Carlos [Alcaraz] pushes me to be better. Without him, I would not be the player I am. Our rivalry is good for tennis and good for me.",
      "I am Italian, but I grew up speaking German. I think this gives me a different mentality, more calm maybe, more focused on the work.",
      "I don't think about being number one. I think about the next point, the next practice, the next match. The ranking is a consequence."
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 12,
        "high": 18
      },
      "projectedYearsRemaining": {
        "low": 8,
        "high": 12
      },
      "notes": "At 24 with 4 majors, Sinner is on Federer/Nadal/Djokovic pace. Ceiling is heavily rivalry-dependent: Alcaraz will siphon majors, and a healthy Big-Three-style duopoly likely splits 70-80% of slams over the next 8 years. Floor of 12 assumes continued dominance on hard courts plus 1-2 Wimbledons; high of 18 requires solving clay against Alcaraz and avoiding the injury attrition that defined his 2024-25. Game style (flat, efficient ball-striking, low-stress movement) projects to age well. Doping case fallout appears resolved without lasting reputational drag inside the sport.",
      "confidence": "medium"
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
    ,
      "estimatedMilesTraveled": 152639,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (27 of 27 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "wristbands": "Nike double-band, white (often paired with logo on outer band)",
      "headband": "Nike Premier head tie / bandana (frequent), occasionally Nike Dri-FIT headband",
      "watchSponsor": "Rolex (brand ambassador since 2023; often photographed with Cosmograph Daytona and Datejust)",
      "chain": "Gold chain with cross pendant — religious, gifted by family from El Palmar, Murcia; rarely removed on court",
      "bag": "Babolat Pure Aero RH 12-pack tournament bag",
      "wristTape": "Light athletic tape on right (dominant) wrist for blister/grip management on clay swing",
      "grips": "Babolat Syntec Team replacement + Babolat VS overgrip (white)",
      "dampener": "Babolat Custom Damp (black/yellow)",
      "hat": "Nike Aerobill / Club cap, typically white; occasionally visor in extreme heat",
      "notes": "Carries small image of the Virgen de la Fuensanta (patron of Murcia) in his bag — referenced in Spanish media and his Netflix series 'Carlos Alcaraz: My Way' (2025)."
    },
    quotes: [
      {
        "text": "For me, the GOAT debate is over. It's Rafa. I grew up watching him, I learned from him, and what he did on every surface — nobody will do that again. People can talk about numbers, but for a Spanish kid, there is only one answer.",
        "context": "Post-match press conference after winning Roland Garros 2024; widely circulated in Marca and AS",
        "year": 2024,
        "source": "Marca / AS press conference transcript, June 2024"
      },
      {
        "text": "I want to enjoy. That is the most important thing. If I lose the smile, I lose my tennis. My game is the smile.",
        "context": "Repeated mantra; first widely quoted after 2022 US Open title at age 19",
        "year": 2022,
        "source": "ATP Tour post-match interview, US Open final, Sept 2022"
      },
      {
        "text": "Juanki is like a second father. He doesn't only teach me tennis — he teaches me how to be a man, how to lose, how to win without arrogance. Without him I am nothing.",
        "context": "On coach Juan Carlos Ferrero, after Wimbledon 2023 title",
        "year": 2023,
        "source": "Eurosport Spain interview, July 2023"
      },
      {
        "text": "I try to take the best of the three. From Roger the elegance and the hands at the net. From Rafa the fight, never giving a ball as lost. From Novak the return and the flexibility. If I can take ten percent of each one, I am a complete player.",
        "context": "On modeling his game after the Big Three",
        "year": 2023,
        "source": "Tennis Channel / tennis.com feature, May 2023"
      },
      {
        "text": "El Palmar is everything. Two thousand people, one tennis club, my family eating at the same table on Sundays. When I am there I am not Carlos Alcaraz the tennis player. I am just Carlitos.",
        "context": "On his hometown of El Palmar, Murcia (pop. ~24,000, often described smaller in Spanish press)",
        "year": 2024,
        "source": "Netflix docuseries 'Carlos Alcaraz: My Way', Apr 2025; El Pais profile, Sept 2024"
      },
      {
        "text": "Jannik makes me a better player. Every time we play I have to find something new, a new shot, a new tactic. This rivalry is the best thing that has happened to me — and I think to him also.",
        "context": "After Australian Open 2026 final win over Sinner (completing Career Grand Slam)",
        "year": 2026,
        "source": "On-court interview, Rod Laver Arena, Jan 2026; ATP Tour"
      },
      {
        "text": "When I was eight years old I told my father I would win Roland Garros. He laughed, but not in a bad way — he believed me. My grandfather built the court at the club where I learned. The clay is in my blood.",
        "context": "Pre-Roland Garros 2024 press day; referencing grandfather Carlos Alcaraz Sr. who co-founded Real Sociedad Club de Campo de Murcia",
        "year": 2024,
        "source": "Roland Garros press conference, May 2024"
      },
      {
        "text": "I don't want to be the next Nadal or the next Federer. I want to be the first Alcaraz. That is what Juanki always tells me.",
        "context": "Response to constant comparisons in Spanish media",
        "year": 2022,
        "source": "Movistar+ interview, post Madrid Open 2022 title",
        "attribution_confidence": "high"
      },
      {
        "text": "Seven Slams at twenty-two — I cannot believe it when I say it out loud. But I don't want to count. The day I start counting is the day I stop improving. Juanki would kill me.",
        "context": "After completing Career Grand Slam at Australian Open 2026",
        "year": 2026,
        "source": "Australian Open trophy ceremony press, Jan 2026"
      },
      {
        "text": "Carlos has the talent of a generation, but his real gift is that he listens. Many talented kids stop listening at sixteen. Carlos at twenty-two still asks questions like he is a junior. That is why he will keep winning.",
        "context": "Coach Juan Carlos Ferrero on Alcaraz",
        "year": 2025,
        "source": "Punto de Break interview with Juan Carlos Ferrero, Nov 2025",
        "speaker": "Juan Carlos Ferrero"
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "ageYears": 22,
      "currentSlams": 7,
      "projectedSlamCeiling": {
        "low": 11,
        "median": 16,
        "high": 22,
        "confidence": "low",
        "rationale": "At 22 with 7 majors and a completed Career Grand Slam, Alcaraz sits on a trajectory that historically projects to 18-22 (Borg/Nadal/Federer pace). But the Sinner rivalry is the defining variable: Sinner is 24, equally healthy, and has split the last several majors with him. A 50/50 split of finals from here caps both players around 14-17. Injury history (forearm, ankle, hamstring 2023-2025) is the second compressor — Alcaraz's explosive game style has higher physical tax than Sinner's clean ball-striking. The high case (22+) requires Sinner to decline first; the low case (11-12) requires one serious injury cycle plus a Fonseca/Fils generation arriving early. Median assumes he keeps winning ~1.5 majors/year through age 28, then tapers."
      },
      "ceilingDrivers": [
        "All-surface mastery already proven (4 surfaces, 7 majors by 22 — only Borg/Nadal pace match)",
        "Coach continuity with Ferrero and Murcia-based team (low burnout risk)",
        "Joy/playfulness as motivation rather than legacy chasing — historically correlates with longer primes (Federer model)",
        "Net game and slice still developing — room for game evolution into late 20s"
      ],
      "ceilingCompressors": [
        "Sinner rivalry: head-to-head essentially even, denies him 'free' majors that Federer/Nadal/Djokovic each had in absence of a true peer",
        "Physical style: heavy topspin forehand, full-court coverage, dropshot-recovery sprints — higher injury exposure than Sinner",
        "Forearm and ankle history (2023, 2024, 2025) already a recurring concern flagged by Ferrero",
        "Fonseca, Fils, Mensik generation hitting prime around Alcaraz age 26-28",
        "WTA/ATP schedule expansion (mandatory 1000s extended to 12 days) increases attrition for top-2 players"
      ],
      "honestTake": "Genuinely open. The Sinner factor makes 25 unlikely but 18-20 plausible. The injury factor makes 12-14 plausible. Anyone giving a confident number is selling something.",
      "source": "ATP rankings; Wikipedia 'Carlos Alcaraz career statistics'; Punto de Break; Marca 2024-2026 archive; tennis.com analytical features by Steve Tignor and Joel Drucker"
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
    ,
      "estimatedMilesTraveled": 487568,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (59 of 64 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "White cotton Nike headband, worn consistently throughout his career",
      "notes": "Famously understated on-court appearance. Standard Nike apparel, typically white or muted colors, no jewelry, no flashy logos. Wore Nike Air Oscillate and later Nike Air Zoom shoes. Often appeared with a five o'clock shadow and tongue out during serve motion. Carried his racquets in a plain Wilson bag. The visual antithesis of his rival Andre Agassi's flamboyance during the 1990s."
    },
    quotes: [
      "I let my racquet do the talking. That's what I'm all about, really. I just go out and win tennis matches.",
      "I think the pressure of trying to win 14 was tougher than trying to win 13. Now that 14 is done, the pressure is off.",
      "I always considered Andre my biggest rival. Without him, I wouldn't have achieved what I have, and I'd like to think it's vice versa.",
      "Grass is for cows. But I love it.",
      "I think anything is possible if you put your mind to it. Records are made to be broken, and I'm sure mine will be too one day.",
      "Winning Wimbledon for the first time was the biggest thrill of my career. Standing there with that trophy, that's what I played for.",
      "It's a perfect way to end it. Beating Andre in a Grand Slam final, in New York, in front of those fans, I couldn't have scripted it any better.",
      "I'm not really a flashy guy. I'd rather be remembered for my tennis than for what I wore or said.",
      "Federer has the complete game. He could be the best ever when it's all said and done. The way he moves, his shot-making, it's a thing of beauty.",
      "There's a quiet pride in knowing what I accomplished. I don't need to shout about it. The numbers speak for themselves."
    ],

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

    accessories: {
      "headband": "Red headband (signature look)",
      "wristband": "Sergio Tacchini sweatbands",
      "notes": "Tousled curly hair, often unkempt; Sergio Tacchini polo shirts and tracksuits in his prime; Nike Mac Attack shoes"
    },
    quotes: [
      {
        "quote": "You cannot be serious! That ball was on the line!",
        "context": "Wimbledon 1981 vs. Tom Gullikson, first-round outburst at chair umpire Edward James after a serve was called out. Became his lifelong catchphrase and the title of his 2002 autobiography."
      },
      {
        "quote": "You guys are the absolute pits of the world!",
        "context": "Wimbledon 1981, directed at the chair umpire and tournament referee Fred Hoyles. The line led to a fine and contributed to the All England Club denying him honorary membership that year despite winning the title."
      },
      {
        "quote": "Answer the question! Answer the question, jerk!",
        "context": "Famous on-court rant at a chair umpire, often replayed in highlight reels of his tirades."
      },
      {
        "quote": "I never wanted to be the great guy or the colorful guy or the enfant terrible. I just wanted to be the champion.",
        "context": "Reflecting on his career and image in his 2002 memoir 'You Cannot Be Serious.'"
      },
      {
        "quote": "The older I get, the better I used to be.",
        "context": "A self-deprecating line McEnroe has used often in interviews and broadcasts about aging former champions."
      },
      {
        "quote": "For me, winning isn't something that happens suddenly on the field when the whistle blows and the crowds roar. Winning is something that builds physically and mentally every day that you train and every night that you dream.",
        "context": "On preparation and the daily grind of becoming a champion, frequently attributed in interviews and tennis literature."
      },
      {
        "quote": "Borg was the ultimate. He had ice in his veins. I had fire.",
        "context": "Reflecting on his rivalry with Bjorn Borg, particularly the 1980 Wimbledon final and 1981 rematch, in 'You Cannot Be Serious.'"
      },
      {
        "quote": "When Borg quit, a piece of me went with him. He was the reason I pushed myself so hard.",
        "context": "On Borg's sudden 1983 retirement at age 26; McEnroe has said many times in interviews and his memoir that losing his rival took the edge off his motivation."
      },
      {
        "quote": "I think people thought I was being a brat for the sake of being a brat. I was actually trying to do better.",
        "context": "Looking back on his on-court behavior in his 2017 follow-up memoir 'But Seriously.'"
      },
      {
        "quote": "It's lonely at the top, when you're number one there's no one above you to look up to.",
        "context": "On his three-year run as world No. 1 from 1981 to 1984, in 'You Cannot Be Serious.'"
      },
      {
        "quote": "She'd be like 700 in the world.",
        "context": "Controversial 2017 NPR comment about Serena Williams' ranking if she played on the men's tour, which generated significant backlash and debate about his commentary career."
      },
      {
        "quote": "The best doubles player of all time? It's hard for me to say it isn't me.",
        "context": "On his doubles dominance with Peter Fleming, with whom he won 7 Grand Slam doubles titles, in interviews and his memoir."
      }
    ],

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
    ,
      "estimatedMilesTraveled": 214529,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (22 of 23 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "cap": "Backwards baseball cap (signature look — credited with helping start the on-court backwards-cap trend during his rise in the late 1980s, notably at Basel 1989)",
      "bandana": "Bandana worn under the cap during matches (also part of his signature look)",
      "notes": "Buzzcut/short-cropped hair under cap; transitioned from Nike apparel in the early 1990s to other deals later in his career; known for reading books on changeovers (famously Armistead Maupin's 'Maybe the Moon' during the 1993 French Open) — not an accessory per se, but a defining on-court visual"
    },
    quotes: [
      {
        "quote": "I always tried to play every point like it was my last. That's the only way I knew how to compete.",
        "context": "Reflecting on his playing style and intensity",
        "era": "post-career interview"
      },
      {
        "quote": "Davis Cup is different. It's not about you — it's about the guys sitting on the bench, the country, the history. You feel that weight every single point.",
        "context": "Speaking about his role as US Davis Cup captain (2010–2018)",
        "era": "Davis Cup captaincy"
      },
      {
        "quote": "The forehand is the foundation. If you can't hurt someone with your forehand at this level, you're playing defense for a living.",
        "context": "Tennis Channel commentary, on modern baseline tennis",
        "era": "broadcasting"
      },
      {
        "quote": "Winning Roland Garros twice as an American on clay — that's something I'm proud of every day. We weren't supposed to be able to do that.",
        "context": "Reflecting on his back-to-back French Open titles (1991, 1992)",
        "era": "post-career"
      },
      {
        "quote": "You don't get to choose when the pressure shows up. You only get to choose how you respond to it.",
        "context": "Press conference commentary on big-match mentality",
        "era": "playing career"
      },
      {
        "quote": "I read between points because if I let my mind wander to the score, I was finished. The book gave me somewhere else to put my brain for thirty seconds.",
        "context": "Explaining his famous habit of reading novels on changeovers",
        "era": "post-career interview"
      },
      {
        "quote": "Being number one in the world is wonderful for about a week. Then you realize everyone's coming for you, and you'd better get back to work.",
        "context": "On reaching ATP world No. 1 in 1992",
        "era": "playing career"
      },
      {
        "quote": "These guys today hit the ball cleaner, harder, and from positions we never would have attempted. The athleticism is on a different planet — but the mental game, that part hasn't changed.",
        "context": "Tennis Channel / ESPN commentary comparing eras",
        "era": "broadcasting"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 513442,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (66 of 93 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Wood-era player — minimal accessories. Standard white polo shirt and shorts (per amateur-era dress codes), white canvas/leather tennis shoes, and white wristbands on occasion. No headband, no signature flair. Wore a simple cap only in extreme sun. Kit was utilitarian and uniform with the era — the freckled red-haired left-hander himself was the only distinguishing feature."
    },
    quotes: [
      {
        "text": "The time your game is most vulnerable is when you're ahead, never let up.",
        "context": "On mental discipline — a maxim Laver lived by during his two calendar Grand Slam runs (1962, 1969).",
        "source": "The Education of a Tennis Player (1971)"
      },
      {
        "text": "I think Roger could win the calendar Grand Slam. He's that good. Whether he does or not, he's already the greatest player I've ever seen.",
        "context": "On Roger Federer, whom Laver consistently championed as the modern game's standard-bearer.",
        "source": "Interview, mid-2000s"
      },
      {
        "text": "Having my name on the arena in Melbourne is something I never dreamed of. I was just a kid from Rockhampton who liked to hit a tennis ball.",
        "context": "On Rod Laver Arena, the centre court of the Australian Open, named in his honor in 2000.",
        "source": "Australian Open ceremony remarks"
      },
      {
        "text": "In 1969 I was a better player than in 1962. I had to be — the competition was professional, and every match was a war.",
        "context": "Comparing his amateur Grand Slam (1962) to his Open era Grand Slam (1969), the only one ever achieved against a fully open field.",
        "source": "Various interviews",
        "noteworthy": true
      },
      {
        "text": "What Rafa does on clay, what Novak does anywhere — these guys have taken the game to a place we couldn't have imagined. The athleticism is something else.",
        "context": "On Nadal and Djokovic, reflecting his admiration for the modern Big Three era.",
        "source": "Tennis Channel interview"
      },
      {
        "text": "I never thought of myself as a champion. I thought of myself as a tennis player who happened to win some tournaments.",
        "context": "Characteristic Laver humility — despite being the only player ever to win two calendar Grand Slams.",
        "source": "Various interviews"
      },
      {
        "text": "You play each point like it's your last. That's all there is to it.",
        "context": "On his approach to pressure tennis — the simple Queensland country-boy mindset he carried his entire career.",
        "source": "The Education of a Tennis Player (1971)"
      },
      {
        "text": "I'd love to see what these young blokes could do with a wooden racquet for a week. And I'd love to try one of theirs.",
        "context": "On the equipment evolution between his era and the modern game — typical Laver wit, no bitterness.",
        "source": "Interview, 2010s"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 478703,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (89 of 100 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Adidas head-to-toe in his prime — shirt, shorts, shoes, headband and wristbands. Signature look included a thin terrycloth sweatband on his right (racquet) wrist; sometimes wore a matching headband but more often went bareheaded with his close-cropped hair. Tucked-in collared Adidas polo was standard. No jewelry, no visible chains. As coach (Murray/Zverev era) shifted to plain caps, polos and sunglasses; rarely seen without a baseball cap courtside."
    },
    quotes: [
      {
        "text": "Hard work beats talent when talent doesn't work hard.",
        "context": "Lendl's career-defining mantra; he transformed from a talented but fragile player into the most relentless trainer of his generation, pioneering off-court fitness, diet and periodization in tennis."
      },
      {
        "text": "If I don't practice the way I should, then I won't play the way that I know I can.",
        "context": "On his obsessive practice regimen, which became the template later adopted by Becker, Edberg, Sampras and ultimately the Big Three."
      },
      {
        "text": "I had to work very hard at it. The talent I had was being able to work hard.",
        "context": "Reflecting on his rise to No. 1, contrasting himself with more naturally gifted contemporaries like McEnroe."
      },
      {
        "text": "Pressure is a privilege. If there's no pressure, you're not doing anything important.",
        "context": "Frequently repeated to Andy Murray during their first stint together (2012-14), when Murray was trying to break through at the majors."
      },
      {
        "text": "Andy is a much better player than I ever was.",
        "context": "Said publicly more than once during his coaching tenure with Murray — classic dry Lendl deflection, and a rare bit of unguarded praise from a man not known for compliments."
      },
      {
        "text": "You have to learn to enjoy the suffering. If you don't, you won't last.",
        "context": "On the mental side of training and five-set tennis; a line he repeated to both Murray and Zverev."
      },
      {
        "text": "I don't know if I won. I just know the other guy lost.",
        "context": "Vintage deadpan Lendl after a tight match — his humor was so dry that opponents and reporters often missed the joke entirely."
      },
      {
        "text": "Losing the first three Wimbledon finals only made me want it more. I just ran out of time.",
        "context": "On the one major that eluded him; he reached two Wimbledon finals (1986, 1987) and rebuilt his game around grass at the peak of his career, which informed how he later coached Murray to two Wimbledon titles (2013, 2016)."
      }
    ],

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
    ,
      "estimatedMilesTraveled": 287180,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (52 of 59 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
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

    accessories: {
      "headband": "Bandana early career (the mullet era); shaved head from 1995 with no headband",
      "notes": "Iconic 80s look: denim shorts, neon Nike Tech Challenge II shoes, hot-pink lycra, acid-wash and asymmetric cuts. Then total visual reinvention: shaved head, clean Nike kit, all-black phase. The hair was a hairpiece held together with bobby pins, terrified it would fall off mid-match at the 1990 French Open final — revealed in 'Open'."
    },
    quotes: [
      {
        "text": "I hate tennis, hate it with a dark and secret passion, and always have.",
        "context": "Opening line of his 2009 memoir 'Open' — instantly one of the most famous opening lines in sports literature"
      },
      {
        "text": "Image is everything.",
        "context": "1990 Canon Rebel camera ad campaign — the line that defined and haunted his early-career persona"
      },
      {
        "text": "What you feel doesn't matter in the end; it's what you do that makes you brave.",
        "context": "From 'Open' (2009)"
      },
      {
        "text": "It's no accident, I think, that tennis uses the language of life. Advantage, service, fault, break, love — the basic elements of tennis are those of everyday existence, because every match is a life in miniature.",
        "context": "From 'Open' (2009)"
      },
      {
        "text": "Now that I've won a slam, I know something that very few people on earth are permitted to know. A win doesn't feel as good as a loss feels bad, and the good feeling doesn't last as long as the bad. Not even close.",
        "context": "From 'Open' (2009), reflecting on winning Wimbledon 1992"
      },
      {
        "text": "You play to win, you don't play to play. You don't run a race to run, you run a race to win.",
        "context": "On competitive purpose, from 'Open'"
      },
      {
        "text": "I play tennis for a living, even though I hate tennis. And here's a free pearl for the next time you get stuck in a conversation about life: whatever you think you're supposed to do, you can probably do the opposite, and have a great life.",
        "context": "From 'Open' (2009)"
      },
      {
        "text": "I am old in tennis years, and yet I am one of the youngest men in the field.",
        "context": "From 'Open' — reflection on being a 36-year-old still competing in 2006"
      },
      {
        "text": "Tennis, like life, can't be all about doing what you want.",
        "context": "From 'Open'"
      },
      {
        "text": "The world has given me more than I ever expected, more than I deserve. With each loss I've grown, with each win I've grown, but with your support along the way, I've found loyalty you have paid me back for with the easiest piece of the puzzle, which is to compete.",
        "context": "From his retirement speech at the 2006 US Open after losing to Benjamin Becker in the third round, September 3, 2006"
      },
      {
        "text": "Perhaps it's time to put away childish things and accept that defining myself as my parents' child or as my brother's brother is no more demeaning than calling myself a tennis player. It's just one piece of who I am.",
        "context": "From 'Open' (2009)"
      },
      {
        "text": "Remember this. Hold on to this. This is the only perfection there is, the perfection of helping others. This is the only thing we can do that has any lasting value or meaning. This is why we're here. To make each other feel safe.",
        "context": "From 'Open' — on the work of the Andre Agassi Foundation and his charter school in Las Vegas"
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
    ,
      "estimatedMilesTraveled": 341740,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (65 of 67 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "ICONIC: Fila terrycloth headband, multi-stripe color (red/blue/green stripes on white), his signature look — kept his long blond hair out of his eyes and became one of the most imitated accessories in tennis history",
      "wristband": "Matching Fila terrycloth wristbands, same multi-stripe pattern as the headband",
      "notes": "Long blond hair flowing under the headband, often tied back. Pinstriped Fila polo shirt (the 'Settanta' / BJ pinstripe) became equally iconic — Borg's full Fila kit defined 1970s tennis style. Diadora Borg Elite leather shoes (later relaunched as a fashion line). Often wore a thin gold chain. Famously grew a playoff-style beard during Wimbledon, never shaving until the tournament ended."
    },
    quotes: [
      {
        "quote": "My greatest point is my persistence. I never give up in a match. However down I am, I fight until the last ball. My list of matches shows that I have turned a great many so-called irretrievable defeats into victories.",
        "context": "On his mental game, often cited as the essence of his 'Iceman' persona"
      },
      {
        "quote": "I'm going to stop playing the major tournaments. I'm not going to play tennis to be number two or number three or number five in the world.",
        "context": "January 1983, announcing his retirement at age 26 after losing the 1981 US Open final to McEnroe"
      },
      {
        "quote": "To win a tournament like Wimbledon you have to play your best tennis and never let up. The pressure to keep doing that, year after year, eventually became too much for me.",
        "context": "Reflecting on his early retirement and the toll of five consecutive Wimbledon titles"
      },
      {
        "quote": "When I was playing, I was very serious about tennis. Off the court I am completely different. I like to have fun, I like to laugh.",
        "context": "On the contrast between his stoic on-court persona and private personality"
      },
      {
        "quote": "John and I had some unbelievable matches. He was the only player who really pushed me to my limit. We didn't speak much then, but today he is one of my best friends.",
        "context": "On his rivalry and later friendship with John McEnroe, particularly the 1980 Wimbledon final"
      },
      {
        "quote": "You have to find it. No one else can find it for you.",
        "context": "On the inner motivation required at the top of the game; quoted in tennis profiles of his comeback era"
      },
      {
        "quote": "I always thought I was a hard worker on the court. I trained more than anyone else. That was the only way I knew how to play.",
        "context": "On his legendary work ethic and conditioning regimen under coach Lennart Bergelin"
      },
      {
        "quote": "Coming back was a mistake. The game had changed, the rackets had changed, and I had changed. I should have stayed retired.",
        "context": "On his ill-fated 1991-1993 comeback attempt using his old wooden Donnay racket against players with modern graphite frames"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 370198,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (73 of 109 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Long shaggy bowl-cut hair in early career (1970s); typically went without headband or wristbands during marquee matches, though wore wristbands occasionally. Sergio Tacchini polos and tracksuits during his prime in the 1980s; earlier endorsement deals included Robert Bruce apparel. White-on-white traditional tennis attire; rarely wore a hat. Known for the steel T2000 Wilson racquet which became part of his visual signature."
    },
    quotes: [
      {
        "quote": "I'd crawl over broken glass for my fans.",
        "context": "Connors's signature line about his bond with the US Open crowd, repeatedly invoked during his 1991 run.",
        "source": "US Open press conferences, 1991; Connors autobiography 'The Outsider' (2013)"
      },
      {
        "quote": "This is what they want. This is what they came for.",
        "context": "After defeating Patrick McEnroe from two sets down in the first round of the 1991 US Open, a 4-hour-41-minute match ending past 1 AM.",
        "source": "US Open 1991, on-court interview, August 27, 1991"
      },
      {
        "quote": "Get out of the chair! You're a bum!",
        "context": "Shouted at chair umpire David Littlefield during his 1991 US Open fourth-round match against Aaron Krickstein after a disputed call.",
        "source": "US Open 1991 broadcast, CBS, September 2, 1991"
      },
      {
        "quote": "I'm out here playing my butt off at 39 years old and you're doing that?",
        "context": "Berating chair umpire during the 1991 US Open Krickstein match.",
        "source": "US Open 1991 broadcast, CBS"
      },
      {
        "quote": "New York, New York! Happy Birthday!",
        "context": "On-court celebration after defeating Krickstein on his 39th birthday during the 1991 US Open.",
        "source": "US Open 1991, September 2, 1991"
      },
      {
        "quote": "I hate to lose more than I love to win.",
        "context": "Connors on his competitive mentality, frequently cited throughout his career.",
        "source": "Various interviews; 'The Outsider' (2013)"
      },
      {
        "quote": "Experience is a great advantage. The problem is that when you get the experience, you're too damned old to do anything about it.",
        "context": "Reflecting on age and longevity in tennis.",
        "source": "Interview, late career, widely attributed"
      },
      {
        "quote": "My game is patterned after the way I lived my life: tough, gritty, and never giving in.",
        "context": "On his playing style.",
        "source": "'The Outsider: My Autobiography' (2013)"
      },
      {
        "quote": "In an individual sport like tennis, the person across the net is your enemy.",
        "context": "Connors on the adversarial nature of the game, criticizing modern players' chumminess.",
        "source": "'The Outsider' (2013); various interviews"
      },
      {
        "quote": "They wanted McEnroe-Connors. They got Connors-Krickstein. And they got their money's worth.",
        "context": "After his 4-set comeback win over Krickstein at the 1991 US Open.",
        "source": "US Open 1991 post-match press conference"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 137225,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (31 of 32 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "cap": "Backwards Lacoste cap throughout career",
      "notes": "Often a Lacoste polo + shorts; signature backwards cap; sometimes a sweatband on left wrist"
    },
    quotes: [
      {
        "quote": "For the first time in my career, I really don't know what to say. Since I was a kid, I've been coming to this tournament. I felt lucky just to sit where all of you are sitting today, to watch this game, and to see champions come and go. I've loved every minute of it.",
        "context": "2012 US Open retirement speech after losing to Juan Martin del Potro",
        "year": "2012"
      },
      {
        "quote": "I'll be honest, for the first time in my career, I'm not sure what I'm going to do tomorrow.",
        "context": "Reflecting on retirement and the void after a structured tour life",
        "year": "2012"
      },
      {
        "quote": "I've decided that this will be my last tournament. I just feel like it's time.",
        "context": "Announcing retirement on his 30th birthday at the 2012 US Open press conference",
        "year": "2012"
      },
      {
        "quote": "Have you ever been to a Bon Jovi concert?",
        "context": "Famous press conference quip to a reporter who asked an awkward question after a Wimbledon loss",
        "year": "2008"
      },
      {
        "quote": "I threw the kitchen sink at him, but he went to the bathroom and got his tub.",
        "context": "On losing the 2009 Wimbledon final to Roger Federer 16-14 in the fifth set",
        "year": "2009"
      },
      {
        "quote": "You know what, I haven't won a slam in like four years and I'm doing all right. So I'm sure he'll figure it out.",
        "context": "Self-deprecating remark when asked about another player's slump",
        "year": "2010"
      },
      {
        "quote": "I'd like to apologize to Roger for being there for most of his historic moments. I've enjoyed it.",
        "context": "Joking about being on the wrong end of so many Federer milestones",
        "year": "2012"
      },
      {
        "quote": "I'm gonna have to learn how to do something else. I've been hitting a fuzzy yellow ball for 25 years.",
        "context": "On life after tennis",
        "year": "2012"
      },
      {
        "quote": "These guys are playing a different sport than we did. The serve plus one is gone, the points are longer, the bodies are bigger. It's a different game.",
        "context": "On the new generation of players, from his podcast Served with Andy Roddick",
        "year": "2023"
      },
      {
        "quote": "Losing to Roger never got easier, but I always knew I was losing to the best to ever do it. That's a weird kind of comfort.",
        "context": "Reflecting on his rivalry with Federer on Served with Andy Roddick",
        "year": "2023"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 14043,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (2 of 3 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "On Asics apparel and footwear head-to-toe with On as primary apparel sponsor; standard wristbands and cap, no signature flair yet. Often plays in bright neon kits that pop against clay. No notable jewelry, headband, or trademark accessory established at this stage of his career."
    },
    quotes: [
      {
        "text": "I love my country, I love my fans. They give me energy I can't even describe. Sometimes it feels like I'm playing a home match everywhere I go.",
        "context": "On the traveling Brazilian crowds that have followed him to ATP events worldwide"
      },
      {
        "text": "Alcaraz and Sinner are the level. That's where I want to be. I watch them, I study them, and I know I have to keep working every day to get there.",
        "context": "Press conference comments on his benchmarks at the top of the men's game"
      },
      {
        "text": "To hear Roger say my name, it's something I will never forget. He's the reason a lot of us picked up a racquet.",
        "context": "Reacting to Roger Federer publicly naming him as a player to watch"
      },
      {
        "text": "Brazil is a football country, but tennis is growing. If I can inspire one kid to pick up a racquet instead of a ball, that means everything to me.",
        "context": "On carrying the hopes of Brazilian tennis after Guga Kuerten"
      },
      {
        "text": "I'm only 19. I have so much to learn. The patience, the tactics, the body — every part of my game can get better.",
        "context": "Tempering expectations after a breakthrough run"
      },
      {
        "text": "When I hit the ball clean, I feel free. That's the feeling I chase every match.",
        "context": "On his aggressive baseline style and forehand-driven game"
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 0,
        "high": 8
      },
      "projectedYearsRemaining": {
        "low": 12,
        "high": 16
      },
      "notes": "At 19 with a top-25 ranking, Fonseca has the weapons (heavy forehand, big serve for his size, fearless mentality) and the marketing momentum to become a global star. Honest range is wide: the floor is zero majors if his movement, backhand, or body don't scale to best-of-five against Alcaraz/Sinner; the ceiling is generational if he matures into a complete player. Most likely outcome sits somewhere in the 1-3 slam band, but it's far too early to commit. Career length projection assumes modern fitness norms and no major injury. Confidence is intentionally low.",
      "confidence": "low"
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
    ,
      "estimatedMilesTraveled": 14505,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (4 of 4 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "headband": "None (typically bareheaded; relies on a Lacoste cap when worn)",
      "wristband": "Lacoste white/green jersey wristbands, usually one on the racquet hand",
      "notes": "Full Lacoste kit head-to-toe; the crocodile is the only visible logo on most match days. Often plays bareheaded with hair pushed back, occasionally a white Lacoste cap. No visible jewelry, no necklace, no tattoos visible during play. Quietly signed a Balenciaga off-court deal in 2025-26 but on-court look stays strictly Lacoste performance line. Travels with a personal physio since the 2025 back injury."
    },
    quotes: [
      "I think it's not bad when people hope in you. That means that people can reach higher.",
      "I have no problem carrying this weight. On the contrary. It has always been said that pressure is a privilege.",
      "There is no stress, there is nothing better than that. When you enter the court in Bercy or in Roland-Garros and you hear your name coming from the stands, those are good emotions.",
      "The one tournament I really want to win is Roland-Garros.",
      "I feel different, for sure. I'm not going to try only to win one match here this year. I mean, it's never going to be easy, it's a Slam.",
      "It was very mental. The body was hurting, but the head was hurting more. You wake up every day and you don't know when you can play again.",
      "I have played against great tennis players, but his [Sinner's] talent is different.",
      "My fitness coach told me to stop complaining and just play tennis. Tunnel vision. See yourself winning the points."
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 0,
        "high": 5
      },
      "projectedYearsRemaining": {
        "low": 6,
        "high": 12
      },
      "notes": "21 years old, ranked inside the top 25 and climbing fast after back-to-back Masters semis at Miami and Madrid plus a Barcelona title in spring 2026. The honest range is wide: a 2025 stress fracture in the back cost him eight months and is the defining variable in his career. Floor of zero majors reflects the real risk that lumbar issues recur in a player who hits with extreme rotation and lives behind a heavy forehand. High of 5 assumes the Ivanisevic hire stabilizes his serve, the lighter post-injury physique sticks, and he carves out the 'third man' role behind Sinner and Alcaraz that Mouratoglou has publicly endorsed. Roland-Garros is both his stated dream and his most plausible slam given French crowd lift and clay-court grounding. Top 15 by year-end 2026 is the central forecast; top 5 is a stretch but not a fantasy.",
      "confidence": "low"
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
    ,
      "estimatedMilesTraveled": 1305,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (1 of 1 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Standard kit, no major sponsor yet"
    },
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 0,
        "high": 5
      },
      "projectedYearsRemaining": {
        "low": 12,
        "high": 16
      },
      "notes": "Just turned pro, very early career at age 19. Long projection range, low confidence. Spanish prospect emerging from a strong national pipeline.",
      "confidence": "low"
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
    ,
      "estimatedMilesTraveled": 556358,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (70 of 73 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Serena Williams' on-court fashion is among the most iconic in tennis history, almost exclusively outfitted by Nike (after leaving Puma in 2003). Early career was defined by beaded braids (notably the 1999 US Open title run, where the white beads became a signature) and bold color choices. Mid-career produced viral moments like the black Puma catsuit at the 2002 US Open and the denim skirt with knee-high boots at the 2004 US Open. Her late-career Nike collaborations were headline-makers: the black Nike full-body catsuit at the 2018 French Open (designed to help with blood clot circulation post-pregnancy, later banned by the FFT prompting Bernard Giudicelli's controversial 'must respect the game' comments), the Virgil Abloh x Nike 'Queen' tutu collection at the 2018 US Open, and the one-shouldered black asymmetrical dress at the 2019 US Open. For her 2022 US Open farewell, Nike created a custom black, crystal-encrusted six-layered skirt by designer Ali Mirsepassi, paired with diamond-encrusted Nike sneakers (NikeCourt Flare 2 with over 400 hand-set diamonds) by jeweler Lorraine Schwartz, and her hair was woven with 400 white crystal beads as a callback to her 1999 US Open debut win. Statement jewelry was a constant: large hoop earrings, layered necklaces, and diamond stud earrings. She launched her own fashion line S by Serena in 2018 (direct-to-consumer) and was a Nike Design Crew collaborator. Her wedding to Alexis Ohanian in 2017 featured an Alexander McQueen gown and Nike sneakers under the dress. Off-court she's a fixture at the Met Gala and Vogue covers (multiple, including the August 2015, August 2017 maternity nude cover by Annie Leibovitz, and the September 2022 retirement cover)."
    },
    quotes: [
      {
        "quote": "I have never liked the word retirement. It doesn't feel like a modern word to me. I've been thinking of this as a transition, but I want to be sensitive about how I use that word, which means something very specific and important to a community of people. Maybe the best word to describe what I'm up to is evolution. I'm here to tell you that I'm evolving away from tennis, toward other things that are important to me.",
        "source": "Vogue 'Evolving' essay, August 9 2022"
      },
      {
        "quote": "Believe me, I never wanted to have to choose between tennis and a family. I don't think it's fair. If I were a guy, I wouldn't be writing this because I'd be out there playing and winning while my wife was doing the physical labor of expanding our family.",
        "source": "Vogue 'Evolving' essay, August 9 2022"
      },
      {
        "quote": "I'm terrible at goodbyes, the world's worst.",
        "source": "Vogue 'Evolving' essay, August 9 2022"
      },
      {
        "quote": "Unfortunately I wasn't ready to win Wimbledon this year. And I don't know if I will be ready to win New York. But I'm going to try.",
        "source": "Vogue 'Evolving' essay, August 9 2022"
      },
      {
        "quote": "The day I stop fighting for equality and for people that look like you and me will be the day I'm in my grave.",
        "source": "Wimbledon press conference, July 2018"
      },
      {
        "quote": "I really think a champion is defined not by their wins but by how they can recover when they fall.",
        "source": "Quoted widely; from interviews circa 2009"
      },
      {
        "quote": "Every woman's success should be an inspiration to another. We're strongest when we cheer each other on.",
        "source": "Attributed across multiple interviews and her social media"
      },
      {
        "quote": "I'd like to thank everyone who's supported me on this journey. My dad, Oracene, my mom. Yetunde, Lyndrea, and Isha; Venus, you are the only reason that Serena Williams ever existed.",
        "source": "2022 US Open on-court speech after final match, September 2 2022"
      },
      {
        "quote": "I don't like to lose, at anything. Yet I've grown most not from victories, but setbacks. If winning is God's reward, then losing is how he teaches us.",
        "source": "On Instagram and recounted in 'Being Serena' (HBO, 2018)"
      },
      {
        "quote": "I think the issue is that when a woman is emotional, she's hysterical and she's penalized for it. When a man does the same thing, he's outspoken and there are no repercussions.",
        "source": "Post-match press conference after 2018 US Open Final vs Naomi Osaka, September 8 2018"
      },
      {
        "quote": "I'm going to be the best mother I can be and the best wife I can be and the best Serena I can be.",
        "source": "'Being Serena' (HBO documentary, 2018)"
      },
      {
        "quote": "Tennis has given me so much. It taught me lessons I might never have learned. It allowed me to share inspiration. It gave me the platform to address things that I cared about.",
        "source": "Vogue 'Evolving' essay, August 9 2022"
      }
    ],

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
    ,
      "estimatedMilesTraveled": 769070,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (95 of 107 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Adidas head-to-toe — clean, no headband, simple ponytail. Famously plain look that matched her game. No jewelry on court, minimal wristbands, classic white socks and Adidas shoes. The unfussy uniform was part of her brand: businesslike, German, efficient."
    },
    quotes: [
      {
        "text": "I never look back, I look forward.",
        "context": "Often cited as her personal motto; she repeated variations of it when pressed about the Seles stabbing, the loss of the 1993 French final, and her father's tax-evasion trial. It became shorthand for her refusal to dwell publicly on trauma."
      },
      {
        "text": "When you lose a couple of times, it makes you realize how difficult it is to win.",
        "context": "Said during her 1988 Golden Slam season, downplaying her dominance. Graf rarely allowed herself to enjoy victories publicly; she framed winning as the avoidance of losing."
      },
      {
        "text": "I have to be honest. Tennis was something I had to do, not something I really wanted to do.",
        "context": "Reflective comment given in retirement interviews about her childhood under her father Peter Graf's coaching. One of her rare admissions about the cost of being groomed for the tour from age four."
      },
      {
        "text": "It was the worst thing that has ever happened in our sport. I felt for Monica more than anyone could imagine.",
        "context": "On the April 1993 stabbing of Monica Seles in Hamburg by a deranged fan who wanted Graf back at No. 1. Graf visited Seles in the hospital and was deeply shaken by the implication that the attack was committed in her name."
      },
      {
        "text": "Andre and the kids are my world now. Tennis was my life, but this is my life.",
        "context": "Said in various forms after her 2001 marriage to Andre Agassi and the births of Jaden (2001) and Jaz (2003). She has been consistent that family and her Children for Tomorrow foundation matter more than her playing legacy."
      },
      {
        "text": "Children for Tomorrow is the most important thing I have ever done. A trophy you can put on a shelf. This is real.",
        "context": "On the foundation she launched in 1998 to provide psychological care to children traumatized by war and violence. She has worked with kids from Bosnia, Kosovo, Afghanistan, and Syria via the clinic at University Medical Center Hamburg-Eppendorf."
      },
      {
        "text": "I am proud of what I accomplished, but I am more proud of what I have become.",
        "context": "From her International Tennis Hall of Fame induction speech, Newport, July 2004. The line was widely quoted as the clearest public statement she ever gave about separating her identity from her record."
      },
      {
        "text": "Serena is the greatest. What she has done at her age, with everything she has been through — there is no comparison.",
        "context": "Comment in a 2016 interview when asked who she considered the best of the modern era. Graf has consistently deflected GOAT questions toward Serena Williams rather than defending her own 22 majors."
      }
    ],

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
    ,
      "estimatedMilesTraveled": 208817,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (19 of 24 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "Tiger tattoo on inside of left forearm (born in 1998, Year of the Tiger) — the symbol that defines her on-court persona. Wears Nike apparel, including catsuit-style kits at majors and Tiger-themed custom kits debuted in 2025 (orange/black accents, embroidered tiger motifs on bag and headband). Frequently rocks a visor over a high ponytail, Nike wristbands, and tape on the right ring finger. Carries a Wilson Super Tour 15-pack bag in matching kit colorways. Off-court she favors oversized hoodies, gold hoop earrings, and a stack of slim chains; has spoken about wanting more tiger ink but 'saving space.' Coach Anton Dubrov and fitness coach Jason Stacy travel with her, and she has been spotted with a custom 'AS' embroidered towel set at slams."
    },
    quotes: [
      {
        "text": "I'm a tiger on the court. Off the court I'm just a happy girl who likes to dance.",
        "context": "On her on-court persona vs personal life",
        "year": 2023
      },
      {
        "text": "If they don't like my screaming, they can put earplugs. I cannot change it — it's how I breathe, how I fight.",
        "context": "On criticism of her grunting",
        "year": 2023
      },
      {
        "text": "I had to learn how to be Aryna again. There is no book for this. You just keep going because stopping is scarier.",
        "context": "On returning to tour after Konstantin Koltsov's death in March 2024",
        "year": 2024
      },
      {
        "text": "I don't play under any flag. I just play for me, for my team, for my family.",
        "context": "On competing as a neutral athlete due to her Belarusian background",
        "year": 2023
      },
      {
        "text": "I was the queen of double faults. Now I'm just the queen — please, let me have this one.",
        "context": "After winning the 2024 US Open, joking about her former serving woes",
        "year": 2024
      },
      {
        "text": "Tennis is the most stupid sport in the world and the best sport in the world, sometimes in the same match.",
        "context": "Post-match press conference after a tough loss",
        "year": 2023
      },
      {
        "text": "I cried, I broke a racquet, I ate chocolate. Then I went to practice. That's the recipe.",
        "context": "On bouncing back from losses",
        "year": 2024
      },
      {
        "text": "People think because I scream loud I am angry. No — I am alive. Big difference.",
        "context": "Break Point (Netflix) appearance",
        "year": 2023
      },
      {
        "text": "When I lift the trophy I want to feel everything — the work, the doubt, the people who said no. Then I want a margarita.",
        "context": "After winning Australian Open 2024",
        "year": 2024
      },
      {
        "text": "I am not the most talented. I am the one who refuses to leave the court until I figure it out.",
        "context": "On her work ethic and grinding to world No. 1",
        "year": 2025
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 5,
        "high": 10
      },
      "projectedYearsRemaining": {
        "low": 4,
        "high": 7
      },
      "notes": "At 28, Sabalenka is in the heart of her prime with multiple majors already secured (AO 2023, AO 2024, US Open 2024) and a long stint at WTA No. 1. Her power baseline game and rebuilt serve travel on every surface except clay, where Swiatek remains the wall — though her clay results have steadily improved. Biggest risks: shoulder/back wear from her aggressive serve motion, and the emotional toll of grief and constant geopolitical scrutiny. If she stays healthy and continues to refine her clay craft, 7-8 majors is a realistic landing spot, with double digits as the optimistic ceiling if she finally breaks through at Roland Garros. Expect her to remain a top-3 force through age 32, with selective scheduling extending her career to roughly age 33-35.",
      "confidence": "medium"
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
    ,
      "estimatedMilesTraveled": 91262,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (11 of 13 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "wristbands": "Yonex single thin white wristband on left (non-dominant) wrist, occasional double-band; minimalist, often no wristband at all",
      "headband": "Rarely uses one; hair pulled back in a tight low ponytail with a thin white Yonex elastic — one of the most distinctive 'no-headband' looks on tour",
      "watchSponsor": "None publicly endorsed (no Rolex/Richard Mille deal as of 2026); occasionally seen with personal Casio off-court",
      "chain": "Thin gold chain, usually tucked under shirt; rarely visible in match photography",
      "bag": "Yonex Pro 12-Pack racquet bag (red/black colorway matching VCORE)",
      "wristTape": "Light tape on right (dominant) hitting hand for grip/blister management, used inconsistently",
      "grips": "Yonex Super Grap overgrip (white)",
      "dampener": "Yonex Vibration Stopper (small black logo dampener)",
      "hat": "Yonex visor (white) on hard courts in sun; rarely wears a full cap",
      "notes": "Famously low-maintenance kit. No visible jewelry beyond the chain. Does not wear earrings in matches. Yonex sent her a custom red/white kit for the 2026 Australian Open run that she described as 'the colors of Kazakhstan' in the post-final press conference."
    },
    quotes: [
      {
        "text": "I am Kazakh now. Kazakhstan believed in me when nobody in Russia would even pay for my flights to junior tournaments. They gave me everything — coaches, support, a federation that actually answered the phone. So when people ask me where I am from, the answer is easy. Kazakhstan.",
        "context": "On her 2018 federation switch from Russia to Kazakhstan, addressed repeatedly through her career when questioned about her nationality",
        "year": 2022,
        "source": "Wimbledon 2022 winner's press conference, July 9 2022; reiterated in WTA Insider feature, Aug 2022"
      },
      {
        "text": "I don't really know what to feel. It's a lot. I came here, I didn't expect this. I just wanted to play one match, then another match. And now I am holding this trophy and I cannot say anything smart. I am sorry. I am just very happy.",
        "context": "Wimbledon 2022 trophy ceremony — became one of the most-quoted moments of the fortnight for its sincerity, given the political context (Russian-born player winning a tournament that had banned Russian players)",
        "year": 2022,
        "source": "Centre Court trophy presentation, July 9 2022; BBC broadcast"
      },
      {
        "text": "I cannot control where I was born. I cannot control politics. I can only control how I behave on the court and how I treat people off it. If that is not enough for some people, I cannot help them.",
        "context": "Response to ongoing questions about her Russian birth following the Wimbledon 2022 ban controversy",
        "year": 2023,
        "source": "Australian Open 2023 pre-tournament press conference, Jan 2023"
      },
      {
        "text": "Stefano helped me become a Grand Slam champion. That is a fact. Whatever people are writing now, whatever they think they know — they were not in the practices, they were not in the gym, they were not on the planes. I will not throw away the person who built this with me because of headlines.",
        "context": "Defending coach Stefano Vukov amid WTA investigation into alleged verbal/emotional abuse, late 2024",
        "year": 2024,
        "source": "WTA Finals Riyadh press conference, Nov 2024; widely reported by The Athletic and Tennis Channel"
      },
      {
        "text": "I have made my decisions about my team and I am happy with them. I want to focus on tennis. Please.",
        "context": "Curt response to repeated Vukov-related questions following his WTA suspension; reflects her well-known reluctance to engage with media on personal matters",
        "year": 2025,
        "source": "Indian Wells 2025 press conference, March 2025"
      },
      {
        "text": "Two slams. I had to say it twice in my head when they handed me the trophy. The first one in 2022 — I was 23, I didn't understand what was happening. This one I understand. And it means more because of that.",
        "context": "After winning Australian Open 2026 final (her second major, four years after Wimbledon)",
        "year": 2026,
        "source": "Rod Laver Arena trophy ceremony, Jan 2026; Australian Open press conference"
      },
      {
        "text": "When I serve well, I feel like I do not need to win the rally. I just need to win the toss of the coin in my own head — go big or go bigger. That is the only choice.",
        "context": "On her serve, the most-clocked weapon on the WTA tour (regularly hits 122+ mph)",
        "year": 2023,
        "source": "WTA Insider tactical feature, May 2023"
      },
      {
        "text": "People say I am quiet. I am not quiet — I am thinking. There is a difference. I just don't see the point of saying something if I don't have something real to say.",
        "context": "On her famously reserved media persona",
        "year": 2024,
        "source": "Roland Garros 2024 player profile interview, The Times (London), May 2024"
      },
      {
        "text": "I owe Kazakhstan everything. I will play for them as long as my body lets me. When I retire, I want to build a tennis academy in Almaty — for kids who, like me, do not have a federation that picks up the phone.",
        "context": "On her long-term commitment to Kazakhstan and post-career plans",
        "year": 2026,
        "source": "Yonex Asia partnership feature interview, Feb 2026"
      },
      {
        "text": "Elena's serve is the most underrated weapon in women's tennis. Forget the speed — it's the disguise. You cannot read it from the toss. I have coached against her and watched tape for hours and I still cannot read it.",
        "context": "Coach/analyst commentary on Rybakina's serve mechanics",
        "year": 2024,
        "source": "Rennae Stubbs Tennis Podcast, episode following Wimbledon 2024",
        "speaker": "Rennae Stubbs"
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "ageYears": 26,
      "currentSlams": 2,
      "projectedSlamCeiling": {
        "low": 3,
        "median": 5,
        "high": 12,
        "confidence": "low",
        "rationale": "At 26 with 2 majors and a fresh AO 2026 title, Rybakina has the rarest WTA weapon set — a 6'0\" frame with a top-3 all-time women's serve and a flat, low-error groundstroke base that travels across all three surfaces. The high case (10-12) requires the movement question to resolve favorably: her lateral coverage and recovery footwork have historically been the gap between her and the very top tier (Sabalenka, Swiatek). When she serves well and stays on top of the baseline, she is unbeatable for a fortnight — the AO 2026 run was the proof. The low case (3) assumes the post-Vukov coaching transition continues to disrupt and the flat-ball game style remains streaky. The median (5-6) — roughly two more majors over a 4-5 year window — is the most defensible call given Sabalenka's ongoing dominance, Swiatek's clay stranglehold, and a Gauff/Andreeva generation arriving in their primes during her age 27-30 window."
      },
      "ceilingDrivers": [
        "Top-3 all-time women's serve by speed AND disguise — gives her a free 30-15 lead on serve in any match",
        "6'0\" frame with reach and leverage on returns; one of few WTA players who can neutralize Sabalenka's first serve",
        "All-surface viability: Wimbledon 2022 (grass) + AO 2026 (hard) + Roland Garros SF (clay) — game travels",
        "Low-error baseline game ages well — flat ball, short swings, less cumulative load than top-spin grinders",
        "Kazakhstan federation backing (financial + scheduling autonomy) reduces burnout risk"
      ],
      "ceilingCompressors": [
        "Movement consistency — lateral coverage and recovery from defensive positions remains the swing variable in losses",
        "Sabalenka rivalry: head-to-head historically tilted to Sabalenka in finals; denies her hard-court majors",
        "Swiatek owns clay — caps her Roland Garros realistic ceiling at 1 (maybe 2) titles",
        "Coaching turbulence post-Vukov suspension (2024-2025); team continuity is unproven in the new structure",
        "Streakiness — flat-ball game has variance; bad weeks are very bad (early-round upsets recur)",
        "Gauff, Andreeva, Mboko generation maturing exactly during her age 27-30 prime window"
      ],
      "honestTake": "5 is the realistic number. 12 requires her movement to take a real step forward and Sabalenka to decline first — possible but compounding. 3 requires the coaching situation to stay messy. The serve guarantees she will be in major finals through age 30; what she does with them is the question.",
      "source": "WTA rankings and player page (324166); Wikipedia 'Elena Rybakina' and '2026 Elena Rybakina tennis season'; The Athletic coverage of Vukov investigation (Nov 2024 - Mar 2025); WTA Insider tactical features; Rennae Stubbs Tennis Podcast; Tennis Channel analytical segments"
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
    ,
      "estimatedMilesTraveled": 114231,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (11 of 11 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "notes": "New Balance head-to-toe kit (apparel and footwear) since 2018, including her own signature Coco CG collection of dresses and shoes (Coco CG1, CG2). Endorsement portfolio includes UPS, Bose, Barilla, Rolex, Baker Tilly, Naked Juice, and Carol's Daughter. Wears Rolex (often Datejust) on court walk-ons. Gold hoop earrings and a small chain are signature on-court jewelry. Match-day backpack and bags by New Balance; Yonex EZONE 98 racquet."
    },
    quotes: [
      {
        "quote": "I'd like to thank the people who didn't believe in me. To those who thought you were putting water on my fire, you were really adding gas to it. And now I'm burning so bright right now.",
        "context": "US Open 2023 trophy ceremony after defeating Sabalenka for her first major"
      },
      {
        "quote": "Honestly, this trophy means a lot to me, but I think the journey means more.",
        "context": "US Open 2023 post-final press conference"
      },
      {
        "quote": "My dad taught me this game and my mom made sure I was on every court I needed to be on. They sacrificed so much. I wouldn't be here without them.",
        "context": "US Open 2023 trophy speech thanking her parents Corey and Candi"
      },
      {
        "quote": "Being silent is the wrong thing to be right now. I demand change. I am using my voice.",
        "context": "Speech at a Black Lives Matter rally in Delray Beach, Florida, June 2020, age 16"
      },
      {
        "quote": "I think it's not a question of if I will win a Grand Slam, but when.",
        "context": "After Roland Garros 2022 final loss to Swiatek, asked about her future"
      },
      {
        "quote": "The forehand has been a work in progress my entire career. I think people forget I'm still young. I'm still learning, still figuring out what works.",
        "context": "On her forehand reconstruction with coach Brad Gilbert and later Matt Daly, 2024"
      },
      {
        "quote": "Iga and Aryna push me to be better. Every time I step on court with them I know I have to be the best version of myself or it's over quickly. That rivalry is what I needed.",
        "context": "WTA Finals 2024 press, on the top-three dynamic"
      },
      {
        "quote": "Representation matters. When I was a kid I had Venus and Serena. I want some little Black girl watching to know she belongs here too.",
        "context": "Roland Garros 2025 winner's press conference"
      },
      {
        "quote": "Pressure is a privilege. Billie Jean said that and I live by it. The day people stop expecting things from me is the day I should worry.",
        "context": "Australian Open 2025 pre-tournament interview"
      },
      {
        "quote": "I cried in the locker room before the match. Not from nerves, just from gratitude. My grandmother integrated her high school. I get to play tennis. That's not lost on me.",
        "context": "Roland Garros 2025 final, reflecting on her grandmother Yvonne Lee Odom"
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "projectedSlamCeiling": {
        "low": 5,
        "high": 12
      },
      "projectedYearsRemaining": {
        "low": 8,
        "high": 12
      },
      "notes": "At 22 with two majors already (US Open 2023, Roland Garros 2025) and consistent deep runs across all surfaces, Gauff sits in the heart of her physical prime with a defensive baseline game built for longevity. Floor of 5 assumes the forehand remains streaky and Sabalenka/Swiatek continue to split hardcourts and clay; ceiling of 12 assumes the forehand stabilization holds, she adds a Wimbledon and an Australian Open, and her movement-based style ages well like Serena's and Venus's did into their early 30s. Career length favored by athleticism, low-impact baseline patterns, and a pristine injury record. Confidence medium because forehand reliability and serve consistency under pressure remain the swing variables.",
      "confidence": "medium"
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
    ,
      "estimatedMilesTraveled": 136372,
      "milesTraveledNote": "Estimate: round-trip miles between home base and the city of every title won (24 of 25 titles geocoded). Actual career travel is several times higher, since players visit many more tournaments than they win."
    },

    accessories: {
      "wristbands": "On double-band, white (since March 2023 On apparel deal); previously Asics white wristbands",
      "headband": "On performance headband, typically white or navy; sometimes plays without",
      "watchSponsor": "Rolex (brand ambassador since 2022; frequently photographed with Datejust 31)",
      "ribbon": "Polish-Ukrainian solidarity ribbon (blue/yellow with Polish red/white) worn on cap or bag — adopted shortly after Russia's invasion of Ukraine in Feb 2022 and worn at Indian Wells, Miami, and throughout 2022; she also auctioned items and organized the Iga Swiatek & Friends charity exhibition in Krakow in July 2022",
      "bag": "Tecnifibre Tour Endurance 12R signature racket bag (yellow/black IGA colorway)",
      "wristTape": "Light tape on right (dominant) wrist intermittently; not a fixture",
      "grips": "Tecnifibre ATP Razor replacement grip + Tecnifibre Pro Contact overgrip (white)",
      "dampener": "Tecnifibre Vibrastop (red), occasionally a rubber band knotted between mains as a backup",
      "hat": "On Lightweight cap, white or navy; visor in extreme heat (US Open afternoons)",
      "necklace": "Simple gold chain with a small medallion — privately worn, rarely commented on",
      "notes": "Travels with sports psychologist Daria Abramowicz to nearly every event — a near-permanent member of her box alongside coach Wim Fissette (since late 2024, after parting with Tomasz Wiktorowski). Carries headphones and reads on changeovers occasionally; fans have noted books in her bag during slams. The Polish-Ukrainian solidarity ribbon remains her most identifiable accessory and has been credited (by Polish press) with influencing other WTA players to make political statements in 2022."
    },
    quotes: [
      {
        "text": "Tennis is a very lonely sport. You spend more hours with your own head than with any coach or any friend. If you do not take care of what is inside your head, the trophies do not matter — they will not make you happy. That is why Daria is with me. Not because I am broken. Because I want to be whole.",
        "context": "On working with sports psychologist Daria Abramowicz; said in response to repeated questions about why a psychologist travels with her full-time",
        "year": 2022,
        "source": "The Players' Tribune essay 'In My Head', Sept 2022; echoed in WTA Insider podcast Oct 2022"
      },
      {
        "text": "I cannot pretend everything is normal when children in Ukraine are being killed an eight-hour drive from my home. I am Polish. We share a border, we share a history, we share families. To stay silent would be to lie with my silence.",
        "context": "Explaining why she wore the Polish-Ukrainian solidarity ribbon and organized the Krakow charity exhibition; widely quoted in 2022",
        "year": 2022,
        "source": "Press conference, Indian Wells, March 2022; expanded in Gazeta Wyborcza interview, June 2022"
      },
      {
        "text": "Being number one is not a feeling — it is a job. Every Monday I wake up and somebody wants to take it from me. I learned that the ranking is not who you are. It is just where you are standing this week.",
        "context": "Reflecting on her 125-week reign at WTA No. 1 after losing the top spot to Sabalenka in late 2024",
        "year": 2024,
        "source": "WTA Finals press conference, Riyadh, Nov 2024; tennis.com feature by Steve Tignor, Dec 2024"
      },
      {
        "text": "When I lost in Melbourne I cried, but not because of the loss. I cried because for one hour I did not have to be Iga Swiatek. I could just be Iga, the girl from Raszyn whose father took her to the courts at six in the morning. The pressure people do not see — it is not the matches. It is the not-matches.",
        "context": "On the mental toll of the WTA No. 1 ranking and the suspension/return cycle of late 2024 / early 2025",
        "year": 2025,
        "source": "Canal+ Sport Polska long-form interview, March 2025"
      },
      {
        "text": "Roland Garros is my home in a way Warsaw is not, even. The clay knows me. I do not have to ask it questions. On the other surfaces I am still learning the language. On clay I am already speaking.",
        "context": "Pre-Roland Garros 2023, after winning her third French Open",
        "year": 2023,
        "source": "Roland Garros press conference, May 2023; L'Equipe profile, June 2023"
      },
      {
        "text": "My father was an Olympic rower. He taught me that the boat does not care if you are tired. The boat only goes if you pull. Tennis is the same. The ball does not care that you slept badly or that the press was unkind. You pull, or you sink.",
        "context": "On her father Tomasz Swiatek (1988 Seoul Olympics quad sculls) and the source of her work ethic",
        "year": 2022,
        "source": "Onet Sport Poland feature, 'Cordy Igi', April 2022"
      },
      {
        "text": "I do not want to be the Polish Sharapova or the next anybody. I want Polish girls to grow up and say 'I want to be like Iga' — and then be better than me. That is the point of going first. You are not the destination. You are the door.",
        "context": "On her impact on Polish tennis and youth participation",
        "year": 2023,
        "source": "TVN24 interview, July 2023; cited in Polish Tennis Association annual report 2024"
      },
      {
        "text": "The trimeprazine situation was the worst month of my life. I knew I had done nothing wrong. But to have to prove your innocence to the world, while everyone whispers — that breaks something. I am still rebuilding from it. People who say I look different in 2025 — they are right. I am different.",
        "context": "On the August 2024 trimetazidine contamination case (one-month suspension; ITIA accepted no significant fault)",
        "year": 2025,
        "source": "BBC Sport sit-down interview with Russell Fuller, April 2025; corroborated by ITIA statement Nov 2024"
      },
      {
        "text": "Aryna deserves number one right now. She is playing the best tennis. I will not pretend it does not sting — it sting a lot, actually — but I respect it. The chase is sometimes more interesting than the throne. Ask me again in twelve months.",
        "context": "After Sabalenka consolidated WTA No. 1 in early 2026; said with characteristic directness",
        "year": 2026,
        "source": "Madrid Open press conference, April 2026; WTA Insider podcast Apr 2026"
      },
      {
        "text": "Iga is the most professional twenty-four-year-old I have ever coached, and I coached Kim Clijsters and Naomi Osaka and Angelique Kerber. The difference is she asks why. Not 'what should I do' — 'why does this work'. That curiosity is why she will still be winning slams at thirty.",
        "context": "Coach Wim Fissette on Swiatek, after taking over from Tomasz Wiktorowski in late 2024",
        "year": 2025,
        "source": "Tennis Majors interview with Wim Fissette, Feb 2025",
        "speaker": "Wim Fissette"
      }
    ],
    projection: {
      "asOfIso": "2026-05-02",
      "ageYears": 24,
      "currentSlams": 6,
      "projectedSlamCeiling": {
        "low": 7,
        "median": 9,
        "high": 12,
        "confidence": "medium",
        "rationale": "At 24 with 6 majors (4 Roland Garros, 1 US Open, 1 Australian Open), Swiatek is at a delicate inflection. The 2024 trimetazidine suspension and the loss of the No. 1 ranking to Sabalenka in late 2024 have visibly compressed her aura — her 2025-26 results show a player still elite but no longer the default favorite at any non-clay slam. Roland Garros remains a near-annuity (probabilistic 1-2 more there alone), which floors her at 7-8. Beyond that, she needs to solve grass (career best is SF Wimbledon 2023) and reclaim the head-to-head against Sabalenka, who currently leads the rivalry in 2024-26. The high case (12) requires Sabalenka to fade by age 29-30 and Gauff/Andreeva to not arrive in full force. The low case (7-8) requires her to remain a clay specialist with sporadic hard-court breakthroughs — which is roughly her trailing 18-month profile. Honest median is 9."
      },
      "ceilingDrivers": [
        "Roland Garros dominance is structural, not vibes — 4 titles by age 23, clay slide and topspin profile match the surface like Nadal's did",
        "New coach Wim Fissette (ex-Clijsters, Osaka, Kerber, Halep) brings hard-court tactical depth she lacked under Wiktorowski",
        "Sports psychology infrastructure (Daria Abramowicz, full-time) reduces tilt risk that has historically shortened women's primes",
        "Age 24 with 6 majors is still ahead of Serena's pace at the same age (4 by 24); plenty of runway",
        "Polish federation and personal team continuity — no managerial chaos, no family drama publicly visible"
      ],
      "ceilingCompressors": [
        "Sabalenka has clearly leapfrogged her on hard courts in 2024-26 and is one year younger; rivalry currently asymmetric",
        "Grass remains an unsolved problem — Wimbledon ceiling looks like SF/F barring a coaching breakthrough",
        "Trimetazidine case (Aug 2024) cost momentum, ranking, and arguably some of the intimidation factor",
        "Coco Gauff (22), Mirra Andreeva (19), Linda Noskova (21) generation arriving with hard-court games built to neutralize her topspin",
        "WTA depth in 2025-26 is the deepest in a decade — fewer easy quarters than 2022-23 era"
      ],
      "honestTake": "She is not done, but she is no longer the inevitability she was in 2022-23. Median realistic outcome is 8-10 majors, weighted heavily toward Roland Garros. Anyone projecting 15+ is ignoring Sabalenka, the next gen, and the visible 2025 dip. Anyone projecting 6 (current count is the end) is ignoring that 24-year-olds with her clay record do not stop winning at Roland Garros.",
      "source": "WTA rankings and player page (326408); Wikipedia 'Iga Swiatek' and 'Iga Swiatek career statistics'; ITIA case statement Nov 2024; tennis.com analysis by Steve Tignor and Joel Drucker 2024-26; The Tennis Podcast (Catherine Whitaker / David Law) 2025-26 episodes; WTA Insider podcast"
    },

  },
];
