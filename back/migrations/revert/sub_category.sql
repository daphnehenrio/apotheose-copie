-- Revert nom-du-projet:sub_category from pg

BEGIN;

TRUNCATE TABLE sub_category CASCADE;

COMMIT;
