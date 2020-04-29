BEGIN;

CREATE TABLE "user" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name varchar(40) NOT NULL,
    last_name varchar(40) NOT NULL,
    "login" varchar(40) NOT NULL,
    "password" varchar(76) NOT NULL,
    avatar text,
    email varchar(76) NOT NULL

);

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

CREATE TABLE "service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "category" text NOT NULL,
    "name" text NOT NULL,
    logo text NOT NULL,
    link text NOT NULL,
    color text

);

CREATE TABLE "article" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "service_id" int REFERENCES "service"(id),
    title text NOT NULL,
    content text NOT NULL,
    "description" text NOT NULL,
    "image" text,
    updated_at date,
    created_at date

);


CREATE TABLE info (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    identify text,
    "service_name" text NOT NULL,
    service_phone text,
    service_address text,
    service_referent text,
    note_file text

);

CREATE TABLE document (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "service_id" int REFERENCES "service"(id),
    "name" text NOT NULL,
    link text NOT NULL,
    updated_at date,
    created_at date

);

CREATE TABLE todolist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

CREATE TABLE note (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    title text NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

CREATE TABLE letter_type (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "service_id" int REFERENCES "service"(id),
    article_id int REFERENCES article(id),
    title text NOT NULL,
    content text NOT NULL

);

CREATE TABLE simulation (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id int REFERENCES article(id),
    "service_id" int REFERENCES "service"(id),
    simulation_result_id int REFERENCES simulation(id),
    title text NOT NULL

);

CREATE TABLE checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id int REFERENCES article(id),
    simulation_id int REFERENCES simulation(id),
    service_id int REFERENCES service(id),
    title text NOT NULL

);

CREATE TABLE user_checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int REFERENCES "user"(id),
    "service_id" int REFERENCES "service"(id),
    title text NOT NULL

);

CREATE TABLE checklist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    document_id int REFERENCES document(id),
    checklist_id int REFERENCES checklist(id),
    user_checklist_id int REFERENCES user_checklist(id),
    item text

);

CREATE TABLE simulation_field (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation int REFERENCES simulation(id),
    label text NOT NULL,
    input_type text NOT NULL,
    obligatory boolean NOT NULL

);

CREATE TABLE simulation_field_select (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_field_id int REFERENCES simulation_field(id),
    label text

);

CREATE TABLE simulation_result (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    checklist_id int REFERENCES checklist(id),
    title text NOT NULL,
    content text NOT NULL

);

COMMIT;