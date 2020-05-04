-- Revert nom-du-projet:service_has_category from pg

BEGIN;


TRUNCATE TABLE service_has_category CASCADE;


COMMIT;

