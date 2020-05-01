-- Revert nom-du-projet:oneuser from pg

BEGIN;

TRUNCATE TABLE "user" CASCADE;

TRUNCATE TABLE user_profil CASCADE;

COMMIT;
