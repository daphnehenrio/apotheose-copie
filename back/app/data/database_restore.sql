--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg20.04+1)

-- Started on 2020-06-29 16:17:32 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 17131)
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- TOC entry 4137 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


SET default_tablespace = '';

--
-- TOC entry 206 (class 1259 OID 16806)
-- Name: article; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.article (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    content text NOT NULL,
    description text NOT NULL,
    image text,
    source_image text,
    source_content text,
    author text,
    created_at date DEFAULT date(now()) NOT NULL,
    updated_at date DEFAULT date(now()) NOT NULL
);


ALTER TABLE public.article OWNER TO aldahe;

--
-- TOC entry 243 (class 1259 OID 17073)
-- Name: article_has_checklist; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.article_has_checklist (
    article_id integer NOT NULL,
    checklist_id integer NOT NULL
);


ALTER TABLE public.article_has_checklist OWNER TO aldahe;

--
-- TOC entry 242 (class 1259 OID 17068)
-- Name: article_has_letter_type; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.article_has_letter_type (
    article_id integer NOT NULL,
    letter_type_id integer NOT NULL
);


ALTER TABLE public.article_has_letter_type OWNER TO aldahe;

--
-- TOC entry 244 (class 1259 OID 17078)
-- Name: article_has_simulation; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.article_has_simulation (
    article_id integer NOT NULL,
    simulation_id integer NOT NULL
);


ALTER TABLE public.article_has_simulation OWNER TO aldahe;

--
-- TOC entry 241 (class 1259 OID 17063)
-- Name: article_has_sub_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.article_has_sub_category (
    article_id integer NOT NULL,
    sub_category_id integer NOT NULL
);


ALTER TABLE public.article_has_sub_category OWNER TO aldahe;

--
-- TOC entry 205 (class 1259 OID 16804)
-- Name: article_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.article ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 200 (class 1259 OID 16769)
-- Name: category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.category (
    id integer NOT NULL,
    type_id integer,
    name character varying(60) NOT NULL,
    color text
);


ALTER TABLE public.category OWNER TO aldahe;

--
-- TOC entry 199 (class 1259 OID 16767)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 208 (class 1259 OID 16818)
-- Name: checklist; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.checklist (
    id integer NOT NULL,
    title character varying(100) NOT NULL
);


ALTER TABLE public.checklist OWNER TO aldahe;

--
-- TOC entry 248 (class 1259 OID 17098)
-- Name: checklist_has_checklist_item; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.checklist_has_checklist_item (
    checklist_id integer NOT NULL,
    checklist_item_id integer NOT NULL
);


ALTER TABLE public.checklist_has_checklist_item OWNER TO aldahe;

--
-- TOC entry 247 (class 1259 OID 17093)
-- Name: checklist_has_sub_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.checklist_has_sub_category (
    checklist_id integer NOT NULL,
    sub_category_id integer NOT NULL
);


ALTER TABLE public.checklist_has_sub_category OWNER TO aldahe;

--
-- TOC entry 207 (class 1259 OID 16816)
-- Name: checklist_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.checklist ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.checklist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16825)
-- Name: checklist_item; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.checklist_item (
    id integer NOT NULL,
    item text NOT NULL
);


ALTER TABLE public.checklist_item OWNER TO aldahe;

--
-- TOC entry 209 (class 1259 OID 16823)
-- Name: checklist_item_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.checklist_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.checklist_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 230 (class 1259 OID 16962)
-- Name: document; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.document (
    id integer NOT NULL,
    user_id integer,
    sub_category_id integer,
    name text NOT NULL,
    link text NOT NULL,
    created_at date DEFAULT date(now()) NOT NULL,
    updated_at date DEFAULT date(now()) NOT NULL
);


ALTER TABLE public.document OWNER TO aldahe;

--
-- TOC entry 229 (class 1259 OID 16960)
-- Name: document_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.document ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.document_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 16835)
-- Name: letter_type; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.letter_type (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    content text NOT NULL
);


ALTER TABLE public.letter_type OWNER TO aldahe;

--
-- TOC entry 245 (class 1259 OID 17083)
-- Name: letter_type_has_sub_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.letter_type_has_sub_category (
    letter_type_id integer NOT NULL,
    sub_category_id integer NOT NULL
);


ALTER TABLE public.letter_type_has_sub_category OWNER TO aldahe;

--
-- TOC entry 211 (class 1259 OID 16833)
-- Name: letter_type_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.letter_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.letter_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 236 (class 1259 OID 17017)
-- Name: note; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.note (
    id integer NOT NULL,
    user_id integer,
    category_id integer,
    title character varying(100) NOT NULL,
    content text NOT NULL,
    favorite boolean DEFAULT false NOT NULL
);


ALTER TABLE public.note OWNER TO aldahe;

--
-- TOC entry 235 (class 1259 OID 17015)
-- Name: note_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.note ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.note_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 16796)
-- Name: service; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.service (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    logo text NOT NULL,
    link text NOT NULL
);


ALTER TABLE public.service OWNER TO aldahe;

--
-- TOC entry 240 (class 1259 OID 17058)
-- Name: service_has_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.service_has_category (
    category_id integer NOT NULL,
    service_id integer NOT NULL
);


ALTER TABLE public.service_has_category OWNER TO aldahe;

--
-- TOC entry 203 (class 1259 OID 16794)
-- Name: service_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16845)
-- Name: simulation; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.simulation (
    id integer NOT NULL,
    title character varying(100) NOT NULL
);


ALTER TABLE public.simulation OWNER TO aldahe;

--
-- TOC entry 216 (class 1259 OID 16852)
-- Name: simulation_field; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.simulation_field (
    id integer NOT NULL,
    simulation_id integer,
    label text NOT NULL,
    input_type character varying(40) NOT NULL,
    obligatory boolean NOT NULL
);


ALTER TABLE public.simulation_field OWNER TO aldahe;

--
-- TOC entry 215 (class 1259 OID 16850)
-- Name: simulation_field_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.simulation_field ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.simulation_field_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16867)
-- Name: simulation_field_select; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.simulation_field_select (
    id integer NOT NULL,
    simulation_field integer,
    option text
);


ALTER TABLE public.simulation_field_select OWNER TO aldahe;

--
-- TOC entry 217 (class 1259 OID 16865)
-- Name: simulation_field_select_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.simulation_field_select ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.simulation_field_select_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 246 (class 1259 OID 17088)
-- Name: simulation_has_sub_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.simulation_has_sub_category (
    simulation_id integer NOT NULL,
    sub_category_id integer NOT NULL
);


ALTER TABLE public.simulation_has_sub_category OWNER TO aldahe;

--
-- TOC entry 213 (class 1259 OID 16843)
-- Name: simulation_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.simulation ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.simulation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16882)
-- Name: simulation_result; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.simulation_result (
    id integer NOT NULL,
    simulation_id integer,
    title character varying(100) NOT NULL,
    content text NOT NULL
);


ALTER TABLE public.simulation_result OWNER TO aldahe;

--
-- TOC entry 219 (class 1259 OID 16880)
-- Name: simulation_result_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.simulation_result ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.simulation_result_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 16784)
-- Name: sub_category; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.sub_category (
    id integer NOT NULL,
    category_id integer,
    name character varying(60) NOT NULL
);


ALTER TABLE public.sub_category OWNER TO aldahe;

--
-- TOC entry 201 (class 1259 OID 16782)
-- Name: sub_category_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.sub_category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sub_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 232 (class 1259 OID 16984)
-- Name: todolist; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.todolist (
    id integer NOT NULL,
    user_id integer,
    category_id integer,
    title character varying(100) NOT NULL,
    favorite boolean DEFAULT false NOT NULL
);


ALTER TABLE public.todolist OWNER TO aldahe;

--
-- TOC entry 231 (class 1259 OID 16982)
-- Name: todolist_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.todolist ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.todolist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 234 (class 1259 OID 17002)
-- Name: todolist_item; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.todolist_item (
    id integer NOT NULL,
    todolist_id integer,
    content text NOT NULL
);


ALTER TABLE public.todolist_item OWNER TO aldahe;

--
-- TOC entry 233 (class 1259 OID 17000)
-- Name: todolist_item_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.todolist_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.todolist_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 198 (class 1259 OID 16762)
-- Name: type; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.type (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.type OWNER TO aldahe;

--
-- TOC entry 197 (class 1259 OID 16760)
-- Name: type_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16897)
-- Name: user; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    first_name character varying(60) NOT NULL,
    last_name character varying(60) NOT NULL,
    login character varying(76) NOT NULL,
    password character varying(76) NOT NULL,
    avatar text,
    email character varying(76) NOT NULL,
    folder_name text NOT NULL,
    validation boolean DEFAULT false,
    creation_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    validation_key text NOT NULL
);


ALTER TABLE public."user" OWNER TO aldahe;

--
-- TOC entry 238 (class 1259 OID 17038)
-- Name: user_checklist; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_checklist (
    id integer NOT NULL,
    user_id integer,
    sub_category_id integer,
    title character varying(100) NOT NULL
);


ALTER TABLE public.user_checklist OWNER TO aldahe;

--
-- TOC entry 249 (class 1259 OID 17103)
-- Name: user_checklist_has_checklist_item; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_checklist_has_checklist_item (
    user_checklist_id integer NOT NULL,
    checklist_item_id integer NOT NULL
);


ALTER TABLE public.user_checklist_has_checklist_item OWNER TO aldahe;

--
-- TOC entry 237 (class 1259 OID 17036)
-- Name: user_checklist_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.user_checklist ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_checklist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 239 (class 1259 OID 17053)
-- Name: user_has_article; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_has_article (
    user_id integer NOT NULL,
    article_id integer NOT NULL
);


ALTER TABLE public.user_has_article OWNER TO aldahe;

--
-- TOC entry 221 (class 1259 OID 16895)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 16922)
-- Name: user_info; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_info (
    id integer NOT NULL,
    user_id integer,
    category_id integer,
    identify text,
    service_name character varying(100) NOT NULL,
    service_phone text,
    service_address text,
    service_referent text,
    note_file text
);


ALTER TABLE public.user_info OWNER TO aldahe;

--
-- TOC entry 225 (class 1259 OID 16920)
-- Name: user_info_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.user_info ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16907)
-- Name: user_profil; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_profil (
    id integer NOT NULL,
    user_id integer NOT NULL,
    address text,
    zip_code character varying(40),
    city character varying(100),
    phone_number character varying(40),
    cellphone_number character varying(40),
    phone_work character varying(40),
    children integer,
    statut character varying(40),
    gender character varying(40),
    age integer
);


ALTER TABLE public.user_profil OWNER TO aldahe;

--
-- TOC entry 223 (class 1259 OID 16905)
-- Name: user_profil_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.user_profil ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_profil_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 228 (class 1259 OID 16942)
-- Name: user_service; Type: TABLE; Schema: public; Owner: aldahe
--

CREATE TABLE public.user_service (
    id integer NOT NULL,
    user_id integer NOT NULL,
    user_info_id integer,
    name character varying(100) NOT NULL,
    logo text NOT NULL,
    link text NOT NULL
);


ALTER TABLE public.user_service OWNER TO aldahe;

--
-- TOC entry 227 (class 1259 OID 16940)
-- Name: user_service_id_seq; Type: SEQUENCE; Schema: public; Owner: aldahe
--

ALTER TABLE public.user_service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4087 (class 0 OID 16806)
-- Dependencies: 206
-- Data for Name: article; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.article (id, title, content, description, image, source_image, source_content, author, created_at, updated_at) FROM stdin;
9	Mariage en France	## Qui peut se marier ?\n\n### Majorité\n\nIl faut être majeur pour se marier.\n\n### Monogamie\n\nVous ne devez pas être déjà marié, que ce soit au regard de la loi française ou d'une loi étrangère.\n\n  **Attention : **une personne en instance de divorce ou simplement séparée de corps est considérée comme encore mariée.\n\nPar contre, il est possible d'être déjà engagé par un Pacs, conclu ou non avec le futur époux, étant donné que le mariage dissout automatiquement le Pacs.\n\n### Absence de lien de parenté ou d'alliance\n\nUn [lien de parenté ou d'alliance trop proche](https://www.service-public.fr/particuliers/vosdroits/F802) est une cause d'empêchement du mariage.\n\n### Consentement\n\nChacun doit consentir au mariage de façon libre et éclairée.\n\nSans un consentement libre et éclairé, le mariage peut être annulé à la demande d'un des époux ou du procureur de la République. Le délai maximum, pour faire cette demande, est de 5 ans.\n\n## Où peut-on se marier ?\n\nLe mariage est célébré dans une commune avec laquelle au moins l'un des deux époux a des liens durables, de façon directe ou indirecte (c'est-à-dire via un parent).\n\n[L'officier de l'état civil](https://www.service-public.fr/particuliers/glossaire/R31350) s'assure dans tous les cas qu'au moins l'une des personnes a des liens durables avec la commune.\n\n-   [Commune du domicile(actif)](https://www.service-public.fr/particuliers/vosdroits/F930#tab-1104000071725265503-cas1)\n-   [Commune de résidence](https://www.service-public.fr/particuliers/vosdroits/F930#tab-1104000071725265503-cas2)\n-   [Commune d'un parent](https://www.service-public.fr/particuliers/vosdroits/F930#tab-1104000071725265503-cas3)\n\n#### Commune du domicile\n\nLe mariage peut être célébré dans la commune où l'un des futurs époux a son [domicile](https://www.service-public.fr/particuliers/glossaire/R14609) établi depuis 1 mois continu minimum.\n\n[Revenir au sommaire de cette partie](https://www.service-public.fr/particuliers/vosdroits/F930#ui-tab-47svd6ntjgyt1inhfjr9fe)\n\n  **À savoir : **[le mariage en France d'un couple étranger](https://www.service-public.fr/particuliers/vosdroits/F2558) qui n'habite pas en France est possible à son consulat ou dans une commune d'une [collectivité d'outre-mer (Com)](https://www.service-public.fr/particuliers/glossaire/R49970) ou de Nouvelle-Calédonie.\n\n## Dépôt du dossier de mariage\n\n### Lieu de dépôt du dossier\n\nLe dossier doit être déposé à la mairie de la commune choisie pour la cérémonie.\n\n##### Où s’adresser ?\n\nPivot Local           \n\nPrécisez votre ville ou votre code postal Le choix d’une commune dans la liste de suggestion déclenchera automatiquement une mise à jour du contenu\n\n-   [Mairie](https://lannuaire.service-public.fr/ "Mairie - lannuaire.service-public.fr")\n    \n\n### Pièces à produire\n\nChacun des futurs époux doit fournir les pièces suivantes :\n\n-   Original et photocopie de la pièce d'identité\n-   Justificatif de domicile ou de résidence (facture d'eau, d'électricité ou de gaz, avis d'imposition, justificatif de taxe d'habitation...)\n-   Informations sur les [témoins](https://www.service-public.fr/particuliers/vosdroits/F1248) (noms, prénoms, date et lieu de naissance, profession et domicile, copie de leur titre d'identité)\n\n-   [Acte de naissance](https://www.service-public.fr/particuliers/vosdroits/F1427) (copie intégrale ou extrait avec filiation)  \n    -   Si le service qui délivre l'acte est français, il doit être de 3 mois maximum ,\n    -   Si le service qui délivre l'acte est étranger, il doit être de 6 mois maximum. Cette condition de délai ne s'applique pas si le système du pays ne prévoit pas la mise à jour des actes.\n\nSi l'un des futurs époux est sous tutelle ou curatelle, il faut fournir le justificatif de l'information de la personne chargée de la mesure de protection.\n\n  **À savoir : **le point de départ du délai de validité de l'acte de naissance est apprécié au jour du dépôt du dossier du mariage, et non au jour de sa célébration. Toutefois, si avant la célébration du mariage, l'état civil d'un des futurs époux a été modifié, celui-ci doit remettre une copie de son acte mis à jour à l'officier de l'état civil chargé de célébrer le mariage.\n\nSuivant les cas, d'autres pièces peuvent être demandées :\n\n-   S'il est étranger, le futur époux doit fournir des documents spécifiques à sa nationalité (se renseigner à la mairie ou au consulat). Il est possible de produire un extrait d'acte de naissance plurilingue.\n-   Si un [contrat de mariage](https://www.service-public.fr/particuliers/vosdroits/F948) est conclu, il faut fournir le certificat de notaire.\n-   Si les époux ont eu des enfants avant le mariage, le livret de famille sera mis à jour avec l'acte de mariage.\n-   Dans certaines situations familiales particulières (veuvage ou divorce, par exemple).\n\n## Instruction du dossier\n\n### Audition préalable des futurs époux\n\nL'officier d'état civil auditionne les futurs époux ensemble. S'il l'estime nécessaire, il peut également demander à s'entretenir séparément avec l'un ou l'autre.\n\nCette audition est obligatoire mais peut, exceptionnellement, ne pas avoir lieu, en cas d'impossibilité ou si elle n'apparaît pas nécessaire à l'officier d'état civil.\n\nL’officier peut demander la présence d'un traducteur ou d'un interprète, si l'un des futurs époux est sourd, muet ou ne comprend pas la langue française.\n\nSi un des futurs époux réside à l'étranger, l'audition peut être effectuée par l'autorité diplomatique ou consulaire territorialement compétente.\n\n### Contestation du dossier de mariage\n\nQue ce soit avant ou après l'audition, la mairie ne peut pas d'elle-même refuser un dossier de mariage. Mais elle peut demander au [procureur de la République](https://www.service-public.fr/particuliers/glossaire/R1123) d'interdire la célébration du mariage souhaité.\n\n## Publication des bans\n\nL'annonce officielle du prochain mariage est réalisée par la publication d'avis appelés *bans*.\n\nIls contiennent les prénoms, noms, professions, domiciles ou résidences des futurs époux, ainsi que le lieu où le mariage doit être célébré.\n\nIls sont affichés à la porte de la mairie du mariage, ainsi qu'à celle des mairies où l'un ou l'autre des époux a son domicile, pendant 10 jours.\n\n## Date du mariage\n\nLe mariage ne peut pas être célébré avant le 10e jour qui suit la publication des bans. Par exemple, si les bans sont publiés le 4 juin 2020, le mariage peut être célébré à partir du 14 juin 2020. De plus, il doit être célébré dans l'année qui suit l'expiration de ce délai de 10 jours.\n\nLe jour de la célébration du mariage est fixé en accord avec la mairie et les futurs époux, sous réserve que le dossier de mariage soit complet et actualisé.\n\n## Célébration du mariage\n\n### Lieu\n\nLe mariage doit être célébré à la mairie, dans une salle ouverte au public.\n\nSauf opposition du [procureur de la République](https://www.service-public.fr/particuliers/glossaire/R1123), le maire peut célébrer le mariage au sein de tout bâtiment communal (par exemple, une salle des fêtes) à condition que le bâtiment soit situé sur le territoire de la commune.\n\nToutefois, en cas d'empêchement grave d'un des futurs époux, le procureur de la République peut demander à l'officier d'état civil de se déplacer à son domicile ou résidence. En cas de péril imminent de mort, l’officier de l’état civil pourra même se déplacer au domicile ou à la résidence de l’un des futurs époux sans intervention du procureur.\n\n### Déroulement\n\nLa célébration transforme les futurs époux en époux effectifs.\n\nElle doit être [faite par le maire ou un adjoint](https://www.service-public.fr/particuliers/vosdroits/F31476), en présence des futurs époux et des témoins.\n\nLors de la célébration, chaque futur époux confirme son engagement à respecter les obligations du mariage.\n\nUn traducteur-interprète peut être présent.\n\nUn [livret de famille](https://www.service-public.fr/particuliers/vosdroits/F1345) est délivré aux époux.\n\nDans les jours qui suivent, ils peuvent demander à la mairie un [extrait ou une copie intégrale de l'acte de mariage](https://www.service-public.fr/particuliers/vosdroits/F1432).	Pour se marier en France, il faut respecter certaines conditions d'âge, de résidence, d'absence de lien de parenté. Un dossier contenant certains documents obligatoires doit être déposé à la mairie de la commune choisie pour la cérémonie.	https://live.staticflickr.com/900/42830799471_ef6480ef44_b.jpg	Yann Cœuru	https://www.service-public.fr/	\N	2019-09-12	2020-05-12
10	Trouver sa formation en un clic\n	# Trouver sa formation en un clic\n\nBesoin de booster vos qualifications ou un projet de reconversion professionnelle ? Le moteur de recherche intégré au site pole-emploi.fr vous permet de vous enquérir des offres de stages, tant au niveau régional que national, pour affiner votre projet en toute autonomie.\n\n![Trouver sa formation en un clic](https://www.pole-emploi.fr/files/live/sites/PE/files/actualites/formationclic19196.jpg)\n\nUne formation de cuisinier à Paris, en gestion commerciale à Bordeaux ou encore en communication événementielle en région Lyonnaise ? Partez à la chasse aux compétences en cliquant tout simplement sur la bulle « [Trouver ma formation](https://www.pole-emploi.fr/candidat/je-me-forme-@/formation/) » sur le site de Pôle emploi.  \n\\- Pas besoin d'avoir en tête l'intitulé exact d'une formation. Il vous suffit d'indiquer un métier, un domaine ou bien encore une qualification, ainsi qu'un lieu (des listes déroulantes facilitent la requête). Le moteur de recherche recense les formations disponibles, les modules éligibles au compte personnel de formation (CPF), de plus en plus nombreux, étant identifiés par un logo.  \n\\- Affinez ensuite votre requête en cochant les critères qui vous intéressent tout particulièrement : formation certifiante, niveau de sortie, période de formation souhaitée, etc.\n\nVous pourrez ainsi accéder à une information enrichie sur une offre de formations ciblées répondant au plus près à vos besoins. Un gain de temps précieux !\n\n## LES ATOUTS DE LA RECHERCHE « CONNECTÉE »\n\nMieux vaut débuter l'exploration à partir de votre espace personnel sur pole-emploi.fr (tuile « Ma formation, mon accompagnement\\* »). Car une fois connecté avec votre identifiant et votre mot de passe, vous aurez, en cliquant sur la formation voulue, le nombre d'heures disponibles sur votre compte CPF, qui pourront éventuellement être mobilisées pour le financement de votre formation. Vous pourrez aussi vous positionner directement sur un rendez-vous d'information, si l'organisme de formation concerné en propose. Et votre démarche (date de rendez-vous, contact) sera automatiquement restituée dans votre espace personnel, depuis lequel vous pouvez contacter votre conseiller.\n\n## POUR TOUTES QUESTIONS SUR VOTRE PROJET DE FORMATION\n\nN’hésitez pas à contactez votre conseiller qui vous aidera à peaufiner votre projet, notamment son volet financier.	Besoin de booster vos qualifications ou un projet de reconversion professionnelle ? Le moteur de recherche intégré au site pole-emploi.fr vous permet de vous enquérir des offres de stages, tant au niveau régional que national, pour affiner votre projet en toute autonomie.	https://www.publicdomainpictures.net/pictures/290000/nahled/training-workshop.jpg	https://www.publicdomainpictures.net/	https://www.pole-emploi.fr/	\N	2020-05-12	2020-05-12
8	Inscription à Pôle emploi : comment faire ?	## Quand s'inscrire à Pôle emploi ?\n\nDès qu'un travailleur se retrouve sans activité, il est tenu de s'inscrire à Pôle emploi quel que soit le motif de rupture du contrat de travail (fin de CDD, démission, licenciement ou encore rupture conventionnelle de CDI).Pour s'inscrire à Pôle emploi, il faut avoir le droit d'accéder au marché du travail et pour les étrangers, être en situation régulière.Les salariés en cours de préavis, les salariés en contrat de sécurisation professionnelle, en arrêt de travail ou en congé maternité, les personnes en stage en entreprise ne peuvent effectuer une inscription à Pôle emploi. Dans les fait, ces personnes ne sont pas en situation de chômage.\n\n## Comment s'inscrire à Pôle emploi ?\n\nDeux cas se présentent :\nPour la première inscription ou pour une réinscription après plus de 6 mois, un formulaire unique est à remplir. Il comprend la demande d'inscription, la demande d'allocations chômage ainsi que le choix de la date, de l'heure de l'entretien avec un conseiller Pôle emploi (parmi 3 propositions) et la préparation de cet entretien. Après validation du dossier en ligne, la réception de la convocation à l'entretien se fait dans les 72 heures.\nPour une réinscription moins de 6 mois après votre dernière inscription, l'entretien n'est pas nécessaire : la validation de l'inscription se fait directement après l'enregistrement du formulaire en ligne. Les éléments déjà connus de Pôle emploi sont pré remplis, permettant une réinscription plus rapide.  \n\n## Quels documents fournir ?\n\nPlusieurs documents sont exigés pour la constitution du dossier d'inscription à Pôle emploi :  \n\\- le numéro de Sécurité sociale inscrit sur la carte vitale\n\n-   un relevé d'identité bancaire (RIB) afin d'envoyer les allocations au demandeur\n-   un [curriculum vitae](https://www.journaldunet.com/management/emploi-cadres/curriculum-vitae/) (CV)\n-   une pièce d'identité\n-   une [attestation Pôle emploi](https://www.journaldunet.fr/management/guide-du-management/1199721-attestation-pole-emploi-ex-attestation-assedic/) fournie par l'employeur (pour ceux qui ont déjà été salariés précédemment)\n\nPar la suite, il est demandé aux demandeurs d'emploi de remplir un formulaire d'inscription qui demande des renseignements concernant :\n\n-   la situation administrative : nom, nationalité, situation matrimoniale, domicile, numéro de téléphone\n-   la demande d'allocations : périodes d'emploi et période sans emploi, montant des salaires perçus\n-   les connaissances : formations et projet professionnel, type d'emploi recherché, diplômes obtenus, qualifications acquises ou encore degré de mobilité\n-   le rendez-vous avec un conseiller Pôle emploi. Celui-ci a lieu dans le mois qui suit l'inscription. Il est obligatoire sous peine de radiation\n\nUne fois l'inscription terminée, Pôle emploi fournit une notice d'information sur les droits et les obligations du demandeur d'emploi ainsi qu'une attestation d'inscription également connue sous le terme de carte de demandeur d'emploi.\n\n## Inscription à Pôle emploi par Internet\n\nIl est possible de s'inscrire en ligne 24h/24 et 7j/7 sur le site [www.pole-emploi.fr](http://candidat.pole-emploi.fr/candidat/espacepersonnel/creation/situationdemandeinscription/). Dans ce cas, il est nécessaire de remplir un formulaire en ligne. Pour y accéder, il est nécessaire de cliquer sur le lien "m'inscrire/me réinscrire". Pour remplir le formulaire il faut se munir des documents demandés (voir plus haut).\n\n## Inscription à Pôle emploi par téléphone\n\nLes personnes qui n'ont pas accès à internet peuvent s'inscrire en téléphonant au 39 49. Un conseiller répond à leurs questions, constitue le dossier de demande d'inscription et organise le rendez-vous. Dans ce cas, le dossier et la convocation sont envoyés directement chez le demandeur d'emploi.\n\n## Inscription à Pôle emploi après une démission\n\nA la suite d'[une démission](https://www.journaldunet.fr/management/guide-du-management/1199905-demission-comment-la-donner/), le passage par la case Pôle emploi est une obligation. Mais il faut attendre que le contrat de travail soit rempli. En d'autres termes, vous ne pouvez pas vous inscrire alors que vous êtes encore en poste.\n\n## Demande d'allocations\n\nCes documents ne sont pas obligatoires pour l'inscription. Toutefois, leur absence causera un délai dans le calcul des allocations (nous parlons ici de l'allocation chômage et non d'aides comme [le RSA](https://www.journaldunet.com/management/guide-du-management/1159725-rsa-2020-le-montant-du-rsa-augmente-de-0-9/)). Il faut produire :\n\n-   [L'attestation originale Pôle emploi](https://www.journaldunet.fr/management/guide-du-management/1199721-attestation-pole-emploi-ex-attestation-assedic/) de l'employeur, remise par l'employeur au moment de la rupture du dernier contrat de travail ;\n-   La photocopie de la carte de Sécurité sociale ;\n-   Un relevé d'identité bancaire (RIB).\n\n## Que est le délai d'inscription à Pôle emploi ?\n\nLe délai d'inscription à Pôle emploi est le suivant :- Dés le lendemain de la rupture du contrat de travail, vous pouvez vous inscrire à Pôle emploi. L'inscription doit s'effectuer dans les 12 mois qui suivent la rupture du contrat de travail. Sinon, il est impossible de bénéficier des allocations chômage.\n\n	L'inscription à Pôle emploi est une formalité très importante pour les personnes en recherche d'emploi. Voici tout ce qu'il faut savoir sur l'inscription, les documents à fournir...	https://img-0.journaldunet.com/8DXsK8W0PZhzGX_hckIrIEC1w5A=/1280x/smart/8788caa7d3e149bfad66c8fe7815816b/ccmcms-jdn/10673955.jpg	 © pasiphae - 123RF	https://www.journaldunet.fr/	\N	2019-02-26	2020-05-12
13	Assurance responsabilité civile	### Qu'est-ce qu'une assurance responsabilité civile ?\n\nL’assurance de responsabilité civile (ci-après dénommée "RC") a pour objet de garantir le risque auquel toute personne est exposée, de devoir réparer le dommage causé involontairement à autrui.\n\n### Comment votre responsabilité civile peut-elle être engagée?\n\n**Le Code civil prévoit que vous êtes responsable des [dommages](https://www.abe-infoservice.fr/glossaire?title=dommages "dommages") causés par :**\n\n-   votre faute, votre imprudence ou négligence,\n-   vos enfants, s'ils ont leur résidence habituelle chez vous et que vous exercez sur eux l’autorité parentale,\n-   vos ascendants vivant sous votre toit,\n-   vos préposés (femme de ménage, baby-sitter...),\n-   vos animaux, ou ceux que vous gardez,\n-   les objets que vous possédez, ou avez loués ou empruntés,\n-   un défaut d'entretien ou un vice de construction du logement dont vous êtes propriétaire (même si le logement est loué ou inoccupé).\n\n  \n**Il existe cependant des causes exonératoires de responsabilité, telles que le cas de force majeure (événement extérieur, imprévisible et irrésistible) ou la faute de la victime.**\n\n### Quels risques couvre l'assurance responsabilité civile ?\n\nL’assurance RC a pour objet de** prendre en charge les conséquences pécuniaires de la responsabilité civile qui incombe à l’assuré du fait des [dommages](https://www.abe-infoservice.fr/glossaire?title=dommages "dommages") corporels, matériels et immatériels causés à des tiers**. En cas de [sinistre](https://www.abe-infoservice.fr/glossaire?title=sinistre "sinistre"), l’[assureur](https://www.abe-infoservice.fr/glossaire?title=assureur "assureur") se substitue à l’assuré pour indemniser la victime, sous réserve de l’application des [franchise](https://www.abe-infoservice.fr/glossaire?title=franchise "franchise") et [plafond de garantie](https://www.abe-infoservice.fr/glossaire?title=plafond%20de%20garantie "plafond de garantie").  \n  \nEn revanche, l’assurance RC vie privée n’a pas vocation à couvrir les [dommages](https://www.abe-infoservice.fr/glossaire?title=dommages "dommages") résultant :\n\n-   de l’exercice d’une activité professionnelle (qui requiert la souscription d’une assurance RC professionnelle à part entière),\n-   d’une faute intentionnelle,\n-   de chiens dangereux (sauf [extension de garantie](https://www.abe-infoservice.fr/glossaire?title=extension%20de%20garantie "extension de garantie")),\n-   de véhicules à moteur (qui font l’objet d’une assurance RC obligatoire spécifique).\n\n  \n**De même, les [dommages](https://www.abe-infoservice.fr/glossaire?title=dommages "dommages") que vous pourriez vous causer ou causer à vos proches ne sont pas pris en charge par l’assurance RC vie privée.**\n\n### A quoi faut-il faire attention avant de souscrire une assurance responsabilité civile ?\n\nAvant de souscrire une assurance, **faites le point sur vos contrats d’assurance multirisques habitation ou responsabilité civile vie privée en cours, et sur l’étendue des garanties**. Il faut notamment vérifier si toutes les personnes partageant votre logement, et si l’ensemble des activités que vous pratiquez dans le cadre de la vie privée (activités sportives, associatives, etc.), sont couvertes.  \n  \n**D’autres contrats d’assurance peuvent également inclure une garantie RC, comme l’[assurance scolaire](https://www.abe-infoservice.fr/glossaire?title=assurance%20scolaire "assurance scolaire") ou l’assurance d’un club de sport. Veiller à éviter les doublons pour limiter les éventuels surcoûts.**  \n  \nSi vous et/ou vos proches partez à l’étranger, l’assurance vous suit en principe. Attention cependant aux **éventuelles exclusions géographiques de garanties**, prévues aux [conditions générales](https://www.abe-infoservice.fr/glossaire?title=conditions%20g%C3%A9n%C3%A9rales "conditions générales") de votre contrat d’assurance.  \n  \nEn cas d’insuffisance de couverture, vous pouvez vous rapprocher d’un [assureur](https://www.abe-infoservice.fr/glossaire?title=assureur "assureur") ou d’un intermédiaire d’assurance (courtier, agent général, agence bancaire), qui pourra vous proposer des garanties d’assurance RC correspondant à vos besoins.	Cette garantie, dénommée "responsabilité civile vie privée", se trouve habituellement comprise dans les assurances multirisques habitation. Nous vous invitons toutefois à bien examiner son contenu, pour vérifier si elle est adaptée à votre situation et à vos activités personnelles.	https://www.abe-infoservice.fr/sites/default/files/medias/rc_0.jpg	https://www.abe-infoservice.fr/	https://www.abe-infoservice.fr/	\N	2020-03-27	2020-05-12
1	Comment faire une demande APL	**Comment faire une demande CAF : le dossier APL**  \n  \n**La demande d&#39;aide personnalisée au logement se fait auprès de la CAF ou de la MSA** , en fonction de l&#39;organisme dont vous dépendez en termes de protection sociale (général ou agricole) et doit être effectuée dès l&#39;entrée dans le logement.  \n  \nAuparavant, il était possible de faire une demande au format papier à l&#39;aide du formulaire dédié. Désormais, **la demande APL s&#39;effectue uniquement en ligne pour les locataires**   **que vous soyez allocataire ou non**.  \n  \n[Faire une demande APL](https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement)  \n  \nSachez que si vous n&#39;avez pas accès à une connexion internet, vous pouvez vous rendre directement dans un point d&#39;accueil de la CAF afin de procéder à votre demande d&#39;aide personnalisée au logement en ligne. Retrouvez l&#39;adresse de la CAF la plus proche de chez vous [dans cet article](https://www.aide-sociale.fr/contacter-caf/).\n  \nPour cela, il vous faut posséder un numéro d&#39;allocataire :  \n  \n- **Si vous êtes allocataire** : Dans ce cas, votre dossier doit être à jour (déclaration de changement de situation, déclaration annuelle des ressources). Les éléments contenus seront pris en compte pour l&#39;étude des droits.  \n- **Si vous n&#39;êtes pas allocataire** : Dans ce cas, il vous sera demandé de renseigner plus d&#39;informations. En effet, la CAF doit connaître l&#39;ensemble de votre situation (familiale, [les enfants à charge](https://www.aide-sociale.fr/caf-enfant-a-charge/), vos revenus et ceux du partenaire …). Il sera alors possible d&#39;étudier votre demande d&#39;APL. Découvrez dans cet article la marche à suivre [pour créer un compte CAF](https://www.aide-sociale.fr/caf-inscription-allocataire/).  \n  \nAfin de remplir correctement votre demande APL munissez-vous des documents suivants :  \n  \n![](https://www.aide-sociale.fr/wp-content/uploads/2018/05/documents-demande-apl-en-ligne-11.jpg)  \n  \nLe dossier APL est ensuite étudié auprès de l&#39;organisme dont vous dépendez qui détermine vos droits ou non à l&#39;APL ([voir les conditions d&#39;attribution](https://www.aide-sociale.fr/apl-caf/)).\n  \n**Comment remplir le formulaire de demande APL de la CAF ?**  \n  \n**Le dossier APL de la CAF doit être rempli uniquement sur internet et ne concerne que les locataires**. En effet, les conditions d&#39;attribution pour les propriétaires sont devenues plus restrictives qu&#39;auparavant (ce qui engendre une baisse des bénéficiaires). Si vous êtes propriétaire, consultez [notre article](https://www.aide-sociale.fr/allocation-logement-proprietaire/) consacré à l&#39;APL Accession.  \n  \n_Notez qu&#39;en cas de déménagement, il vous faut refaire une demande d&#39;APL en respectant les étapes indiquées ci-dessous. Un simple_ [_changement d&#39;adresse CAF_](https://www.aide-sociale.fr/changement-adresse-caf/) _ne suffit pas._  \n  \nAvant de commencer à remplir votre dossier APL, munissez-vous de tous les justificatifs qui vous seront utiles (voir paragraphe ci-dessus). Sachez également qu&#39;à tout moment, vous pourrez sauvegarder votre dossier afin de le terminer plus tard.  \n  \n**Première partie : demande d&#39;aide au logement**  \n  \nSachez tout d&#39;abord que la demande d&#39;APL ne peut se faire qu&#39;en ligne et qu&#39;elle ne concerne que les locataires. De nombreuses informations vous seront demandées.  \n  \n- Si vous n&#39;êtes pas allocataire de la CAF : Vous devez vous rendre à la page consacrée sur [https://wwwd.caf.fr/demanderlaideaulogement](https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement)  \n- Si vous êtes allocataire : Accédez à la rubrique &quot;Demande de prestation&quot; de votre compte  \n  \n_ **À noter** _ _: Les captures d&#39;écran qui suivent concernent la demande d&#39;APL pour non-allocataire. Si vous êtes déjà allocataire de la CAF au moment de la constitution de votre dossier, certains éléments ne vous seront pas demandés notamment concernant vos informations personnelles (e-mail, nom, prénom, etc.). Votre demande sera donc plus rapide à remplir._\n\n![](https://www.aide-sociale.fr/wp-content/uploads/2018/05/accueil-demande-en-ligne-apl-16.jpg)\n\n**Saisissez tout d&#39;abord le code postal du domicile pour lequel vous souhaitez faire la demande d&#39;APL**. Il vous faudra ensuite indiquer que vous êtes locataire de votre logement ainsi que votre situation personnelle comme indiqué sur l&#39;image ci-dessous.\n\n![](https://www.aide-sociale.fr/wp-content/uploads/2018/05/demande-aide-au-logement-infos-personelle-11.jpg)\n\nLaissez-vous guider en cochant les différentes informations qui vous sont demandées (êtes-vous locataire ou sous-locataire, s&#39;agit-il d&#39;une cité universitaire si vous êtes étudiant …) jusqu&#39;à arriver à la page des conditions d&#39;utilisation du service en ligne. **Vous devez les accepter afin de continuer votre demande d&#39;APL**.\n\nIl faudra ensuite saisir une adresse e-mail valide qui sera utilisée par la CAF afin de vous contacter. Puis votre état civil vous sera demandé comme indiqué sur cette image :\n\n![](https://www.aide-sociale.fr/wp-content/uploads/2018/05/saisie-demande-apl-en-ligne-13.jpg)\n\nRenseignez ensuite les informations concernant votre situation familiale (célibataire, en couple, nombres d&#39;enfants à charge…) puis votre situation professionnelle (salarié, demandeur d&#39;emploi …).\n\nEnfin, il faudra renseigner votre Relevé d&#39;Identité Bancaire qui sera utilisé par la CAF pour vous verser le montant de votre aide personnalisée au logement. Il vous permettra également de recevoir le versement d&#39;autres aides de la CAF comme [la prime d&#39;activité](https://www.aide-sociale.fr/calcul-prime-activite-demande/) par exemple.\n\n_Pour la suite du dossier APL en ligne, nous ne pouvons pas vous présenter de captures d&#39;écran. En effet, il est impossible de saisir les informations demandées sans effectuer réellement la demande d&#39;APL._\n\nSuivez simplement les étapes suivantes :\n\n- **Les informations sur votre bailleur vous seront demandées** (propriétaire, agence immobilière, ou encore organisme locatif). Vous les trouverez sur votre contrat de location. Il convient de connaître les particularités en cas [de location auprès de sa famille](https://www.aide-sociale.fr/apl-location-famille/)\n- **Renseignez les informations sur le logement** à l&#39;origine de la demande telle que le loyer hors charge, l&#39;adresse, la surface …\n- Il vous faudra également indiquer les revenus que vous percevez et que vous avez perçus depuis les deux dernières années. **La CAF étudiera ces revenus pour décider du montant de l&#39;APL auquel vous pouvez prétendre**.\n\nUne fois votre demande d&#39;aide au logement en ligne complétée, il vous suffira de valider le dossier pour qu&#39;il soit envoyé à votre CAF.  Vous serez informé dans les plus brefs délais de l&#39;ouverture de vos droits ou non à l&#39;APL.\n\n**Point important** : Le dossier APL en ligne à une valeur officielle. Lorsque vous remplissez les différents champs, vous vous engagez à saisir les véritables informations. Il se peut que la CAF vérifie les renseignements que vous avez saisis lors de votre demande d&#39;aide au logement. Si un versement injustifié était constaté, la CAF vous réclamera le trop-perçu (voir [les explications](https://www.aide-sociale.fr/caf-trop-percu/)).\n\n**Deuxième partie : attestation de loyer**\n\n**L&#39;attestation de loyer est à remplir lors d&#39;une demande d&#39;APL**. Elle doit être complétée par le propriétaire du logement faisant l&#39;objet de la demande puis transmise à la CAF afin que votre dossier soit traité. Vous pouvez la télécharger directement [en cliquant ici](https://www.aide-sociale.fr/wp-content/uploads/2018/05/attestation-loyer-apl-21.pdf).\n\nLors de l&#39;entrée dans les lieux, vous avez 2 options possibles pour le paiement de l&#39;APL :\n\n- **Soit l&#39;aide est versée directement au bailleur**  : Dans ce cas, le propriétaire ou le bailleur doit remplir la demande de versement direct disponible [ici](https://www.aide-sociale.fr/wp-content/uploads/2018/05/demande-versement-apl-proprietaire-22.pdf)\n- **Soit l&#39;aide vous est versée directement**  : Dans ce cas, la partie concernant la demande de versement directe n&#39;est pas à remplir\n\n**Les pièces justificatives à fournir pour la demande APL CAF**\n\nAfin que votre dossier de demande d&#39;APL soit traité par la CAF, vous devez fournir les pièces justificatives demandées par exemple l&#39;attestation de loyer dont les explications sont disponibles dans le paragraphe précédent.\n\nPour cela deux cas sont à distinguer :\n\n- **Vous êtes allocataire CAF au moment de votre demande APL** : Vous pouvez télécharger directement les documents demandés depuis votre compte\n- **Vous n&#39;êtes pas encore allocataire CAF** : La demande d&#39;APL s&#39;accompagne de la création de votre compte CAF qui sera actif lorsque vous recevrez vos identifiants. Vous pourrez alors télécharger les documents directement en ligne. Cependant cela peut prendre du temps, **nous vous conseillons donc d&#39;apporter les justificatifs demandés directement dans votre agence CAF** afin que votre demande d&#39;APL soit traitée le plus rapidement possible.\n\n**En savoir plus sur la CAF et le dossier APL**\n\nUne fois que vous avez complété votre demande d&#39;APL en ligne, le récapitulatif de votre dossier sera disponible sur votre compte [http://www.caf.fr/](http://www.caf.fr/). **Si vous n&#39;étiez pas encore allocataire, votre compte sera créé durant votre demande**.\n\n**Si des justificatifs vous sont demandés afin de compléter votre dossier d&#39;APL** , vous pourrez les télécharger directement depuis votre espace personnel, mais notez bien que vous ne pourrez plus modifier les informations complétées lors de votre demande d&#39;APL en ligne.\n\nSi vous ne disposez pas d&#39;une connexion internet ou pour toutes questions concernant la constitution de votre dossier de demande d&#39;aide au logement, n&#39;hésitez pas à vous rendre directement dans l&#39;agence CAF la plus proche de chez vous. De plus, il est important de faire la demande le plus rapidement possible, car vos droits ne sont pas rétroactifs. Le premier paiement se détermine en fonction de la date de dépôt de votre dossier (en savoir plus sur [la date de versement APL](https://www.aide-sociale.fr/versement-apl-date/)).\n\nLes droits à l&#39;aide s&#39;ouvrent le mois correspondant au dépôt du dossier APL à la CAF et ne sont pas rétroactifs. 	 Les étapes pour faire sa demande APL à la CAF	https://www.aide-sociale.fr/wp-content/uploads/2017/08/demande-apl-en-ligne-19.jpg	Crédit photo : © BillionPhotos.com et Ainoa / Fotolia	Aide-Sociale.fr	\N	2020-05-07	2020-05-07
14	Retraite : tout ce qu'il faut savoir pour bien la préparer	## **État des lieux de la retraite en France**\n\nEn France, le système de retraite est bâti sur trois niveaux : d'abord la **retraite de base** obligatoire, qui repose sur un mécanisme de solidarité intergénérationnelle, puis la [**retraite complémentaire**](https://www.tacotax.fr/guides/retraite/retraite-complementaire), obligatoire également, qui repose également sur un mécanisme de répartition. À cela s'ajoute la **retraite supplémentaire**, qui elle se constitue sur la base des cotisations volontaires versées sur les plans d'épargne salarial ou les dispositifs d'épargne individuel.\n\n<table border="1" cellpadding="1" cellspacing="1" style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 870px; margin: 2em 0px; border-radius: 4px; color: rgb(70, 70, 70); font-family: Avenir, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit; border: 1px solid rgb(242, 242, 242);" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 201, 110);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1"><span style="box-sizing: inherit; color: rgb(255, 255, 255);" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Retraite de base</strong></span></td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 201, 110);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2"><span style="box-sizing: inherit; color: rgb(255, 255, 255);" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Retraite complémentaire</strong></span></td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 201, 110);" data-mkd-display="block" data-mkd-index="3" data-mkd-index-cell="3" data-mkd-pos="last"><span style="box-sizing: inherit; color: rgb(255, 255, 255);" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Retraite supplémentaire</strong></span></td></tr><tr style="box-sizing: inherit; background-color: rgb(242, 242, 242);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-row="2"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1"><ul style="box-sizing: inherit; margin: 0px 0px 0px 3em; padding: 0px; line-height: 1.6; list-style-position: outside;" data-mkd-display="block" data-mkd-depth="1"><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="1">CNAV</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="2">MSA</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="3">RSI</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="4">CNAVPL</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="5">CNRACL</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="6">FSPOEI</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="7">Service des Pensions de l'État</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="8">Régimes spéciaux (EDF, RATP, SNCF, etc.)</li></ul></td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2"><ul style="box-sizing: inherit; margin: 0px 0px 0px 3em; padding: 0px; line-height: 1.6; list-style-position: outside;" data-mkd-display="block" data-mkd-depth="1"><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="1">Agirc-Arrco</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="2">Ircantec</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="3">MSA</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="4">RAFP</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="5">IRCEC</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="6">Caisse de retraite complémentaire obligatoire de la Sécurité Sociale des Indépendants</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="7">CNAVPL</li></ul></td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-index="3" data-mkd-index-cell="3" data-mkd-pos="last"><ul style="box-sizing: inherit; margin: 0px 0px 0px 3em; padding: 0px; line-height: 1.6; list-style-position: outside;" data-mkd-display="block" data-mkd-depth="1"><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="1">Dispositif d'<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">épargne salariale</strong>&nbsp;: PEE, PERCO, PEG, PEI.</li><li style="box-sizing: inherit; margin: 0px; padding: 0px; font-size: inherit; list-style: outside disc;" data-mkd-display="block" data-mkd-index="2">Dispositifs d'<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">épargne individuelle&nbsp;</strong>: PERP, Préfon, contrats Madelin.</li></ul></td></tr></tbody></table>\n\nLe [**système de retraite français**](https://www.tacotax.fr/guides/retraite/retraite-france) remonte à 1945, lors de la création de la Sécurité Sociale. À l'époque, il était question de mettre en place un **régime d’assurance vieillesse** couvrant l’ensemble de la population. Largement controversée, la proposition sera vite écartée, face aux réticentes des [**différentes catégories socio-professionnelles**](https://www.tacotax.fr/guides/retraite/retraite-categorie-socio-professionnelle). Pour autant, ni la diversité ni l’autonomie des différents régimes créés n’empêchent la mise en place de **mécanismes de solidarité** entre les régimes et au sein d’eux. Des mesures que la **[réforme des retraites](https://www.tacotax.fr/guides/retraite/reforme-des-retraites)** pourrait bien venir impacter.\n\n**La Retraite en clair : comprendre la retraite en France en 10mn**\n\n**►Lire aussi **: [Retraite : que va changer le gouvernement Macron ?](https://www.tacotax.fr/guides/retraite/retraite-gouvernement-macron)\n\n### **Retraite en France : des chiffres et des lettres**\n\n![retraite en france calcul](https://static.tacotax.fr/aws_assets/ckeditor/pictures/data/000/002/224/content/adobestock_271064346_1.jpeg "retraite en france calcul")\n\nLa pension moyenne net s'élève à 1 400 € en 2017\n\nAu 31 décembre 2017, la France comptait 17,2 millions de retraités (dont [**1,62 million établis à l'étranger**](https://www.tacotax.fr/guides/retraite/retraite-a-etranger)), tous régimes confondus et bénéficiaires de pensions de réversion inclus. C'est 108 000 de plus qu'en 2016. La pension mensuelle moyenne s'établit fin 2017 à **1496 €** bruts pour les retraités résidant en France, soit **1399 € **nets, en prenant en compte les **prélèvements sociaux**.\n\nIci également, l'inégalité entre les genres est très visible : la pension moyenne brute des femmes s'élevant à 1 123 €, contre 1 933 € pour les hommes, soit un écart de **41,9%** (42,3 % en 2016). Il tombe en revanche à 29 % (29,2 % en 2016) si l'on inclut les** réversions**, les femmes percevant alors en moyenne 1388 € bruts et les hommes 1955 €. \n\nEn additionnant les régimes de base et les régimes complémentaires, les retraités ont perçu en moyenne **2,5 pensions**, hors réversions en 2017. \n\n<table border="1" cellpadding="1" cellspacing="1" style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 870px; margin: 2em 0px; border-radius: 4px; color: rgb(70, 70, 70); font-family: Avenir, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit; border: 1px solid rgb(242, 242, 242);" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: justify; background-color: rgb(235, 255, 246);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1" data-mkd-pos="last"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Le saviez-vous ?&nbsp;</strong>Selon une étude réalisée en février 2017 par&nbsp;<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline"><a href="https://www.ifop.com/publication/le-regard-des-francais-sur-lactuel-systeme-des-retraites/" target="_blank" style="box-sizing: inherit; background-color: transparent; color: rgb(0, 201, 110); text-decoration-line: none; line-height: inherit; cursor: pointer; outline: none; transition: all 0.2s ease 0s;" data-mkd-display="inline">l'Ifop</a></strong>,&nbsp;<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">71 % des Français</strong>&nbsp;estiment que leur niveau de leur niveau de pension de retraite sera insuffisant pour vivre correctement.</td></tr></tbody></table>\n\n### **L'épargne retraite, oubliée des Français**\n\nToujours selon l'Ifop, ils seraient **79%** parmi les actifs à estimer que leur pension de retraite sera insuffisante. Un sentiment qui concerne aussi bien ceux qui perçoivent des revenus modestes que les plus fortunés. Pour autant, les Français sont loin de se ruer sur les produits **[d'épargne](https://www.tacotax.fr/guides/epargne)** (PERP, Préfon, PERCO, Madelin, etc.). Ils seraient **46%** à ne pas épargner pour se constituer un complément de revenus à la retraite. Et parmi ceux qui le font (54%), 60% le font « quand c'est possible ». Les 40 % restant quant à eux affirment mettre de côté « très régulièrement » ou « assez régulièrement ».\n\nPourtant, ces produits présentent de nombreux intérêts, comme la possibilité de **[déduire de son revenu imposable](https://www.tacotax.fr/guides/defiscalisation)** les sommes placées sur le plan, ou la possibilité d'une **sortie en capital** en cas de nécessité.\n\n### **Retraite : jusqu'à quand les Français sont-ils prêts à travailler ?**\n\n![ma retraite](https://static.tacotax.fr/aws_assets/ckeditor/pictures/data/000/002/225/content/adobestock_168545510_1.jpeg "ma retraite")\n\n62% des Français affirment être prêts à travailler jusqu'à 65 ans\n\nToujours parmi les actifs, **41%** des personnes interrogées affirment être prêtes à travailler à plein temps jusqu'à **65 ans**.\n\nEn revanche, **62 % des Français** en activité disent être prêts à « travailler jusqu'à 65 ans mais à temps partiel les trois dernières années ».\n\nEnfin, dernier enseignement très intéressant de l'étude, **moins ils gagnent d'argent, plus les Français veulent [partir en retraite tôt](https://www.tacotax.fr/guides/retraite/retraite-anticipee)**.\n\nSur l'ensemble de la population française active gagnant moins de 1 200 € par mois, **43%** affirment être prêts à **travailler à plein temps jusqu'à 65 ans**. Un chiffre qui passe à 50% pour ceux qui gagnent plus de 4 000 € par mois.\n\n## **Quelle pension pour une retraite idéale ?**\n\nPour beaucoup de Français, le départ en retraite se traduit par une **baisse de revenus**, qui impacte le niveau de vie. En moyenne, on estime cette baisse à :\n\n-   25% pour les salariés du secteur public ;\n-   35% pour les salariés du secteur privé ;\n-   45% pour les cadres. \n\n►**Lire aussi** : [La retraite par métier : les différents secteurs et leurs régimes](https://www.tacotax.fr/guides/retraite/retraite-par-metier-secteur)\n\n### **Pour une personne seule : 1 150 € par mois**\n\nSelon une étude de l'Observatoire national de la pauvreté et de l'exclusion sociale (INPES) réalisée en 2015, le montant nécessaire pour assurer un niveau de vie correct à la retraite s'élève à 1 150 € par mois pour une **personne seule, propriétaire** de son logement. Ce montant cumule le revenu minimum pour faire face aux **nécessités de la vie** quotidienne (logement, nourriture, transports, frais médicaux.) et ce qu'il faut pour participer à la **vie sociale** (voyages, sorties, achats, etc.).\n\n### **Pour un couple : 1 768 € par mois**\n\n![montant retraite en france](https://static.tacotax.fr/aws_assets/ckeditor/pictures/data/000/002/227/content/adobestock_62350970_1.jpeg "montant retraite en france")\n\n1 768 €, le montant nécessaire pour un couple à la retraite\n\nD'après l'étude, il faudrait alors 1768 € par mois à un couple retraité, propriétaire de son logement, pour vivre décemment. Ce montant se divise ainsi :\n\n-   alimentation : 455 €\n-   transports : 318 €\n-   santé : 242 €\n-   logement : 208 €\n-   vie sociale : 193 €\n-   équipement : 122 €\n-   habillement : 119 €\n-   hygiène : 97 €\n-   banque : 14 €\n\n<table border="1" cellpadding="1" cellspacing="1" style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 870px; margin: 2em 0px; border-radius: 4px; color: rgb(70, 70, 70); font-family: Avenir, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit; border: 1px solid rgb(242, 242, 242);" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: justify; background-color: rgb(235, 255, 246);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1" data-mkd-pos="last"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Bon à savoir</strong>&nbsp;: au-delà d'un certain âge et sous conditions de ressources, les retraites peuvent bénéficier d'abattements, voire d'exonération sur leurs&nbsp;<a href="https://www.tacotax.fr/guides/impots-locaux" style="box-sizing: inherit; background-color: transparent; color: rgb(0, 201, 110); text-decoration-line: none; line-height: inherit; cursor: pointer; outline: none; transition: all 0.2s ease 0s;" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">impôts locaux</strong></a>.</td></tr></tbody></table>\n\n## **Calcul de ma pension de retraite**\n\n[**Combien vais-je toucher pour ma retraite ?**](https://www.tacotax.fr/guides/retraite/calcul-retraite) Pour le savoir, il faut additionner les pensions des deux régimes obligatoires : la retraite de base et le retraite complémentaire.\n\n### **Retraite de base**\n\nPour calculer la retraite de base, les [**caisses de retraite**](https://www.tacotax.fr/guides/retraite/caisses-de-retraite) se base sur le **Salaire annuel moyen** (SAM), une référence basée sur lesalaire perçu au cours des **25 meilleures années** de votre carrière. Un(e) salarié(e) qui remplitles conditions d'âge et de nombre de trimestres cotisés requis se verra appliquer un** taux "plein" **équivalant à 50 % du salaire annuel moyen.\n\nDans le cas contraire (le nombre de trimestres cotisés n'est pas suffisant), le montant de la pension de retraite sera affecté par :\n\n-   un **coefficient de proratisation **s'il manque des trimestres **dans le régime général** pour avoir une retraite complète ;\n-   une** décote **: s'il manque des trimestres **tous régimes confondus**, pour avoir une retraite à taux plein ;\n-   une** surcote **: si le nombre de trimestres acquis est suffisant mais que la personne a **continué à travailler**.\n\n### **Retraite complémentaire**\n\nLa plupart des régimes de retraite complémentaire fonctionnent "par points" : en contrepartie des cotisations prélevées sur salaire, le salarié obtient des points. Ces points ont une **valeur d'achat**, qui sert de coefficient de conversion pour le calcul de la rente. Pour calculer le montant de votre retraite complémentaire, il suffit tout simplement de multiplier le **nombre de points acquis** par la **valeur unitaire du point** au moment du départ en retraite.\n\n## **Retraite : à partir de quel âge ?**\n\n![âge départ en retraite](https://static.tacotax.fr/aws_assets/ckeditor/pictures/data/000/002/228/content/adobestock_80362106_1.jpeg "âge départ en retraite")\n\nCombien de bougies faut-il souffler pour partir en retraite ?\n\nL'**[âge légal de départ en retraite](https://www.tacotax.fr/guides/retraite/age)** est fixé à **62 ans** en France pour toutes les personnes nées après 1955, sauf cas particuliers. Si vous êtes né(e) avant cette date, l'âge minimum de départ en retraite est le suivant :\n\n-   personnes nées avant le 1er juillet 1951 : 60 ans\n-   personnes nées entre le 1er juillet et le 31 décembre 1951 : 60 ans et 4 mois\n-   en 1952 : 60 ans et 9 mois\n-   en 1953 : 61 ans et 2 mois\n-   en 1954 : 61 ans et 7 mois\n-   en 1955 : 62 ans\n\nMais attention, atteindre l'âge minimum ne suffit pas pour bénéficier d'une retraite à taux plein. Pour la carrière est longue, plus la pension de retraite sera intéressante car elle dépend notamment du nombre de **trimestres cotisés**. Là encore, le nombre de trimestres requis (qui équivaut à la durée de votre carrière) dépend de votre **année de naissance** :\n\n-   1948 et avant : 160 trimestres (40 ans)\n-   1949 : 161 trimestres (40 ans et un trimestre)\n-   1950 : 162 trimestres (40 ans et deux trimestres)\n-   1951 : 163 trimestres (40 ans et trois trimestres)\n-   1952 : 164 trimestres (41 ans)\n-   entre 1953 et 1954 : 165 trimestres (41 ans et un trimestre)\n-   entre 1955 et 1957 : 166 trimestres ( 41 ans et deux trimestres)\n-   entre 1958 et 1960 : 167 trimestres (41 ans et trois trimestres)\n-   entre 1961 et 1963 : 168 trimestres (42 ans)\n-   entre 1964 et 1966 : 169 trimestres (42 ans et un trimestre)\n-   entre 1967 et 1969 : 170 trimestres (42 ans et deux trimestres)\n-   entre 1970 et 1972 : 171 trimestres (42 ans et trois trimestres)\n-   après 1973 : 172 trimestres (43 ans)\n\n## **Fiscalité de la retraite en France**\n\nLes pensions de retraite de base et complémentaires sont imposables au barème progressif de** [l'impôt sur le revenu](https://www.tacotax.fr/guides/impot-sur-le-revenu)**. Les tranches marginales d'imposition s'appliquent de la même façon sur les **pensions de retraite** et sur les revenus d'activité, de même que **l'abattement de 10 %** qui est automatiquement appliqué par l'Administration fiscale. Le pourcentage d'abattement est le même, mais les plafonds et le montant de** déduction minimum** sont différents.\n\n<table border="1" cellpadding="1" cellspacing="1" style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 870px; margin: 2em 0px; border-radius: 4px; color: rgb(70, 70, 70); font-family: Avenir, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit; border: 1px solid rgb(242, 242, 242);" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 212, 244);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1">&nbsp;</td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 212, 244);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2"><span style="box-sizing: inherit; color: rgb(255, 255, 255);" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Revenus de l’activité</strong></span></td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center; background-color: rgb(0, 212, 244);" data-mkd-display="block" data-mkd-index="3" data-mkd-index-cell="3" data-mkd-pos="last"><span style="box-sizing: inherit; color: rgb(255, 255, 255);" data-mkd-display="inline"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Pensions de retraite</strong></span></td></tr><tr style="box-sizing: inherit; background-color: rgb(242, 242, 242);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-row="2"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1">Déduction minimale</td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2">437 €</td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="3" data-mkd-index-cell="3" data-mkd-pos="last">389 €</td></tr><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="3" data-mkd-index-row="3"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1">Plafond par foyer fiscal</td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2">12 502 €</td><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: center;" data-mkd-display="block" data-mkd-index="3" data-mkd-index-cell="3" data-mkd-pos="last">3 812 €</td></tr></tbody></table>\n\n### **Pensions de retraites : peuvent-elles être exonérées d'impôt ?**\n\n![pension de retraite exonérée d'impôt](https://static.tacotax.fr/aws_assets/ckeditor/pictures/data/000/002/226/content/adobestock_273208510_1.jpeg "pension de retraite exonérée d'impôt")\n\nLes pensions d'invalidité sont exemptées d'impôt sur le reveu\n\nEn plus de la pension de base, de nombreux retraités perçoivent des **aides et prestations sociales**. Parce qu'ils sont destinés aux personnes en situation de précarité, la plupart de ces compléments sont exonérés d'impôt sur le revenu. C'est le cas pour :\n\n-   le **minimum vieillesse** (Aspa, Asi et les allocations du minimum vieillesse) ;\n-   la majoration pour **assistance d'une tierce personne **;\n-   l'**Allocation personnalisée d'autonomie** (Apa)\n-   les pensions de retraite **inférieures à un certain seuil** (289,90 € par mois pour une personne seule), lorsque les ressources annuelles du foyer fiscal ne dépasse pas :\n    -   10 418,40 € pour une personne seule,\n    -   16 174,59 € pour un couple), \n-   la **retraite du combattant**, les retraites mutuelles des anciens combattants et la pension militaire d'invalidité ;\n\n### **Retraite et prélèvement à la source**\n\nLe passage au prélèvement à la source ne change pas les modalités de **calcul de l'impôt**, seulement son mode de collecte. Ce changement de système d'imposition a eu pour conséquences l'effacement de l'impôt sur les revenus courants de 2018, considérée comme une année blanche. Ce qui n'a pas dispensé les contribuables de remplir une **déclaration d'impôts** au printemps 2018 sur ses revenus de 2017. Cette démarche a permis à l'administration fiscale de leur communiquer un **taux d'imposition** en septembre 2018 (disponible sur l'espace particulier www.impots.gouv.fr). Les taux ont ensuite été transmis aux caisses de retraite, qui l'utilisent pour prélever le montant de l'impôt. Si le montant de la pension n'évolue pas, le contribuable retraité paiera le même montant. Mais au lieu d'un paiement annuel en septembre, ou sur 10 mois s'il était mensualisé, il sera **prélevé chaque mois sur sa pension**. \n\n<table border="1" cellpadding="1" cellspacing="1" style="box-sizing: inherit; border-collapse: collapse; border-spacing: 0px; width: 870px; margin: 2em 0px; border-radius: 4px; color: rgb(70, 70, 70); font-family: Avenir, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit; border: 1px solid rgb(242, 242, 242);" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 0.5rem 0.625rem 0.625rem; margin: 0px; text-align: justify; background-color: rgb(235, 255, 246);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1" data-mkd-pos="last"><strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">Bon à savoir</strong>&nbsp;: l'ensemble des pensions de retraite (de base, complémentaire) est désormais assujetti au prélèvement à la source. Sont également concernés les rentes des dispositifs&nbsp;<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">d'épargne retraite salariale et individuelle</strong>&nbsp;: PEE, PERP, Préfon, contrats Madelin, etc. Seul le&nbsp;<strong style="box-sizing: inherit; line-height: inherit;" data-mkd-display="inline">PERCO</strong>&nbsp;n'est pas concerné.</td></tr></tbody></table>\n\n## **Foire aux questions**\n\n### **Comment gérer ma retraite en ligne ?**\n\nLes différents régimes de retraite auxquels vous êtes rattaché(e) ont dû mettre en ligne un espace adhérent sur leur site d'où vous pouvez gérer vos contrats.\n\n### **Comment obtenir un relevé de carrière pour ma retraite avec la CNAV ?**\n\nLa Caisse Nationale d'Assurance Vieillesse (CNAV) est le régime de retraite de base des salariés du secteur privé, des cadres ou encore des agents non titulaires de l'État. Les adhérents à la CNAV peuvent consulter leurs relevés de carrière directement depuis leur espace en ligne sur le site de l'**[Assurance Retraite](https://www.lassuranceretraite.fr/)**, en se connectant à leur espace particulier.\n\n### **Qu'est-ce que les caisses de retraite CARSAT ?**\n\nDepuis 2010, la CARSAT (Caisse d'Assurance Retraite et de Santé Au Travail) remplace la Caisse Régionale d'Assurance Maladie (CRAM). Les caisses de retraite CARSAT représentent la Caisse Nationale d'Assurance Vieillesse (CNAV) au niveau régional.\n\n**Nos grands guides :**\n\n-   [La défiscalisation Pinel pour réduire ses impôts](https://www.tacotax.fr/guides/loi-pinel)\n-   [Tout savoir sur les crédits immobiliers](https://www.tacotax.fr/guides/credits-immobiliers)\n-   [Investir : comment et où placer votre argent ?](https://www.tacotax.fr/guides/investir)\n-   [La gestion de patrimoine](https://www.tacotax.fr/guides/gestion-de-patrimoine)\n-   [Le crédit à la consommation](https://www.tacotax.fr/guides/credit-consommation)\n-   [Le rachat de crédit : définition et fonctionnement](https://www.tacotax.fr/guides/rachat-de-credit)	En France, 3 retraités sur 10 ne touchent pas la pension complète à laquelle ils ont droit. Oubli des droits, procédures complexes, diversité des régimes de base, complémentaires, supplémentaires... Préparer sa retraite n'est pas une mince affaire. C'est pourtant essentiel pour s'assurer un niveau de vie confortable après la vie professionnelle. Comment calculer sa retraite ? À partir de quel âge peut-on partir en retraite ? Quel régime choisir avec une carrière longue ? Qu'est-ce que l'assurance retraite ? 	https://static.tacotax.fr/aws_assets/articles/head_images/000/001/953/large/AdobeStock_270689602_%281%29.jpeg?1568709366	https://www.tacotax.fr/guides/retraite	https://www.tacotax.fr/guides/retraite	\N	2020-05-12	2020-05-12
2	zefnhuizehg	zefnhuizehg	zefnhuizehg	https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg	zefnhuizehg	zefnhuizehg	zefnhuizehg	2020-04-07	2020-04-07
6	Comment se faire financer une formation en France ?	## I. Financement de formation via le CPF\n\n### Qu’est ce que le CPF ?\n\nLe CPF, votre [Compte Personnel de Formation](https://www.moncompteactivite.gouv.fr/cpa-public/), a remplacé le Droit Individuel à la Formation (DIF) depuis 2015. C’est un dispositif de financement public de formation continue qui est désormais rattaché au CPA (Compte Personnel d’Activité). Il a été imaginé par le gouvernement Français pour augmenter les compétences des actifs et leur permettre de trouver ou sécuriser leur emploi tout au long de leur vie.\n\nC’est une chance incroyable pour tous les citoyens Français de pouvoir se former et d’apprendre tout au long de leur vie. \n\nLe CPF correspond à un moyen de paiement pour la formation en France, qui ne dépend pas d’une validation tierce. Chaque € de CPF peut être dépensé librement par son propriétaire. Je sais que cela va ravir certains élèves passionnés de la communauté LiveMentor !\n\nLa mission principale du CPF est de renforcer le maintien de l’employabilité et la sécurisation du parcours professionnel des personnes actives par la formation, en plaçant l’individu au centre de ce dispositif.\n\nSi vous êtes amenés à changer d’employeurs ou de statuts (Ex : entrepreneur, indépendant, demandeur d’emploi…), le montant CPF accumulé ne disparaîtra pas. Il continuera à vous suivre dans vos évolutions professionnels tout au long de votre vie.\n\n### Les évolutions du CPF en 2019\n\nDepuis le 1er janvier 2019, le CPF a évolué. Les droits au financement acquis dans le cadre du CPF seront désormais décomptés en euros et non en heures. A la fin de chaque année, une personne active touche 500€ sur son Compte Personnel de Formation. Ce montant crédité va jusqu’à 800€ pour les salariés non qualifiés.\n\nIl y a bien sûr des limites. Le montant maximal au bout de 10 ans est de 5000€ d’aide pour les actifs et de 8000€ pour les salariés non qualifiés. Ces paliers peuvent être dépassés dans le cadre de certains abondements spécifiques.\n\nOr, c’est fin novembre 2019 que la grande réforme du CPF est apparue. Jusqu’alors, le CPF n’était utilisable que par le biais d’organismes tiers souvent inconnus et surtout très procéduriers ! \n\nLes dossiers étaient lourds et les délais de traitements étaient souvent de plusieurs mois pour débloquer un crédit de formation acquis et personnel. \n\nDésormais tout peut se faire en quelques clics depuis le site [Mon Compte Formation](https://www.moncompteformation.gouv.fr/espace-prive/html/#/) ou depuis l’application mobile. \n\nToutes les formations validées par l’état, dont celles de LiveMentor y sont présentes. Il vous suffit de sélectionner la formation de votre choix et d’envoyer une demande directement à l’organisme. \n\nC’est à ce dernier d’étudier votre demande et de vous envoyer en retour une proposition d’offre que vous pourrez finalement accepter pour valider votre entrée en formation.\n\n## II. Financement de formation en tant que demandeur d’emploi\n\n### Prise en charge par l’AIF\n\nPôle Emploi accompagne les demandeurs d’emploi et certains créateurs d’entreprise dans leur projet de formation. Il faut noter que chaque conseiller a ses propres méthodes pour accompagner les citoyens Français dans leur formation professionnelle. La politique de prise en charge est donc variable selon les régions et les agences individuelles. Néanmoins, votre objectif professionnel et votre motivation pour la formation sont des éléments clés pour augmenter votre chance d’acceptation du dossier par votre conseiller Pôle Emploi.\n\nPour obtenir un financement de formation par Pôle Emploi, il faut présenter votre projet au conseiller en charge de votre dossier.  Le projet doit être en adéquation avec votre activité où l’évolution d’activité que souhaitez. Cela participe en effet à convaincre votre conseiller de la faisabilité de la formation. Il est donc important de présenter votre projet auprès de votre conseiller avant le passage en commission.\n\nLorsque l’on construit ensemble votre dossier de financement, notre équipe vous accompagne pour y inclure dedans les pièces justificatives qui faciliteront son acceptation. Vous pouvez [réserver votre créneau d’accompagnement](https://www.livementor.com/financement-formation-livementor/#tve-jump-16faf652112) avec nous ici.\n\nPôle Emploi utilise ensuite une plateforme dématérialisée, « Kairos », qui nous permettra faire parvenir le devis à Pôle Emploi. Nous transmettrons ce devis via la plateforme, et dès que vous l’aurez accepté, votre conseiller pourra le valider. Il est nécessaire de prendre rendez-vous avec lui pour argumenter votre besoin de formation.\n\nUne fois l’accord de prise en charge reçu via Kairos, vous serez tenus au courant et nous vous transmettrons alors un contrat de confiance pour valider votre inscription et démarrer votre formation.\n\nPlusieurs de nos élèves témoignent de l’importance de l’AIF dans leur parcours du financement. Claudie a par exemple profité d’[une formation financée grâce à l’AIF](https://www.livementor.com/blog/financement-aif-copywriting) et Jessie a [lancé son entreprise avec le soutien de l’Aide Individuelle de Formation](https://www.livementor.com/blog/aif-financement-projet-infusion).\n\n### Déblocage du CPF par Pôle Emploi\n\nChaque demandeur d’emploi a la possibilité d’utiliser son compte personnel de formation (CPF) pour accéder au financement d’une formation professionnelle éligible. C’est une possibilité qui a été ouverte grâce au PPAE, le projet personnalisé d’accès à l’emploi. Cette demande doit être faite à Pôle Emploi par écrit. Elle peut également se faire par la plateforme Kairos sur laquelle le devis sera réalisé, signé et validé par votre conseiller.\n\nDans le cas des contrats de sécurisation professionnelle (CSP), c’est le fonds chargé de sécuriser les parcours professionnels des salariés, le FPSPP, qui s’occupera d’octroyer le financement.\n\nDans la communauté, nous avons de nombreux exemples d’élèves qui se sont fait financer leur formation grâce à Pôle Emploi. C’est [le cas d’Hanna,](https://www.livementor.com/blog/financement-entretien-embauche) [de Blandine](https://www.livementor.com/blog/financement-creation-site-immobilier) ou de [Marion](https://www.livementor.com/blog/lancement-artiste-financement-aif-cpf) par exemple.\n\n## III. Financement de formation via les FAF\n\n### Je suis auto-entrepreneur et je souhaite passer par un FAF\n\nTout comme l’OPCO accompagne l’entreprise dans la complétion de ses obligations financières en matière de formation. Les FAF peuvent guider les auto-entrepreneurs. Il existe trois Fonds Investissement Formation dédiés aux auto-entrepreneurs, classés en fonction de l’activité exercée par l’auto-entrepreneur.\n\nC’est directement d’eux dont il faut se rapprocher.\n\nEtape 1 : Savoir de quel organisme vous dépendez grâce à notre tableau récapitulatif\n\nL’AGEFICE est le Fonds d’Assurance Formation (FAF) du Commerce, de l’Industrie et des Services. Son objectif est d’assurer le financement des formations pour les chefs d’entreprise, les dirigeants non-salariés et leurs conjoints collaborateurs. Son objectif est la montée en compétence en permettant l’accès à la formation pour le plus grand nombre.\n\nLe FIF PL est un fonds d’assurance formation créé à l’initiative de l’UNAPL. Il s’adresse donc à tous les travailleurs indépendants qui agissent en entreprise individuelle ou tant que gérant majoritaire, et qui sont membres des professions libérales.\n\nLe FAFCEA apporte son aide aux chefs d’entreprises exerçant une activité artisanale. Elle a pour objectif d’organiser et promouvoir la formation professionnelle continue de ses ressortissants. Il faut s’adresser à elle si vous êtes artisan établi.\n\n<table style="box-sizing: inherit; background-color: rgb(255, 255, 255); margin-bottom: 24px; border-spacing: 0px; border-top: 1px solid rgba(51, 51, 51, 0.1); border-left: 1px solid rgba(51, 51, 51, 0.1); border-right-color: rgba(51, 51, 51, 0.1); border-bottom-color: rgba(51, 51, 51, 0.1); color: rgb(51, 51, 51); font-family: FuturaPTBook; font-size: 18px;" data-mkd-display="block" data-mkd-tablehasheader="false"><tbody style="box-sizing: inherit;" data-mkd-display="block"><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="1" data-mkd-index-row="1"><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1"><a href="http://www.agefice.fr/" style="box-sizing: inherit; background-color: transparent; touch-action: manipulation; text-decoration-line: none; color: rgb(51, 51, 51);" data-mkd-display="inline">AGEFICE</a></td><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2" data-mkd-pos="last"><span style="box-sizing: inherit;" data-mkd-display="inline">Activité commerciale, activité industrielle, prestations de services (hors professions libérales)</span></td></tr><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="2" data-mkd-index-row="2"><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1"><span style="box-sizing: inherit;" data-mkd-display="inline">Le&nbsp;</span><a href="http://www.fifpl.fr/" style="box-sizing: inherit; background-color: transparent; touch-action: manipulation; text-decoration-line: none; color: rgb(51, 51, 51);" data-mkd-display="inline">FIF PL</a></td><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2" data-mkd-pos="last"><span style="box-sizing: inherit;" data-mkd-display="inline">Activité libérale, travailleurs indépendants</span></td></tr><tr style="box-sizing: inherit;" data-mkd-display="block" data-mkd-index="3" data-mkd-index-row="3"><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="1" data-mkd-index-cell="1"><span style="box-sizing: inherit;" data-mkd-display="inline">Le&nbsp;</span><a href="https://www.fafcea.com/" style="box-sizing: inherit; background-color: transparent; touch-action: manipulation; text-decoration-line: none; color: rgb(51, 51, 51);" data-mkd-display="inline">FAFCEA&nbsp;</a></td><td style="box-sizing: inherit; padding: 10px 15px; border-bottom: 1px solid rgba(51, 51, 51, 0.1); border-right: 1px solid rgba(51, 51, 51, 0.1); border-top-color: rgba(51, 51, 51, 0.1); border-left-color: rgba(51, 51, 51, 0.1);" data-mkd-display="block" data-mkd-index="2" data-mkd-index-cell="2" data-mkd-pos="last"><span style="box-sizing: inherit;" data-mkd-display="inline">Activité artisanale (appartenant à la liste des métiers imposant une inscription au Répertoire des métiers).</span></td></tr></tbody></table>\n\nEtape 2 : Remplir les formulaires de financement d’action de formation propres à chaque organisme.\n\n-   [L’AGEFICE propose un formulaire de prise en charge](https://communication-agefice.fr/download/4852/2019/59504/agefice-demande-de-prise-en-charge-2019-cpf.pdf)\n-   [Le FIF PL indique sa procédure sur son site ](http://www.fifpl.fr/index.php?page=criteres_de_prise_en_charge) Certains de nos élèves, comme Isabelle ont fait le choix de [se faire financer par le FIF PL](https://www.livementor.com/blog/financement-formation-micro-entreprise).\n-   [Le FAFCEA a lui aussi un formulaire de prise en charge](https://www.fafcea.com/je-demande-un-financement/telecharger-une-demande-de-prise-en-charge/2-pages.html)\n\nVous aurez certainement besoin des documents relatifs à chaque prise en charge de formation.\n\n[Notre équipe est là pour t’aider à les rassembler, il te suffit de prendre rendez-vous !](https://www.livementor.com/financement-formation-livementor/#tve-jump-16faf652112)\n\n## IV. Financement de formation via les OPCO\n\n### Prise en charge par l’OPCO de l’entreprise\n\nDans ses charges, l’entreprise paie un OPCO. Ces organismes sont des acteurs majeurs de la formation puisqu’ils accompagnent les entreprises dans la complétion de leurs obligations financières en matière de formation. Les salariés peuvent se tourner vers l’OPCO référent de l’entreprise pour développer leurs compétences professionnelles.\n\nEtape 1 : Connaître le code NAF ou APE de votre entreprise afin de savoir quel OPCO prendra en charge la demande.\n\nPour connaître le code NAF ou APE, vous pouvez vous rendre sur [société.com](https://www.societe.com/) et saisir le nom de votre entreprise. \n\nEtape 2 : Aller sur le site internet de l’OPCO et effectuer une demande de prise en charge de financement\n\nL’ensemble des formulaires de demandes se trouvent sur les sites respectifs de chaque OPCO.\n\nEtape 3 : Pour composer le dossier de financement, vous aurez besoin de plusieurs documents. Notre équipe est experte sur ce sujet et pourra vous aider. Il vous suffit de [prendre rendez-vous](https://www.livementor.com/financement-formation-livementor/#tve-jump-16faf652112) !\n\nEtape 4 : Dès que vous recevrez votre accord de prise en charge, nous vous enverrons le « contrat de confiance »\n\nDès le retour de ce contrat, nous pourrons vous inscrire en formation.\n\n## V. Financement de formation via l’employeur et son plan de formation\n\nLes entreprises prennent des dispositions pour assurer la formation continue de leur salarié dans la majeure partie des cas. Votre entreprise peut avoir mis en place un fonds de formation, c’est-à-dire un budget que l’entreprise alloue à la formation des employés.\n\nSi ce n’est pas le cas, elle cotise certainement auprès d’un OPCO qui peut lui aussi prendre en charge le financement de votre formation professionnelle. Les structures de plus de 50 salariés ne seront désormais plus forcément abondées par les OPCO et devront utiliser leurs fonds propres pour abonder les demandes de formations internes. Il faudra pour cela vous orienter vers la personne chargée de la formation dans l’entreprise.\n\n## VI. Financement par un organisme paritaire\n\nIl existe certains organismes très spécifiques qui peuvent intervenir pour vous financer une formation professionnelle.\n\n### Se faire financer une formation par le Fongecif\n\nC’est le cas par exemple du Fongecif ou Fonds de Gestion des Congés Individuels de Formation.\n\nC’est un organisme paritaire régional interprofessionnel, créé en 1983. Il prend en charge les actifs grâce à des conseils et un accompagnement pour élaborer un projet professionnel précis grâce au CEP (le Conseil en Evolution Professionnelle).\n\nLe Fongecif IDF contribue également au financement de projets individuels de salariés dans le cadre du Compte Personnel de Formation de transition professionnelle.\n\nCe n’est pas un petit organisme ! A titre d’exemple, en 2018, [le Fongecif Île-de-France](http://www.fongecif-idf.fr/) a engagé 283,8 millions d’euros pour la formation des salariés franciliens. Ils ont accompagné plus de 300 000 personnes et délivré près de 80 000 conseils en évolution professionnelle. Plus de 16 000 projets professionnels ont ainsi été financés.\n\nJulie, l’une de nos élèves, vous donne toutes les clés pour [obtenir un financement de formation par le Fongecif](https://www.livementor.com/blog/reconversion-profesionnelle-fongecif).\n\nNous savons à quel point obtenir un financement peut-être un parcours du combattant. C’est pourquoi nous avons passé un an à creuser tous les critères permettant à votre dossier d’avoir un maximum de chance d’être accepté. Nous avons formé [une équipe experte du financement de formation professionnelle](https://www.livementor.com/blog/faire-financer-formation-livementor).\n	La France regorge de dispositifs qui permettent aux porteurs de projets de faire financer leurs formations.\n\nC’est une excellente chose, mais nous avons remarqué que nos élèves étaient souvent perdus dans ce qui s’apparente bien souvent à une véritable jungle administrative. Chaque personne a une situation spécifique et les complications peuvent vite poser problème.\n\nAlors pour vous simplifier la vie et vous aider à débroussailler cette forêt touffue du financement, nous avons créé ce guide complet rassemblant toutes les opportunités qui existent en France pour faire financer votre formation.	https://www.laplateforme.net/app/uploads/financer-sa-formation.jpg	https://www.laplateforme.net/	https://www.livementor.com/	Alexandre Dana	2018-05-14	2018-05-14
4	jfizejejpogmj	jfizejejpogmj	jfizejejpogmj	https://lh3.googleusercontent.com/proxy/8ZVEoK2YSvdRHVWdMY-KALR9k80OS3sZAow5icNXoZcpXv8Vw_tL8lcui40x8ejISMbW2F7uvaCGkKsOb_n3nmh0OUYtvbPiZVZVZbJKXVG1MxUSr9XmZxtPlQRgI79O5nabc3UTYPs	jfizejejpogmj	jfizejejpogmj	jfizejejpogmj	2020-02-07	2020-02-07
15	Les démarches pour adopter un enfant	## Comment obtenir l’agrément ?\n\nQue ce soit pour l’adoption d’un enfant français ou étranger, vous devez d’abord obtenir l’**agrément en vue d’adoption**, sorte de « permis d’adopter ». C’est par une lettre que tout commence. Adressée au président du **Conseil général** de votre département de résidence, elle officialise votre volonté d’adopter et déclenche le processus. Mieux vaut faire attention à donner ses coordonnées complètes que passer du temps à justifier sa démarche (cela viendra dans un second temps). A la suite de ce courrier, vous serez convoqué à une réunion d’information, au cours de laquelle vous seront remis le dossier à remplir et la liste des documents à fournir.\n\nA lire aussi :\n\n[Tout ce que vous devez savoir pour adopter un enfant](https://www.parents.fr/envie-de-bebe/adoption/tout-ce-que-vous-devez-savoir-pour-adopter-un-enfant-77876)\n\n## Quelle est la portée de l’agrément en vue d’adoption ?\n\nL'**agrément** en vue d’adoption est un document précieux pour vos démarches. **Obligatoire pour pouvoir démarrer une [procédure d’adoption](https://www.parents.fr/envie-de-bebe/adoption/adopter-un-grand-79018), en France ou à l’étranger**, l’agrément ne signifie pas que vous réussirez forcément à adopter. Il constitue une « autorisation », mais pas un droit à devenir parent.  \nL’agrément en vue d’adoption est délivré par le service d’**Aide sociale à l’enfance (ASE)** de votre département de résidence après une **enquête sociale et psychologique** approfondie, qui peut durer jusqu’à 9 mois. Vous serez notamment soumis à des entretiens avec des assistants de services sociaux ou des éducateurs, ainsi qu’avec des psychologues ou des médecins psychiatres, qui examineront votre projet dans sa spécificité.\n\nL’agrément en vue d’adoption est **valable 5 ans**, à condition :\n\n-   que vous **confirmiez** chaque année au président du Conseil général de votre département de résidence votre **projet d’adopter** ;\n-   qu’en cas de **déménagement**, vous déclariez votre adresse au président du Conseil général de votre nouvelle résidence au plus tard dans le mois suivant votre emménagement.\n\nA noter que l’agrément en vue d’adoption peut être délivré pour l’accueil simultané de plusieurs enfants. Mais si vous souhaitez adopter un autre enfant par la suite, vous devrez recommencer toute la procédure.\n\n## Adoption : et si l’agrément est refusé ?\n\nDes recours sont possibles pour **contester un refus d'agrément** en vue d'adoption. A savoir : le refus d’agrément doit être motivé et ne peut se fonder sur des causes non reconnues par la loi : l’âge, le fait d’être célibataire, d’avoir déjà des enfants…\n\nA l’issue de l’instruction, vous avez trois niveaux successifs de recours en cas de refus d'agrément en vue d'adoption :\n\n-   un **recours administratif** auprès du président du Conseil général, en lui adressant un courrier dans les deux mois après réception de la décision (s’il ne vous répond pas dans un délai de 2 mois, considérez qu’il s’agit d’un « rejet implicite ») ;\n-   un **recours contentieux** devant le tribunal administratif, en lui faisant parvenir un mémoire écrit, expliquant les raisons pour lesquelles vous contestez le refus d'agrément en vue d'adoption, dans les deux mois suivant la réponse négative explicite ou implicite du président du Conseil général ;\n-   un **appel de la décision du tribunal administratif** auprès de la cour administrative d’appel, dans un délai de deux mois.\n\nEnfin, vous pouvez déposer une nouvelle demande d’agrément en vue d’adoption après un délai de 30 mois.\n\n	Le parcours administratif commence... Première étape pour pouvoir adopter un enfant : obtenir le précieux agrément. On vous met sur la voie.	https://i.unimedias.fr/2017/02/07/demarchesadoption.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050	https://www.parents.fr/	https://www.parents.fr/	\N	2018-12-23	2020-05-12
12	S'adapter aux changements liés à la naissance	#### Quels sont les changements à prévoir dans la famille et les amis ?\n\nC’est une nouvelle cellule familiale qui se crée. Grâce à l’arrivée de notre bébé, nos propres parents deviennent grands-parents, nos frères et sœurs deviennent oncles et tantes. Si on a déjà des enfants ils vont devenir grand frère ou grande sœur : une nouvelle place importante.\n\nCes changements, s’ils semblent positifs, peuvent parfois être difficiles à vivre. Ils peuvent créer des tensions, des rivalités, un sentiment d’envahissement.\n\nIl faut que chacun puisse exprimer ses besoins, recherche ce qui est bon pour lui. Il faut aussi **savoir prendre de la distance vis-à-vis des nombreux conseils qui nous sont donnés**, qu’on les demande ou pas.\n\nLes relations amicales peuvent évoluer aussi. Un éloignement se fait naturellement avec certains amis. Et on se rapproche d’autres. L’arrivée d’un bébé est aussi souvent une occasion de se faire de nouveaux amis à travers de nouvelles rencontres. Lors d’activités pour les jeunes mamans ou les parents, de sorties au square, etc…\n\n#### Comment faciliter l’accueil de bébé dans sa fratrie ?\n\nLes sentiments d’inquiétude ou de jalousie à l’arrivée de bébé concernent aussi les enfants. Chacun peut l’exprimer à sa manière. Les plus grands connaissent parfois une phase de régression. C’est normal. Il ne faut pas s’inquiéter ni les gronder. Petit à petit chacun trouvera sa place et **tout rentrera dans l’ordre**.\n\nPour que les grandes sœurs et grands frères ne se sentent pas rejetés à l’arrivée du bébé, ils doivent être préparés à cet événement. Savoir que l’on a prévu une solution de garde pour la période de l’accouchement, être rassuré sur notre amour. Il peut avoir **besoin d’un peu de temps pour accepter le changement** et s’y adapter. Son comportement peut changer pendant cette période, pas d’inquiétude.\n\nIl est important de gérer la situation selon son instinct.\n\n**Voici toutefois quelques idées pour préparer la rencontre d’un ainé avec bébé :**\n\n-   Prévoir un temps privilégié pour la rencontre. S’il ou elle en a envie et en fonction de son âge, on peut lui montrer comment faire un câlin et prendre le bébé dans ses bras…\n-   Préparer un sac ou une boite de grand frère ou grande sœur, remplie de petits cadeaux collectés pendant la grossesse : des photos, des petits mots doux,…\n-   À la maternité, ramener une photo de toute la famille pour lui montrer qu’on pense aussi à elle/lui ! En plus ça fait du bien d’avoir une belle photo.\n-   Lui faire choisir un petit cadeau pour son frère ou sa sœur ;\n-   Lui raconter comment s’est passé sa propre naissance et lui dire que ce que l’on fait avec le bébé, on l’a aussi fait pour lui. Que l’on a adoré le moment où il était bébé mais qu’on l’aime maintenant tel qu’il est et que c’est agréable de le voir grandir et de faire de nouvelles choses avec lui.\n-   Se ménager du temps pour faire une activité avec le ou la « grand.e » en faisant garder le bébé.\n-   En fonction de son âge, le faire participer aux soins du bébé, pour le valoriser.\n-   Être attentif à ce que les adultes (grands-parents, famille, amis) accordent aussi de l’intérêt à l’aîné.\n\n#### Comment reprendre les activités familiales ?\n\nAvec l’arrivée d’un bébé notre rythme de vie change. Un nouvel équilibre se met progressivement en place.\n\nIl faut parfois faire des choix, prioriser ou même interrompre des activités pratiquées avant la naissance. Les besoins de certains parents passent au second plan. Que ce soit pour la maman ou pour le papa.\n\nSe soutenir mutuellement, en parler en couple, permet de rappeler à l’autre que chacun est important dans la nouvelle famille. On peut alors plus facilement trouver des solutions pour que chacun ait des moments pour soi. L’occasion de recharger ses batteries.\n\nAprès la période d’adaptation, l’énergie revient. Le besoin de sortir en famille peut se faire sentir et il ne faut pas s’en priver.** La plupart des activités familiales peuvent continuer avec bébé**. Les sorties, même très courtes, font du bien à tous. Cela permet de ne pas rester isolé, de rencontrer d’autres personnes.\n\n#### Et pour ce qui concerne la sexualité ?\n\nLe couple est aussi chamboulé avec l’arrivée d’un bébé. Il est important pour l’équilibre de chacun d’accorder du temps à son ou sa partenaire et à son couple.\n\nDans les premiers temps ce n’est pas facile. Mais même si ce n’est que quelques minutes, échanger des gestes de tendresse, des attentions, des compliments, se dire que l’on s’aime permet d’entretenir le lien.\n\nLa sexualité est souvent mise en sourdine, avec une baisse de la libido. Ce peut être pour des raisons physiques : inconfort lié à l’accouchement, fatigue, pas à l’aise avec son corps. Ce peut être aussi parce que le bébé occupe toute la place dans notre esprit.\n\nPour la reprise de la sexualité après l’accouchement, il n’y a pas de règle. En l’absence de contre-indication médicale, on peut vivre des activités sexuelles sans crainte si on en a envie. Le moment pour reprendre les relations sexuelles avec pénétration varie selon les besoins et les préférences de chacun.\n\nIl faut savoir se donner du temps et **laisser notre vie sexuelle s’adapter à nos nouvelles réalités**. La sexualité se transforme, partager ses sentiments et ses craintes est alors important, aussi bien pour la maman que pour le papa.	L’arrivée de bébé entraine beaucoup de changements. Pour le corps de la femme, pour le couple, dans les liens familiaux ou amicaux… Il faut plusieurs mois, parfois plusieurs années pour s’habituer. Que chacun trouve sa place, y compris pour les frères et sœurs s’il y en a. Généralement, cela se passe bien mais anticiper ces changements permet de bien les gérer.	https://www.publicdomainpictures.net/pictures/160000/velka/adorable-bebe-aux-yeux-bleus.jpg	https://www.publicdomainpictures.net/fr/view-image.php?image=151253&picture=adorable-bebe-aux-yeux-bleus	https://www.agir-pour-bebe.fr/	\N	2019-05-24	2020-05-12
11	Comment organiser un déménagement simplifié?	## Plannings à suivre pour bien organiser un déménagement\n\n  \n  \n\n### 8 semaines avant le déménagement\n\n-   [ ]  Si vous ne souhaitez pas déménager seul, trouvez votre déménageur, celui que vous aurez pris le soin de sélectionner, en demandant des recommandations de vos amis ou de la famille qui ont déménagé récemment.\n-   [ ]  Consultez nos conseils de déménagement, toutes les informations que vous devez vérifier de votre aide au déménagement.\n-   [ ]  Pensez à prendre une assurance complémentaire dont vous pourriez avoir besoin pour votre déménagement. Vérifiez auprès des sociétés de déménagement potentielles, ce qu'elles couvrent.\n-   [ ]  Si vous déménagez loin de votre ville, vous allez devoir changer certainement de banques, centre d'impôts, compagnie d'électricité, médecins, et écoles pour les enfants. Rassemblez tous les [documents nécessaires](https://www.annexx.com/blog/2017/01/22/souscritoo-aide-demenagement-gratuit/) aux nouvelles inscriptions.\n\n  \n  \n\n### 7 semaines avant le déménagement\n\n-   [ ]  Ouvrez un dossier (sur votre ordinateur et une boîte) où vous pouvez rassembler tous les documents liés au déménagement.\n-   [ ]  Obtenez des devis écrits d'au moins trois entreprises de déménagement (avec licence). Insistez et prenez ce temps, pour que l’entreprise vienne sur place faire l’inventaire et l’évaluation.\n-   [ ]  Faites une liste des organismes ou prestataires à qui vous devrez communiquer votre changement d’adresse. Ne pas oublier dans la liste, vos comptes en ligne aussi.\n\n  \n  \n\n### 6 semaines avant le déménagement\n\n-   [ ]  Si vous avez des enfants, pensez à prévenir la direction pour obtenir l’attestation de sortie et le transfert du dossier scolaire vers la nouvelle école, une étape indispensable pour votre prochaine installation.\n-   [ ]  Avant d’attaquer l'empaquetage de vos affaires dans vos cartons de déménagement, vous allez commencer par faire le tri dans vos placards et vous débarrasser des vêtements que vous ne mettez plus, c'est l'occasion! Faites-le armoire par armoire, puis faites le tour de chaque pièce pour réfléchir à ce que vous gardez (meubles, décorations…).\n-   [ ]  Commencez par faire des dons, vendez en ligne, ou participer à une brocante, vide-greniers.\n-   [ ]  Commencez à emballer ce que vous n’utilisez pas beaucoup : articles saisonniers (meubles de jardin, skis…) et affaires stockées dans le grenier ou la cave.\n\n  \n  \n\n### 5 semaines avant le déménagement\n\n-   [ ]  Achetez les fournitures de déménagement pour le préparer comme les boites, le ruban adhésif, les étiquettes, le film bulle et des cutters. Pensez à commander des articles spécialisés comme des cartons à vaisselle, cartons garde-robe, et des [housses](https://www.annexx.com/cartons-demenagement/housse-couverture.php) matelas.\n-   [ ]  Prévenez vos copains et famille que vous déménagez. Envoyez-leur un e-mail ou sms avec vos nouvelles coordonnées.\n-   [ ]  Ne stockez plus de nourritures, réduisez au strict minimum les achats au supermarché. Commencez à vider le congélateur.\n-   [ ]  Organisez un système d’étiquetage des boites : numérotés, avec un code couleur par pièce, et une liste les répertoriant .\n-   [ ]  Faites un calendrier pièce par pièce de l’ordre d’emballage et commencez à emballer dans vos cartons de déménagement! La cuisine en dernier.\n\n\n\n### 4 semaines avant le déménagement\n\n-   [ ]  Remplissez un formulaire officiel de changement d'adresse avec La Poste, pour un renvoi définitif du courrier dans notre nouvelle installation.\n-   [ ]  Déposez un congé déménagement auprès de votre employeur d’une à deux journées selon le secteur et la convention collective. Prévoyez une baby-sitter si nécessaire.\n-   [ ]  Informez tous vos prestataires et fournisseurs d’énergie de prendre en compte la nouvelle adresse.\n-   [ ]  Validez tous les documents avec votre déménageur et vérifiez que l'assurance est appropriée pour couvrir vos biens précieux.\n\n  \n  \n\n### 3 semaines avant le déménagement\n\n-   [ ]  Annulez les livraisons à domicile de journaux et réorientez vers votre nouveau logement.\n-   [ ]  Rassemblez vos biens de valeur comme les bijoux et petits objets de famille et mettez-les à part. Prévoyez de les transporter vous-même ou par l'intermédiaire d'un service d'expédition traçable.\n-   [ ]  Faites un inventaire des articles fragiles et filmez ou photographiez ces articles. Notez toutes les éraflures, bosses, ou dommages de votre mobilier avant le déménagement.\n\n  \n  \n\n### 2 semaines avant le déménagement\n\n-   [ ]  Avancement de la mise en cartons. Ne remettez pas à la dernière semaine, voir dernier jour l’emballage de vos affaires, cela demande trop d’heures de travail.\n-   [ ]  Vérifiez que toutes les opérations des semaines précédentes ont bien été réalisées et prises en compte.\n-   [ ]  Confirmez votre déménageur et/ou louer votre camion.\n-   [ ]  Réalisez un dossier pour les nouveaux propriétaires de votre maison avec toutes les garanties, les recommandations des fournisseurs, et les notices.\n-   [ ]  Pour le gros électro-ménager, assurez-vous qu'ils sont nettoyés, débranchés, sans eau, ni huile. Congélateurs doivent être dégivrés et vous préférerez un professionnel pour débrancher les conduites de gaz sur certains appareils.\n-   [ ]  Réunissez les ordonnances et assurez-vous que toute la famille a emballé les médicaments dont ils ont besoin dans leur valise.\n-   [ ]  Retirez de l'argent pour le pourboire des déménageurs et assurez-vous que vous avez assez d'argent, chèques ou carte bancaire pour payer des dépenses imprévues.\n\n  \n  \n\n### 1 semaine avant le déménagement\n\n-   [ ]  Les alimentations en énergie doivent être arrêtées dans votre maison actuelle un jour après la date de votre départ. De la même façon, votre nouvelle maison doit être branchée un jour avant votre emménagement.\n-   [ ]  Jetez tous les éléments inflammables qui ne peuvent pas être transportés (peinture, produits chimiques et aérosols).\n-   [ ]  Vérifiez si après emballage, vous n’avez pas mis de côté d’autres affaires à donner, ou vendre.\n-   [ ]  Faites des sauvegardes de tous les ordinateurs et assurez-vous de pouvoir vérifier le courrier électronique et le paiement des factures sur internet sans votre ordinateur le temps du déménagement.\n-   [ ]  Demandez à chaque membre de la famille de préparer une valise comme pour des vacances de deux semaines. Sans oublier de prévoir des articles de toilette et des vêtements confortables pour le déballage.\n-   [ ]  Checkez avec votre entreprise de déménagement une dernière fois et confirmez que vous êtes bien d’accord sur le déroulement. Reconfirmez l'heure d'arrivée du camion le jour J, ainsi que les numéros de portable de l’équipe et les détails de dernière minute.\n-   [ ]  Engagez une entreprise de nettoyage pour faire un nettoyage rapide après le départ des déménageurs.\n\n\n## Quelques conseils supplémentaires\n\nLe fait d'opter pour emballage de qualité est primordial pour déménager sans stress. Pour votre déménagement, choisissez un emballage de qualité. Annexx, [spécialiste en location de box](https://www.annexx.com/), vous conseille et vous aide à protéger vos affaires.\n\n### Comment déplacer des antiquités ?\n\nLes antiquités, meubles anciens et objets de collection sont appréciés tant pour leur valeur financière que sentimentale. De fait, ils sont irremplaçables pour leurs propriétaires. Lors de votre déménagement, soyez très vigilant et offrez leur un emballage et une protection digne de ce nom. Gardez un oeil sur eux et leur manipulation jusqu'au [camion](https://www.annexx.com/conseils-stockage/chargement-camion.php) ainsi que leur mise en place pour le déplacement.\n\n### Comment déménager un chauffage (poêle) ?\n\nLes chauffage (poêles) et fourneaux sont fragiles et peuvent alors être abîmés lors de leur manipulation. Les paroies en verre ou céramique sont fragiles et nécessitent une préparation minutieuse. Avant de les déplacer, pensez à les nettoyer.\n\n### Comment emballer de l’électroménager ?\n\nChaque appareil électrique nécessite d'être manipulé avec précautions. Avant de les déplacer, assurez-vous qu'ils soient bien propres et emballés de sorte à ne pas être abîmés Le papier bulle vous permet de protéger tous les objets, même votre électroménager. Pour les gros appareils (machine à laver, ...) optez pour une [couverture de déménagement](https://www.boutiquedudemenagement.com/produit/couverture-de-demenagement/) qui assurera une protection maximale.\n\n### Comment déplacer un réfrigérateur ?\n\nSi votre réfrigérateur ou congélateur vous suit dans votre nouveau logement, débranchez-le au minimum la veille, dégivrez et veillez à ce qu’il soit bien sec avant de le fermer. Pensez à démonter le compartiment à glaçons afin de le séparer de l'arrivée d'eau et de le vidanger avant votre déménagement. Assurez-vous que les portes du réfrigérateur et du congélateurs sont bien maintenues, car elles ont tendance à s'ouvrir au cours des déplacements.\n\n### Comment déplacer un lave-vaisselle ?\n\nDébranchez tous les tuyaux. Si vous décidez de placer les tuyaux à l'intérieur, n'oubliez pas de les envelopper (dans du tissu) afin d'éviter de possibles endommagements à cause des vibrations et rebondissements dûs au transport. Le fil électrique quand à lui, une fois débranché, doit être attaché au dos de la machine à l'aide d'adhésif. Le panier à couverts doit être fixé (consultez le manuel d'instruction pour les détails et les étapes à suivre).\n\n### Comment déplacer vos bonnes bouteilles de vins ?\n\nDéplacer une collection de bons vins pourrait bien être le seul inconvénient d'avoir une belle cave. Les bons vins sont hypersensibles au mouvement, à l'humidité, au changement de température et à l’exposition à la lumière. Pour protéger votre investissemen et éviter de se retrouver avec un approvisionnement à vie de vinaigre, soit vous les buvez toutes avant (c’est une plaisanterie) , soit vous prenez des dispositions particulières pour leur transport.\n\n### Comment déplacer un lave-linge ou sèche-linge ?\n\nDébranchez tous les tuyaux. Enveloppez vos tuyaux dans du tissu avant de les placer à l'intérieur de la machine. Quant au fil électrique, après l'avoir débranché, n'oubliez de le fixer au dos de la machine à l'aide de ruban adhésif. Le tambour doit être maintenu pour le pas endommager votre machine (consultez le manuel d'instruction pour les détails).  \nPour le sèche-linge, vous devez dans un premier temps débrancher tous vos tuyaux, puis attacher votre fil électrique au dos du sèche-linge. Ensuite, n'oubliez pas de nettoyer le filtre, ça sera l'occasion!\n\n### Comment emballer les bouteilles de vin ?\n\nVos bouteilles de vin nécessitent des soins spéciaux lors du déménagement. Il est tellement facile de bouleverser la chimie délicate du vin avec des températures élevées ou basses, des vibrations, de l'humidité et la lumière. Les bons vins rouges sont particulièrement sensibles aux dommages causés en les déplaçant. Vous pouvez limiter les risques en les emballant très consciencieusement.\n\n### Comment bien emballer des chaussures ?\n\nEvitez d'aller à la facilité en emballant toutes vos chaussures en "vrac" dans un [carton](https://www.annexx.com/cartons-demenagement/) car même si c'est rapide, cela les abimera à coup-sûr. Pour éviter d'écraser vos chaussures, le mieux reste de conserver les boîtes d'origine et de les transporter ensuite dans un grand carton. Si vous n'avez toutefois pas conservé les boîtes de vos chaussures, emballez-les séparément (dans un sac plastique, par exemple) puis déposez les soigneusement dans un carton et le tour est joué !\n\n### Comment transporter de l'argenterie ?\n\nL'argenterie est très fragile et nécessite un soin tout particulier pour être bien emballé puis transporté. Pour déménager des objets fragiles et de l'argenterie, il est nécessaire d'utiliser du [papier bulle](https://www.boutiquedudemenagement.com/produit/papier-bulle/) de qualité. Les objets en argent (et autres métaux) doivent être protégés de l'humidité et des chocs.\n\n### Comment déménager un miroir ?\n\nLes miroirs, qu'ils soient grands ou petits, ont besoin d'être bien emballés avant d'être transportés. Afin de bien protéger votre miroir, déposez-le en "sandwich" entre 2 couches de papier bulle puis entre 2 cartons plats. Fixez le tout avec de l'adhésif et vous voilà prêt à déplacer votre miroir !\n\n### Comment emballer du matériel informatique et HIFI ?\n\nAvant de déplacer un ordinateur, il est toujours conseillé de procéder à des sauvergardes (sur un Cloud ou dans un disque dur externe). Si vous avez opté pour lasauvergarde dans un disque dur, placez-le dans une boîte hermétique afin de le déplacer (et ainsi le protéger des coups et de l'humidité). Fixez vos cables individuellement afin d'éviter les noeuds et placez-les également dans une boîte hermétique.  \nPour votre ordinateur, vous pouvez le placer dans son carton d'origine ou dans une boîte renforcée. Enfin, pour transporter votre imprimante, enelvez les cartouches (si celle-ci est à jet d'encre) et placez votre imprimante dans un carton renforcé.  \nPour le matériel HIFI (home cinéma, enceintes, ...) le mode de fonctionnement est exactement le même. Attachez les câbles ensemble et veillez à bien protéger votre matériel avec du papier bulle ou une [couverture de déménagement](https://www.boutiquedudemenagement.com/produit/couverture-de-demenagement/).\n\n### Comment emballer des verres ?\n\nPour protéger des verres (verre blanc ou cristal) il est primordial de les emballer individuellement. Ils ne doivent en aucun cas être empilés. Pour garantir une meilleure protection, n'hésitez pas à garnir l'intérieur des verres avec du tissu ou du papier (journal ou papier bulle). Placez-les à la verticale dans un carton et comblez les vides avec du tissu, du journal ou du papier bulle. Vous pouvez également opter pour un [carton à croisillons spécial verres](https://www.boutiquedudemenagement.com/produit/croisillon-carton-pour-verre/).\n\n### Comment déménager des outils et du matériel de jardinage ?\n\nAvant toute chose, assurez-vous d'avoir bien vidangé l'ensemble de vos outils thermiques. Nettoyez-les et huilez bien toutes les pièces sensibles. Enfin, protégez les lames et parties coupantes avec du papier bulle. Pour les outils plus petits, protégez les parties coupantes avec du papier bulle et transportez-les dans un carton. Pour les stocker, pensez à les mettre dans un endroit à l'abri de l'humidité.\n\n### Comment déménager du linge de maison ?\n\nPour déménager des draps, couvertures, serviettes, nappes, optez pour un grand carton. Nettement plus pratique à déplacer qu'un grand sac plastique, il garantira la protection de votre linge de maison. Pour les rideaux et tissus fragiles, vous pouvez opter pour un [carton penderie](https://www.boutiquedudemenagement.com/produit/carton-penderie/) avec tringle intégrée.\n\n### Comment déménager des vêtements ?\n\nL'ensemble de vos vêtements peut être transporté dans un grand carton. Pour vos vêtements fragiles, misez sur le carton penderie qui garantira la protection de vos tenues les plus sensibles. En plus, le carton penderie pourra vous servir d'armoire temporaire pendant vos premiers jours dans votre nouveau logement.\n\n### Comment déménager de la nourriture ?\n\nQuelques jours avant votre déménagement, prévoyez de terminer toutes les denrées alimentaires déjà entamées (riz, pâtes, huile, ...). Pour déplacer les produits frais, veillez à les placer dans une glacière avec des bacs congelés. Si votre nouveau domicile se trouve à plusieurs heures de route (au delà de 8h), alors évitez de transporter des produits frais et terminez-les avant le jour J.  \nLes boîtes de conserves et bouteilles seront à emballer dans un carton plus petit de sorte à limiter le poids.\n\n### Comment emballer des livres ?\n\nUn déménagement est aussi l'occasion de faire du tri. Mettez de côté les livres et magazines que vous souhaitez absolument prendre dans votre nouveau logement et emballez séparément les livres que vous souhaitez stocker. L'astuce pour déplacer des livres et d'opter pour un petit carton. Ainsi, cela vous évite de trop le surcharger. Pour limiter encore le point, vous pouvez faire un carton mélangé de bibelots et livres. Vous possédez des livres fragiles ? Emballez-les dans du papier bulle, du tissu ou du journal avec de les placer dans le carton.  \nPour re-remplir votre bibliothèque facilement, conservez le même classement pendant le remplissage du carton.\n\n### Comment emballer du petit matériel ménager ?\n\nLes radios, horloges, petits cadres et autres doivent être emballés de façon individuelle dans des serviettes, torchons ou du papier bulle. Placez-les ensuite dans un carton standard.\n\n### Comment déménager un lampadaire ?\n\nRetirez tout d'abord l'abat-jour et l'ampoule. Emballez-les dans du papier journal (ou à bulles) puis placez-les dans une boîte et comblez les espaces avec du papier journal froissé ou du papier bulle. Pensez à transporter votre lampe ou lampadaire dans le même contenant que l'ampoule et l'abat-jour correspondants.\n\n### Comment déménager les produits ménagers ?\n\nVos produits ménagers nécessitent une attention particulière car il peuvent s'avérer corrosifs ou dangereux.Veillez à bien refermer les emballages des produits déjà entamés (pour les produits en bouteille, placez du film étirable sur le goulot avant de visser le bouchon) puis transportez les à la verticales dans un carton. Comblez les espaces avec du papier journal, du tissu ou du papier bulle.	Le déménagement prend moins des allures de corvée insurmontable lorsque vous décomposez les tâches. Nous conseillons de démarrer au plus tard deux mois avant la date, en suivant des listes de choses à faire chaque semaine (surtout pour le contact des organismes comme les compagnie d'électricité ou les impôts).\n\nNous vous proposons d’utiliser notre guide Annexx pour organiser un déménagement ci-dessous, vous pourrez l’imprimer et coller dans la cuisine ou l’enregistrer sur votre ordinateur, tablette. Vous pourrez ainsi cocher au fur et à mesure les tâches réalisées.	https://cdn.pixabay.com/photo/2017/10/30/10/45/guys-2902059_960_720.jpg	https://pixabay.com/fr/illustrations/gars-hommes-d%C3%A9m%C3%A9nagement-2902059/	https://www.annexx.com/	\N	2020-05-12	2020-05-12
3	Comment faire des économies en électricité?	Alors que la consommation finale d’énergie du secteur résidentiel n’a augmenté que de 1,7 % entre 2002 et 2013, la consommation d’électricité a explosé sur cette même période, avec une **hausse de l’ordre de 23,7 %**, et ce malgré des appareils de moins en moins énergivores !\n\nEn cause, la multiplication du nombre d’équipements électriques au sein des foyers, l’augmentation de leur dimensionnement et de leur durée d’utilisation, mais aussi **des usages pas toujours très économes**. Quelles sont les solutions pour alléger ces factures sans pour autant changer de mode de vie ?\n\n## Diminuer les dépenses liées au chauffage et au ballon d’eau chaude\n\nLe chauffage et l’eau chaude représentent à eux deux **près de 75 % des dépenses d’énergie d’un foyer français**. Réduire la consommation d’électricité liée à leur fonctionnement est donc un enjeu crucial pour diminuer le coût de votre facture.\n\nIl existe de nombreux moyens efficaces pour [réduire votre facture de chauffage](https://www.jechange.fr/energie/duale/guides/reduire-facture-chauffage-1314) : **renforcer** **l’isolation thermique** de votre domicile, régler la température à une valeur adéquate, entretenir correctement vos équipements…\n\nDe la même manière, des gestes simples permettent de [réduire le coût de votre facture dû au chauffe-eau](https://www.jechange.fr/energie/electricite/guides/eau-chaude-4111) de façon significative. Privilégier les douches aux bains, **régler la température du ballon d’eau chaude entre 55 et 60 °C **ou encore installer de petits équipements visant à réduire sa consommation d’eau diminuent ainsi la facture de façon substantielle.\n\n## Adopter les bons comportements en cuisine\n\nLa cuisson représente en moyenne **7 % des dépenses d’énergie des ménages**. Pourtant, plusieurs astuces permettent de réduire sans effort votre consommation d’énergie en cuisine. Penser à **couvrir vos casseroles** et à utiliser des plaques de cuisson appropriées selon la taille des ustensiles vous permettra par exemple une économie non négligeable.\n\nIl est également important d’** adapter vos ustensiles à vos habitudes de cuisson** :\n\n-   Pour faire bouillir de l’eau, privilégiez la bouilloire, peu vorace en énergie.\n-   Pour réchauffer vos plats, le four à micro-ondes consommera moins qu’un four classique.\n-   Pour cuire vos légumes, la cocotte minute sera jusqu’à 60 % plus économe que les casseroles.\n\nDe même, si vous avez souvent recours à vos plaques de **cuisson sur de courtes durées, optez plutôt pour la cuisson par induction**. Les plaques à induction chauffant beaucoup plus vite, elles offrent une économie de courant d’environ 30 % par rapport aux surfaces vitrocéramiques et 50 % par rapport aux plaques classiques.\n\nSi vous êtes plutôt un adepte de la cuisson au four, **préférez un four à chaleur tournante** permettant de cuire plusieurs plats en même temps. Un four combiné (four + micro-ondes) réduira par ailleurs votre consommation d’électricité de 66 à 75 %.\n\nEnfin, une plaque ou un four continuant de chauffer après avoir été éteints, exploitez cette chaleur lors des cuissons longues en les éteignant quelques minutes avant la fin de cuisson.\n\nRecourir aux bons gestes au quotidien\nTotalisant entre 17 et 20 % des dépenses d’énergie d’un foyer moyen, l’électricité spécifique, c’est-à-dire l’électricité utilisée pour des services ne fonctionnant qu’avec cette énergie, est le deuxième poste de consommation des foyers après le chauffage. Considérant l’augmentation du prix de l’électricité, sa part en constante croissance fait de la réduction des dépenses lui étant allouées un enjeu financier essentiel. Pour cela plusieurs solutions s’offrent à vous.\n\nRépartition des dépenses d'électricité spécifique des foyers en 2015\nConsommation d’électricité d’un ménage Français hors chauffage, eau chaude et cuisson (Source : Centre EDF R&D).\nLimitez la consommation de vos appareils de lavage\nL’ensemble des appareils électroménagers liés au lavage représente 33 % de l’électricité spécifique consommée par les foyers possédant un sèche-linge en plus de leur lave-linge et d’un lave-vaisselle.\n\nLe sèche-linge consommant à lui seul 17 % de l’électricité spécifique dépensée, pour réduire sa facture d’électricité, il est fortement recommandé de privilégier le séchage des vêtements à l’air libre. Lorsque c’est impossible, préférez un appareil doté d’une sonde d’humidité qui s’arrêtera ou se mettra en veille automatiquement dès le séchage terminé et essorez convenablement votre linge avant de l’y placer.\n\nMême si votre lave-linge consomme relativement peu d’électricité, vous pouvez tout de même limiter la part de votre facture lui étant due en n’ayant pas systématiquement recours au prélavage, le plus souvent inutile, et en privilégiant les programmes à basse température.\n\nDe la même manière, si le lave-vaisselle est réputé plus économique que de faire la vaisselle à la main en laissant couler l’eau, il faut pour cela qu’il soit systématiquement rempli avant utilisation. Pensez également à utiliser le programme « éco » permettant de réduire la consommation jusqu’à 45 %.\n\nEnfin, n’oubliez pas de nettoyer régulièrement les filtres et les joints de vos appareils de lavage pour leur garantir un fonctionnement optimal.\n\nChoisissez les appareils multimédias les moins énergivores\nDeuxième source de consommation d’électricité spécifique, les appareils multimédias se multiplient au sein des foyers. Pour limiter leur dépense d’électricité, il est important de sélectionner les appareils les plus économes.\n\nLes téléviseurs à écran LCD consomment par exemple moins d’énergie que ceux dotés d’un écran plasma. De la même manière, il est conseillé de privilégier l’utilisation d’ordinateurs portables, nécessitant entre 50 et 80 % d’énergie en moins que les postes fixes, et les imprimantes à jet d’encre qui n’ont pas besoin de préchauffage et requièrent entre 5 et 10 W, contre 200 à 300 W pour les imprimantes laser.\n\nDe manière générale, les équipements multifonctions consommeront moins que la somme des appareils qu’ils remplacent : une imprimante combinant scanner, fax et photocopieur nécessitera ainsi 50 % d’énergie en moins que l’ensemble de ces appareils pris individuellement.\n\nEnfin, les chargeurs de téléphone ou d’ordinateur portable risquant de continuer à consommer de l’électricité même si la charge est terminée et qu’ils ne sont plus reliés à un appareil, débranchez les systématiquement.\n\nTraquez les veilles de vos appareils électriques\nMême éteints, de nombreux appareils continuent de consommer de l’électricité lorsqu’ils restent branchés. TV, lecteur DVD, console de jeu et ordinateur mais aussi cafetière, micro-ondes, machine à pain, lave-linge et lave-vaisselle : faites attention aux veilles cachées !\n\nPour les éviter, vous pouvez vous doter de prises « coupe veille », qui stoppent l’arrivée du courant lorsque vous éteignez un appareil, de prises dites « intelligentes », qui l’arrêtent au bout d’un certain temps de veille, ou encore de logiciels gestionnaires d’énergie réduisant la consommation de votre ordinateur de 40 à 60 %.\n\nEnfin, en cas d’absence prolongée, débranchez tous vos appareils électriques, chauffe-eau compris. Attention cependant aux appareils connectés : les veilles de certains lave-linge ou lave-vaisselle sont par exemple connectées à la détection de fuites.\n\nOptimisez le fonctionnement de vos appareils producteurs de froid\nLes réfrigérateurs et les congélateurs sont très gourmands en électricité. Leur consommation dépendant de l’écart de température avec l’extérieur, pour économiser de l’énergie, il vaut mieux éviter de les placer près d’une source de chaleur (radiateur, four, plaques de cuisson, fenêtre ensoleillée…). Il est également impératif de laisser de l’espace derrière et au dessus de l’appareil pour que l’air circule correctement.\n\nSi votre congélateur s’acclimatera parfaitement à une cave ou un garage non chauffé, mieux vaut éviter de tels environnements pour votre réfrigérateur. Chaque appareil est en effet conçu pour fonctionner dans une certaine fourchette de températures ambiantes que vous pouvez retrouver sur la documentation et à l’intérieur de l’appareil. En dehors de cette fourchette, ses performances vont être altérées et il va surconsommer ou s’arrêter.\n\nIl est également préférable de ne pas ouvrir ces appareils trop longtemps et trop souvent pour éviter la déperdition d’air froid, et de n’y placer ni aliments encore chauds, ni liquides ou légumes non couverts afin de parer à toute évaporation favorisant l’accumulation de givre. Une couche de givre dépassant 3 mm augmente en effet la consommation de vos appareils de près de 30 %.\n\nEnfin, pour éviter toute surconsommation, pensez également, en plus du dégivrage de vos appareils, à régulièrement dépoussiérer leurs grilles arrière, les nettoyer et vérifier que les joints de leurs portes sont propres et bien ajustés.\n\nEclairez-vous malin\nDe nombreux gestes simples permettent de diminuer votre consommation électrique consacrée à l’éclairage tout en conservant une luminosité optimale.\n\nVous pouvez par exemple aménager votre intérieur de manière à profiter au maximum de la lumière naturelle. En orientant vos meubles de façon à éviter les zones d’ombres gênantes et bénéficier d’un maximum de luminosité là où vous en avez le plus besoin (bureau, plan de travail, coin lecture…), il est possible d’ économiser jusqu’à une heure d’éclairage quotidien ! Habiller vos murs et plafonds de couleurs claires réfléchissant mieux la lumière est également une solution pour limiter le recours à l’éclairage artificiel.\n\nPensez à vous équiper en ampoules basse consommation. Des modèles de lampes fluocompactes (LFC) ou de lampes à LED sont maintenant adaptables à tous les types de luminaires. Vous pouvez également ajuster l’intensité lumineuse de vos ampoules selon les pièces : les pièces à vivre nécessitent entre 15 et 20 W par m2 contre entre 10 et 15 W par m2 pour les chambres et les couloirs et 5 W sont suffisants pour regarder la TV ou l’ordinateur.\n\nComparer les options tarifaires et les offres des fournisseurs\nDepuis l’ouverture du marché de l’électricité à la concurrence, des fournisseurs alternatifs proposent des offres de marché à des prix souvent plus intéressants que les tarifs réglementés de l’opérateur historique EDF.\n\nLes offres Happ-e de GDF Suez et Online électricité de Direct Energie promettent par exemple une économie de 8 % sur le prix du kWh d’électricité HT. Pour comparer les différentes offres des fournisseurs d’électricité ou tout simplement vous renseigner, consultez notre comparateur des meilleurs tarifs d’électricité.\n\nLes fournisseurs proposent également diverses options tarifaires. Souscrire une option « heures creuses – heures pleines » vous permettra par exemple de faire d’importantes économies si vous faites fonctionner le maximum de vos appareils électriques pendant les heures creuses, où le prix du kWh d’électricité HT est réduit. Certaines machines (lave-linge, lave-vaisselle…) sont par ailleurs équipées d’un départ différé qui permet de profiter facilement de cet avantage.\n\nSources : ADEME – CGDD	Avec l'augmentation globale du prix de l'énergie, les foyers consacrent une part croissante de leurs dépenses domestiques à leur facture d'électricité. JeChange vous propose quelques clés pour réduire leur coût.	https://www.sibelenergie.fr/wp-content/uploads/2019/04/arton13262-1.jpg	https://www.sibelenergie.fr/	https://www.jechange.fr/	\N	2009-09-25	2019-11-26
5	Demande de dommages-intérêts en justice	### Types de préjudice\n\nIl existe 3 types de préjudice :\n\nTypes de préjudice\n| \nType\n\n | \n\nDéfinition\n\n |\n| --- | --- |\n| \n\nPréjudice physique\n\n | \n\nAtteinte à la santé ou à l'intégrité physique ou mentale d'une personne\n\nExemples :\n\n\\- Jambe cassée suite à des violences ou à un accident de la route\n\n\\- Maladie causée par un produit chimique\n\n |\n| \n\nPréjudice moral\n\n | \n\nAtteinte au bien-être affectif, à l'honneur ou à la réputation\n\nExemples :\n\n\\- Perte d'un proche\n\n\\- Diffamation d'une personne ou d'une société\n\n |\n| \n\nPréjudice matériel\n\n | \n\nAtteintes aux biens d'une personne (voitures, vêtements...) et à ses intérêts financiers (perte de chiffre d'affaires, sommes versées indûment...)\n\n |\n\nTous ces préjudices peuvent être réparés par le versement de dommages et intérêts qui compensent financièrement le préjudice subi.\n\nUne infraction peut occasionner plusieurs préjudices : par exemple, un vol avec effraction occasionne un préjudice matériel et moral.\n\n### Demande d'indemnisation\n\n#### Constitution du dossier\n\nSi vous êtes victime et que vous souhaitez obtenir une indemnisation, vous devez constituer un dossier comprenant, pour chaque préjudice, l'évaluation du montant de la réparation. L'évaluation doit comprendre les frais liés directement aux dommages subis.\n\nVous devez également prouver que :\n\n-   votre préjudice a été causé par une [infraction](https://www.service-public.fr/particuliers/glossaire/R10272),\n-   la personne à qui vous demandez réparation est bien [responsable](https://www.service-public.fr/particuliers/vosdroits/F1423) de votre préjudice (auteur de l'infraction, représentant légal pour un mineur),\n-   le préjudice est réel (la faute vous a causé un dommage incontestable),\n-   le préjudice est direct et vous concerne personnellement,\n-   le préjudice est certain. Le dommage est établi et peut être évalué. L'évaluation peut être pour un dommage immédiat (coût d'une voiture accidentée, frais médicaux....). Elle peut aussi se faire pour un dommage futur, s'il est certain que le dommage se produira et qu'il peut être évalué immédiatement. Par exemple : si une personne est blessée, les conséquences de cette blessure sur sa situation à venir et les pertes de gains futurs peuvent être évaluées (par exemple, plusieurs jours de travail manqués).\n\n#### Saisie du tribunal\n\nVous devez présenter au tribunal une demande destinée à indemniser l'ensemble des préjudices que vous avez subis. Le juge ne peut pas condamner la partie attaquée à verser un montant supérieur à votre demande.\n\nVous devez présenter des preuves de votre préjudice : factures, photos de l'accident...\n\nVous pouvez saisir un tribunal civil, que le responsable du dommage ait commis ou non une infraction pénale. Le tribunal compétent dépend du type et du montant du litige.\n\nLa juridiction compétente dépend des sommes en jeu dans le litige.\n\n-   Pour un litige inférieur ou égal à 10 000 €, c'est le tribunal de proximité ou le tribunal judiciaire.\n-   Pour un litige supérieur à 10 000 €, c'est le tribunal judiciaire.\n\n##### Où s’adresser ?\n\n-   [Tribunal judiciaire ou de proximité   nouvelle fenêtre](https://www.justice.fr/recherche/annuaires "Tribunal judiciaire ou de proximité - www.justice.fr - Nouvelle fenêtre")\n    \n\nVous pouvez aussi demander au juge de prononcer également une [astreinte](https://www.service-public.fr/particuliers/glossaire/R16772). Si l'astreinte est prononcée, le responsable de l'indemnisation est tenu au paiement d'une somme d'argent supplémentaire en cas de retard de paiement.\n\n  **À noter : **les parties peuvent aussi éviter un passage au tribunal grâce à un [accord à l'amiable](https://www.service-public.fr/particuliers/vosdroits/F1732).\n\n### Versement de l'indemnisation\n\nUne fois la somme déterminée par le juge, la victime possède une [créance](https://www.service-public.fr/particuliers/glossaire/R12474) sur la personne condamnée qui devient [débiteur](https://www.service-public.fr/particuliers/glossaire/R12468). La créance est un droit dont la victime peut utiliser.\n\nLa décision du juge accordant l'indemnisation peut être exécutée de manière [définitive ou provisoire](https://www.service-public.fr/particuliers/vosdroits/F1780).\n\nEn cas de difficulté dans le recouvrement des sommes, il est possible de faire appel :\n\n-   au juge pour obtenir une [injonction de payer](https://www.service-public.fr/particuliers/vosdroits/F1746),\n-   à un [huissier](https://www.service-public.fr/particuliers/vosdroits/F2158) qui pourra procéder à une saisie.\n\n  **À savoir : **dans certains cas, c'est [l'assurance](https://www.service-public.fr/particuliers/vosdroits/F2123) du responsable du dommage qui peut indemniser la victime.	La victime d'un dommage causé par une faute peut saisir le tribunal pour que le responsable de la faute soit condamné à indemniser son préjudice. Elle obtiendra ainsi des dommages-intérêts. La victime doit établir avec précision les préjudices subis et en fournir des preuves. La demande peut être présentée dans une affaire civile ou pénale.	https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/593a109f479a459c1c8b463f.jpg	https://www.lanouvellerepublique.fr/	https://www.service-public.fr/	jfoisjfzijfùpzjfi	2020-01-01	2020-01-01
16	Inscrire son enfant à la crèche : critères d'admission et documents à fournir	## Où trouver une crèche ?\n\nPour trouver un lieu d’accueil pour votre enfant, vous pouvez interroger le moteur de recherche du site [Monenfant.fr.](https://mon-enfant.fr/web/guest/trouver-un-mode-d-accueil?p_p_id=fr_monenfant_recherche_portlet_RecherchePortlet_INSTANCE_VnedXuapLnSM&p_p_mode=view&p_p_state=normal&_fr_monenfant_recherche_portlet_RecherchePortlet_INSTANCE_VnedXuapLnSM_recherche-selected-structures=eaje&_fr_monenfant_recherche_portlet_RecherchePortlet_INSTANCE_VnedXuapLnSM_recherche-distance-range=4 "site web monenfant.fr")\n\nVous pouvez aussi vous rapprocher de votre commune ou de votre département dont le service de la Petite Enfance peut vous renseigner sur le mode d’inscription dans les [crèches](https://demarchesadministratives.fr/creches-et-garderies "annuaire des crèches") collectives ou familiales de votre ville.\n\n**Choisir une crèche proche de chez vous est un facteur de sélection en priorité. Se renseigner, relancer, se tenir aux nouvelles des places disponibles en crèche démontre votre motivation et peut favoriser l’attribution d’une place**.\n\n## Quand inscrire son enfant à la crèche ?\n\n**Il est fortement conseillé aux parents de pré-inscrire leur futur enfant dans plusieurs crèches dès la confirmation de la grossesse**.  \n\n-   Notez que certaines crèches n’acceptent les demandes d’inscription qu’**à partir de 6 mois de grossesse**.\n-   **Contacter le service Petite Enfance de sa commune ou de son département** afin de prendre un rendez-vous et prendre connaissance des pièces à fournir pour le dossier d’inscription.\n-   L’inscription en crèche doit être confirmée par l’envoi d’**un acte de naissance de l’enfant**.\n\n## Quels sont les critères d’admission ?\n\n**Certaines situations sont privilégiées par les crèches.**\n\n-   Sont prioritaires les enfants dont les 2 parents ont un** travail à temps plein**.  \n    \n-   Sont également favorisés les **enfants nés à une certaine période de l’année** et dont l’inscription est demandée pour septembre (la section des enfants de 3 ans entrant en maternelle).\n-   Les commissions d’admission priorisent les** fratries **et le fait d’avoir des **jumeaux **ou plus.\n\nVous pouvez retrouver ces critères d’admission dans le **règlement intérieur** de ces établissements. Il est parfois mis en ligne ou à disposition dans [les mairies](https://demarchesadministratives.fr/mairie "réglement intérieur des crèches en ligne à la mairie").\n\n  \n  \n\n## Les documents à fournir\n\n-   le certificat de grossesse\n-   les photocopies des pages du carnet de santé de l’enfant et notamment les informations relatives aux [vaccinations](https://demarchesadministratives.fr/demarches/vacciner-son-enfant-pour-son-inscription-en-collectivite-est-obligatoire "Vacciner son enfant pour son inscription en collectivité est obligatoire")\n-   un justificatif de domicile\n-   les justificatifs de revenus : généralement les trois derniers bulletins de paie\n-   la déclaration de revenus de l’année en cours\n-   le numéro d’allocataire CAF (Caisse d’allocations familiales)  \n    \n\nÀ l’issue de l’inscription, vous recevrez **un récépissé d’inscription** qu’il faut fournir avec l’acte de naissance au moment de la confirmation de naissance de l’enfant.\n\n**Si l’enfant est déjà né au moment de la demande d’inscription**, pensez à joindre à votre dossier d’inscription :\n\n-   l’acte de naissance de votre enfant\n-   le livret de famille\n\n## L’admission de son enfant à la crèche donne-t-elle droit à une déduction d’impôt ?\n\nSachez que pour les enfants de moins de 6 ans, il est possible de [déduire les frais de garde](https://demarchesadministratives.fr/deduire-les-frais-de-garde-dun-enfant/145 "déduire les frais de garde d'un enfant") sous forme de crédit d’impôt. La CAF ne verse pas d’aide directement aux parents.\n\n## Comment financer la crèche ?\n\nLes familles dont les enfants sont accueillis en crèche peuvent **bénéficier de la prestation de service unique** (PSU) jusqu’aux 3 ans de l’enfant (et jusqu’aux 5 ans révolus d’un enfant handicapé).\n\nLes parents versent à la crèche une participation financière qui varie en fonction de leurs ressources et de leurs charges de famille. Cette participation est calculée sur les ressources nettes mensuelles imposables du foyer en fonction du nombre d’enfants à charge.\n\n## La décision d’admission de votre enfant\n\nIl est important de préciser que **l’inscription ne vaut pas admission dans une crèche.**  \n\n-   L’**admission définitive** de l’enfant n’est effective que **lorsqu’une place se libère** et que l’enfant a été reconnu apte après une visite médicale.\n-   Si la visite médicale ne peut pas avoir lieu avant l’admission, le médecin de l’enfant doit fournir un **certificat médical d’aptitude à la collectivité**.\n\n## Quelles sont les structures de garde alternatives en cas de refus d’admission de votre enfant dans une crèche ?\n\nLes crèches collectives et familiales sont les structures les plus plébiscitées et ne peuvent pas accueillir tous les enfants.\n\n**Il existe des modes de garde alternatifs** : [les crèches parentales, les haltes-garderies, les jardins d’enfants et les assistantes maternelles.](https://demarchesadministratives.fr/faire-garder-son-enfant-a-lexterieur/190 "garder son enfant à l'extérieur")	L’admission en crèche est réservée aux enfants âgés de 2 mois à 6 ans selon les établissements. Ils doivent être à jour au regard des vaccinations obligatoires (sauf contre-indication attestée par un certificat médical). Différentes structures existent pour faire garder votre enfant en bas âge. La crèche est le mode de garde le plus répandu. Comment procéder à une inscription en crèche ? C’est l’objet de cet article.	https://demarchesadministratives.fr/images/demarches/229/inscrire-mon-enfant-a-la-creche.jpg	https://demarchesadministratives.fr/	https://demarchesadministratives.fr/	\N	2019-04-09	2020-05-12
17	Gaz Choisir son fournisseur de gaz	## COMPRENDRE LES DIFFÉRENTS TARIFS\n\nAvant de quitter le tarif réglementé pour une offre à prix de marché chez un fournisseur de gaz alternatif, ou même chez Engie, il est important de comprendre les différences entre tarif réglementé, prix de marché, prix fixe et prix indexé.\n\n### Le tarif réglementé\n\nLe tarif réglementé est fixé par les pouvoirs publics après proposition la Commission de régulation de l’énergie (CRE). Ce tarif peut évoluer tous les mois, à la hausse comme à la baisse, ou rester identique. La formule de calcul qui détermine l’évolution du tarif réglementé est en effet basée sur les coûts d’approvisionnement, les prix du marché de gros du gaz, les coûts de transport et de distribution.\n\nSeuls le [fournisseur historique Engie](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/gdf-suez-2-p172025/) et les petits fournisseurs historiques implantés localement peuvent commercialiser le gaz au tarif réglementé. Engie peut desservir 95 % des usagers, les entreprises locales de distribution 5 %.\n\n### Le prix de marché\n\nQuand le gaz n’est pas vendu au tarif réglementé par Engie, il est commercialisé en prix de marché. Ni la CRE ni l’État n’interviennent, le prix est alors librement fixé par chaque fournisseur.\n\nLe prix de marché peut être fixe ou indexé.\n\n**Prix fixe**\n\nLe fournisseur s’engage sur un prix qu’il a librement fixé et sur une durée déterminée. Ce peut être 1, 2, 3 ou 4 ans. Durant cette période, le prix du kilowattheure fixé à la souscription du contrat ne change pas, quelle que soit par ailleurs l’évolution du tarif réglementé, à la hausse ou à la baisse.\n\n**Prix indexé**\n\nLe fournisseur indexe son prix de marché sur l’évolution du tarif réglementé. Le prix du kilowattheure va alors évoluer exactement de la même façon que le tarif réglementé, baisser quand il baisse, augmenter quand il augmente, en conservant le même écart.\n\n### Gare aux pièges des zones tarifaires en prix de marché\n\nÀ partir d’une consommation de 6 000 kWh par an, il existe 6 zones tarifaires pour le gaz en tarif réglementé, de la zone 1, la moins chère, à la zone 6, la plus chère. La plupart des fournisseurs alternatifs ont calé leurs offres sur ces 6 zones du tarif réglementé, mais attention, Alterna, EDF et Engie ont chacun adopté leur propre zonage maison, et il peut réserver de mauvaises surprises.\n\n[Comparez les tarifs des fournisseurs de Gaz et d’Électricité](https://www.quechoisir.org/comparateur-energie-n21201/) et choisissez l’offre la plus adaptée à votre logement et à votre consommation !\n\n## LES FOURNISSEURS DE GAZ\n\nAvec quelques fournisseurs historiques implantés localement, Engie détient le monopole du gaz au tarif réglementé. Tous les autres fournisseurs sont dits « alternatifs » : ils ne commercialisent le gaz qu’à prix de marché. Il s’agit d’[Alterna](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/alterna-2-p172031/), [Antargaz](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/antargaz-p172023/), [Butagaz](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/butagaz-2-p188228/), [Total Direct Énergie](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/direct-energie-2-p172019/), [Dyneff](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/dyneff-p183819/), [Eni](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/eni-p172021/), [Iberdrola](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/iberdrola-p230235/), [Vattenfall](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/vattenfall-p224505/), [Énergem](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/energem-p188224/), [Mega Énergie](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/mega-energie-p230507/) et [EDF](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/edf-p172033/), qui a le statut de fournisseur alternatif pour le gaz.\n\nOutre le tarif réglementé, le fournisseur historique [Engie commercialise également le gaz à prix de marché](https://www.quechoisir.org/comparatif-fournisseurs-de-gaz-n791/gdf-suez-3-p172027/).\n\n## COMMENT COMPARER LES OFFRES ?\n\nQuand une offre commerciale annonce -10 % ou, mieux encore, -18 % par rapport au tarif réglementé, il ne faut pas croire que la facture totale va être réduite d’autant. Sauf exception, cette réduction concerne seulement le prix du kilowattheure HT. L’abonnement, lui, est facturé au même prix qu’en tarif réglementé. Certains fournisseurs commercialisent même l’abonnement plus cher qu’en tarif réglementé, mais évidemment, ils ne s’en vantent pas dans leurs messages publicitaires !\n\nSe contenter des promesses d’un opérateur ne garantit pas de vraies économies. *Que Choisir* recommande vivement de comparer les vrais prix, c’est-à-dire la facture totale, taxes et TVA comprises. [Notre comparateur de gaz, et d’électricité, le permet.](https://www.quechoisir.org/comparateur-energie-n21201/)\n\n## FAUT-IL PRÉFÉRER UN PRIX FIXE OU UN PRIX INDEXÉ ?\n\nLe prix fixe a quelque chose de rassurant, on sait combien on va payer sur une durée déterminée. Mais depuis que la formule de calcul a été révisée, en 2013, le prix du gaz a longtemps évolué globalement à la baisse. Si les consommateurs qui ont souscrit aux [offres « Gaz moins cher ensemble » organisées par l’UFC-Que Choisir](https://www.quechoisir.org/action-ufc-que-choisir-bilan-detaille-de-la-campagne-gaz-moins-cher-ensemble-n13671/), et désormais aux opérations [« Énergie moins chère ensemble »](https://www.quechoisir.org/action-ufc-que-choisir-energie-moins-chere-ensemble-15-6-millions-d-euros-de-pouvoir-d-achat-economises-n23325/), sont fortement gagnants malgré le prix fixe, c'est en raison de la très forte réduction proposée par les fournisseurs lauréats. En revanche, les usagers qui ont souscrit des offres à -5 % ou -8 % en prix fixe ont en général été perdants. Et on est perdant à coup sûr si on opte pour une offre à prix fixe en plein hiver, lorsque le prix du gaz est au plus haut.\n\n![Evolution du tarif réglementé du gaz](https://im.qccdn.fr/node/guide-d-achat-gaz-11193/inline-37589.jpg "Evolution du tarif réglementé du gaz")AGRANDIR LA PHOTO\n\nÉtant donné que le tarif réglementé du gaz est révisé chaque mois, choisir une offre en prix indexé ne met pas à l’abri des hausses qui interviennent surtout l'hiver, au moment où l’on consomme le plus.\n\nLe prix fixe reste le plus intéressant, mais à deux conditions : il faut souscrire à un pourcentage inférieur au tarif réglementé d’une part, et souscrire au bon moment d’autre part, c’est-à-dire avant la hausse hivernale du tarif réglementé. On est alors gagnant sur un contrat d’1 an, on passe l’hiver au meilleur prix sans subir les augmentations. Compte tenu de la hausse du prix du gaz depuis début 2018, on peut cependant opter pour un contrat plus long afin d’éviter d’autres hausses futures. Cela n’empêchera pas de changer de fournisseur si la tendance repart franchement à la baisse. La démarche est en effet gratuite.\n\n## SUIS-JE ENGAGÉ PAR UNE OFFRE SUR 12, 24, 36 OU 48 MOIS ?\n\nNon, la fourniture d’énergie est régie par des règles particulières. Le seul engagement qui existe est celui du fournisseur de gaz. Le client n’est jamais engagé par la durée du contrat, même s’il a signé pour une offre à prix fixe sur 3 ans. Il est possible de revenir au tarif réglementé ou de résilier son contrat pour changer à nouveau de fournisseur à tout moment sans pénalités.	Depuis que le marché de l’énergie est ouvert à la concurrence, le tarif réglementé du gaz d'Engie (ex-GDF Suez) coexiste avec une trentaine d'offres de marché. Le gaz est alors vendu à un prix non réglementé, librement fixé par chaque fournisseur de gaz. Faut-il souscrire ?	https://selectra.info/sites/default/files/images/fournisseurs-gaz-france-2019.png	https://selectra.info/energie	https://www.quechoisir.org/	Élisabeth Chesnais	2020-05-12	2020-05-12
7	L'assurance auto est-elle obligatoire pour une voiture immobile ?	## Existe-t-il une obligation d’assurance pour une voiture immobilisée ?\n  \nDavid Jassurmalin a raison. Même si un véhicule a pour (triste !) destinée de rester dans un garage, il doit quand même être assuré.  \n  \nLa règle est très simple : l’article L211-1 du Code des assurances dispose que **tout véhicule terrestre à moteur (VTM) doit être assuré au minimum au tiers**, soit la garantie minimale proposée par l’[assurance automobile](https://www.assurland.com/assurance-automobile.html). Et ce, même s’il est immobilisé.  \n  \nLa raison est très simple également : **une voiture, même immobile, représente un risque pour des tiers**. Une voiture qui ne sert pas peut prendre feu, peut exploser, ou les freins peuvent lâcher et blesser un tiers.  \n  \n## L'assurance au tiers convient-elle à une voiture immobile ?\n  \nComme les autres produits d’[assurance](https://www.assurland.com/), l’assurance voiture propose plusieurs garanties dont les niveaux vont du plus faible (la garantie au tiers) au plus élevé (prenant en charge aussi bien les dégâts matériels que corporels).  \n  \nDans le cas d’un véhicule immobilisé, le propriétaire ne risque pas de se blesser lui-même ni de provoquer des dommages matériels sur la voiture en question.  \n  \n**Seuls les risques que la voiture immobilisée peut provoquer à des tiers doivent être assurés**. Une garantie au tiers suffit donc amplement afin de couvrir la [Responsabilité Civile](https://www.assurland.com/assurance-blog/glossaire-de-l-assurance/definitions-lettre-r.html) du propriétaire.  \n  \n*« En plus, au tiers, tu ne paieras plus aussi cher papa »* explique David à son père.  \n  \n![voiture-maison-garage](https://d1syos9fsbz8ei.cloudfront.net/Images/BlogImages/voiture-maison-garage_10264.jpg "Une auto qui ne roule plus doit-elle être assurée ?")  \n  \n## Envie d'une assurance au meilleur tarif ? Comparez !\n  \n*« Si tu veux, on peut aller sur un [comparateur d’assurances](https://www.assurland.com/) sur Internet pour trouver les formules au tiers les moins chères ! » *  \n  \n*« Ah oui ! On avait regardé la dernière fois qu’on était venu vous voir ! Allons-y, montre-moi ton [comparateur d’assurance auto](https://www.assurland.com/assurance-auto.html) et cette fois, c’est moi qui m’y colle, ça ne doit pas être bien compliqué ! »* plaisante papi Henri !  \n  \n*« Vous avez raison Henri, ça ne vous prendra que **quelques minutes**, et vous aurez tout de suite* ***un aperçu des tarifs d’assurance voiture actuels** sur le marché ! »* dit Sophie Jassurmalin.  	La famille Jassurmalin accueille aujourd’hui les grands-parents, mamie Jeanne et papi Henri. Ces derniers vont pouvoir profiter plus souvent de leurs petits-enfants puisqu’ils ont emménagé dans une maison à deux rues de celle de la famille ! \n\n \n\nA cette occasion, papi Henri a décidé d’arrêter de conduire, le couple de retraités n’en a plus vraiment besoin. Mamie Jeanne ne conduit plus depuis déjà quelques temps et papi Henri sent ses anciens réflexes de jeune homme s’effacer peu à peu !\n\n \n\nDe toute manière, l'assurance auto pour les seniors était devenue trop chère, à cause de leur âge.\n\n \n\n« Par contre, je veux conserver notre voiture dans le garage, ça peut toujours servir ! » explique papi Henri à son fils David et sa belle-fille Sophie.\n\n \n\n« Tu seras quand même obligé de garder ton assurance auto » explique David.	https://d1syos9fsbz8ei.cloudfront.net/Images/BlogImages/jassurmalin-henri_6524.jpg	https://www.assurland.com/	https://www.assurland.com/	 Stéphanie Robert	2018-06-28	2018-06-28
20	Quelle procédure en cas de divorce ?	## Le divorce par consentement mutuel\n\nCette procédure amiable suppose que le couple s’accorde non seulement sur le principe même du divorce, mais aussi sur l’ensemble de ses effets (résidence des enfants, droit de visite et d’hébergement, montant de la pension alimentaire , partage des biens, etc).\n\nLa [loi de modernisation de la justice du XXIème siècle du 18 novembre 2016](https://www.legifrance.gouv.fr/affichLoiPreparation.do?idDocument=JORFDOLE000030962821&type=general&typeLoi=proj&legislature=14) a instauré le divorce par consentement mutuel sans procédure judiciaire (parfois appelé "divorce sans juge"). Depuis le 1er janvier 2017, les époux souhaitant divorcer par consentement mutuel n'ont plus besoin de passer par le juge aux affaires familiales, sauf exceptions. Les époux constatent, assistés chacun par un avocat, leur accord sur la rupture du mariage dans une convention. Chaque époux a un délai de réflexion de quinze jours avant de signer cette convention, sans pouvoir renoncer à ce délai. A la demande de l'un des avocats, la convention est déposée au rang des minutes d’un notaire, dont le rôle est de contrôler le respect de la procédure, tant sur la forme que sur les délais. Ce dépôt divorce les époux et donne ses effets à la convention en lui conférant date certaine et force exécutoire .\n\nNéanmoins, la convention devra être soumise à l'homologation approbation du juge aux affaires familiales (JAF) quand l'un des enfants mineurs des époux demande à être auditionné par le juge. Dans ce cas, le divorce par consentement mutuel est judiciaire.\n\nDe manière générale, il est souhaitable que les époux consultent un notaire afin de les aider à organiser la séparation de leurs patrimoines respectifs. Enfin, son intervention est obligatoire si le couple possède des biens immobiliers (lire le "[divorce et partage des biens](https://www.notaires.fr/fr/couple-famille/divorce/divorce-et-partage-des-biens)").\n\nA savoir :\n\n-   Les procédures en cours au 1er janvier 2017 restent judiciaires si la requête en divorce par consentement mutuel a été déposée avant cette date.\n-   Si l’un des époux fait l’objet d’une mesure de protection (tutelle ou curatelle notamment), le divorce par consentement mutuel est interdit.\n\n### Deux avocats ou un seul ?\n\nLes époux qui souhaitent divorcer par consentement mutuel sont assistés chacun par un avocat. En revanche, lorsque le divorce par consentement mutuel est judiciaire (c’est le cas lorsqu’un enfant mineur du couple a demandé à être auditionné par le juge), les époux peuvent choisir d’un commun accord un seul avocat.\n\n* * *\n\n## Comment bien se séparer ?\n\nPourquoi est-ce important de bien se séparer ? Quelles sont les questions les plus sensibles dans un divorce ? Comment faire pour que cette ancienne vie maritale ne pollue pas la nouvelle ?\n\n* * *\n\n## Vivre séparés mais mariés\n\nA noter : il est fréquent que l’un des conjoints quitte le domicile conjugal avant même d’engager une procédure de divorce. Or, même séparés, les époux restent soumis aux obligations du mariage (assistance et secours à l’égard de l’autre notamment).\n\nCette rupture, appelée séparation de fait, ne modifie en rien non plus les droits successoraux du couple et leur situation patrimoniale. Aussi, si les époux sont mariés sous le régime de la communauté, leurs revenus et tous les biens qu’ils achètent même après leur séparation restent communs.\n\n* * *\n\n## Le divorce conflictuel : divorce accepté, divorce pour faute, divorce pour altération définitive du lien conjugal\n\nAttention : les développements qui suivent sont applicables aux procédures antérieures au 1er septembre 2020. A compter de cette date, la procédure des divorces contentieux sera profondément modifiée.\n\nSi l’un des époux ne souhaite pas divorcer ou si les époux sont en **désaccord** sur les modalités financières ou personnelles de leur séparation, la **procédure** devient **contentieuse**. Elle est lancée par le dépôt d’une **requête** auprès du tribunal judiciaire rédigée par l’avocat de l’époux demandeur. Une fois saisi, le juge aux affaires familiales convoque les époux à une audience de conciliation. Si à l’issue de cette audience le juge constate que l’époux qui a pris l’initiative de la procédure maintient sa demande, il rend une **ordonnance de non-conciliation**. L’époux qui a déposé la requête initiale dispose alors de trois mois pour assigner l’autre en divorce, après quoi, l’autre époux pourra lui aussi assigner en divorce, dans le délai maximum de 30 mois. Une fois ce délai passé, l'ordonnance qui fixe notamment les mesures provisoires, est caduque.\n\n### Le divorce accepté\n\nCette procédure de **divorce pour acceptation de la rupture du mariage **peut être envisagée lorsque les époux sont d’accord sur le principe du divorce, mais qu’ils ne parviennent pas à s’entendre sur ses conséquences.\n\nA noter: une fois qu’ils ont opté pour cette forme de divorce, les époux ne peuvent choisir une autre procédure, sauf pour s’orienter vers un divorce par consentement mutuel.\n\n### Le divorce pour faute\n\nUn époux peut demander le **divorce pour faute** si son conjoint a commis une infidélité, une humiliation, un manquement de contribution aux charges du mariage, une violence… Celui qui invoque la faute doit la prouver (témoignages, certificat médical, constat d’huissier…). La faute doit être d’une gravité telle qu’elle rende intolérable le maintien de la vie commune.\n\nSelon la situation, le juge prononcera le divorce aux torts exclusifs de l’un des époux ou aux torts partagés. L’époux à qui sont reprochés les torts peut être condamné à verser des dommages et intérêts à son conjoint si la rupture lui cause un préjudice moral ou matériel particulièrement grave.\n\n### Le divorce pour altération définitive du lien conjugal\n\nL’époux en mesure de prouver que la vie commune a cessé depuis au moins deux ans à la date de l’assignation peut obtenir ce type de divorce sans avoir à invoquer un quelconque motif (et même si son conjoint ne souhaite pas mettre un terme au lien conjugal). L’époux attaqué peut toutefois riposter par une demande en divorce pour faute.\n\nA noter : à partir du 1er septembre 2020, le délai de cessation de la vie commune de deux ans est réduit à un an.\n\n* * *\n\n## La tentative de conciliation\n\nDans les 3cas, la procédure devant le juge va commencer par une tentative de conciliation.\n\nSi à l’issue de cette audience le juge constate que l’époux qui a pris l’initiative de la procédure maintient sa demande, il rend une ordonnance de non-conciliation. L’époux qui a déposé la requête initiale dispose alors de trois mois pour assigner l’autre en divorce. C’est à cette occasion qu’il précise le type de divorce sur lequel il entend se fonder.\n\nLe juge prend alors des mesures provisoires pour la durée de la procédure (proposition de médiation, fixation de la résidence séparée, attribution de la jouissance du logement et du mobilier à caractère gratuit ou non, lieu de résidence des enfants, fixation d'une pension alimentaire , répartition des charges, établissement d'un inventaire estimatif, désignation d'un notaire pour élaborer un projet de liquidation du régime matrimonial , etc...).\n\n* * *\n\n## Le régime de la prestation compensatoire\n\nTout époux (même fautif) pour qui le divorce risque d’avoir des conséquences financières importantes peut prétendre à une prestation compensatoire versée par l’ex-conjoint. Elle est fixée en fonction des besoins de l’époux à qui elle est versée et des ressources de l’autre. Son montant s’évalue de manière forfaitaire en tenant compte de plusieurs critères (notamment durée du mariage , âge et état de santé des conjoints, situation professionnelle et patrimoniale, etc…). Il est arrêté d’un commun accord directement par les époux dans le cadre d’un divorce par consentement mutuel et par le juge, en cas de litige, dans les divorces contentieux.\n\n### Capital ou, exceptionnellement, rente\n\nLa prestation compensatoire est, en principe, versée sous forme de capital. La plupart du temps, le capital fait l’objet d’un seul versement mais par faveur pour le débiteur , le paiement peut être échelonné. A titre exceptionnel, la prestation compensatoire peut être réglée sous forme de rente viagère (c’est-à-dire à vie), si l’âge ou l’état de santé du bénéficiaire ne lui permet pas de subvenir à ses besoins.\n\nFiscalité de la prestation compensatoire : lire le contenu "[Impôts : comment déclarer les revenus l’année du divorce ?](https://www.notaires.fr/fr/node/204309)"	Il existe plusieurs procédures de divorce : le divorce par consentement mutuel, le divorce accepté, le divorce par suite de l'altération définitive du lien conjugal, le divorce pour faute.	https://media.lesechos.com/api/v1/images/view/5c5186513e45467cf757f705/1280x720/060605783277-web-tete.jpg	https://www.lesechos.fr/	https://www.notaires.fr/	\N	2020-02-13	2020-05-24
18	Médecine du travail : Quelles obligations pour l'employeur ?	## Les obligations de l'employeur en matière de médecine du travail\n\nLa Loi travail a changé de nombreuses règles qui entouraient la médecine du travail et a modifié les obligations de l'employeur. Nous faisons le tour des points essentiels.\n\nL’essentiel.\n\n➜ Ce que dit la loi : l'employeur est tenu par son obligation de sécurité de veiller à ce que les salariés puissent bénéficier de la visite d'aptitude, s'ils sont exposés à des postes à risque, ou de la visite de prévention et d'information pour tous les autres postes.\n\n➜ Délai pour agir : Depuis le 1er janvier 2017, le délai laissé au salarié ou à l'employeur pour contester les conclusions du médecin est de 15 jours.\n\n➜ Procédure simplifiée par Internet : SaisirPrudhommes.com accompagne le salarié dans la procédure amiable puis contentieuse en l’assistant dans l’envoi d’une lettre de Mise en Demeure à son employeur puis dans la constitution de son dossier de saisine du Conseil de Prud’hommes. La procédure s’effectue entièrement sur Internet, sans assistance d'un avocat.\n\n\n\n## Quelles entreprises sont concernées par la règlementation ?\n\nLa règlementation qui encadre la santé au travail est applicable aux employeurs de droit privé mais également aux établissements publics à caractère industriel et commercial, aux établissements publics administratifs qui emploient du personnel dans les conditions du droit privé et aux établissements de santé, sociaux et médico-sociaux (article L. 4621 du Code du travail).\n\n## Quel est le rôle du médecin du travail ?\n\nLe rôle du médecin du travail est exclusivement préventif. Il ne s'agit pas pour lui d'établir un diagnostic après l'apparition d'une pathologie mais d'intervenir en amont, en surveillant leurs conditions d'hygiène au travail, les risques de contagion et leur état de santé en fonction notamment de l'âge des salariés, des risques qui entourent leur mission ou encore la pénibilité de leur tâche (article L. 4622-3 du Code du travail).\n\nLe médecin du travail agit également directement avec l'employeur et les représentants du personnels en donnant des recommandations afin d'éviter ou de diminuer les risques professionnels, améliorer les conditions de travail, prévenir le harcèlement, ...\n\n### Les visistes médicales obligatoires :  \nCe qui a changé depuis la loi travail\n\n### La visite médicale d'aptitude\n\nDepuis le 1er janvier 2017, la visite médicale d'aptitude ne concerne plus que les salariés amenés à évoluer sur des postes à risques (art. R. 4624-22 du Code du travail). Ces postes à risques sont ceux qui exposent le salarié à certaines particules et agents cancérogènes ou toxiques, des risques de chute et tout poste considéré comme à risques par l'employeur (art. R. 4624-23 du Code du travail).\n\nCet examen médical d'aptitude est effectué par le médecin et a pour objet de :\n\n\\- s'assurer que le salarié est apte au travail, en vérifiant la compatibilité du poste avec son état de santé\n\n\\- rechercher si le travailleur n'est pas atteint d'une affection comportant un danger pour les autres travailleurs,\n\n\\- proposer éventuellement des adaptation du poste ou l'affectation à d'autres postes,\n\n\\- informer le travailleur sur les risques d'exposition au poste de travail et le suivi médical nécessaire,\n\n\\- sensibiliser le travailleur sur les moyens de prévention à mettre en œuvre (art. R. 4624-24 du Code du travail).\n\nLa visite doit avoir lieu avant la prise de poste et le médecin délivrera alors un avis d'aptitude ou d'inaptitude à destination de l'employeur (art. R. 4624-25), précisant le cas échéant les modalités de reclassement préconisées.\n\nEn outre, dans le cas où le médecin déclarerait le travailleur inapte, il doit justifier d'études précises du poste en question et de l'entreprise et d'échanges avec l'employeur (art. R. 4624-42). Il doit motiver son avis par des conclusions écrites et des indications relatives au reclassement du salarié.\n\nLa visite devra être renouvelée au moins tous les 4 ans, et le travailleur exposé à des risques bénéficiera également d'une visite d'information et de prévention dans les deux ans qui suivent (art. R. 4624-28).\n\n### La visite médicale d'information et de prévention\n\nL'article R. 4624-11 du Code du travail précise également que tous les autres salariés bénéficient d'une visite d'information et de prévention réalisée par un professionnel de santé, pas nécessairement médecin, qui a pour objet de :\n\n\\- interroger le salarié sur son état de santé,\n\n\\- l'informer des risques éventuels auxquels l'expose son travail,\n\n\\- le sensibiliser aux moyens de prévention,\n\n\\- identifier si son état de santé ou les risques auxquels il est exposé nécessitent une orientation vers le médecin du travail (article R. 4624-13 du Code du travail),\n\n\\- l'informer sur les modalité de suivi de son état de santé et la possibilité dont il dispose de bénéficier d'une visite à sa demande avec le médecin du travail.\n\nLa visite doit avoir lieu avant la fin de la période d'essai et en tout état de cause, dans les 3 mois qui suivent la prise de poste.\n\nA l'issue de la visite, le professionnel de santé délivre au salarié et l'employeur une attestation de suivi.\n\nLa visite n'est pas nécessairement automatiquement réalisée, si le nouveau salarié justifie d'une visite similaire dans les 5 ans qui précèdent son arrivée pour un poste identique qui présente des risques d'exposition équivalents (article. R. 4624-15 du Code du travail).\n\nElle devra être renouvelée au moins tous les 5 ans (art. R. 4624-16), en fonction des conditions de travail, de l'âge et de l'état de santé du salarié.\n\n## Contester les avis du médecin du travail\n\nLa Loi travail introduit un changement des délais pour contester l'avis, les propositions, les conclusions écrites ou indications du médecin du travail.\n\nLe salarié ou l'employeur doit saisir le Conseil de prud'hommes par voie de référé dans les 15 jours suivant la notification de la décision du médcin - contre 2 mois avant le 1er janvier 2017.\n\nS'il ne les conteste pas, l'employeur doit suivre les préconisations du médecin du travail. Dans le cas où il ne donnerait aucune suite, cela constitue un manquement à son obligation de sécurité et engage sa responsabilité. Le salarié peut alors demander le versement de dommages-intérêts (Cour de cassation, chambre sociale, 2 mars 2016, n°14-19639).\n\n|  PROCÉDURE  |\n\n## Agir en justice contre l'employeur qui ne respecte pas ses obligations  \nquant à la médecine du travail \n\n### 1° Conciliation à l'amiable avec l'employeur\n\nEn cas de litige, SaisirPrudhommes.com permet d'envisager une résolution amiable du litige par l'envoi d'une [Mise en Demeure](https://www.litige.fr/articles/mise-en-demeure-litige-definition-lettre-recommande-amiable) accompagnée d'une déclaration au greffe. La Mise en Demeure est une lettre RAR motivée juridiquement par laquelle les requêtes du salarié sont adressées formellement à son adversaire, le mettant en demeure d'éxécuter ses obligations.\n\n[ENVOYER UNE MISE EN DEMEURE](https://www.saisirprudhommes.com/?source=litige.fr)\n\n### 2° Que faire si l'employeur ne répond pas à la Mise en Demeure ?\n\nEn l'absence de réponse satisfaisante dans le délai imparti, SaisirPrudhommes.com permet la saisine du Conseil de prud'hommes compétent et l'obtention d'une date d'audience. Cette première audience consiste en une tentative de conciliation. Si aucun accord ne peut être trouvé, les parties se présentent alors à l'audience de jugement pour présenter leurs revendications.\n\n[SAISIR LE CONSEIL DE PRUD'HOMMES](https://www.saisirprudhommes.com/?source=litige.fr)	La Loi travail a changé de nombreuses règles qui entouraient la médecine du travail et a modifié les obligations de l'employeur. Nous faisons le tour des points essentiels.	https://cdn.litige.fr/images/posts/293/post_large_visual/original.jpg?1589321567	https://www.litige.fr/	https://www.litige.fr/	Marion B.	2017-06-12	2020-05-12
19	Comment payer le permis de conduire ?	## Permis à un euro pour les 15-25 ans\n\n### Conditions à remplir\n\nVous devez respecter les 3 conditions suivantes :\n\n-   Être âgé de 15 à 25 ans au plus, à la date de signature du contrat de formation, ou de [l'avenant](https://www.service-public.fr/particuliers/glossaire/R10829 "l'avenant : Document complémentaire du contrat constatant une modification, une adaptation ou un complément qui y sont apportés d'un commun accord entre les deux parties"), avec l'auto-école ou l'association agréée\n-   Utiliser le prêt pour financer une 1re formation initiale, ou en cas d'échec, une formation complémentaire\n-   Préparer le permis A2 ou le permis A1 ou le permis B. La formation du permis B peut se faire en [conduite anticipée](https://www.service-public.fr/particuliers/vosdroits/F2826) ou [supervisée](https://www.service-public.fr/particuliers/vosdroits/F21012).\n\n### Démarche\n\nVous devez choisir une auto-école ou une association agréée disposant du [label qualité des formations au sein des écoles de conduite ou d'une équivalence](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000036658564 "label qualité des formations au sein des écoles de conduite ou d'une équivalence - www.legifrance.gouv.fr - Nouvelle fenêtre") et ayant signé une [convention type](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000039398006 "convention type - www.legifrance.gouv.fr - Nouvelle fenêtre") avec l’État.\n\n##### Où s’adresser ?\n\n-   [Auto-école ou association conventionnée "permis à 1 € par jour"   nouvelle fenêtre](http://www.securite-routiere.gouv.fr/permis-de-conduire/passer-son-permis/le-permis-a-1-euro-par-jour/ecoles-de-conduite-conventionnees-permis-a-1-euro-par-jour "Auto-école ou association conventionnée "permis à 1 € par jour" - www.securite-routiere.gouv.fr - Nouvelle fenêtre")\n    \n\nAprès avoir déterminé le nombre d'heures nécessaire, un devis est établi et vous signez un contrat de formation.\n\nVous devez demander le prêt auprès d'un [établissement financier partenaire](https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire/permis-1-eu-par-jour/etablissements "établissement financier partenaire - www.securite-routiere.gouv.fr - Nouvelle fenêtre") .\n\nL'établissement financier peut exiger une personne caution ou un co-emprunteur. Si le jeune est mineur (pour la formation à la conduite accompagnée), ce sont les parents qui doivent emprunter.\n\nUne fois le prêt accordé, et après le [délai habituel de rétractation](https://www.service-public.fr/particuliers/vosdroits/F2441), le montant du prêt est versé à l'école de conduite ou l'association agréée.\n\n  **À savoir : **une [nouvelle convention type entre l'État et les établissements d'enseignement à la conduite](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000039398006 "nouvelle convention type entre l'État et les établissements d'enseignement à la conduite - www.legifrance.gouv.fr - Nouvelle fenêtre") s'applique depuis le 1er janvier 2020. Toutefois, si votre auto-école ou association agréée a signé la version antérieure de la convention, elle peut l'appliquer jusqu'au 29 février 2020.\n\n### Montant du prêt\n\nCette aide se présente sous la forme d'un prêt à taux zéro.\n\nLe montant du prêt est :\n\n-   Pour une formation initiale : 600 € , 800 € , 1000 € ou 1 200 € au choix du souscripteur, sans dépasser le montant inscrit dans le contrat de formation.\n-   Pour une formation complémentaire : 300 € sans dépasser le montant inscrit dans le contrat de formation.\n\nLe remboursement du prêt se fait par mensualités de 30 € maximum.\n\nLe prêt est accordé une seule fois à un même bénéficiaire.\n\nIl est accordé pour une formation initiale ou une formation complémentaire.\n\nIl est accordé pour une seule catégorie de permis.\n\n## Aide pour apprenti\n\n### Conditions\n\nL'apprenti doit remplir les 3 conditions suivantes :\n\n-   Avoir au moins 18 ans\n-   Être apprenti\n-   Être en train de préparer le [permis B](https://www.service-public.fr/particuliers/vosdroits/F2828)\n\n### Démarche\n\nL'apprenti transmet son dossier de demande au centre de formation d'apprentis (CFA) où il est inscrit.\n\nLe dossier comprend les documents suivants :\n\n-   [Formulaire de demande d'aide](https://www.service-public.fr/particuliers/vosdroits/R53394) complété et signé par l'apprenti\n-   Copie recto-verso d'une pièce d'identité (carte nationale d'identité, passeport ou titre de séjour en cours de validité)\n-   Copie d'un devis ou d'une facture de l'école de conduite datant de moins d'un an\n-   RIB si l'apprenti demande le versement de l'aide sur son compte\n\n### Montant\n\nLe montant de l'aide fixé à 500 €, quel que soit le montant des frais engagés par l'apprenti.\n\nL'aide est attribuée une seule fois pour un même apprenti.\n\nElle est cumulable avec toutes les autres aides perçues par l'apprenti, y compris les prestations sociales.\n\n## Aide en cas de chomâge\n\nCertaines catégories de chômeurs peuvent bénéficier d'une [aide financière pour passer la catégorie B du permis de conduire](https://www.service-public.fr/particuliers/vosdroits/F1719).\n\nCette aide, versée par Pôle emploi à l'auto-école, ne peut pas dépasser 1 200 €.\n\nL'aide doit être demandée avant l'inscription en auto-école.\n\n## Aide en cas de handicap\n\nLa [prestation de compensation du handicap (PCH)](https://www.service-public.fr/particuliers/vosdroits/F14202) peut financer en partie les leçons de conduite.\n\nSi vous avez besoin d'un véhicule pour votre insertion professionnelle, vous pouvez aussi solliciter une aide financière auprès de l'Agefiph ou du [Fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP)](http://www.fiphfp.fr/ "Fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP) - www.fiphfp.fr - Nouvelle fenêtre") .\n\n##### Où s’adresser ?\n\n-   [Agefiph   nouvelle fenêtre](http://www.agefiph.fr/Annuaire "Agefiph - www.agefiph.fr - Nouvelle fenêtre")\n    \n\nRenseignez-vous auprès de votre maison départementale des personnes handicapées (MDPH).\n\n-   [Maison départementale des personnes handicapées (MDPH)](https://lannuaire.service-public.fr/recherche?whoWhat=MDPH&where= "Maison départementale des personnes handicapées (MDPH) - lannuaire.service-public.fr")\n    \n\n## Compte personnel de formation (CPF)\n\nVous pouvez utiliser votre [compte personnel de formation (CPF)](https://www.service-public.fr/particuliers/vosdroits/F10705) pour financer l'examen du permis de conduire (code et conduite).\n\nPour en bénéficier, les 2 conditions suivantes doivent être remplies :\n\n-   L'obtention du permis contribue à la réalisation de votre projet professionnel ou à favoriser la sécurisation de votre parcours professionnel\n-   Votre permis de conduire n'est pas suspendu ([suspension administrative](https://www.service-public.fr/particuliers/vosdroits/F14836) ou [judiciaire](https://www.service-public.fr/particuliers/vosdroits/F21761)) ou il ne vous est pas interdit de demander le permis (cette obligation est vérifiée par une attestation sur l'honneur).\n\nPour être prise en charge, la formation doit être assurée par un établissement agréé et déclaré en tant qu'organisme de formation.\n\n  **À noter : **ce dispositif peut se cumuler avec d'autres, notamment le *permis à un euro par jour* pour les jeunes.	Plusieurs types d'aides financières existent pour passer le permis de conduire. Elles s'adressent aux jeunes de 15 à 25 ans, apprentis d'au moins 18 ans, chômeurs, handicapés.	https://www.aide-sociale.fr/wp-content/uploads/2019/05/permis-%C3%A0-1-22-1200x911.png	https://www.aide-sociale.fr/	https://www.service-public.fr/	\N	2020-01-01	2020-05-24
\.


--
-- TOC entry 4124 (class 0 OID 17073)
-- Dependencies: 243
-- Data for Name: article_has_checklist; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.article_has_checklist (article_id, checklist_id) FROM stdin;
\.


--
-- TOC entry 4123 (class 0 OID 17068)
-- Dependencies: 242
-- Data for Name: article_has_letter_type; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.article_has_letter_type (article_id, letter_type_id) FROM stdin;
\.


--
-- TOC entry 4125 (class 0 OID 17078)
-- Dependencies: 244
-- Data for Name: article_has_simulation; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.article_has_simulation (article_id, simulation_id) FROM stdin;
\.


--
-- TOC entry 4122 (class 0 OID 17063)
-- Dependencies: 241
-- Data for Name: article_has_sub_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.article_has_sub_category (article_id, sub_category_id) FROM stdin;
7	1
2	20
3	30
4	40
5	50
6	3
9	32
1	110
1	55
8	111
8	26
10	42
11	54
12	34
13	2
14	4
16	14
18	74
17	29
15	36
20	32
20	47
19	11
19	110
19	121
\.


--
-- TOC entry 4081 (class 0 OID 16769)
-- Dependencies: 200
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.category (id, type_id, name, color) FROM stdin;
1	1	Assurance	#1E702C
2	1	Banque & Finances	#677E51
3	1	Éducation	#05966D
4	1	Emploi	#5285C4
5	1	Énergie	#78A418
6	1	Etat-civil	#375D81
7	1	Famille	#412D2C
8	1	Formation	#2C8B99
9	1	Internet & Mobile	#764F8D
10	1	Loi & Justice	#910D3C
11	1	Logement	#927D6A
12	1	Santé	#C9001A
13	1	Sécurité & Protection	#328BE7
14	1	Services publics	#223A5B
15	1	Social	#F9A41E
16	1	Transport	#FFBD4F
17	1	Autre	#C0C0C0
18	2	Assurance	\N
19	2	Factures	\N
20	2	Garanties	\N
21	2	Famille	\N
22	2	Finances	\N
23	2	Logement (Locataire)	\N
24	2	Logement (Propriétaire)	\N
25	2	Santé	\N
26	2	Vie professionnelle	\N
27	2	Véhicules	\N
28	2	Loisirs	\N
29	2	Enfants	\N
30	2	Formation	\N
\.


--
-- TOC entry 4089 (class 0 OID 16818)
-- Dependencies: 208
-- Data for Name: checklist; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.checklist (id, title) FROM stdin;
\.


--
-- TOC entry 4129 (class 0 OID 17098)
-- Dependencies: 248
-- Data for Name: checklist_has_checklist_item; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.checklist_has_checklist_item (checklist_id, checklist_item_id) FROM stdin;
\.


--
-- TOC entry 4128 (class 0 OID 17093)
-- Dependencies: 247
-- Data for Name: checklist_has_sub_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.checklist_has_sub_category (checklist_id, sub_category_id) FROM stdin;
\.


--
-- TOC entry 4091 (class 0 OID 16825)
-- Dependencies: 210
-- Data for Name: checklist_item; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.checklist_item (id, item) FROM stdin;
\.


--
-- TOC entry 4111 (class 0 OID 16962)
-- Dependencies: 230
-- Data for Name: document; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.document (id, user_id, sub_category_id, name, link, created_at, updated_at) FROM stdin;
109	175	122	retour Tuay.pdf	./public/uploads/$2a$10$0soppsPnAI6nPLLaI5hdI.eJBqhsM170D8ob5IDzEqcMf7x.91Y.a/assurance/contrats-et-attestations/Sun May 24 2020 16:33:17 GMT+0000 (Coordinated Universal Time)-retour Tuay.pdf	2020-05-24	2020-05-24
110	175	122	10258046_10202481311688900_4036487752440543627_o.jpg	./public/uploads/$2a$10$0soppsPnAI6nPLLaI5hdI.eJBqhsM170D8ob5IDzEqcMf7x.91Y.a/assurance/contrats-et-attestations/Sun May 24 2020 16:33:34 GMT+0000 (Coordinated Universal Time)-10258046_10202481311688900_4036487752440543627_o.jpg	2020-05-24	2020-05-24
122	180	123	LIVRE_DE_FAMILLE_ENFANTS.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/assurance/courrier/Mon May 25 2020 00:45:43 GMT+0200 (Central European Summer Time)-LIVRE_DE_FAMILLE_ENFANTS.jpg	2020-05-24	2020-05-24
123	180	123	CNID_PIGNON.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/assurance/courrier/Mon May 25 2020 00:45:43 GMT+0200 (Central European Summer Time)-CNID_PIGNON.jpg	2020-05-24	2020-05-24
124	180	123	facture-janvier-2018.pdf	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/assurance/courrier/Mon May 25 2020 00:46:42 GMT+0200 (Central European Summer Time)-facture-janvier-2018.pdf	2020-05-24	2020-05-24
125	180	136	LIVRE_DE_FAMILLE_ENFANTS.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/famille/papiers/Mon May 25 2020 00:51:42 GMT+0200 (Central European Summer Time)-LIVRE_DE_FAMILLE_ENFANTS.jpg	2020-05-24	2020-05-24
126	180	136	LIVRE_DE_FAMILLE_PARENTS.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/famille/papiers/Mon May 25 2020 00:51:42 GMT+0200 (Central European Summer Time)-LIVRE_DE_FAMILLE_PARENTS.jpg	2020-05-24	2020-05-24
127	180	136	CNID_PIGNON.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/famille/papiers/Mon May 25 2020 00:51:42 GMT+0200 (Central European Summer Time)-CNID_PIGNON.jpg	2020-05-24	2020-05-24
128	180	155	PERMIS_PIGNON.jpg	./public/uploads/$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO/vehicules/papiers-et-assurance/Mon May 25 2020 00:52:16 GMT+0200 (Central European Summer Time)-PERMIS_PIGNON.jpg	2020-05-24	2020-05-24
134	162	136	LIVRE_DE_FAMILLE_PARENTS.jpg	./public/uploads/$2a$10$gzUOIuubH7MO895z.lB81.DYzuIRwN9sL.G8BpLJp5v2lVZusnLxm/famille/papiers/Mon May 25 2020 12:43:37 GMT+0000 (Coordinated Universal Time)-LIVRE_DE_FAMILLE_PARENTS.jpg	2020-05-25	2020-05-25
135	162	136	LIVRE_DE_FAMILLE_ENFANTS.jpg	./public/uploads/$2a$10$gzUOIuubH7MO895z.lB81.DYzuIRwN9sL.G8BpLJp5v2lVZusnLxm/famille/papiers/Mon May 25 2020 12:43:37 GMT+0000 (Coordinated Universal Time)-LIVRE_DE_FAMILLE_ENFANTS.jpg	2020-05-25	2020-05-25
136	162	136	CNID_PIGNON.jpg	./public/uploads/$2a$10$gzUOIuubH7MO895z.lB81.DYzuIRwN9sL.G8BpLJp5v2lVZusnLxm/famille/papiers/Mon May 25 2020 12:43:37 GMT+0000 (Coordinated Universal Time)-CNID_PIGNON.jpg	2020-05-25	2020-05-25
137	162	155	PERMIS_PIGNON.jpg	./public/uploads/$2a$10$gzUOIuubH7MO895z.lB81.DYzuIRwN9sL.G8BpLJp5v2lVZusnLxm/vehicules/papiers-et-assurance/Mon May 25 2020 12:44:24 GMT+0000 (Coordinated Universal Time)-PERMIS_PIGNON.jpg	2020-05-25	2020-05-25
138	195	131	facture-janvier-2018.pdf	./public/uploads/$2a$10$1scKGWRLI6uKMdqZaHJ7.heyXcbp6aHlxsVT8X6EmRx2UcEJlFoy/factures/energie/Mon May 25 2020 12:54:57 GMT+0000 (Coordinated Universal Time)-facture-janvier-2018.pdf	2020-05-25	2020-05-25
139	195	136	LIVRE_DE_FAMILLE_ENFANTS.jpg	./public/uploads/$2a$10$1scKGWRLI6uKMdqZaHJ7.heyXcbp6aHlxsVT8X6EmRx2UcEJlFoy/famille/papiers/Mon May 25 2020 14:15:04 GMT+0000 (Coordinated Universal Time)-LIVRE_DE_FAMILLE_ENFANTS.jpg	2020-05-25	2020-05-25
140	195	136	CNID_PIGNON.jpg	./public/uploads/$2a$10$1scKGWRLI6uKMdqZaHJ7.heyXcbp6aHlxsVT8X6EmRx2UcEJlFoy/famille/papiers/Mon May 25 2020 14:15:04 GMT+0000 (Coordinated Universal Time)-CNID_PIGNON.jpg	2020-05-25	2020-05-25
141	198	166	CV_HENRIO_Daphne_Web_dev_Juin_2020.pdf	./public/uploads/$2a$10$sKizeyFoykY.HSVrHpAMZe6jhGc1SJOuy31lFm8Bd9fGgqloxi52./vie-professionnelle/cv-et-lettres-de-motivations/Sat Jun 20 2020 09:55:22 GMT+0200 (Central European Summer Time)-CV_HENRIO_Daphne_Web_dev_Juin_2020.pdf	2020-06-20	2020-06-20
\.


--
-- TOC entry 4093 (class 0 OID 16835)
-- Dependencies: 212
-- Data for Name: letter_type; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.letter_type (id, title, content) FROM stdin;
\.


--
-- TOC entry 4126 (class 0 OID 17083)
-- Dependencies: 245
-- Data for Name: letter_type_has_sub_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.letter_type_has_sub_category (letter_type_id, sub_category_id) FROM stdin;
\.


--
-- TOC entry 4117 (class 0 OID 17017)
-- Dependencies: 236
-- Data for Name: note; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.note (id, user_id, category_id, title, content, favorite) FROM stdin;
20	175	1	Merde ! 	Les assurances c'est trop cher ! Vraiment trop ! 	f
23	180	\N	Note	Je suis une note	f
25	175	5	Facture	Penser a payer 	f
28	162	\N	Note	Je suis une note :)	f
29	195	17	Carnet d'adresse	Jean-Michelle : 0635624158\nJean-Marc : 0254758963\nJean-Marie fixe : 0298563214\nJeanne-Dark : 0635421647	f
30	195	4	NOte	Je suis une note :)	f
31	198	15	Notes	Mais parce qu’on a des frais! Vous pouvez pas vous rentrer ça dans le crâne? Y a quand même pas cinquante trucs à retenir bon sang! Animaux de la forêt! Auw auw ouh, woh woh woh woh, auw aouh! Ouais… Ouais je me suis gouré…\n	f
32	198	13	Notes 2	Ah il faut la tenter celle-là! Droit devant, en plein dans leurs tronches. P’tite pucelle! Merde! S'ils ont entendu mon plan c'est foutu. Y a pas d’herbe dans la salle du trône. Allez-y mollo avec la joie!	f
\.


--
-- TOC entry 4085 (class 0 OID 16796)
-- Dependencies: 204
-- Data for Name: service; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.service (id, name, logo, link) FROM stdin;
1	ACM	credit-mutuel.png	https://www.creditmutuel.fr/fr/particuliers/assurances.html
2	AFI ESCA	afi-esca.png	https://www.afi-esca.com/
4	AGRICA	agrica.png	https://www.groupagrica.com/
5	ALLIANZ	allianz.png	https://www.allianz.fr/
6	AMAGUIZ	amaguiz.png	https://www.amaguiz.com/
7	AVIVA	aviva.png	https://www.aviva.fr/
8	AXA	axa.png	https://www.axa.fr/
9	CNP	cnp.png	https://www.cnp.fr/particuliers
10	DIRECT ASSURANCE	direct-assurance.png	https: //www.direct-assurance.fr/
11	GAN	gan.png	https://www.gan.fr/
12	GENERALI	generali.png	https://www.generali.fr/
13	GMF	gmf.png	https://www.gmf.fr/
14	GROUPAMA	groupama.png	https://www.groupama.fr/
15	HARMONIE	harmonie-mutuelle.png	https://www.harmonie-mutuelle.fr/web/tout-harmonie
16	MAAF	maaf.png	https://www.maaf.fr/fr/assurance
17	MACSF	macsf.png	https://www.macsf.fr/
18	MAE	mae.png	https://www.mae.fr/
19	MATMUT	matmut.png	https://www.matmut.fr/
20	MACIF	macif.png	https://www.macif.fr/assurance/particuliers
21	MAIF	maif.png	https://www.maif.fr/
22	MMA	mma.png	https://www.mma.fr/
23	SWISSLIFE	swisslife.png	https://www.swisslife.fr/
24	Axa Banque	axa-banque.png	https://www.axa.fr/compte-bancaire.html
25	BNP Paribas	banque-populaire.png	https://mabanque.bnpparibas/
26	Banque Populaire	bnp-paribas.png	https://www.banquepopulaire.fr/portailinternet/Pages/default.aspx
27	CIC	cic.png	https://www.cic.fr/fr/index.html
28	Caisse d'épargne	caisse-d-epargne.png	https://www.caisse-epargne.fr/particuliers
29	Crédit Agricole	credit-agricole.png	https://www.credit-agricole.fr/
30	Crédit Mutuel	credit-mutuel.png	https://www.creditmutuel.fr/fr/particuliers.html
31	LCL	lcl.png	https://www.lcl.fr/
32	La Banque Postale	la-banque-postale.png	https://www.labanquepostale.fr/
33	Société Générale	societe-generale.png	https://particuliers.societegenerale.fr/
34	Éducation nationnal	ministere-education-nationnal.png	https://www.education.gouv.fr/
35	Pole-emploi	pole-emploi.png	https://www.pole-emploi.fr/accueil/
36	Adecco	adecco.png	https://www.adecco.fr/
37	Agefiph	agefiph.png	https://www.agefiph.fr/
38	Crit	crit.png	https://www.crit-job.com/
39	Manpower	manpower.png	https://www.manpower.fr/
40	Oxygène	oxygene.png	https://oxygene-interim.fr/
41	Proman	proman.png	https://www.proman-emploi.fr/
44	Well Job	well-job.png	https://www.welljob.fr/
45	EDF	edf.png	https://www.edf.fr/
46	Engie	engie.png	https://particuliers.engie.fr/
47	Eni	eni.png	https://fr.eni.com/particuliers/
48	Enedis	enedis.png	https://www.enedis.fr/
50	Veolia	veolia.png	https://www.veolia.fr/
51	Etat-civil	etat-civil.png	https://www.service-public.fr/particuliers/vosdroits/N359
52	Caf	caf.png	http://www.caf.fr/
53	O'clock	o-clock.png	https://oclock.io/
54	Afpa	afpa.png	https://www.afpa.fr/
55	Cnam	le-cnam.png	http://www.cnam.fr/
56	B&YOU	b-and-you.png	https://www.bouyguestelecom.fr/forfaits-mobiles/sans-engagement
57	Bouygues	bouygues.png	https://www.bouyguestelecom.fr/
58	Free	free.png	https://www.free.fr/freebox
59	La poste mobile	la-poste-mobile.png	https://www.lapostemobile.fr/
60	Nnj mobile	nrj-mobile.png	https://www.nrjmobile.fr/fr/
61	Orange	orange.png	https://www.orange.fr/portail
62	Prixtel	prixtel.png	https://www.prixtel.com/
63	SFR	sfr.png	https://www.sfr.fr/
64	Sosh	sosh.png	https://www.sosh.fr/
65	Les avocats	les-avocats.png	https://www.avocat.fr/
66	60 millions de consomateurs	60-millions-de-consomateurs.png	https://www.60millions-mag.com/
67	Demande HLM	demande-hlm.png	https://www.service-public.fr/particuliers/vosdroits/F10007
68	De particulier à particulier	de-particulier-a-particulier.png	https://particulier-particulier.fr/
69	Le bon coin	le-bon-coin.png	https://www.leboncoin.fr/locations/offres/
70	Ameli	ameli.png	https://www.ameli.fr/
71	Impôt	impot.png	https://www.impots.gouv.fr/portail/
72	SNCF	sncf.png	https://www.sncf.com/fr
73	Air France	air-france.png	https://www.airfrance.fr/
74	Bla Bla Bus	blablabus.png	https://fr.ouibus.com/
75	Bla Bla Car	blablacar.png	https://www.blablacar.fr/
76	Flixbus	flixbus.png	https://www.flixbus.fr/
77	Thalys	thalys.png	https://www.thalys.com/fr/fr
78	Oui sncf	oui-sncf.png	https://www.oui.sncf/tgv-inoui
3	AG2R	ag2r-la-mondiale.png	https://www.ag2rlamondiale.fr/
42	Randstad	randstad.png	https://www.randstad.fr/
43	Start people	start-people.png	https://www.startpeople.fr/
49	Total Direct Energie	total-direct-energie.png	https://total.direct-energie.com/
79	Services étudiant	service-etudiant.png	https://www.messervices.etudiant.gouv.fr/envole/
80	Santé	etat-civil.png	https://sante.fr/
\.


--
-- TOC entry 4121 (class 0 OID 17058)
-- Dependencies: 240
-- Data for Name: service_has_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.service_has_category (category_id, service_id) FROM stdin;
1	1
1	2
1	3
1	4
1	5
1	6
1	7
1	8
1	9
1	10
1	11
1	12
1	13
1	14
1	15
1	16
1	17
1	18
1	19
1	21
1	22
1	23
2	24
2	25
2	26
2	27
2	28
2	29
2	20
2	31
2	32
2	33
3	34
4	35
4	36
4	37
4	38
4	39
4	30
4	41
4	42
4	43
4	44
5	45
5	46
5	47
5	48
5	49
5	50
6	51
7	52
8	53
8	54
8	55
9	56
9	57
9	58
9	59
9	60
9	61
9	62
9	63
9	64
10	65
10	66
11	67
11	68
11	69
14	71
3	79
12	80
16	72
16	73
16	74
16	75
16	76
16	77
16	78
\.


--
-- TOC entry 4095 (class 0 OID 16845)
-- Dependencies: 214
-- Data for Name: simulation; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.simulation (id, title) FROM stdin;
\.


--
-- TOC entry 4097 (class 0 OID 16852)
-- Dependencies: 216
-- Data for Name: simulation_field; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.simulation_field (id, simulation_id, label, input_type, obligatory) FROM stdin;
\.


--
-- TOC entry 4099 (class 0 OID 16867)
-- Dependencies: 218
-- Data for Name: simulation_field_select; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.simulation_field_select (id, simulation_field, option) FROM stdin;
\.


--
-- TOC entry 4127 (class 0 OID 17088)
-- Dependencies: 246
-- Data for Name: simulation_has_sub_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.simulation_has_sub_category (simulation_id, sub_category_id) FROM stdin;
\.


--
-- TOC entry 4101 (class 0 OID 16882)
-- Dependencies: 220
-- Data for Name: simulation_result; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.simulation_result (id, simulation_id, title, content) FROM stdin;
\.


--
-- TOC entry 4083 (class 0 OID 16784)
-- Dependencies: 202
-- Data for Name: sub_category; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.sub_category (id, category_id, name) FROM stdin;
1	1	Auto
2	1	Civile
3	1	Scolaire
4	1	Retraite
5	1	Complémentaire Santé
6	1	Professionnel
7	1	Habitation
8	1	Biens
9	1	Autre
10	2	Compte
11	2	Crédit
12	2	Budget
13	2	Autre
14	3	Crèche
15	3	Primaire
16	3	Élémentaire
17	3	Collège
18	3	Lycée
19	3	Université
20	3	Faculté
21	3	Bourses
22	3	Autre
23	4	Recherche
24	4	Protection
25	4	Devoir
26	4	Aides
27	4	Autre
28	5	Eau
29	5	Gaz
30	5	Electricité
31	5	Autre
32	6	Mariage
33	6	Décès
34	6	Naissance
35	6	Pacs
36	6	Adoption
37	6	Concubinage
38	6	Autre
39	8	Centre
40	8	Financements
41	8	Reconversion
42	8	Autre
43	9	Factures
44	9	Resiliaton
45	9	Contrat
46	9	Autre
47	10	Familliale
48	10	Travail
49	10	Consomation
50	10	Propriété
51	10	Finannce
52	10	Enfance
53	10	Autre
54	11	Déménager
55	11	Louer (locataire)
56	11	Acheter
57	11	Vendre
58	11	Louer (propriétaire)
59	11	Autre
60	12	Allergologie ou immunologie
61	12	Anesthésiologie
62	12	Andrologie
63	12	Cardiologie
64	12	Chirurgie
65	12	Dermatologie
66	12	Endocrinologie
67	12	Gastro-entérologie
68	12	Gériatrie
69	12	Gynécologie
70	12	Hématologie
71	12	Hépatologie
72	12	Infectiologie
73	12	Médecine aiguë
74	12	Médecine du travail
75	12	Médecine générale
76	12	Médecine interne
77	12	Médecine nucléaire
78	12	Médecine palliative
87	12	Médecine physique
88	12	Médecine préventive
89	12	Néonatologie
90	12	Néphrologie
91	12	Neurologie
92	12	Odontologie
93	12	Oncologie
94	12	Obstétrique
95	12	Ophtalmologie
96	12	Orthopédie
97	12	Oto-rhino-laryngologie
98	12	Pédiatrie
99	12	Pneumologie
100	12	Psychiatrie
101	12	Radiologie
102	12	Radiothérapie
103	12	Rhumatologie
104	12	Urologie
105	12	Autre
106	13	Logement
107	13	Biens
108	13	Informatique
109	13	Autre
110	15	Aides à la personne
111	15	Aide à l'emploi
112	15	Aide à la famille
113	15	Aide aux étudiants
114	15	Aides handicap
115	15	Autre
116	16	Vélo
117	16	Deux roues moteur
118	16	Train
119	16	Avion
120	16	Bus
121	16	Autre
123	18	Courrier
124	18	Preuves de valeurs
125	18	Sinistres
126	19	Achats exceptionnels
127	19	Travaux
128	19	Equipements de la maison
129	19	Prestations de service
130	19	Vêtements
131	19	Energie
132	19	Télécom
133	20	Electromenager
134	20	Technologie
135	21	Contrats et actes
137	22	Banques
138	22	Impôts
139	23	Contrats
140	23	Courriers
141	23	Quittances
142	23	Travaux et entretien
143	24	Contrats et titres
144	24	Copropriété
145	24	Travaux et entretien
146	25	Dossiers médicaux
149	26	Justificatifs\n
150	26	Fiche de Paies
151	26	Employeur
153	27	Amendes
154	27	Entretien
156	28	Vaccances
157	28	Sorties
158	19	Multimédia
159	30	Contrats
160	30	Justificatifs
161	30	Fiche de paie
162	30	Diplomes
163	29	Scolarité
164	29	Cantine
165	29	Diplomes
147	25	Sécu et Mutuelle
122	18	Contrats et attestations
136	21	Papiers
148	26	Contrats et courriers
152	27	Achats et cessions
155	27	Papiers et assurance
166	26	CV et lettres de motivations
\.


--
-- TOC entry 4113 (class 0 OID 16984)
-- Dependencies: 232
-- Data for Name: todolist; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.todolist (id, user_id, category_id, title, favorite) FROM stdin;
\.


--
-- TOC entry 4115 (class 0 OID 17002)
-- Dependencies: 234
-- Data for Name: todolist_item; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.todolist_item (id, todolist_id, content) FROM stdin;
\.


--
-- TOC entry 4079 (class 0 OID 16762)
-- Dependencies: 198
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.type (id, name) FROM stdin;
1	admin
2	user_default
3	user
\.


--
-- TOC entry 4103 (class 0 OID 16897)
-- Dependencies: 222
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public."user" (id, first_name, last_name, login, password, avatar, email, folder_name, validation, creation_date, validation_key) FROM stdin;
194	François	Pignon	FrançoisPi	$2a$10$aGuMArrV4OSuLgB2GyjsPONikOGIcvdo8MvnoRYKqoYNEs6RVOraS	\N	plope@gmail.com	$2a$10$8E1hgCifOIoIuhsp33oQmuPg382OoQliRi8jZQHiADvthEcwTwlj2	f	2020-05-25 12:39:17.707412	0BKecpvhZUt2rUOvgx7M8ctv
195	François	Pignon	Franpi	$2a$10$vuiFHxQbG0MU.y4vX6B0vuKupusF2PEN7GvXjbnU.d5/GXmKzROz6	\N	ploper@gmail.com	$2a$10$1scKGWRLI6uKMdqZaHJ7.heyXcbp6aHlxsVT8X6EmRx2UcEJlFoy	t	2020-05-25 12:48:51.507171	0BKefFCcYSk5ZTJ6960Y098P
180	François	Pignon 	FrançoisPthrth	$2a$10$64OeU096mI4DLeYwJJrNVeeLXqdQjfvzApomxbDzY/xAIQXk4jsN2	\N	oclock@gmail.com	$2a$10$j6eO7kRbcp8VyyVQZqvCiOSNhyzQmSerQdjbqa.cmC7Fk7EURejyO	t	2020-05-24 22:40:41.456482	0BKbDiJRhB0bBaEFX9EvLMyM
196	François	Pignon	Françoispignon	$2a$10$DUV7v3XvNZijm/eSUlbh8.A3mkDqQKPBpbGVC2QX0PAwoOeY/XnEK	\N	henrilaurentoclock@gmail.com	$2a$10$zTYRH6j4sokWdDhf.lJw4OYAy9LLp6R4EGFyjgo3RqIM4Cc7Klfi	f	2020-05-25 14:11:09.991006	0BKezxvbn8aNk6CiTEcFwGaw
197	sqdf	qerdf	sqdfsq	$2a$10$V1NbM.AAcCE1V8P0CXeKEeYSFtcn0bZcroCFajodmnkliYOo4swfa	\N	cybermaohi@gmail.com	$2a$10$SYMZCVB2rtOY8i7BPKz5EOeoUIbZgekdwj4pLkOY9Yja0R58mOn0y	f	2020-05-27 18:41:45.855707	0BKrn8n4PIdyL9Z4ucKBpfnq
198	Test	Compte	test	$2a$10$YNjbelwbZ9bOr4Cs66ujRewILH8MDynI9r1YlayWJlT6596FNes3a	\N	test@email.com	$2a$10$sKizeyFoykY.HSVrHpAMZe6jhGc1SJOuy31lFm8Bd9fGgqloxi52.	t	2020-06-20 07:43:44.597156	0BN5S5ySB8cODFa2CW69hFAL
166	Test	Test	Aldahe	$2a$10$arxzFxhGI2aiD4zpcqrcFuHBvOIpL0412eAaYFKHb7j36VdOro94e	\N	projet.aldahe@gmail.com	$2a$10$9d9Yp1JxXR46Ph9bj387AecyiXRwWu1dXEM1mP6JUdG0xrsOrtRhu	t	2020-05-24 15:22:30.364269	0BKZROvKf3AOicw8im2Y0jnj
162	HENRI	LAURENT	henri	$2a$10$AZTGvRbEiRKgNj7CpPJMNeHPvcsmpb1YqJig5Sck5Gr1jkFMVOpLi	\N	henrilaurent29@hotmail.com	$2a$10$gzUOIuubH7MO895z.lB81.DYzuIRwN9sL.G8BpLJp5v2lVZusnLxm	t	2020-05-24 15:04:24.847162	0BKZMq0lnAzdOIzVqQuurVgX
175	Malko	Linge	Campana	$2a$10$8k.lz2OtDO5BZNx17VqhzuN9A4Efb8ycbEWvaPuv4l19IL7xkM7FS	\N	jouefdinky@hotmail.com	$2a$10$0soppsPnAI6nPLLaI5hdI.eJBqhsM170D8ob5IDzEqcMf7x.91Y.a	t	2020-05-24 16:24:24.101469	0BKZgyyOqfEOOxcVUaazAG4U
181	Daphné	Henrio	Dena	$2a$10$hX3fZw228YByoNvdoUqxyO/E8qAUCA7TCXZvQy2zJeMcOAe44YpOC	\N	sennyo.seishin@gmail.com	$2a$10$lhg44YRcZJxFIdmrhV6MOt7dvr9QdeVS0ZWBuKZx7bryE2CSVQS	t	2020-05-24 23:12:55.934349	0BKbLpbVwSxAN95y7T4yCGvF
\.


--
-- TOC entry 4119 (class 0 OID 17038)
-- Dependencies: 238
-- Data for Name: user_checklist; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_checklist (id, user_id, sub_category_id, title) FROM stdin;
\.


--
-- TOC entry 4130 (class 0 OID 17103)
-- Dependencies: 249
-- Data for Name: user_checklist_has_checklist_item; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_checklist_has_checklist_item (user_checklist_id, checklist_item_id) FROM stdin;
\.


--
-- TOC entry 4120 (class 0 OID 17053)
-- Dependencies: 239
-- Data for Name: user_has_article; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_has_article (user_id, article_id) FROM stdin;
175	7
175	19
177	19
179	19
180	19
182	20
182	8
182	19
193	19
162	19
195	19
195	20
195	8
195	9
195	1
195	11
195	15
195	5
\.


--
-- TOC entry 4107 (class 0 OID 16922)
-- Dependencies: 226
-- Data for Name: user_info; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_info (id, user_id, category_id, identify, service_name, service_phone, service_address, service_referent, note_file) FROM stdin;
16	175	2	0836656565	Pouet	0836656565	groslolodu35	Germaine	Turlututu
23	162	10	1988885224552	Caf	0295842561	\N	\N	\N
24	195	15	1988885224552	Caf	0295842561	\N	\N	\N
25	195	4	199887521	Pole emploi	0295356874	\N	Mr jean	\N
26	195	10	dede	Memo	\N	\N	\N	\N
27	198	17	srtd57iui85u	Mon mémo 1	0658421865	\N	Pilou	\N
\.


--
-- TOC entry 4105 (class 0 OID 16907)
-- Dependencies: 224
-- Data for Name: user_profil; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_profil (id, user_id, address, zip_code, city, phone_number, cellphone_number, phone_work, children, statut, gender, age) FROM stdin;
162	175	69 rue du Général De Gaule	69000	LYON	0236656565			2	Marié	M	99
167	180							2	Marié	M	50
168	181	7 boulevard georges clémenceau	81100	Castres	0968990556	668990556	668990556	0	\N	Mme	\N
181	194							0	\N	M.	\N
149	162	2 allee Louise Michel	29000	QUIMPER	0649260561	0649260561	\N	2	Marié	Mme	21
183	196							0	\N	M.	\N
182	195	22 rue du labrador	22650	Plessix-Balisson	0252610321	0649521489		2	Marié	M	\N
184	197	wxcvxwcv	44800	wxcvwx		0640313131		-1	\N	M.	\N
185	198	56 Chemin Du Lavarin Sud	06800	CAGNES-SUR-MER	04.35.96.13.20			2	\N	M.	\N
153	166							0	\N		\N
\.


--
-- TOC entry 4109 (class 0 OID 16942)
-- Dependencies: 228
-- Data for Name: user_service; Type: TABLE DATA; Schema: public; Owner: aldahe
--

COPY public.user_service (id, user_id, user_info_id, name, logo, link) FROM stdin;
\.


--
-- TOC entry 4138 (class 0 OID 0)
-- Dependencies: 205
-- Name: article_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.article_id_seq', 20, true);


--
-- TOC entry 4139 (class 0 OID 0)
-- Dependencies: 199
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.category_id_seq', 30, true);


--
-- TOC entry 4140 (class 0 OID 0)
-- Dependencies: 207
-- Name: checklist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.checklist_id_seq', 1, false);


--
-- TOC entry 4141 (class 0 OID 0)
-- Dependencies: 209
-- Name: checklist_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.checklist_item_id_seq', 1, false);


--
-- TOC entry 4142 (class 0 OID 0)
-- Dependencies: 229
-- Name: document_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.document_id_seq', 141, true);


--
-- TOC entry 4143 (class 0 OID 0)
-- Dependencies: 211
-- Name: letter_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.letter_type_id_seq', 1, false);


--
-- TOC entry 4144 (class 0 OID 0)
-- Dependencies: 235
-- Name: note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.note_id_seq', 32, true);


--
-- TOC entry 4145 (class 0 OID 0)
-- Dependencies: 203
-- Name: service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.service_id_seq', 80, true);


--
-- TOC entry 4146 (class 0 OID 0)
-- Dependencies: 215
-- Name: simulation_field_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.simulation_field_id_seq', 1, false);


--
-- TOC entry 4147 (class 0 OID 0)
-- Dependencies: 217
-- Name: simulation_field_select_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.simulation_field_select_id_seq', 1, false);


--
-- TOC entry 4148 (class 0 OID 0)
-- Dependencies: 213
-- Name: simulation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.simulation_id_seq', 1, false);


--
-- TOC entry 4149 (class 0 OID 0)
-- Dependencies: 219
-- Name: simulation_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.simulation_result_id_seq', 1, false);


--
-- TOC entry 4150 (class 0 OID 0)
-- Dependencies: 201
-- Name: sub_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.sub_category_id_seq', 166, true);


--
-- TOC entry 4151 (class 0 OID 0)
-- Dependencies: 231
-- Name: todolist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.todolist_id_seq', 1, false);


--
-- TOC entry 4152 (class 0 OID 0)
-- Dependencies: 233
-- Name: todolist_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.todolist_item_id_seq', 1, false);


--
-- TOC entry 4153 (class 0 OID 0)
-- Dependencies: 197
-- Name: type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.type_id_seq', 3, true);


--
-- TOC entry 4154 (class 0 OID 0)
-- Dependencies: 237
-- Name: user_checklist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.user_checklist_id_seq', 1, false);


--
-- TOC entry 4155 (class 0 OID 0)
-- Dependencies: 221
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.user_id_seq', 198, true);


--
-- TOC entry 4156 (class 0 OID 0)
-- Dependencies: 225
-- Name: user_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.user_info_id_seq', 27, true);


--
-- TOC entry 4157 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_profil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.user_profil_id_seq', 185, true);


--
-- TOC entry 4158 (class 0 OID 0)
-- Dependencies: 227
-- Name: user_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aldahe
--

SELECT pg_catalog.setval('public.user_service_id_seq', 1, false);


--
-- TOC entry 3925 (class 2606 OID 17077)
-- Name: article_has_checklist article_has_checklist_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.article_has_checklist
    ADD CONSTRAINT article_has_checklist_pkey PRIMARY KEY (article_id, checklist_id);


--
-- TOC entry 3923 (class 2606 OID 17072)
-- Name: article_has_letter_type article_has_letter_type_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.article_has_letter_type
    ADD CONSTRAINT article_has_letter_type_pkey PRIMARY KEY (article_id, letter_type_id);


--
-- TOC entry 3927 (class 2606 OID 17082)
-- Name: article_has_simulation article_has_simulation_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.article_has_simulation
    ADD CONSTRAINT article_has_simulation_pkey PRIMARY KEY (article_id, simulation_id);


--
-- TOC entry 3921 (class 2606 OID 17067)
-- Name: article_has_sub_category article_has_sub_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.article_has_sub_category
    ADD CONSTRAINT article_has_sub_category_pkey PRIMARY KEY (article_id, sub_category_id);


--
-- TOC entry 3883 (class 2606 OID 16815)
-- Name: article article_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_pkey PRIMARY KEY (id);


--
-- TOC entry 3877 (class 2606 OID 16776)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3935 (class 2606 OID 17102)
-- Name: checklist_has_checklist_item checklist_has_checklist_item_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.checklist_has_checklist_item
    ADD CONSTRAINT checklist_has_checklist_item_pkey PRIMARY KEY (checklist_id, checklist_item_id);


--
-- TOC entry 3933 (class 2606 OID 17097)
-- Name: checklist_has_sub_category checklist_has_sub_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.checklist_has_sub_category
    ADD CONSTRAINT checklist_has_sub_category_pkey PRIMARY KEY (checklist_id, sub_category_id);


--
-- TOC entry 3887 (class 2606 OID 16832)
-- Name: checklist_item checklist_item_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.checklist_item
    ADD CONSTRAINT checklist_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3885 (class 2606 OID 16822)
-- Name: checklist checklist_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.checklist
    ADD CONSTRAINT checklist_pkey PRIMARY KEY (id);


--
-- TOC entry 3907 (class 2606 OID 16971)
-- Name: document document_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_pkey PRIMARY KEY (id);


--
-- TOC entry 3929 (class 2606 OID 17087)
-- Name: letter_type_has_sub_category letter_type_has_sub_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.letter_type_has_sub_category
    ADD CONSTRAINT letter_type_has_sub_category_pkey PRIMARY KEY (letter_type_id, sub_category_id);


--
-- TOC entry 3889 (class 2606 OID 16842)
-- Name: letter_type letter_type_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.letter_type
    ADD CONSTRAINT letter_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3913 (class 2606 OID 17025)
-- Name: note note_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT note_pkey PRIMARY KEY (id);


--
-- TOC entry 3919 (class 2606 OID 17062)
-- Name: service_has_category service_has_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.service_has_category
    ADD CONSTRAINT service_has_category_pkey PRIMARY KEY (category_id, service_id);


--
-- TOC entry 3881 (class 2606 OID 16803)
-- Name: service service_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- TOC entry 3893 (class 2606 OID 16859)
-- Name: simulation_field simulation_field_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_field
    ADD CONSTRAINT simulation_field_pkey PRIMARY KEY (id);


--
-- TOC entry 3895 (class 2606 OID 16874)
-- Name: simulation_field_select simulation_field_select_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_field_select
    ADD CONSTRAINT simulation_field_select_pkey PRIMARY KEY (id);


--
-- TOC entry 3931 (class 2606 OID 17092)
-- Name: simulation_has_sub_category simulation_has_sub_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_has_sub_category
    ADD CONSTRAINT simulation_has_sub_category_pkey PRIMARY KEY (simulation_id, sub_category_id);


--
-- TOC entry 3891 (class 2606 OID 16849)
-- Name: simulation simulation_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation
    ADD CONSTRAINT simulation_pkey PRIMARY KEY (id);


--
-- TOC entry 3897 (class 2606 OID 16889)
-- Name: simulation_result simulation_result_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_result
    ADD CONSTRAINT simulation_result_pkey PRIMARY KEY (id);


--
-- TOC entry 3879 (class 2606 OID 16788)
-- Name: sub_category sub_category_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_pkey PRIMARY KEY (id);


--
-- TOC entry 3911 (class 2606 OID 17009)
-- Name: todolist_item todolist_item_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.todolist_item
    ADD CONSTRAINT todolist_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3909 (class 2606 OID 16989)
-- Name: todolist todolist_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT todolist_pkey PRIMARY KEY (id);


--
-- TOC entry 3875 (class 2606 OID 16766)
-- Name: type type_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (id);


--
-- TOC entry 3937 (class 2606 OID 17107)
-- Name: user_checklist_has_checklist_item user_checklist_has_checklist_item_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_checklist_has_checklist_item
    ADD CONSTRAINT user_checklist_has_checklist_item_pkey PRIMARY KEY (user_checklist_id, checklist_item_id);


--
-- TOC entry 3915 (class 2606 OID 17042)
-- Name: user_checklist user_checklist_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_checklist
    ADD CONSTRAINT user_checklist_pkey PRIMARY KEY (id);


--
-- TOC entry 3917 (class 2606 OID 17057)
-- Name: user_has_article user_has_article_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_has_article
    ADD CONSTRAINT user_has_article_pkey PRIMARY KEY (user_id, article_id);


--
-- TOC entry 3903 (class 2606 OID 16929)
-- Name: user_info user_info_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_pkey PRIMARY KEY (id);


--
-- TOC entry 3899 (class 2606 OID 16904)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3901 (class 2606 OID 16914)
-- Name: user_profil user_profil_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_profil
    ADD CONSTRAINT user_profil_pkey PRIMARY KEY (id);


--
-- TOC entry 3905 (class 2606 OID 16949)
-- Name: user_service user_service_pkey; Type: CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_service
    ADD CONSTRAINT user_service_pkey PRIMARY KEY (id);


--
-- TOC entry 3938 (class 2606 OID 16777)
-- Name: category category_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.type(id);


--
-- TOC entry 3949 (class 2606 OID 16977)
-- Name: document document_sub_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_sub_category_id_fkey FOREIGN KEY (sub_category_id) REFERENCES public.sub_category(id);


--
-- TOC entry 3948 (class 2606 OID 16972)
-- Name: document document_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.document
    ADD CONSTRAINT document_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3954 (class 2606 OID 17031)
-- Name: note note_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT note_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3953 (class 2606 OID 17026)
-- Name: note note_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT note_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3941 (class 2606 OID 16875)
-- Name: simulation_field_select simulation_field_select_simulation_field_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_field_select
    ADD CONSTRAINT simulation_field_select_simulation_field_fkey FOREIGN KEY (simulation_field) REFERENCES public.simulation_field(id);


--
-- TOC entry 3940 (class 2606 OID 16860)
-- Name: simulation_field simulation_field_simulation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_field
    ADD CONSTRAINT simulation_field_simulation_id_fkey FOREIGN KEY (simulation_id) REFERENCES public.simulation(id);


--
-- TOC entry 3942 (class 2606 OID 16890)
-- Name: simulation_result simulation_result_simulation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.simulation_result
    ADD CONSTRAINT simulation_result_simulation_id_fkey FOREIGN KEY (simulation_id) REFERENCES public.simulation(id);


--
-- TOC entry 3939 (class 2606 OID 16789)
-- Name: sub_category sub_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3951 (class 2606 OID 16995)
-- Name: todolist todolist_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT todolist_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3952 (class 2606 OID 17010)
-- Name: todolist_item todolist_item_todolist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.todolist_item
    ADD CONSTRAINT todolist_item_todolist_id_fkey FOREIGN KEY (todolist_id) REFERENCES public.todolist(id);


--
-- TOC entry 3950 (class 2606 OID 16990)
-- Name: todolist todolist_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT todolist_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3956 (class 2606 OID 17048)
-- Name: user_checklist user_checklist_sub_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_checklist
    ADD CONSTRAINT user_checklist_sub_category_id_fkey FOREIGN KEY (sub_category_id) REFERENCES public.sub_category(id);


--
-- TOC entry 3955 (class 2606 OID 17043)
-- Name: user_checklist user_checklist_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_checklist
    ADD CONSTRAINT user_checklist_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3945 (class 2606 OID 16935)
-- Name: user_info user_info_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3944 (class 2606 OID 16930)
-- Name: user_info user_info_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3943 (class 2606 OID 16915)
-- Name: user_profil user_profil_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_profil
    ADD CONSTRAINT user_profil_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3946 (class 2606 OID 16950)
-- Name: user_service user_service_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_service
    ADD CONSTRAINT user_service_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3947 (class 2606 OID 16955)
-- Name: user_service user_service_user_info_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aldahe
--

ALTER TABLE ONLY public.user_service
    ADD CONSTRAINT user_service_user_info_id_fkey FOREIGN KEY (user_info_id) REFERENCES public.user_info(id);


--
-- TOC entry 4136 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: aldahe
--

REVOKE ALL ON SCHEMA public FROM rdsadmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO aldahe;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2020-06-29 16:18:14 CEST

--
-- PostgreSQL database dump complete
--

