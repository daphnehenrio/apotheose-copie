-- Revert nom-du-projet:service from pg

BEGIN;

TRUNCATE TABLE "service" CASCADE;

COMMIT;
