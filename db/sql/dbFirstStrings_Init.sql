-- ============================================================================
-- dbFirstStrings_Init.sql
--
-- PURPOSE: One-time DB setup. Creates pgvector extension, the first_strings
--          schema, and sets the default search_path so unqualified table
--          references resolve into our schema.
-- USE CASE: Loaded by Docker initdb on first container start, before
--           dbFirstStrings_Tables.sql.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS vector;

CREATE SCHEMA IF NOT EXISTS first_strings;

-- Default search_path for the database. postgres.js connections inherit this.
ALTER DATABASE first_strings SET search_path TO first_strings, public;

-- Apply for the current session too, so the subsequent tables file resolves.
SET search_path TO first_strings, public;
