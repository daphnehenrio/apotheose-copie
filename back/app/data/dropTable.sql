BEGIN;
-- -----------------------------------------------------
-- Table "LIST"
-- -----------------------------------------------------
DROP TABLE IF EXISTS
  "user",
  "user_profil",
  "user_category",
  "user_service",
  "info",
  "user_info",
  "document_category",
  "document_sub_category",
  "document",
  "todolist",
  "todolist_item",
  "note",
  "category",
  "service",
  "sub_category",
  "article",
  "checklist",
  "user_checklist",
  "checklist_item",
  "letter_type",
  "simulation",
  "simulation_field",
  "simulation_field_select",
  "simulation_result",
  "user_has_user_category",
  "category_has_service",
  "article_has_sub_category",
  "checklist_has_sub_category",
  "checklist_has_checklist_item",
  "checklist_user_has_sub_category",
  "checklist_user_has_checklist_item";

COMMIT;
