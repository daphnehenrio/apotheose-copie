BEGIN;
/* USER => infos principales obligutoires */
CREATE TABLE "user" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name varchar(40) NOT NULL,
    last_name varchar(40) NOT NULL,
    "login" varchar(40) NOT NULL,
    "password" varchar(76) NOT NULL,
    avatar text,
    email varchar(76) NOT NULL

);

/* USER_PROFIL => infos secondaires dans le profil */
CREATE TABLE user_profil (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "address" varchar(76),
    zip_code varchar(40),
    city varchar(76),
    phone_number varchar(40),
    cellphone_number varchar(40),
    phone_work varchar(40),
    children int,
    statut varchar(40),
    gender varchar(40)

);

/* USER_CATEGORY MENU pour les documents users */
CREATE TABLE user_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    color text

);

/* USER_SERVICE => liens dashbord user */
CREATE TABLE "user_service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_category_id" int REFERENCES "user_category"(id),
    "name" text NOT NULL,
    logo text NOT NULL,
    link text NOT NULL,
    color text

);

/* INFO => carte avec info par services */
CREATE TABLE info (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "user_service_id" int REFERENCES "user_service"(id),
    identify text,
    "service_name" text NOT NULL,
    service_phone text,
    service_address text,
    service_referent text,
    note_file text

);

/* DOCUMENT_CATEGORY MENU pour les documents users */
CREATE TABLE document_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL,
    color text

);

/* DOCUMENT_SUB_CATEGORY => sous menu documents -> catégorie -> sous catégorie */
CREATE TABLE document_sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    document_category_id int REFERENCES document_category(id),
    title text NOT NULL

);

/* TODOLIST => todo des users */
CREATE TABLE todolist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

CREATE TABLE todolist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "todolist_id" int REFERENCES "todolist"(id),
    content text NOT NULL

);

/* NOTE => bloc note des utilisateurs */
CREATE TABLE note (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

/* DOCUMENT => documents des utilistaeurs */
CREATE TABLE document (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "document_sub_category_id" int REFERENCES "document_sub_category"(id),
    "name" text NOT NULL,
    link text NOT NULL,
    updated_at date,
    created_at date

);

/* CATEGORY MENU VISITEUR */
CREATE TABLE category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    color text

);

/* SERVICES => liens page service */
CREATE TABLE "service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category_id" int REFERENCES "category"(id),
    "name" text NOT NULL,
    logo text NOT NULL,
    link text NOT NULL,
    color text

);

/* SUB_CATEGORY => sous menu aticle -> catégorie -> sous catégorie */
CREATE TABLE sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id int REFERENCES category(id),
    title text NOT NULL

);

/* ARTICLES */
CREATE TABLE "article" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    "description" text NOT NULL,
    "image" text,
    source_image text,
    source_content text,
    author text,
    updated_at date,
    created_at date

);

/* TABLE LIAISON ARTICLE <=> SUB_CATEGORY */
CREATE TABLE article_has_sub_category (

  article_id INT NOT NULL,
  sub_category_id INT NOT NULL,
  PRIMARY KEY (article_id, sub_category_id)

);

/* CHECKLIST visiteur (liste de document) */
CREATE TABLE checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL

);

/* CHECKLIST utilisateur (liste de document) */
CREATE TABLE user_checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL

);

/* CHECKLIST items (un item = une ligne d'une cheklist) */
CREATE TABLE checklist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item text

);

/* TABLE LIAISON CHECKLIST <=> SUB_CATEGORY */
CREATE TABLE checklist_has_sub_category (

  checklist_id INT NOT NULL,
  sub_category_id INT NOT NULL,
  PRIMARY KEY (checklist_id, sub_category_id)

);

/* TABLE LIAISON CHECKLIST <=> CHECKLIST_ITEM */
CREATE TABLE checklist_has_checklist_item (

  checklist_id INT NOT NULL,
  checklist_item_id INT NOT NULL,
  PRIMARY KEY (checklist_id, checklist_item_id)

);

/* TABLE LIAISON CHECKLIST_USER <=> SUB_CATEGORY */
CREATE TABLE checklist_user_has_sub_category (

  checklist_user_id INT NOT NULL,
  sub_category_id INT NOT NULL,
  PRIMARY KEY (checklist_user_id, sub_category_id)

);

/* TABLE LIAISON CHECKLIST_USER <=> CHECKLIST_ITEM */
CREATE TABLE checklist_user_has_checklist_item (

  checklist_user_id INT NOT NULL,
  checklist_item_id INT NOT NULL,
  PRIMARY KEY (checklist_user_id, checklist_item_id)

);

/* LETTER_TYPE */
CREATE TABLE letter_type (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "sub_category_id" int REFERENCES "sub_category"(id),
    "article_id" int REFERENCES "article"(id),
    title text NOT NULL,
    content text NOT NULL

);

/* SIMULATION */
CREATE TABLE simulation (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL

);

/* SIMULATION_FIELD => champs des formulaires */
CREATE TABLE simulation_field (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),
    label text NOT NULL,
    input_type text NOT NULL,
    obligatory boolean NOT NULL

);

/* SIMULATION_FIELD_SELECT => options des champs select des formulaires */
CREATE TABLE simulation_field_select (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_field int REFERENCES simulation_field(id),
    label text

);

/* SIMULATION_RESULT => resultats des simulations */
CREATE TABLE simulation_result (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),
    title text NOT NULL,
    content text NOT NULL

);

COMMIT;