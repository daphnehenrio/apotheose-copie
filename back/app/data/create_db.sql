BEGIN;

/* --------------------------------------- USER --------------------------------------- */

/* USER => infos principales obligutoires */
CREATE TABLE "user" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" varchar(40) NOT NULL,
    "last_name"  varchar(40) NOT NULL,
    "login"      varchar(40) NOT NULL,
    "password"   varchar(76) NOT NULL,
    "avatar"     text,
    "email"      varchar(76) NOT NULL

);

/* USER_PROFIL => infos secondaires dans le profil */
CREATE TABLE user_profil (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int NOT NULL REFERENCES "user"(id),

    "address"          varchar(76),
    "zip_code"         varchar(40),
    "city"             varchar(76),
    "phone_number"     varchar(40),
    "cellphone_number" varchar(40),
    "phone_work"       varchar(40),
    "children"         int,
    "statut"           varchar(40),
    "gender"           varchar(40)

);

/* --------------------------------------- USER MENU --------------------------------------- */


/* USER_CATEGORY MENU pour les documents users */
CREATE TABLE user_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(60) NOT NULL,
    "color" text

);



/* USER_SERVICE => liens dashbord user */
CREATE TABLE user_service (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_category_id int REFERENCES "user_category"(id),

    "name"  varchar(100) NOT NULL,
    "logo"  text         NOT NULL,
    "link"  text         NOT NULL

);

/* INFO => carte avec info par services */
CREATE TABLE user_info (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    user_service_id int REFERENCES "user_service"(id),

    "identify"         text,
    "service_name"     varchar(100) NOT NULL,
    "service_phone"    text,
    "service_address"  text,
    "service_referent" text,
    "note_file"        text

);

/* --------------------------------------- DOCUMENT --------------------------------------- */


/* DOCUMENT_CATEGORY MENU pour les documents users */
CREATE TABLE document_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),

    "title" varchar(60) NOT NULL,
    "color" text

);

/* DOCUMENT_SUB_CATEGORY => sous menu documents -> catégorie -> sous catégorie */
CREATE TABLE document_sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    document_category_id int REFERENCES document_category(id),

    "title" varchar(60) NOT NULL

);

/* DOCUMENT => documents des utilistaeurs */
CREATE TABLE document (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "document_sub_category_id" int REFERENCES "document_sub_category"(id),

    "name"       text NOT NULL,
    "link"       text NOT NULL,
    "updated_at" date,
    "created_at" date

);

/* --------------------------------------- TODOLIST --------------------------------------- */


/* TODOLIST => todo des users */
CREATE TABLE todolist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),

    "title"    varchar(60) NOT NULL,
    "favorite" boolean     NOT NULL DEFAULT FALSE

);

CREATE TABLE todolist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    todolist_id int REFERENCES "todolist"(id),

    "content" text NOT NULL

);

/* --------------------------------------- NOTE --------------------------------------- */


/* NOTE => bloc note des utilisateurs */
CREATE TABLE note (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),

    "title"    varchar(60) NOT NULL,
    "content"  text        NOT NULL,
    "favorite" boolean     NOT NULL DEFAULT FALSE

);



/* --------------------------------------- MENU --------------------------------------- */


/* CATEGORY MENU VISITEUR */
CREATE TABLE category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(60) NOT NULL,
    "color" text

);

/* SERVICES => liens page service */
CREATE TABLE "service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "name" text NOT NULL,
    "logo" text NOT NULL,
    "link" text NOT NULL
);



/* SUB_CATEGORY => sous menu aticle -> catégorie -> sous catégorie */
CREATE TABLE sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id int REFERENCES category(id),

    "title" varchar(60) NOT NULL

);

/* --------------------------------------- ARTICLE --------------------------------------- */


/* ARTICLES */
CREATE TABLE "article" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title"          varchar(60) NOT NULL,
    "content"        text        NOT NULL,
    "description"    text        NOT NULL,
    "image"          text,
    "source_image"   text,
    "source_content" text,
    "author"         text,
    "updated_at"     date,
    "created_at"     date

);


/* --------------------------------------- CHECKLIST --------------------------------------- */


/* CHECKLIST visiteur (liste de document) */
CREATE TABLE checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(60) NOT NULL

);

/* CHECKLIST utilisateur (liste de document) */
CREATE TABLE user_checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),

    "title" varchar(60) NOT NULL

);

/* CHECKLIST items (un item = une ligne d'une cheklist) */
CREATE TABLE checklist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "item" text NOT NULL

);

/* --------------------------------------- LETTER_TYPE --------------------------------------- */


/* LETTER_TYPE */
CREATE TABLE letter_type (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "sub_category_id" int REFERENCES "sub_category"(id),

    "title"   varchar(60) NOT NULL,
    "content" text        NOT NULL

);

/* --------------------------------------- SIMULATION --------------------------------------- */

/* SIMULATION */
CREATE TABLE simulation (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(60) NOT NULL

);

/* SIMULATION_FIELD => champs des formulaires */
CREATE TABLE simulation_field (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),

    "label"      text    NOT NULL,
    "input_type" text    NOT NULL,
    "obligatory" boolean NOT NULL

);

/* SIMULATION_FIELD_SELECT => options des champs select des formulaires */
CREATE TABLE simulation_field_select (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_field int REFERENCES simulation_field(id),

    "option" text

);

/* SIMULATION_RESULT => resultats des simulations */
CREATE TABLE simulation_result (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),

    "title"   varchar(60) NOT NULL,
    "content" text        NOT NULL

);

/* --------------------------------------- TABLE DE LIAISON --------------------------------------- */



/* -------------------- USER -------------------- */


CREATE TABLE user_has_user_category (

    "user_id"          INT NOT NULL,
    user_category_id INT NOT NULL,

    PRIMARY KEY ("user_id", user_category_id)
);

/* -------------------- MENU -------------------- */

CREATE TABLE category_has_service (

    category_id INT NOT NULL,
    service_id  INT NOT NULL,

    PRIMARY KEY (category_id, service_id)
);

/* -------------------- ARTICLE -------------------- */


/* TABLE LIAISON ARTICLE <=> SUB_CATEGORY */
CREATE TABLE article_has_sub_category (

  article_id      INT NOT NULL,
  sub_category_id INT NOT NULL,

  PRIMARY KEY (article_id, sub_category_id)

);

/* -------------------- CHEACKLIST -------------------- */


/* TABLE LIAISON CHECKLIST <=> SUB_CATEGORY */
CREATE TABLE checklist_has_sub_category (

  checklist_id    INT NOT NULL,
  sub_category_id INT NOT NULL,

  PRIMARY KEY (checklist_id, sub_category_id)

);

/* TABLE LIAISON CHECKLIST <=> CHECKLIST_ITEM */
CREATE TABLE checklist_has_checklist_item (

  checklist_id      INT NOT NULL,
  checklist_item_id INT NOT NULL,

  PRIMARY KEY (checklist_id, checklist_item_id)

);

/* TABLE LIAISON CHECKLIST_USER <=> SUB_CATEGORY */
CREATE TABLE checklist_user_has_sub_category (

  checklist_user_id INT NOT NULL,
  sub_category_id   INT NOT NULL,

  PRIMARY KEY (checklist_user_id, sub_category_id)

);

/* TABLE LIAISON CHECKLIST_USER <=> CHECKLIST_ITEM */
CREATE TABLE checklist_user_has_checklist_item (

  checklist_user_id INT NOT NULL,
  checklist_item_id INT NOT NULL,

  PRIMARY KEY (checklist_user_id, checklist_item_id)

);


COMMIT;