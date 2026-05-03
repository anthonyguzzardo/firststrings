-- ============================================================================
-- dbFirstStrings_Tables.sql
--
-- The complete First Strings schema. This file reads as a self-contained
-- declarative description of the desired state. To evolve the schema,
-- rewrite the relevant CREATE TABLE here AND add a forward-only migration
-- to db/sql/migrations/NNN_description.sql.
--
-- Conventions (from CLAUDE.md):
--   * te_  enum / static reference, fixed IDs, no footer
--   * td_  dictionary / slow-changing reference, has footer
--   * tb_  mutable, has footer
--   * tm_  matrix / many-to-many bridge, has footer
--   * th_  history / append-only time series, has footer
--   * Surrogate keys: <table_name>_id (never bare id)
--   * Logical FKs only (no physical FK constraints)
--   * No proper nouns in column names
--   * Footer columns: dttm_created_utc, created_by, dttm_modified_utc, modified_by
--
-- ============================================================================

SET search_path TO first_strings, public;

-- @region enums
-- ----------------------------------------------------------------------------
-- te_tour
-- PURPOSE: Top-level professional tour identifiers.
-- USE CASE: Categorize players, tournaments, rankings, matches by tour.
-- MUTABILITY: Static — fixed IDs.
-- REFERENCED BY: td_player.tour_id, td_tournament.tour_id, th_player_ranking.tour_id
-- FOOTER: none
-- ----------------------------------------------------------------------------
CREATE TABLE te_tour (
  tour_id     INT  PRIMARY KEY,
  code        TEXT NOT NULL UNIQUE,
  label       TEXT NOT NULL
);

INSERT INTO te_tour (tour_id, code, label) VALUES
  (1, 'ATP',        'ATP'),
  (2, 'WTA',        'WTA'),
  (3, 'ITF',        'ITF'),
  (4, 'DAVIS',      'Davis Cup'),
  (5, 'BJK',        'Billie Jean King Cup'),
  (6, 'EXHIBITION', 'Exhibition');


-- ----------------------------------------------------------------------------
-- te_surface
-- PURPOSE: Court surface types.
-- USE CASE: Surface-split stats, surface-specific Elo, comparisons.
-- MUTABILITY: Static.
-- REFERENCED BY: tb_match.surface_id, td_tournament.default_surface_id, td_venue.surface_id, many aggregates
-- FOOTER: none
-- ----------------------------------------------------------------------------
CREATE TABLE te_surface (
  surface_id  INT  PRIMARY KEY,
  code        TEXT NOT NULL UNIQUE,
  label       TEXT NOT NULL
);

INSERT INTO te_surface (surface_id, code, label) VALUES
  (1,  'HARD',         'Hard'),
  (2,  'CLAY',         'Clay'),
  (3,  'GRASS',        'Grass'),
  (4,  'CARPET',       'Carpet'),
  (5,  'INDOOR_HARD',  'Indoor Hard'),
  (6,  'INDOOR_CLAY',  'Indoor Clay'),
  (7,  'ACRYLIC',      'Acrylic'),
  (99, 'UNKNOWN',      'Unknown');


-- ----------------------------------------------------------------------------
-- te_handedness
-- PURPOSE: Player dominant hand.
-- ----------------------------------------------------------------------------
CREATE TABLE te_handedness (
  handedness_id  INT  PRIMARY KEY,
  code           TEXT NOT NULL UNIQUE,
  label          TEXT NOT NULL
);

INSERT INTO te_handedness (handedness_id, code, label) VALUES
  (1,  'RIGHT',        'Right-handed'),
  (2,  'LEFT',         'Left-handed'),
  (3,  'AMBIDEXTROUS', 'Ambidextrous'),
  (99, 'UNKNOWN',      'Unknown');


-- ----------------------------------------------------------------------------
-- te_backhand_style
-- ----------------------------------------------------------------------------
CREATE TABLE te_backhand_style (
  backhand_style_id INT  PRIMARY KEY,
  code              TEXT NOT NULL UNIQUE,
  label             TEXT NOT NULL
);

INSERT INTO te_backhand_style (backhand_style_id, code, label) VALUES
  (1,  'ONE_HANDED', 'One-handed'),
  (2,  'TWO_HANDED', 'Two-handed'),
  (99, 'UNKNOWN',    'Unknown');


-- ----------------------------------------------------------------------------
-- te_play_style
-- PURPOSE: High-level play archetype. Inferred from shot distribution and
--          court position by libDerivedStyle.ts.
-- ----------------------------------------------------------------------------
CREATE TABLE te_play_style (
  play_style_id INT  PRIMARY KEY,
  code          TEXT NOT NULL UNIQUE,
  label         TEXT NOT NULL
);

INSERT INTO te_play_style (play_style_id, code, label) VALUES
  (1,  'BASELINER',            'Baseliner'),
  (2,  'SERVE_VOLLEY',         'Serve-and-volleyer'),
  (3,  'ALL_COURT',            'All-court'),
  (4,  'COUNTER_PUNCHER',      'Counter-puncher'),
  (5,  'AGGRESSIVE_BASELINER', 'Aggressive baseliner'),
  (6,  'DEFENSIVE_BASELINER',  'Defensive baseliner'),
  (7,  'BIG_SERVER',           'Big server'),
  (99, 'UNKNOWN',              'Unknown');


-- ----------------------------------------------------------------------------
-- te_era
-- PURPOSE: Coarse era buckets for cross-generational normalization.
-- ----------------------------------------------------------------------------
CREATE TABLE te_era (
  era_id INT  PRIMARY KEY,
  code   TEXT NOT NULL UNIQUE,
  label  TEXT NOT NULL,
  start_year SMALLINT NOT NULL,
  end_year   SMALLINT  -- null = ongoing
);

INSERT INTO te_era (era_id, code, label, start_year, end_year) VALUES
  (1, 'PRE_OPEN',       'Pre-Open Era',           1877, 1967),
  (2, 'EARLY_OPEN',     'Early Open Era',         1968, 1989),
  (3, 'GOLDEN',         'Golden Era',             1990, 2002),
  (4, 'BIG_THREE',      'Big Three Era',          2003, 2022),
  (5, 'POST_BIG_THREE', 'Post-Big-Three Era',     2023, NULL);


-- ----------------------------------------------------------------------------
-- te_player_status
-- ----------------------------------------------------------------------------
CREATE TABLE te_player_status (
  status_id INT  PRIMARY KEY,
  code      TEXT NOT NULL UNIQUE,
  label     TEXT NOT NULL
);

INSERT INTO te_player_status (status_id, code, label) VALUES
  (1, 'ACTIVE',   'Active'),
  (2, 'RETIRED',  'Retired'),
  (3, 'DECEASED', 'Deceased');


-- ----------------------------------------------------------------------------
-- te_match_round
-- PURPOSE: Round of a tournament a match was played in.
-- ----------------------------------------------------------------------------
CREATE TABLE te_match_round (
  round_id INT  PRIMARY KEY,
  code     TEXT NOT NULL UNIQUE,
  label    TEXT NOT NULL,
  sort_key SMALLINT NOT NULL  -- ascending: earlier round = lower
);

INSERT INTO te_match_round (round_id, code, label, sort_key) VALUES
  (1,  'Q1',       'Qualifying R1',  1),
  (2,  'Q2',       'Qualifying R2',  2),
  (3,  'Q3',       'Qualifying R3',  3),
  (4,  'R128',     'Round of 128',   10),
  (5,  'R64',      'Round of 64',    20),
  (6,  'R32',      'Round of 32',    30),
  (7,  'R16',      'Round of 16',    40),
  (8,  'QF',       'Quarterfinals',  50),
  (9,  'SF',       'Semifinals',     60),
  (10, 'BR',       'Bronze Medal',   65),
  (11, 'F',        'Final',          70),
  (12, 'RR',       'Round-Robin',    5),
  (99, 'UNKNOWN',  'Unknown',        99);


-- ----------------------------------------------------------------------------
-- te_tournament_level
-- ----------------------------------------------------------------------------
CREATE TABLE te_tournament_level (
  level_id INT  PRIMARY KEY,
  code     TEXT NOT NULL UNIQUE,
  label    TEXT NOT NULL,
  prestige SMALLINT NOT NULL  -- higher = bigger
);

INSERT INTO te_tournament_level (level_id, code, label, prestige) VALUES
  (1,  'GRAND_SLAM',     'Grand Slam',         100),
  (2,  'ATP_FINALS',     'ATP Finals',          90),
  (3,  'WTA_FINALS',     'WTA Finals',          90),
  (4,  'OLYMPICS',       'Olympics',            85),
  (5,  'MASTERS_1000',   'ATP Masters 1000',    80),
  (6,  'WTA_1000',       'WTA 1000',            80),
  (7,  'ATP_500',        'ATP 500',             60),
  (8,  'WTA_500',        'WTA 500',             60),
  (9,  'ATP_250',        'ATP 250',             40),
  (10, 'WTA_250',        'WTA 250',             40),
  (11, 'NEXT_GEN',       'Next Gen ATP Finals', 50),
  (12, 'DAVIS_CUP',      'Davis Cup',           70),
  (13, 'BJK_CUP',        'Billie Jean King Cup', 70),
  (14, 'CHALLENGER',     'Challenger',          25),
  (15, 'ITF',            'ITF Circuit',         15),
  (16, 'EXHIBITION',     'Exhibition',           5),
  (17, 'PRE_OPEN_MAJOR', 'Pre-Open-Era Major',  95);


-- ----------------------------------------------------------------------------
-- te_shot_type
-- PURPOSE: Stroke type for a single shot. Mapped from MCP encoding by
--          libMcpShotParser.ts (mcp_token column on tb_shot preserves origin).
-- ----------------------------------------------------------------------------
CREATE TABLE te_shot_type (
  shot_type_id  INT  PRIMARY KEY,
  code          TEXT NOT NULL UNIQUE,
  label         TEXT NOT NULL,
  mcp_token     TEXT  -- canonical MCP shot token if applicable
);

INSERT INTO te_shot_type (shot_type_id, code, label, mcp_token) VALUES
  (1,  'SERVE',           'Serve',                  NULL),
  (2,  'FOREHAND',        'Forehand',               'f'),
  (3,  'BACKHAND',        'Backhand',               'b'),
  (4,  'FH_SLICE',        'Forehand slice',         'r'),
  (5,  'BH_SLICE',        'Backhand slice',         's'),
  (6,  'FH_VOLLEY',       'Forehand volley',        'v'),
  (7,  'BH_VOLLEY',       'Backhand volley',        'z'),
  (8,  'OVERHEAD_SMASH',  'Overhead smash',         'o'),
  (9,  'LOB',             'Lob',                    'l'),
  (10, 'FH_HALF_VOLLEY',  'Forehand half-volley',   'h'),
  (11, 'BH_HALF_VOLLEY',  'Backhand half-volley',   'i'),
  (12, 'FH_SWING_VOLLEY', 'Forehand swing volley',  'j'),
  (13, 'BH_SWING_VOLLEY', 'Backhand swing volley',  'k'),
  (14, 'TRICK_TWEENER',   'Trick / tweener',        't'),
  (15, 'FH_DROP',         'Forehand drop',          'u'),
  (16, 'BH_DROP',         'Backhand drop',          'p'),
  (17, 'FH_HIGH',         'Forehand high',          'y'),
  (18, 'BH_SMASH',        'Backhand smash',         'm'),
  (19, 'DROP_SHOT',       'Drop shot (generic)',    NULL),
  (99, 'UNKNOWN',         'Unknown',                NULL);


-- ----------------------------------------------------------------------------
-- te_serve_direction
-- PURPOSE: Where a serve landed in the box.
-- ----------------------------------------------------------------------------
CREATE TABLE te_serve_direction (
  serve_direction_id INT  PRIMARY KEY,
  code               TEXT NOT NULL UNIQUE,
  label              TEXT NOT NULL,
  mcp_code           SMALLINT  -- raw MCP digit for serves
);

INSERT INTO te_serve_direction (serve_direction_id, code, label, mcp_code) VALUES
  (1,  'WIDE',    'Wide',         4),
  (2,  'BODY',    'Body',         5),
  (3,  'T',       'Down the T',   6),
  (99, 'UNKNOWN', 'Unknown',      NULL);


-- ----------------------------------------------------------------------------
-- te_groundstroke_direction
-- PURPOSE: Where a groundstroke landed in the opponent's court, normalized
--          to "opponent's forehand corner / middle / opponent's backhand
--          corner" so the same enum works for both right- and left-handed
--          opponents (parser handles the flip).
-- ----------------------------------------------------------------------------
CREATE TABLE te_groundstroke_direction (
  groundstroke_direction_id INT  PRIMARY KEY,
  code                      TEXT NOT NULL UNIQUE,
  label                     TEXT NOT NULL,
  mcp_code                  SMALLINT
);

INSERT INTO te_groundstroke_direction (groundstroke_direction_id, code, label, mcp_code) VALUES
  (1,  'CORNER_OPP_FH', 'Opponent forehand corner', 1),
  (2,  'MIDDLE',        'Down the middle',          2),
  (3,  'CORNER_OPP_BH', 'Opponent backhand corner', 3),
  (99, 'UNKNOWN',       'Unknown',                  NULL);


-- ----------------------------------------------------------------------------
-- te_return_depth
-- PURPOSE: Depth of a service return.
-- ----------------------------------------------------------------------------
CREATE TABLE te_return_depth (
  return_depth_id INT  PRIMARY KEY,
  code            TEXT NOT NULL UNIQUE,
  label           TEXT NOT NULL,
  mcp_code        SMALLINT
);

INSERT INTO te_return_depth (return_depth_id, code, label, mcp_code) VALUES
  (1,  'SHALLOW',   'Inside service box',       7),
  (2,  'MEDIUM',    'Behind service line',      8),
  (3,  'DEEP',      'Back quarter of court',    9),
  (99, 'UNKNOWN',   'Unknown',                  NULL);


-- ----------------------------------------------------------------------------
-- te_court_position
-- PURPOSE: Where the hitter was when striking the ball.
-- ----------------------------------------------------------------------------
CREATE TABLE te_court_position (
  court_position_id INT  PRIMARY KEY,
  code              TEXT NOT NULL UNIQUE,
  label             TEXT NOT NULL
);

INSERT INTO te_court_position (court_position_id, code, label) VALUES
  (1,  'BASELINE',         'At the baseline'),
  (2,  'BEHIND_BASELINE',  'Behind the baseline'),
  (3,  'IN_COURT',         'Inside the baseline'),
  (4,  'APPROACH',         'Approaching the net'),
  (5,  'AT_NET',           'At the net'),
  (99, 'UNKNOWN',          'Unknown');


-- ----------------------------------------------------------------------------
-- te_outcome
-- PURPOSE: How a single shot or point ended.
-- ----------------------------------------------------------------------------
CREATE TABLE te_outcome (
  outcome_id INT  PRIMARY KEY,
  code       TEXT NOT NULL UNIQUE,
  label      TEXT NOT NULL
);

INSERT INTO te_outcome (outcome_id, code, label) VALUES
  (1,  'IN_PLAY',         'In play'),
  (2,  'WINNER',          'Winner'),
  (3,  'FORCED_ERROR',    'Forced error'),
  (4,  'UNFORCED_ERROR',  'Unforced error'),
  (5,  'ACE',             'Ace'),
  (6,  'SERVE_WINNER',    'Serve winner / unreturnable'),
  (7,  'DOUBLE_FAULT',    'Double fault'),
  (99, 'UNKNOWN',         'Unknown');


-- ----------------------------------------------------------------------------
-- te_error_type
-- PURPOSE: How an erroring shot missed.
-- ----------------------------------------------------------------------------
CREATE TABLE te_error_type (
  error_type_id INT  PRIMARY KEY,
  code          TEXT NOT NULL UNIQUE,
  label         TEXT NOT NULL,
  mcp_token     TEXT
);

INSERT INTO te_error_type (error_type_id, code, label, mcp_token) VALUES
  (1,  'NET',        'Into the net',  'n'),
  (2,  'WIDE',       'Wide',          'w'),
  (3,  'DEEP',       'Long',          'd'),
  (4,  'WIDE_DEEP',  'Wide and long', 'x'),
  (5,  'FOOT_FAULT', 'Foot fault',     NULL),
  (99, 'NA',         'Not applicable', NULL);


-- ----------------------------------------------------------------------------
-- te_external_source
-- PURPOSE: Origin system for a piece of data (player mappings, match rows,
--          rankings, etc.). Lets us deduplicate across sources and credit
--          provenance in the UI.
-- ----------------------------------------------------------------------------
CREATE TABLE te_external_source (
  source_id   INT  PRIMARY KEY,
  code        TEXT NOT NULL UNIQUE,
  label       TEXT NOT NULL,
  url         TEXT
);

INSERT INTO te_external_source (source_id, code, label, url) VALUES
  (1,  'SACKMANN_ATP',       'Jeff Sackmann tennis_atp',                'https://github.com/JeffSackmann/tennis_atp'),
  (2,  'SACKMANN_WTA',       'Jeff Sackmann tennis_wta',                'https://github.com/JeffSackmann/tennis_wta'),
  (3,  'SACKMANN_MCP',       'Match Charting Project',                  'https://github.com/JeffSackmann/tennis_MatchChartingProject'),
  (4,  'SACKMANN_PBP',       'Sackmann tennis_pointbypoint',            'https://github.com/JeffSackmann/tennis_pointbypoint'),
  (5,  'SACKMANN_SLAM_PBP',  'Sackmann tennis_slam_pointbypoint',       'https://github.com/JeffSackmann/tennis_slam_pointbypoint'),
  (6,  'WIKIDATA',           'Wikidata',                                'https://www.wikidata.org'),
  (7,  'ICDB',               'Internet Commentator Database',           'https://tennis.icdb.tv'),
  (8,  'INFOTENNIS',         'Infosys ATP Court Vision (via infotennis)', 'https://github.com/glad94/infotennis'),
  (9,  'TML',                'Tennismylife/TML-Database',               'https://github.com/Tennismylife/TML-Database'),
  (10, 'MANUAL',             'Manually curated',                         NULL),
  (11, 'ATP_OFFICIAL',       'ATP Tour (atptour.com)',                  'https://www.atptour.com'),
  (12, 'WTA_OFFICIAL',       'WTA Tour (wtatennis.com)',                'https://www.wtatennis.com'),
  (13, 'ITF_OFFICIAL',       'ITF (itftennis.com)',                     'https://www.itftennis.com'),
  (14, 'TENNIS_FAME',        'International Tennis Hall of Fame',       'https://www.tennisfame.com');

-- @endregion enums


-- @region dictionaries
-- ----------------------------------------------------------------------------
-- td_country
-- PURPOSE: ISO countries for player nationalities, tournament locations, etc.
-- USE CASE: Country flags, "all Spanish players who reached #1", etc.
-- MUTABILITY: Slow-changing; loaded once from ISO 3166-1 source.
-- REFERENCED BY: td_player.country_id, td_tournament.country_id, td_venue.country_id, td_commentator.country_id
-- FOOTER: standard
-- ----------------------------------------------------------------------------
CREATE TABLE td_country (
  country_id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  code_iso2           TEXT NOT NULL UNIQUE,    -- 'US'
  code_iso3           TEXT NOT NULL UNIQUE,    -- 'USA'
  name                TEXT NOT NULL,
  notes               TEXT,
  dttm_created_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by          TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by         TEXT NOT NULL DEFAULT 'system'
);


-- ----------------------------------------------------------------------------
-- td_player
-- PURPOSE: Master player identity table. Bridges the curated TS player
--          roster (libPlayersData.ts) with the SQL analytics layer via
--          the slug column and tm_player_external_id.
-- USE CASE: Every match, ranking, embedding, aggregate references player_id.
-- MUTABILITY: Slow-changing biographical facts (status flips when a player
--             retires; new players added as they emerge).
-- REFERENCED BY: most fact tables.
-- FOOTER: standard
-- ----------------------------------------------------------------------------
CREATE TABLE td_player (
  player_id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug                 TEXT NOT NULL UNIQUE,        -- kebab-case, matches TS roster slug
  full_name            TEXT NOT NULL,
  short_name           TEXT,
  tour_id              INT  NOT NULL,                -- ref te_tour
  born_iso             DATE,
  died_iso             DATE,
  country_id           BIGINT,                       -- ref td_country
  birthplace           TEXT,
  height_cm            SMALLINT,
  weight_kg            SMALLINT,
  handedness_id        INT  NOT NULL DEFAULT 99,     -- ref te_handedness
  backhand_style_id    INT  NOT NULL DEFAULT 99,     -- ref te_backhand_style
  play_style_id        INT,                          -- ref te_play_style (inferred)
  turned_pro_year      SMALLINT,
  retired_year         SMALLINT,
  status_id            INT  NOT NULL DEFAULT 1,      -- ref te_player_status
  hof_inducted_year    SMALLINT,
  bio                  TEXT,
  data_confidence      TEXT,                         -- 'verified' | 'approximate'
  is_curated           BOOLEAN NOT NULL DEFAULT FALSE,  -- true for the hand-tended TS roster
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system'
);


-- ----------------------------------------------------------------------------
-- td_tournament
-- PURPOSE: Master tournament series (Wimbledon, US Open, Madrid Open, ...).
-- USE CASE: Group matches by event, surface defaults, level/prestige sorting.
-- MUTABILITY: Annual additions; rare metadata edits.
-- ----------------------------------------------------------------------------
CREATE TABLE td_tournament (
  tournament_id        BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name                 TEXT NOT NULL,
  city                 TEXT,
  country_id           BIGINT,
  tour_id              INT  NOT NULL,
  level_id             INT  NOT NULL,                 -- ref te_tournament_level
  default_surface_id   INT,                           -- ref te_surface
  default_venue_id     BIGINT,                        -- ref td_venue
  first_year           SMALLINT,
  last_year            SMALLINT,                      -- null = ongoing
  notes                TEXT,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT td_tournament_one_per_name_tour UNIQUE (name, tour_id)
);


-- ----------------------------------------------------------------------------
-- td_venue
-- PURPOSE: Stadiums / courts that have hosted tour events.
-- USE CASE: "Honor the venues" section, capacity rankings, geo map.
-- ----------------------------------------------------------------------------
CREATE TABLE td_venue (
  venue_id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name                 TEXT NOT NULL,
  city                 TEXT,
  country_id           BIGINT,
  capacity             INT,
  year_built           SMALLINT,
  surface_id           INT,                            -- ref te_surface
  is_retractable_roof  BOOLEAN,
  is_indoor            BOOLEAN,
  lat                  REAL,
  lon                  REAL,
  notes                TEXT,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system'
);


-- ----------------------------------------------------------------------------
-- td_commentator
-- PURPOSE: Broadcast commentators / analysts. Honors the booth.
-- USE CASE: "Who called this match" section; commentator profile pages.
-- ----------------------------------------------------------------------------
CREATE TABLE td_commentator (
  commentator_id       BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name            TEXT NOT NULL,
  country_id           BIGINT,
  primary_broadcaster  TEXT,
  era_active           TEXT,                            -- e.g. "1990s-2010s"
  was_player           BOOLEAN NOT NULL DEFAULT FALSE,
  linked_player_id     BIGINT,                          -- ref td_player when was_player
  bio                  TEXT,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system'
);
-- @endregion dictionaries


-- @region matches-and-shots
-- ----------------------------------------------------------------------------
-- tb_match
-- PURPOSE: One row per professional match (singles only for now). The
--          atomic unit above which all aggregates are computed.
-- USE CASE: Career stats, H2H, surface splits, signature-match displays.
-- MUTABILITY: Mutable — re-ingest may correct or enrich existing rows.
-- REFERENCED BY: tb_point.match_id, tm_match_commentator.match_id, tb_h2h.last_match_id
-- ----------------------------------------------------------------------------
CREATE TABLE tb_match (
  match_id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tournament_id            BIGINT NOT NULL,            -- ref td_tournament
  tournament_edition_year  SMALLINT NOT NULL,
  round_id                 INT NOT NULL,               -- ref te_match_round
  p1_id                    BIGINT NOT NULL,            -- ref td_player
  p2_id                    BIGINT NOT NULL,            -- ref td_player
  winner_id                BIGINT,                     -- ref td_player; null pre-match / abandoned
  score                    TEXT,                       -- "6-4 7-6(5) 6-3"
  sets_won_p1              SMALLINT,
  sets_won_p2              SMALLINT,
  games_won_p1             SMALLINT,
  games_won_p2             SMALLINT,
  surface_id               INT,                        -- ref te_surface
  venue_id                 BIGINT,                     -- ref td_venue
  dttm_match_utc           TIMESTAMPTZ,
  duration_minutes         SMALLINT,
  is_walkover              BOOLEAN NOT NULL DEFAULT FALSE,
  is_retirement            BOOLEAN NOT NULL DEFAULT FALSE,
  is_best_of_five          BOOLEAN NOT NULL DEFAULT FALSE,
  has_pbp                  BOOLEAN NOT NULL DEFAULT FALSE,
  has_mcp_chart            BOOLEAN NOT NULL DEFAULT FALSE,
  has_court_vision         BOOLEAN NOT NULL DEFAULT FALSE,
  external_source_id       INT NOT NULL DEFAULT 10,    -- ref te_external_source; default MANUAL
  external_match_id        TEXT,                       -- id in source system; null = manual
  notes                    TEXT,
  dttm_created_utc         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by               TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by              TEXT NOT NULL DEFAULT 'system',
  -- NULL external_match_id means "manually entered" — multiple manual rows
  -- can coexist because Postgres treats NULLs as distinct in UNIQUE.
  CONSTRAINT tb_match_one_per_external UNIQUE (external_source_id, external_match_id)
);


-- ----------------------------------------------------------------------------
-- tb_point
-- PURPOSE: One row per point inside a match (where point-level data exists).
-- USE CASE: Leverage / win-probability / momentum graphs; clutch metrics.
-- MUTABILITY: Mutable — re-ingest from refreshed Sackmann snapshots.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_point (
  point_id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  match_id                  BIGINT NOT NULL,           -- ref tb_match
  set_no                    SMALLINT NOT NULL,
  game_no                   SMALLINT NOT NULL,
  point_no_in_match         INT NOT NULL,
  point_no_in_game          SMALLINT NOT NULL,
  server_id                 BIGINT NOT NULL,           -- ref td_player
  returner_id               BIGINT NOT NULL,           -- ref td_player
  server_score_pre          TEXT,                      -- "0", "15", "30", "40", "AD"
  returner_score_pre        TEXT,
  point_winner_id           BIGINT NOT NULL,           -- ref td_player
  rally_length              SMALLINT,
  distance_run_server_m     REAL,
  distance_run_returner_m   REAL,
  is_break_point            BOOLEAN NOT NULL DEFAULT FALSE,
  is_set_point              BOOLEAN NOT NULL DEFAULT FALSE,
  is_match_point            BOOLEAN NOT NULL DEFAULT FALSE,
  is_tiebreak               BOOLEAN NOT NULL DEFAULT FALSE,
  is_deuce_court            BOOLEAN,                   -- side served from
  leverage                  REAL,                      -- Sackmann leverage 0..1
  serve_speed_kmh           SMALLINT,
  first_serve_speed_kmh     SMALLINT,
  second_serve_speed_kmh    SMALLINT,
  first_serve_in            BOOLEAN,
  serve_direction_id        INT,                       -- ref te_serve_direction
  point_outcome_id          INT,                       -- ref te_outcome
  ended_on_serve            BOOLEAN NOT NULL DEFAULT FALSE,
  external_source_id        INT NOT NULL DEFAULT 10,
  dttm_created_utc          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by                TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by               TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_point_one_per_position UNIQUE (match_id, point_no_in_match)
);


-- ----------------------------------------------------------------------------
-- tb_shot
-- PURPOSE: One row per individual shot inside a point. The atomic unit of
--          MCP charted data. ~10M+ rows expected.
-- USE CASE: Court heatmaps, shot-direction roses, error-type breakdowns,
--           rally-tempo analysis, "where Federer hits BH winners" maps.
-- MUTABILITY: Mutable — re-ingest from refreshed MCP snapshots.
-- NOTES: ball_x_norm and ball_y_norm are normalized 0..1 along court
--        dimensions when MCP charters provided coords or when Court Vision
--        ingestion supplies them. Often null in MCP (pre-2018 charts).
-- ----------------------------------------------------------------------------
CREATE TABLE tb_shot (
  shot_id                    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  point_id                   BIGINT NOT NULL,           -- ref tb_point
  shot_no                    SMALLINT NOT NULL,         -- 1-indexed within point
  hitter_id                  BIGINT NOT NULL,           -- ref td_player
  shot_type_id               INT NOT NULL,              -- ref te_shot_type
  serve_direction_id         INT,                       -- ref te_serve_direction (only for serves)
  groundstroke_direction_id  INT,                       -- ref te_groundstroke_direction (groundstrokes)
  return_depth_id            INT,                       -- ref te_return_depth (returns only)
  court_position_id          INT,                       -- ref te_court_position
  outcome_id                 INT,                       -- ref te_outcome
  error_type_id              INT,                       -- ref te_error_type
  is_approach                BOOLEAN NOT NULL DEFAULT FALSE,
  is_at_net                  BOOLEAN NOT NULL DEFAULT FALSE,
  ball_x_norm                REAL,                      -- 0..1 along baseline (deuce → ad)
  ball_y_norm                REAL,                      -- 0..1 along sideline (own → opp baseline)
  speed_kmh                  SMALLINT,
  spin_rpm                   SMALLINT,
  mcp_token                  TEXT,                      -- raw MCP token for debugging
  external_source_id         INT NOT NULL DEFAULT 10,
  dttm_created_utc           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by                 TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by                TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_shot_one_per_position UNIQUE (point_id, shot_no)
);
-- @endregion matches-and-shots


-- @region matrix
-- ----------------------------------------------------------------------------
-- tm_player_external_id
-- PURPOSE: Maps a single td_player to its identifier in each external
--          source (Sackmann ATP id, Wikidata QID, Wikipedia title, MCP
--          charted_player code, ICDb id, the curated TS slug, etc.).
-- USE CASE: Ingest deduplication, joins from raw imported tables, link-out
--           to external profile pages.
-- MUTABILITY: Add-on as new sources are wired up.
-- ----------------------------------------------------------------------------
CREATE TABLE tm_player_external_id (
  external_id_pk       BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,                 -- ref td_player
  source_id            INT NOT NULL,                    -- ref te_external_source
  external_id          TEXT NOT NULL,
  notes                TEXT,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tm_player_external_id_one_per_player UNIQUE (player_id, source_id),
  CONSTRAINT tm_player_external_id_one_per_source UNIQUE (source_id, external_id)
);


-- ----------------------------------------------------------------------------
-- tm_match_commentator
-- PURPOSE: Which commentators called which match.
-- USE CASE: "Honor the booth" — surface "called by Mary Carillo & John McEnroe"
--          on signature match pages.
-- ----------------------------------------------------------------------------
CREATE TABLE tm_match_commentator (
  match_commentator_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  match_id             BIGINT NOT NULL,                 -- ref tb_match
  commentator_id       BIGINT NOT NULL,                 -- ref td_commentator
  role                 TEXT,                            -- "play-by-play", "color", "court reporter"
  broadcaster          TEXT,                            -- "ESPN", "BBC", etc.
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system'
);
-- @endregion matrix


-- @region history
-- ----------------------------------------------------------------------------
-- th_player_ranking
-- PURPOSE: Weekly ATP/WTA singles ranking history per player.
-- USE CASE: Career-arc charts, "weeks at #1" rollups, peak-rank lookups.
-- ----------------------------------------------------------------------------
CREATE TABLE th_player_ranking (
  ranking_id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,                 -- ref td_player
  tour_id              INT NOT NULL,                    -- ref te_tour
  week_dt              DATE NOT NULL,
  rank                 INT NOT NULL,
  points               INT,
  source_id            INT NOT NULL DEFAULT 1,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT th_player_ranking_one_per_week UNIQUE (player_id, tour_id, week_dt)
);


-- ----------------------------------------------------------------------------
-- th_player_elo
-- PURPOSE: Derived Elo trajectory per player overall + per surface.
--          Refreshed by libDerivedElo.ts from match history.
-- USE CASE: Era-neutral comparisons, "who was the best ever on grass at peak",
--           predictive match probabilities.
-- ----------------------------------------------------------------------------
CREATE TABLE th_player_elo (
  elo_id               BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,                 -- ref td_player
  as_of_dt             DATE NOT NULL,
  elo_overall          REAL,
  elo_hard             REAL,
  elo_clay             REAL,
  elo_grass            REAL,
  elo_carpet           REAL,
  match_count_to_date  INT,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT th_player_elo_one_per_day UNIQUE (player_id, as_of_dt)
);
-- @endregion history


-- @region cached-aggregates
-- These are derived from raw matches/points/shots and refreshed by
-- src/scripts/refresh-aggregates.ts. Treat as read-only at the page layer.
-- ----------------------------------------------------------------------------
-- tb_player_career_stats
-- PURPOSE: One row per (player, surface, level) slice of career counts.
--          surface_id IS NULL means "all surfaces"; level_id IS NULL means
--          "all levels". Pages read these directly to avoid scanning matches.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_player_career_stats (
  career_stats_id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id                BIGINT NOT NULL,             -- ref td_player
  surface_id               INT,                         -- null = all surfaces
  level_id                 INT,                         -- null = all levels
  matches_won              INT NOT NULL DEFAULT 0,
  matches_lost             INT NOT NULL DEFAULT 0,
  sets_won                 INT NOT NULL DEFAULT 0,
  sets_lost                INT NOT NULL DEFAULT 0,
  games_won                INT NOT NULL DEFAULT 0,
  games_lost               INT NOT NULL DEFAULT 0,
  aces                     INT NOT NULL DEFAULT 0,
  double_faults            INT NOT NULL DEFAULT 0,
  service_games_played     INT NOT NULL DEFAULT 0,
  first_serve_in           INT NOT NULL DEFAULT 0,
  first_serve_pts_won      INT NOT NULL DEFAULT 0,
  first_serve_pts_total    INT NOT NULL DEFAULT 0,
  second_serve_pts_won     INT NOT NULL DEFAULT 0,
  second_serve_pts_total   INT NOT NULL DEFAULT 0,
  break_pts_faced          INT NOT NULL DEFAULT 0,
  break_pts_saved          INT NOT NULL DEFAULT 0,
  break_pts_chances        INT NOT NULL DEFAULT 0,
  break_pts_converted      INT NOT NULL DEFAULT 0,
  tiebreaks_won            INT NOT NULL DEFAULT 0,
  tiebreaks_lost           INT NOT NULL DEFAULT 0,
  computed_through_dt      DATE,
  dttm_created_utc         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by               TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by              TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_player_career_stats_one_per_slice UNIQUE (player_id, surface_id, level_id)
);


-- ----------------------------------------------------------------------------
-- tb_player_serve_zones
-- PURPOSE: Serve placement counts and outcomes per (player, surface,
--          serve number, court side, direction).
-- USE CASE: Serve-placement rose charts on the player profile.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_player_serve_zones (
  serve_zone_id        BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,
  surface_id           INT,                             -- null = all
  serve_no             SMALLINT NOT NULL,               -- 1 or 2
  side_court           TEXT NOT NULL,                   -- 'deuce' | 'ad'
  serve_direction_id   INT NOT NULL,
  serves_attempted     INT NOT NULL DEFAULT 0,
  serves_in            INT NOT NULL DEFAULT 0,
  faults               INT NOT NULL DEFAULT 0,
  aces                 INT NOT NULL DEFAULT 0,
  service_winners      INT NOT NULL DEFAULT 0,
  pts_won              INT NOT NULL DEFAULT 0,
  computed_through_dt  DATE,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_player_serve_zones_one_per_slice
    UNIQUE (player_id, surface_id, serve_no, side_court, serve_direction_id)
);


-- ----------------------------------------------------------------------------
-- tb_player_shot_distribution
-- PURPOSE: Counts of (shot_type, outcome) per player per surface.
-- USE CASE: "FH winners vs UE", style fingerprint, "where they hit winners".
-- ----------------------------------------------------------------------------
CREATE TABLE tb_player_shot_distribution (
  shot_dist_id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id              BIGINT NOT NULL,
  surface_id             INT,                           -- null = all
  shot_type_id           INT NOT NULL,
  shot_count             INT NOT NULL DEFAULT 0,
  winners                INT NOT NULL DEFAULT 0,
  forced_errors_drawn    INT NOT NULL DEFAULT 0,
  unforced_errors        INT NOT NULL DEFAULT 0,
  computed_through_dt    DATE,
  dttm_created_utc       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by             TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by            TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_player_shot_distribution_one_per_slice
    UNIQUE (player_id, surface_id, shot_type_id)
);


-- ----------------------------------------------------------------------------
-- tb_player_clutch_metrics
-- PURPOSE: Sackmann-style leverage / pressure-point metrics per
--          (player, surface). Refreshed by libDerivedClutch.ts.
-- USE CASE: "Clutch" tab on the profile; era-leaders pages.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_player_clutch_metrics (
  clutch_id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,
  surface_id           INT,                             -- null = all
  matches_sample_size  INT NOT NULL DEFAULT 0,
  points_sample_size   INT NOT NULL DEFAULT 0,
  leverage_avg         REAL,
  blr                  REAL,                            -- Balanced Leverage Ratio
  dr_plus              REAL,                            -- Dominance Ratio +
  excitement_index     REAL,
  comeback_factor      REAL,
  match_ep             REAL,                            -- Match-EP
  tiebreak_spw         REAL,                            -- tiebreak service points won
  tiebreak_rpw         REAL,                            -- tiebreak return points won
  bp_save_pct          REAL,
  bp_convert_pct       REAL,
  deuce_ace_pct        REAL,
  ad_ace_pct           REAL,
  computed_through_dt  DATE,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_player_clutch_metrics_one_per_slice UNIQUE (player_id, surface_id)
);


-- ----------------------------------------------------------------------------
-- tb_player_style_embedding
-- PURPOSE: Dense vector representation of a player's style. Used for
--          "plays like X" queries and the 2D style explorer.
-- USE CASE: pgvector kNN nearest-neighbor lookups.
-- NOTES: 384 dims matches sentence-transformers all-MiniLM-L6-v2; change
--        the column type if you swap embedders.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_player_style_embedding (
  embedding_id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id            BIGINT NOT NULL,
  embedding_version    TEXT NOT NULL,                   -- e.g. 'allmini-v1-2026-05'
  embedding            vector(384) NOT NULL,
  feature_blob         JSONB NOT NULL,                  -- raw features that produced it
  computed_through_dt  DATE,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_player_style_embedding_one_per_version UNIQUE (player_id, embedding_version)
);


-- ----------------------------------------------------------------------------
-- tb_h2h
-- PURPOSE: Head-to-head summary per ordered player pair, optionally split
--          by surface. Convention: p1_id < p2_id to keep one row per pair.
-- USE CASE: H2H mini-tables on profiles, compare page.
-- ----------------------------------------------------------------------------
CREATE TABLE tb_h2h (
  h2h_id               BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  p1_id                BIGINT NOT NULL,                 -- ref td_player; lower id
  p2_id                BIGINT NOT NULL,                 -- ref td_player; higher id
  surface_id           INT,                             -- null = all surfaces
  matches_total        INT NOT NULL DEFAULT 0,
  p1_wins              INT NOT NULL DEFAULT 0,
  p2_wins              INT NOT NULL DEFAULT 0,
  p1_sets_won          INT NOT NULL DEFAULT 0,
  p2_sets_won          INT NOT NULL DEFAULT 0,
  p1_games_won         INT NOT NULL DEFAULT 0,
  p2_games_won         INT NOT NULL DEFAULT 0,
  last_match_id        BIGINT,                          -- ref tb_match
  last_match_dttm      TIMESTAMPTZ,
  first_match_dttm     TIMESTAMPTZ,
  computed_through_dt  DATE,
  dttm_created_utc     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by           TEXT NOT NULL DEFAULT 'system',
  dttm_modified_utc    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  modified_by          TEXT NOT NULL DEFAULT 'system',
  CONSTRAINT tb_h2h_ordered_pair CHECK (p1_id < p2_id),
  CONSTRAINT tb_h2h_one_per_pair_surface UNIQUE (p1_id, p2_id, surface_id)
);
-- @endregion cached-aggregates


-- @region indexes
-- ----------------------------------------------------------------------------
-- Indexes serving the hot read paths. Adjust as actual query patterns settle.
-- ----------------------------------------------------------------------------
CREATE INDEX idx_td_player_tour_status     ON td_player (tour_id, status_id);
CREATE INDEX idx_td_player_country         ON td_player (country_id);

CREATE INDEX idx_td_tournament_tour_level  ON td_tournament (tour_id, level_id);
CREATE INDEX idx_td_tournament_name        ON td_tournament (lower(name));

CREATE INDEX idx_td_venue_country          ON td_venue (country_id);

CREATE INDEX idx_tb_match_p1               ON tb_match (p1_id, dttm_match_utc DESC);
CREATE INDEX idx_tb_match_p2               ON tb_match (p2_id, dttm_match_utc DESC);
CREATE INDEX idx_tb_match_winner           ON tb_match (winner_id, dttm_match_utc DESC);
CREATE INDEX idx_tb_match_tournament       ON tb_match (tournament_id, tournament_edition_year, round_id);
CREATE INDEX idx_tb_match_dttm             ON tb_match (dttm_match_utc DESC);
CREATE INDEX idx_tb_match_surface          ON tb_match (surface_id, dttm_match_utc DESC);

CREATE INDEX idx_tb_point_match            ON tb_point (match_id, set_no, game_no, point_no_in_game);
CREATE INDEX idx_tb_point_server           ON tb_point (server_id);
CREATE INDEX idx_tb_point_returner         ON tb_point (returner_id);
CREATE INDEX idx_tb_point_break            ON tb_point (match_id) WHERE is_break_point;

CREATE INDEX idx_tb_shot_point             ON tb_shot (point_id, shot_no);
CREATE INDEX idx_tb_shot_hitter_type       ON tb_shot (hitter_id, shot_type_id);
CREATE INDEX idx_tb_shot_outcome           ON tb_shot (hitter_id, outcome_id) WHERE outcome_id IS NOT NULL;

CREATE INDEX idx_th_ranking_player_week    ON th_player_ranking (player_id, week_dt DESC);
CREATE INDEX idx_th_ranking_week_rank      ON th_player_ranking (week_dt, rank);

CREATE INDEX idx_th_elo_player_dt          ON th_player_elo (player_id, as_of_dt DESC);

CREATE INDEX idx_tm_pe_lookup_external     ON tm_player_external_id (source_id, external_id);

CREATE INDEX idx_tm_match_commentator_match ON tm_match_commentator (match_id);
CREATE INDEX idx_tm_match_commentator_who   ON tm_match_commentator (commentator_id);

-- pgvector kNN index. HNSW is the preferred default in pgvector >= 0.5.
-- Created CONCURRENTLY-eligible after data lands, but creating empty up
-- front so the planner sees it. Cosine ops match a normalized embedder.
CREATE INDEX idx_player_style_embedding_hnsw
  ON tb_player_style_embedding
  USING hnsw (embedding vector_cosine_ops);
-- @endregion indexes
