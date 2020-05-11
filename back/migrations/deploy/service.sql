-- Deploy nom-du-projet:service to pg

BEGIN;

INSERT INTO "service" (
     "name", "logo", "link"
     )
 VALUES

  /* ASSURANCES */

   /*1*/ ('ACM',             	'credit-mutuel.png',        'https://www.creditmutuel.fr/fr/particuliers/assurances.html'),
   /*2*/ ('AFI ESCA',        	'afi-esca.png',            	'https://www.afi-esca.com/'),
   /*3*/ ('AG2R',            	'ag2rag2r-la-mondiale.png',	'https://www.ag2rlamondiale.fr/'),
   /*4*/ ('AGRICA',          	'agrica.png',              	'https://www.groupagrica.com/'),
   /*5*/ ('ALLIANZ',         	'allianz.png',             	'https://www.allianz.fr/'),
   /*6*/ ('AMAGUIZ',         	'amaguiz.png',             	'https://www.amaguiz.com/'),
   /*7*/ ('AVIVA',           	'aviva.png',                'https://www.aviva.fr/'),
   /*8*/ ('AXA',             	'axa.png',                 	'https://www.axa.fr/'),
   /*9*/ ('CNP',             	'cnp.png',                 	'https://www.cnp.fr/particuliers'),
  /*10*/ ('DIRECT ASSURANCE',	'direct-assurance.png',    	'https: //www.direct-assurance.fr/'),
  /*11*/ ('GAN',             	'gan.png',                 	'https://www.gan.fr/'),
  /*12*/ ('GENERALI',        	'generali.png',            	'https://www.generali.fr/'),
  /*13*/ ('GMF',             	'gmf.png',                 	'https://www.gmf.fr/'),
  /*14*/ ('GROUPAMA',        	'groupama.png',            	'https://www.groupama.fr/'),
  /*15*/ ('HARMONIE',         'harmonie-mutuelle.png',   	'https://www.harmonie-mutuelle.fr/web/tout-harmonie'),
  /*16*/ ('MAAF',            	'maaf.png',                	'https://www.maaf.fr/fr/assurance'),
  /*17*/ ('MACSF',           	'macsf.png',               	'https://www.macsf.fr/'),
  /*18*/ ('MAE',             	'mae.png',                 	'https://www.mae.fr/'),
  /*19*/ ('MATMUT',          	'matmut.png',              	'https://www.matmut.fr/'),
  /*20*/ ('MACIF',           	'macif.png',                'https://www.macif.fr/assurance/particuliers'),
  /*21*/ ('MAIF',            	'maif.png',                 'https://www.maif.fr/'),
  /*22*/ ('MMA',             	'mma.png',                 	'https://www.mma.fr/'),
  /*23*/ ('SWISSLIFE',       	'swisslife.png',           	'https://www.swisslife.fr/'),

  /* BANQUES */

  /*24*/ ('Axa Banque',        'axa-banque.png',        'https://www.axa.fr/compte-bancaire.html'),
  /*25*/ ('BNP Paribas',       'banque-populaire.png',  'https://mabanque.bnpparibas/'),
  /*26*/ ('Banque Populaire',  'bnp-paribas.png',       'https://www.banquepopulaire.fr/portailinternet/Pages/default.aspx'),
  /*27*/ ('CIC',               'cic.png',               'https://www.cic.fr/fr/index.html'),
  /*28*/ ('Caisse d''épargne', 'caisse-d-epargne.png',  'https://www.caisse-epargne.fr/particuliers'),
  /*29*/ ('Crédit Agricole',   'credit-agricole.png',   'https://www.credit-agricole.fr/'),
  /*30*/ ('Crédit Mutuel',     'credit-mutuel.png',     'https://www.creditmutuel.fr/fr/particuliers.html'),
  /*31*/ ('LCL',               'lcl.png',               'https://www.lcl.fr/'),
  /*32*/ ('La Banque Postale', 'la-banque-postale.png', 'https://www.labanquepostale.fr/'),
  /*33*/ ('Société Générale',  'societe-generale.png',  'https://particuliers.societegenerale.fr/'),

  /* Education */

  /*34*/ ('Éducation nationnal', 'ministere-education-nationnal.png', 'https://www.education.gouv.fr/'),

  /* --------------------------------- Emploi --------------------------------- */

  /*35*/ ('Pole-emploi',  'pole-emploi.png',  'https://www.pole-emploi.fr/accueil/'),
  /*36*/ ('Adecco',       'adecco.png',       'https://www.adecco.fr/'),
  /*37*/ ('Agefiph',      'agefiph.png',      'https://www.agefiph.fr/'),
  /*38*/ ('Crit',         'crit.png',         'https://www.crit-job.com/'),
  /*39*/ ('Manpower',     'manpower.png',     'https://www.manpower.fr/'),
  /*40*/ ('Oxygène',      'oxygene.png',      'https://oxygene-interim.fr/'),
  /*41*/ ('Proman',       'proman.png',       'https://www.proman-emploi.fr/'),
  /*42*/ ('Ranstad',      'ranstad.png',      'https://www.randstad.fr/'),
  /*43*/ ('Start poeple', 'start-poeple.png', 'https://www.startpeople.fr/'),
  /*44*/ ('Well Job',      'well-job.png',    'https://www.welljob.fr/'),

  /* --------------------------------- Énergie --------------------------------- */

  /*45*/ ('EDF',                  'edf.png',                 'https://www.edf.fr/'),
  /*46*/ ('Engie',                'engie.png',               'https://particuliers.engie.fr/'),
  /*47*/ ('Eni',                  'eni.png',                 'https://fr.eni.com/particuliers/'),
  /*48*/ ('Enedis',               'enedis.png',              'https://www.enedis.fr/'),
  /*49*/ ('Total Direct Energie', 'total-direct-energy.png', 'https://total.direct-energie.com/'),
  /*50*/ ('Veolia',               'veolia.png',              'https://www.veolia.fr/'),

  /* --------------------------------- Etat-civil --------------------------------- */

  /*51*/ ('Etat-civil', 'etat-civil.png', 'https://www.service-public.fr/particuliers/vosdroits/N359'),

  /* --------------------------------- Famille --------------------------------- */

  /*52*/ ('Caf', 'caf.png', 'http://www.caf.fr/'),

  /* --------------------------------- Formation --------------------------------- */

  /*53*/ ('O''clock', 'o-clock.png', 'https://oclock.io/'),
  /*54*/ ('Afpa',     'afpa.png',    'https://www.afpa.fr/'),
  /*55*/ ('Cnam',     'le-cnam.png', 'http://www.cnam.fr/'),

  /* --------------------------------- Internet & Mobile --------------------------------- */

  /*56*/ ('B&YOU',          'b-and-you.png',       'https://www.bouyguestelecom.fr/forfaits-mobiles/sans-engagement'),
  /*57*/ ('Bouygues',       'bouygues.png',        'https://www.bouyguestelecom.fr/'),
  /*58*/ ('Free',           'free.png',            'https://www.free.fr/freebox'),
  /*59*/ ('La poste mobile','la-poste-mobile.png', 'https://www.lapostemobile.fr/'),
  /*60*/ ('Nnj mobile',     'nrj-mobile.png',      'https://www.nrjmobile.fr/fr/'),
  /*61*/ ('Orange',         'orange.png',          'https://www.orange.fr/portail'),
  /*62*/ ('Prixtel',        'prixtel.png',         'https://www.prixtel.com/'),
  /*63*/ ('SFR',            'sfr.png',             'https://www.sfr.fr/'),
  /*64*/ ('Sosh',           'sosh.png',            'https://www.sosh.fr/'),

  /* --------------------------------- Justice --------------------------------- */

  /*65*/ ('Les avocats',                 'les-avocats.png',                 'https://www.avocat.fr/'),
  /*66*/ ('60 millions de consomateurs', '60-millions-de-consomateurs.png', 'https://www.60millions-mag.com/'),

  /* --------------------------------- Logement --------------------------------- */

  /*67*/  ('Demande HLM',                  'demande-hlm.png',                  'https://www.service-public.fr/particuliers/vosdroits/F10007'),
  /*68*/  ('De particulier à particulier', 'de-particulier-a-particulier.png', 'https://particulier-particulier.fr/'),
  /*69*/  ('Le bon coin',                  'le-bon-coin.png',                  'https://www.leboncoin.fr/locations/offres/'),

  /* --------------------------------- Santé --------------------------------- */

  /*70*/ ('Ameli', 'ameli.png', 'https://www.ameli.fr/'),

  /* Sécurité */
  /* Services publics */

  /*71*/ ('Impôt', 'impot.png', 'https://www.impots.gouv.fr/portail/'),

  /* --------------------------------- Social --------------------------------- */

  /* --------------------------------- Transport --------------------------------- */

  /*72*/ ('SNCF',        'sncf.png',       'https://www.sncf.com/fr'),
  /*73*/ ('Air France',  'air-france.png', 'https://www.airfrance.fr/'),
  /*74*/ ('Bla Bla Bus', 'blablabus.png',  'https://fr.ouibus.com/'),
  /*75*/ ('Bla Bla Car', 'blablacar.png',  'https://www.blablacar.fr/'),
  /*76*/ ('Flixbus',     'flixbus.png',    'https://www.flixbus.fr/'),
  /*77*/ ('Thalys',      'thalys.png',     'https://www.thalys.com/fr/fr'),
  /*78*/ ('Oui sncf',    'oui-sncf.png',   'https://www.oui.sncf/tgv-inoui');

  /* Autres */

COMMIT;
