BEGIN;

/* --------------------------------------- CATEGORY --------------------------------------- */

CREATE TABLE "type" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "name" varchar(100) NOT NULL

);

/* CATEGORY */
CREATE TABLE category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type_id" int REFERENCES type(id),

    "name" varchar(60) NOT NULL,
    "color" text

);

/* SUB_CATEGORY */
CREATE TABLE sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id int REFERENCES category(id),

    "name" varchar(60) NOT NULL

);

/* SERVICES => liens page service */
CREATE TABLE "service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "name" varchar(100) NOT NULL,
    "logo" text         NOT NULL,
    "link" text         NOT NULL
);


/* --------------------------------------- ARTICLE --------------------------------------- */


/* ARTICLES */
CREATE TABLE "article" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title"          varchar(100) NOT NULL,
    "content"        text        NOT NULL,
    "description"    text        NOT NULL,
    "image"          text,
    "source_image"   text,
    "source_content" text,
    "author"         text,
    created_at date NOT NULL DEFAULT DATE( NOW() ),
    updated_at date NOT NULL DEFAULT DATE( NOW() )

);


/* --------------------------------------- CHECKLIST --------------------------------------- */


/* CHECKLIST visiteur (liste de document) */
CREATE TABLE checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(100) NOT NULL

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

    "title"   varchar(100) NOT NULL,
    "content" text        NOT NULL

);

/* --------------------------------------- SIMULATION --------------------------------------- */

/* SIMULATION */
CREATE TABLE simulation (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "title" varchar(100) NOT NULL

);

/* SIMULATION_FIELD => champs des formulaires */
CREATE TABLE simulation_field (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),

    "label"      text         NOT NULL,
    "input_type" varchar(40)  NOT NULL,
    "obligatory" boolean      NOT NULL

);

/* SIMULATION_FIELD_SELECT => options des champs select des formulaires */
CREATE TABLE simulation_field_select (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_field int REFERENCES simulation_field(id),

    "option" text

);

/* --------------------------------------- MENU --------------------------------------- */


/* SIMULATION_RESULT => resultats des simulations */
CREATE TABLE simulation_result (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),

    "title"   varchar(100) NOT NULL,
    "content" text        NOT NULL

);

/* --------------------------------------- USER --------------------------------------- */

/* USER => infos principales obligutoires */
CREATE TABLE "user" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    "first_name" varchar(60) NOT NULL,
    "last_name"  varchar(60) NOT NULL,
    "login"      varchar(76) NOT NULL,
    "password"   varchar(76) NOT NULL,
    "avatar"     text,
    "email"      varchar(76) NOT NULL
);

/* USER_PROFIL => infos secondaires dans le profil */
CREATE TABLE user_profil (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int NOT NULL REFERENCES "user"(id),

    "address"          text,
    "zip_code"         varchar(40),
    "city"             varchar(100),
    "phone_number"     varchar(40),
    "cellphone_number" varchar(40),
    "phone_work"       varchar(40),
    "children"         int,
    "statut"           varchar(40),
    "gender"           varchar(40),
    "age"              int

);

/* INFO => carte avec info par services */
CREATE TABLE user_info (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    category_id int REFERENCES category(id),

    "identify"         text,
    "service_name"     varchar(100) NOT NULL,
    "service_phone"    text,
    "service_address"  text,
    "service_referent" text,
    "note_file"        text

);


/* USER_SERVICE => liens dashbord user */
CREATE TABLE user_service (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int NOT NULL REFERENCES "user"(id),
    user_info_id int REFERENCES "user_info"(id),

    "name"  varchar(100) NOT NULL,
    "logo"  text         NOT NULL,
    "link"  text         NOT NULL

);



/* --------------------------------------- DOCUMENT --------------------------------------- */

/* DOCUMENT => documents des utilistaeurs */
CREATE TABLE document (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    sub_category_id int REFERENCES "sub_category"(id),

    "name"       text NOT NULL,
    "link"       text NOT NULL,
    created_at date NOT NULL DEFAULT DATE( NOW() ),
    updated_at date NOT NULL DEFAULT DATE( NOW() )
);


/* --------------------------------------- TODOLIST --------------------------------------- */


/* TODOLIST => todo des users */
CREATE TABLE todolist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    category_id int REFERENCES "category"(id),

    "title"    varchar(100) NOT NULL,
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
    category_id int REFERENCES "category"(id),

    "title"    varchar(100) NOT NULL,
    "content"  text        NOT NULL,
    "favorite" boolean     NOT NULL DEFAULT FALSE

);

/* --------------------------------------- USER CHECKLIST --------------------------------------- */

/* CHECKLIST utilisateur (liste de document) */
CREATE TABLE user_checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    sub_category_id int REFERENCES "sub_category"(id),

    "title" varchar(100) NOT NULL

);

/* --------------------------------------- TABLE DE LIAISON --------------------------------------- */



/* -------------------- USER -------------------- */


CREATE TABLE user_has_article (

    "user_id"  INT NOT NULL,
    article_id INT NOT NULL,

    PRIMARY KEY ("user_id", article_id)
);





/* -------------------- SERVICE -------------------- */

CREATE TABLE service_has_category (

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

/* TABLE LIAISON ARTICLE <=> LETTER_TYPE*/
CREATE TABLE article_has_letter_type (

  article_id      INT NOT NULL,
  letter_type_id INT NOT NULL,

  PRIMARY KEY (article_id, letter_type_id)

);

/* TABLE LIAISON ARTICLE <=> CHECKLIST */
CREATE TABLE article_has_checklist (

  article_id      INT NOT NULL,
  checklist_id INT NOT NULL,

  PRIMARY KEY (article_id, checklist_id)

);

/* TABLE LIAISON ARTICLE <=> SIMULATION */
CREATE TABLE article_has_simulation (

  article_id      INT NOT NULL,
  simulation_id INT NOT NULL,

  PRIMARY KEY (article_id, simulation_id)

);

/* -------------------- LETTER TYPE -------------------- */


/* TABLE LIAISON ARTICLE <=> SUB_CATEGORY */
CREATE TABLE letter_type_has_sub_category (

  letter_type_id      INT NOT NULL,
  sub_category_id INT NOT NULL,

  PRIMARY KEY (letter_type_id, sub_category_id)

);

/* -------------------- SIMULATION -------------------- */


/* TABLE LIAISON ARTICLE <=> SUB_CATEGORY */
CREATE TABLE simulation_has_sub_category (

  simulation_id      INT NOT NULL,
  sub_category_id INT NOT NULL,

  PRIMARY KEY (simulation_id, sub_category_id)

);

/* -------------------- CHECKLIST -------------------- */


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


/* TABLE LIAISON CHECKLIST_USER <=> CHECKLIST_ITEM */
CREATE TABLE user_checklist_has_checklist_item (

  user_checklist_id INT NOT NULL,
  checklist_item_id INT NOT NULL,

  PRIMARY KEY (user_checklist_id, checklist_item_id)

);


COMMIT;