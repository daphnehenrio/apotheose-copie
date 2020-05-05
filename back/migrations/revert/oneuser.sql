-- Revert nom-du-projet:oneuser from pg

BEGIN;

TRUNCATE TABLE "user" CASCADE;


COMMIT;
