-- Revert ALDAHE:creation-db from pg

BEGIN;

DROP TABLE 

"simulation_result",
"simulation_field_select", 
"simulation_field",
"simulation",
"user_checklist",
"checklist_item",
"checklist",
"service",
"letter_type",
"note",
"todolist",
"document",
"info",
"article",
"user_profil",
"user"

CASCADE;

COMMIT;