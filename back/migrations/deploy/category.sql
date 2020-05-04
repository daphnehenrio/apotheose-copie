-- Deploy nom-du-projet:category to pg

BEGIN;

 INSERT INTO "type" (
     "name"
     )
 VALUES
  /*1*/  ('admin'),
  /*2*/  ('user');

 INSERT INTO category (
     "type_id", "name", color
     )
 VALUES
  /*1*/ (1, 'Assurance', '#1E702C'),
  /*2*/ (1, 'Banque & Finances', '#677E51'),
  /*3*/ (1, 'Éducation', '#05966D'),
  /*4*/ (1, 'Emploi', '#5285C4'),
  /*5*/ (1, 'Énergie', '#78A418'),
  /*6*/ (1, 'Etat-civil', '#375D81'),
  /*7*/ (1, 'Famille', '#412D2C'),
  /*8*/ (1, 'Formation', '#2C8B99'),
  /*9*/ (1, 'Internet & Mobile', '#764F8D'),
  /*10*/ (1, 'Loi & Justice', '#910D3C'),
  /*11*/ (1, 'Logement', '#927D6A'),
  /*12*/ (1, 'Santé', '#C9001A'),
  /*13*/ (1, 'Sécurité & Protection', '#328BE7'),
  /*14*/ (1, 'Services publics', '#223A5B'),
  /*15*/ (1, 'Social', '#F9A41E'),
  /*16*/ (1, 'Transport', '#FFBD4F'),
  /*17*/ (1, 'Autre', '#C0C0C0');

COMMIT;
