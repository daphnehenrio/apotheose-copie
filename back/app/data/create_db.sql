BEGIN;

CREATE TABLE user_profil (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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


CREATE TABLE info (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    identify text,
    "service_name" text NOT NULL,
    service_phone text,
    service_address text,
    service_referent text,
    note_file text

);

CREATE TABLE checklist_item (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item text

);

CREATE TABLE document (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    checklist_item_id int REFERENCES checklist_item(id),
    "name" text NOT NULL,
    link text NOT NULL,
    updated_at date,
    created_at date

);

CREATE TABLE todolist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

CREATE TABLE note (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT FALSE NOT NULL

);

CREATE TABLE letter_type (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL

);

CREATE TABLE simulation_result (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL

);

CREATE TABLE simulation_field_select (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text

);

CREATE TABLE simulation_field (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_field_select_id int REFERENCES simulation_field_select(id),
    label text NOT NULL,
    input_type text NOT NULL,
    obligatory boolean NOT NULL

);

CREATE TABLE simulation (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_result_id int REFERENCES simulation_result(id), 
    simulation_field int REFERENCES simulation_field(id),   
    title text NOT NULL

);

CREATE TABLE checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    
    simulation_result_id int REFERENCES simulation_result(id),
    checklist_item_id int REFERENCES checklist_item(id),
    simulation_id int REFERENCES simulation(id),
    title text NOT NULL

);

CREATE TABLE user_checklist (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    checklist_item_id int REFERENCES checklist_item(id),
    title text NOT NULL

);

CREATE TABLE sub_category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    color text

);

CREATE TABLE category (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sub_category_id int REFERENCES sub_category(id),
    title text NOT NULL,
    color text

);

CREATE TABLE "article" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    simulation_id int REFERENCES simulation(id),
    letter_type_id int REFERENCES letter_type(id),
    checklist_id int REFERENCES checklist(id),
    sub_category_id int REFERENCES sub_category(id),
    title text NOT NULL,
    content text NOT NULL,
    "description" text NOT NULL,
    "image" text,
    updated_at date,
    created_at date

);

CREATE TABLE "service" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "article_id" int REFERENCES "article"(id),
    "document_id" int REFERENCES "document"(id),
    "letter_type_id" int REFERENCES "letter_type"(id),
    "simulation_id" int REFERENCES "simulation"(id),  
    "user_checklist_id" int REFERENCES "user_checklist"(id),     
    "category_id" int REFERENCES "category"(id), 
    checklist_id int REFERENCES checklist(id),
    "name" text NOT NULL,
    logo text NOT NULL,
    link text NOT NULL,
    color text

);

CREATE TABLE "user" (

    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_profil_id" int REFERENCES "user_profil"(id),
    "article_id" int REFERENCES "article"(id),
    "document_id" int REFERENCES "document"(id),
    "info_id" int REFERENCES "info"(id),
    "todolist_id" int REFERENCES "todolist"(id),
    "note_id" int REFERENCES "note"(id),
    "letter_type_id" int REFERENCES "letter_type"(id),
    "user_checklist_id" int REFERENCES "user_checklist"(id),
    first_name varchar(40) NOT NULL,
    last_name varchar(40) NOT NULL,
    "login" varchar(40) NOT NULL,
    "password" varchar(76) NOT NULL,
    avatar text,
    email varchar(76) NOT NULL

);

COMMIT;