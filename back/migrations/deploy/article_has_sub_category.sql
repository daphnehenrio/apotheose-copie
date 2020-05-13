-- Deploy nom-du-projet:article_has_sub_category to pg

BEGIN;

INSERT INTO "article_has_sub_category" (
  "article_id",
  "sub_category_id"
)

VALUES

(1,111),

(2,111),

(3,111),

(4,111),

(5,111),

(6,111);

COMMIT;
