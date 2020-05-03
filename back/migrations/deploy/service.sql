-- Deploy nom-du-projet:service to pg

BEGIN;

INSERT INTO "service" (
     "name", "logo", "link"
     )
 VALUES

  /* ASSURANCES */

  /*1*/ ('ACM',	'https://www.dekra-norisko.fr/media/image/partners/5c77f462f2472.png',	'https://www.creditmutuel.fr/fr/particuliers/assurances.html'),
  /*2*/ ('AFI ESCA',	'https://www.afi-esca.com/sites/all/themes/afiesca/logo.png',	'https://www.afi-esca.com/'),
  /*3*/ ('AG2R',	'https://www.ag2rlamondiale.fr/files/live/sites/portail/files/images/Headers/logo-2018.png',	'https://www.ag2rlamondiale.fr/'),
  /*4*/ ('AGRICA',	'https://www.groupagrica.com/themes/custom/agrica_sass/proto/dist/assets/images/logo-groupe-agrica.svg',	'https://www.groupagrica.com/'),
  /*5*/ ('ALLIANZ',	'https://www.index-habitation.fr/wp-content/uploads/logo-allianz.jpg',	'https://www.allianz.fr/'),
  /*6*/ ('AMAGUIZ',	'https://www.amaguiz.com/image/layout_set_logo?img_id=12030&t=1588318507237&frz-v=224',	'https://www.amaguiz.com/'),
  /*7*/ ('AVIVA',	'', 'https://www.aviva.fr/'),
  /*8*/ ('AXA',	'https://www.axa.fr/content/dam/logo/logo-axa.svg',	'https://www.axa.fr/'),
  /*9*/ ('CNP',	'https://www.cnp.fr/assets/themes/cnp/images/logo-cnp-fr.svg',	'https://www.cnp.fr/particuliers'),
  /*10*/ ( 'DIRECT ASSURANCE',	'https://directassurance.cdn.axa-contento-118412.eu/directassurance/4991ff329106f651247430bde3812ca68f3c0017_da-logo-car-e.png',	'https://www.direct-assurance.fr/'),
  /*11*/ ( 'GAN',	'https://www.gan.fr/documents/20182/152393/logo-Gan/d8a1639c-490b-4084-a94d-8a52bf7c0c31?t=1535008710717',	'https://www.gan.fr/'),
  /*12*/ ( 'GENERALI',	'https://upload.wikimedia.org/wikipedia/fr/1/11/Generali_logo.gif',	'https://www.generali.fr/'),
  /*13*/ ( 'GMF',	'https://statique.gmf.fr/commun/images/Immersion/template/gmf-logo.svg?cache-version=20191108',	'https://www.gmf.fr/'),
  /*14*/ ( 'GROUPAMA',	'https://www.groupama.fr/fstrz/r/s/www.groupama.fr/theme-generique-vm-theme/images/logo_Groupama.svg?frz-v=234',	'https://www.groupama.fr/'),
  /*15*/ ( 'HARMONIE', 'MUTUELLE	https://www.harmonie-mutuelle.fr/mhm-portal-design/images/Mobility/common/logo-harmonie-mutuelle.png',	'https://www.harmonie-mutuelle.fr/web/tout-harmonie'),
  /*16*/ ( 'MAAF',	'https://www.maaf.fr/fr/files/live/sites/maaf/files/Iconographie/Logo/New_header/Pc_tablette_header/MAAF_RSRV_86px.svg',	'https://www.maaf.fr/fr/assurance'),
  /*17*/ ( 'MACSF',	'https://www.macsf.fr/bundles/macsfsitevitrine/img/macsfLogo.png',	'https://www.macsf.fr/'),
  /*18*/ ( 'MAE',	'https://www.mae.fr/img/illustrations/logo-mae.svg',	'https://www.mae.fr/'),
  /*19*/ ( 'MATMUT',	'https://www.matmut.fr/images/logo-matmut-couleur.png',	'https://www.matmut.fr/'),
  /*20*/ ( 'MACIF',	'', 'https://www.macif.fr/assurance/particuliers'),
  /*21*/ ( 'MAIF',	'', 'https://www.maif.fr/'),
  /*22*/ ( 'MMA',	'https://www.mma.fr/files/live/sites/mmafr/files/divers/mma-assureur-particuliers.png',	'https://www.mma.fr/'),
  /*23*/ ( 'SWISSLIFE',	'https://www.swisslife.fr/extension/mcms/design/mcms/images/logo.svg',	'https://www.swisslife.fr/'),

  /* BANQUES */

  /*24*/ ('Axa Banque', 'https://www.axa.fr/content/dam/logo/logo-axa.svg', 'https://www.axa.fr/compte-bancaire.html'),
  /*25*/ ('BNP Paribas', 'https://ilbi.org/wp-content/uploads/2019/03/bnp-paribas-compte-en-ligne-990x660.jpg', 'https://mabanque.bnpparibas/'),
  /*26*/ ('Banque Populaire', 'https://www.banquepopulaire.fr/portailinternet/Lists/VisualElementsLogo/logo_banqueassurance3_257x82.png;wad74dd59bf0b9827f', 'https://www.banquepopulaire.fr/portailinternet/Pages/default.aspx'),
  /*27*/ ('CIC', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a7/Cic_logo.svg/1280px-Cic_logo.svg.png', 'https://www.cic.fr/fr/index.html'),
  /*28*/ ('Caisse d''épargne', 'https://www.caisse-epargne.fr/var/storage/images/ind/configuration/national/572-188-fre-FR/national_logo.png?2.3.20', 'https://www.caisse-epargne.fr/particuliers'),
  /*29*/ ('Crédit Agricole', 'https://www.credit-agricole.fr/content/dam/assetsca/master/public/commun/images/autre/images/NPC-logo_Agir_chaque_jour_CA_H_Desktop-1.svg', 'https://www.credit-agricole.fr/'),
  /*30*/ ('Crédit Mutuel', 'https://hbch.fr/public/38/upload/images/partenaires/credit-mutuel-banque-assurances-st-herblain.png', 'https://www.creditmutuel.fr/fr/particuliers.html'),
  /*31*/ ('LCL', 'https://images.prismic.io/portail-lcl-web%2F30c1d897-783f-434d-a7f3-a7d08d2f0593_lcl_logo_bleu_signature.svg?auto=compress,format', 'https://www.lcl.fr/'),
  /*32*/ ('La Banque Postale', 'https://www.labanquepostale.fr/etc/designs/labanquepostale/commons/clientlibs/images/bp-app/logo-lbp.png', 'https://www.labanquepostale.fr/'),
  /*33*/ ('Société Générale', 'https://www.capitaine-banque.com/wp-content/uploads/2016/08/logo-societe-generale2-e1436481313147-300x241.png', 'https://particuliers.societegenerale.fr/'),

  /* Education */

  /*34*/ ('Éducation nationnal', 'https://www.education.gouv.fr/sites/default/files/site_logo/2020-02/00_MENJ_logoseul_SIG_200x158.jpg', 'https://www.education.gouv.fr/'),

  /* --------------------------------- Emploi --------------------------------- */

  /*35*/ ('Pole-emploi', 'https://www.pole-emploi.fr/accueil/file/sitemodel/pefr/images/accueil/header-logo-pole-emploi-mono.png', 'https://www.pole-emploi.fr/accueil/'),
  /*36*/ ('Adecco', 'https://www.adecco.fr/~/media/adeccogroup/brands/adecco-global-2016/france/media/image/Adecco-logo.png', 'https://www.adecco.fr/'),
  /*37*/ ('Agefiph', 'https://www.agefiph.fr/themes/custom/agefiph/logo-mobile.svg', 'https://www.agefiph.fr/'),
  /*38*/ ('Crit', 'https://www.crit.ch/wp-content/uploads/2018/05/Log-Crit-Big.jpg', 'https://www.crit-job.com/'),
  /*39*/ ('Manpower', 'https://www.manpower.fr/sites/all/themes/manPower/image/home/logo_manpower.png', 'https://www.manpower.fr/'),
  /*40*/ ('Oxygène', 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300/https://oxygene-interim.fr/wp-content/uploads/2019/02/logo-oxygene-couleur.png', 'https://oxygene-interim.fr/'),
  /*41*/ ('Proman', 'https://www.proman-emploi.fr/wp-content/themes/html5blank-stable/img/logo-proman.jpg', 'https://www.proman-emploi.fr/'),
  /*42*/ ('Ranstad', 'https://www.randstad.com/Images/System/base/logo-randstad-sd.png', 'https://www.randstad.fr/'),
  /*43*/ ('Start poeple', 'https://www.startpeople.fr/themes/start/images/xlogo.png.pagespeed.ic.isAMglT3tX.webp', 'https://www.startpeople.fr/'),
  /*44*/ ('WellJob', 'https://www.welljob.fr/images/logo.png', 'https://www.welljob.fr/'),

  /* --------------------------------- Énergie --------------------------------- */

  /*45*/ ('EDF', 'https://selectra.info/sites/default/files/styles/article_hero/public/edf-238x80.png?itok=MT8zFrkT', 'https://www.edf.fr/'),
  /*46*/ ('Engie', 'https://particuliers.engie.fr/etc/designs/business-factory/particuliers/images/logo-engie.svg', 'https://particuliers.engie.fr/'),
  /*47*/ ('Eni', 'https://fr.eni.com/profiles/eni/themes/custom/eni_theme/images/logo.png', 'https://fr.eni.com/particuliers/'),
  /*48*/ ('Enedis', 'https://www.enedis.fr/sites/all/themes/erdf/images/logo_enedis_header.png', 'https://www.enedis.fr/'),
  /*49*/ ('Total Direct Energie', 'https://total.direct-energie.com/typo3conf/ext/de_site_package/Resources/Public/Dist/Images/logo__total-direct-energie.svg', 'https://total.direct-energie.com/'),
  /*50*/ ('Veolia', 'https://www.veolia.fr/sites/g/files/dvc2401/files/styles/logo_desktop_base/public/themes/custom/veo_site/src/assets/images/logo.png?itok=f_1d9u5p', 'https://www.veolia.fr/'),

  /* --------------------------------- Etat-civil --------------------------------- */

  /*51*/ ('Etat-civil', 'https://www.petite-foret.fr/fileadmin/_processed_/4/4/csm_service_public_164c57addd.jpg', 'https://www.service-public.fr/particuliers/vosdroits/N359'),

  /* --------------------------------- Famille --------------------------------- */

  /*52*/ ('Caf', 'http://www.caf.fr/sites/all/themes/caf_v2/images/logoCNAF.png', 'http://www.caf.fr/'),

  /* --------------------------------- Formation --------------------------------- */

  /*53*/ ('O''clock', 'https://s3-eu-west-1.amazonaws.com/tpd/logos/595cae450000ff0005a600d6/0x0.png', 'https://oclock.io/'),
  /*54*/ ('Afpa', 'https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1588263973835', 'https://www.afpa.fr/'),
  /*55*/ ('Cnam', 'https://www.jaimelesstartups.fr/wp-content/uploads/2019/03/logo-cnam.jpg', 'http://www.cnam.fr/'),

  /* --------------------------------- Internet & Mobile --------------------------------- */

  /*56*/ ('B&YOU', 'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2017/09/Byou.jpg', 'https://www.bouyguestelecom.fr/forfaits-mobiles/sans-engagement'),
  /*57*/ ('Bouygues', 'https://www.bouyguestelecom.fr/static/wbm/assets/hub/img/logo-bouygues-telecom.svg', 'https://www.bouyguestelecom.fr/'),
  /*58*/ ('Free', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/langfr-280px-Free_logo.svg.png', 'https://www.free.fr/freebox'),
  /*59*/ ('La poste mobile', 'https://medias.lapostemobile.fr/portail_mobile/img/logo-LPM.svg', 'https://www.lapostemobile.fr/'),
  /*60*/ ('Nnj mobile', 'https://www.nrjmobile.fr/fr/images/filiale/logo-nrjmobile.png', 'https://www.nrjmobile.fr/fr/'),
  /*61*/ ('Orange', 'https://c.woopic.com/logo-orange.png', 'https://www.orange.fr/portail'),
  /*62*/ ('Prixtel', 'https://www.prixtel.com/sources/prixtel/images/prixtel_logo_baseline.svg', 'https://www.prixtel.com/'),
  /*63*/ ('SFR', 'https://static.s-sfr.fr/media/v2/assets/images/png/sfr-logo.png', 'https://www.sfr.fr/'),
  /*64*/ ('Sosh', 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/4e/35/f34e350f-9225-8860-0184-7bdf224eaae5/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png', 'https://www.sosh.fr/'),

  /* --------------------------------- Justice --------------------------------- */

  /*65*/ ('Les avocats', 'https://www.avocat.fr/themes/custom/avocat/images/logo.svg', 'https://www.avocat.fr/'),
  /*66*/ ('60 millions de consomateurs', 'https://www.60millions-mag.com/sites/all/themes/custom/m60/html/images/logo.png', 'https://www.60millions-mag.com/'),

  /* --------------------------------- Logement --------------------------------- */

  /*67*/  ('Demande HLM', 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Republique-francaise-logo.svg/1200px-Republique-francaise-logo.svg.png', 'https://www.service-public.fr/particuliers/vosdroits/F10007'),
  /*68*/  ('De particulier à particulier', 'https://particulier-particulier.fr/wp-content/uploads/2019/01/logo_dark.png', 'https://particulier-particulier.fr/'),
  /*69*/  ('Le bon coin', 'https://alifconception.com/wp-content/uploads/2016/06/leboncoin_logo-1-1.png', 'https://www.leboncoin.fr/locations/offres/'),

  /* --------------------------------- Santé --------------------------------- */

  /*70*/ ('Ameli', 'https://www.ameli.fr/sites/all/themes/contrib/ameli/images/logo_am.png', 'https://www.ameli.fr/'),

  /* Sécurité */
  /* Services publics */

  /*71*/ ('Impôt', 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Republique-francaise-logo.svg/1200px-Republique-francaise-logo.svg.png', 'https://www.impots.gouv.fr/portail/'),

  /* --------------------------------- Social --------------------------------- */

  /* --------------------------------- Transport --------------------------------- */

  /*72*/ ('SNCF', 'https://www.sncf.com/themes/contrib/sncf_theme/dist/build/img/logo-sncf.svg?v=1280065105', 'https://www.sncf.com/fr'),
  /*73*/ ('Air France', 'https://objects.airfrance.com/FR/common/common/img/tab1st/header/logo_air_france.svg', 'https://www.airfrance.fr/'),
  /*74*/ ('Bla Bla Bus', 'https://store.lyonaeroports.com/media/wysiwyg/blablabus/logo.png', 'https://fr.ouibus.com/'),
  /*75*/ ('Bla Bla Car', 'https://logonews.fr/wp-content/uploads/2019/07/Unknown.png', 'https://www.blablacar.fr/'),
  /*76*/ ('Flixbus', 'https://cdn.flixbus.de/assets/images-20180806/flixbus_logo.svg', 'https://www.flixbus.fr/'),
  /*77*/ ('Thalys', 'https://www.thalys.com/themes/custom/thalys/dist/img/logo.svg', 'https://www.thalys.com/fr/fr'),
  /*78*/ ('Oui sncf', 'https://www.oui.sncf/themes/custom/mercure/img/oui-sncf.svg', 'https://www.oui.sncf/tgv-inoui');

  /* Autres */

COMMIT;
