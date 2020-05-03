-- Revert nom-du-projet:category from pg

BEGIN;

TRUNCATE TABLE category CASCADE;

COMMIT;
