-- Revert nom-du-projet:oneuser from pg

BEGIN;

TRUNCATE TABLE user_profil CASCADE;
	 
TRUNCATE TABLE "user" CASCADE;

COMMIT;
