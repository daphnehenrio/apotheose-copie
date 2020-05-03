-- Deploy nom-du-projet:category to pg

BEGIN;

 INSERT INTO category (
     title, color
     )
 VALUES
  /*1*/ ('Assurance', '#1E702C'),
  /*2*/ ('Banque & Finances', '#677E51'),
  /*3*/ ('Éducation', '#05966D'),
  /*4*/ ('Emploi', '#5285C4'),
  /*5*/ ('Énergie', '#78A418'),
  /*6*/ ('Etat-civil', '#375D81'),
  /*7*/ ('Famille', '#412D2C'),
  /*8*/ ('Formation', '#2C8B99'),
  /*9*/ ('Internet & Mobile', '#764F8D'),
  /*10*/ ('Loi & Justice', '#910D3C'),
  /*11*/ ('Logement', '#927D6A'),
  /*12*/ ('Santé', '#C9001A'),
  /*13*/ ('Sécurité & Protection', '#328BE7'),
  /*14*/ ('Services publics', '#223A5B'),
  /*15*/ ('Social', '#F9A41E'),
  /*16*/ ('Transport', '#FFBD4F'),
  /*17*/ ('Autre', '#C0C0C0');

COMMIT;
