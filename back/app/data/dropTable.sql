BEGIN;
-- -----------------------------------------------------
-- Table "LIST"
-- -----------------------------------------------------
DROP TABLE IF EXISTS

  "type",
  "category",
  "service",
  "sub_category",
  "article",
  "checklist",
  "checklist_item",
  "letter_type",
  "simulation",
  "simulation_field",
  "simulation_field_select",
  "simulation_result",
  "user",
  "user_profil",
  "user_info",
  "user_service",
  "document",
  "todolist",
  "todolist_item",
  "note",
  "user_checklist",
  "user_has_article",
  "service_has_category",
  "article_has_sub_category",
  "article_has_letter_type",
  "article_has_checklist",
  "article_has_simulation",
  "letter_type_has_sub_category",
  "simulation_has_sub_category",
  "checklist_has_sub_category",
  "checklist_has_checklist_item",
  "user_checklist_has_checklist_item";

COMMIT;