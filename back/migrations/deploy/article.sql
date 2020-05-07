-- Deploy nom-du-projet:article to pg

BEGIN;

INSERT INTO "article" (
  "title",
  "content",
  "description",
  "image",
  "source_image",
  "source_content",
  "author"
)

VALUES

/*1*/('Comment faire une demande APL', '**Comment faire une demande CAF : le dossier APL** <br />
<br/>
**La demande d&#39;aide personnalisée au logement se fait auprès de la CAF ou de la MSA** , en fonction de l&#39;organisme dont vous dépendez en termes de protection sociale (général ou agricole) et doit être effectuée dès l&#39;entrée dans le logement.<br/>
<br/>
Auparavant, il était possible de faire une demande au format papier à l&#39;aide du formulaire dédié. Désormais, **la demande APL s&#39;effectue uniquement en ligne pour les locataires**   **que vous soyez allocataire ou non**.<br/>
<br/>
[Faire une demande APL](https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement)<br/>
<br/>
Sachez que si vous n&#39;avez pas accès à une connexion internet, vous pouvez vous rendre directement dans un point d&#39;accueil de la CAF afin de procéder à votre demande d&#39;aide personnalisée au logement en ligne. Retrouvez l&#39;adresse de la CAF la plus proche de chez vous [dans cet article](https://www.aide-sociale.fr/contacter-caf/).
<br/>
Pour cela, il vous faut posséder un numéro d&#39;allocataire :<br/>
<br/>
- **Si vous êtes allocataire** : Dans ce cas, votre dossier doit être à jour (déclaration de changement de situation, déclaration annuelle des ressources). Les éléments contenus seront pris en compte pour l&#39;étude des droits.<br/>
- **Si vous n&#39;êtes pas allocataire** : Dans ce cas, il vous sera demandé de renseigner plus d&#39;informations. En effet, la CAF doit connaître l&#39;ensemble de votre situation (familiale, [les enfants à charge](https://www.aide-sociale.fr/caf-enfant-a-charge/), vos revenus et ceux du partenaire …). Il sera alors possible d&#39;étudier votre demande d&#39;APL. Découvrez dans cet article la marche à suivre [pour créer un compte CAF](https://www.aide-sociale.fr/caf-inscription-allocataire/).<br/>
<br/>
Afin de remplir correctement votre demande APL munissez-vous des documents suivants :<br/>
<br/>
![](RackMultipart20200506-4-1o34gx4_html_422af7b3f8a0564b.jpg)<br/>
<br/>
Le dossier APL est ensuite étudié auprès de l&#39;organisme dont vous dépendez qui détermine vos droits ou non à l&#39;APL ([voir les conditions d&#39;attribution](https://www.aide-sociale.fr/apl-caf/)).
<br/>
**Comment remplir le formulaire de demande APL de la CAF ?**<br/>
<br/>
**Le dossier APL de la CAF doit être rempli uniquement sur internet et ne concerne que les locataires**. En effet, les conditions d&#39;attribution pour les propriétaires sont devenues plus restrictives qu&#39;auparavant (ce qui engendre une baisse des bénéficiaires). Si vous êtes propriétaire, consultez [notre article](https://www.aide-sociale.fr/allocation-logement-proprietaire/) consacré à l&#39;APL Accession.<br/>
<br/>
_Notez qu&#39;en cas de déménagement, il vous faut refaire une demande d&#39;APL en respectant les étapes indiquées ci-dessous. Un simple_ [_changement d&#39;adresse CAF_](https://www.aide-sociale.fr/changement-adresse-caf/) _ne suffit pas._<br/>
<br/>
Avant de commencer à remplir votre dossier APL, munissez-vous de tous les justificatifs qui vous seront utiles (voir paragraphe ci-dessus). Sachez également qu&#39;à tout moment, vous pourrez sauvegarder votre dossier afin de le terminer plus tard.<br/>
<br/>
**Première partie : demande d&#39;aide au logement**<br/>
<br/>
Sachez tout d&#39;abord que la demande d&#39;APL ne peut se faire qu&#39;en ligne et qu&#39;elle ne concerne que les locataires. De nombreuses informations vous seront demandées.<br/>
<br/>
- Si vous n&#39;êtes pas allocataire de la CAF : Vous devez vous rendre à la page consacrée sur [https://wwwd.caf.fr/demanderlaideaulogement](https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/faireunedemandedeprestation/demanderlaideaulogement)<br/>
- Si vous êtes allocataire : Accédez à la rubrique &quot;Demande de prestation&quot; de votre compte<br/>
<br/>
_ **À noter** _ _: Les captures d&#39;écran qui suivent concernent la demande d&#39;APL pour non-allocataire. Si vous êtes déjà allocataire de la CAF au moment de la constitution de votre dossier, certains éléments ne vous seront pas demandés notamment concernant vos informations personnelles (e-mail, nom, prénom, etc.). Votre demande sera donc plus rapide à remplir._

![](RackMultipart20200506-4-1o34gx4_html_39d590e9382e491a.jpg)

**Saisissez tout d&#39;abord le code postal du domicile pour lequel vous souhaitez faire la demande d&#39;APL**. Il vous faudra ensuite indiquer que vous êtes locataire de votre logement ainsi que votre situation personnelle comme indiqué sur l&#39;image ci-dessous.

![](RackMultipart20200506-4-1o34gx4_html_ff03f3a57162c654.jpg)

Laissez-vous guider en cochant les différentes informations qui vous sont demandées (êtes-vous locataire ou sous-locataire, s&#39;agit-il d&#39;une cité universitaire si vous êtes étudiant …) jusqu&#39;à arriver à la page des conditions d&#39;utilisation du service en ligne. **Vous devez les accepter afin de continuer votre demande d&#39;APL**.

Il faudra ensuite saisir une adresse e-mail valide qui sera utilisée par la CAF afin de vous contacter. Puis votre état civil vous sera demandé comme indiqué sur cette image :

![](RackMultipart20200506-4-1o34gx4_html_a2155b6b19b0a834.jpg)

Renseignez ensuite les informations concernant votre situation familiale (célibataire, en couple, nombres d&#39;enfants à charge…) puis votre situation professionnelle (salarié, demandeur d&#39;emploi …).

Enfin, il faudra renseigner votre Relevé d&#39;Identité Bancaire qui sera utilisé par la CAF pour vous verser le montant de votre aide personnalisée au logement. Il vous permettra également de recevoir le versement d&#39;autres aides de la CAF comme [la prime d&#39;activité](https://www.aide-sociale.fr/calcul-prime-activite-demande/) par exemple.

_Pour la suite du dossier APL en ligne, nous ne pouvons pas vous présenter de captures d&#39;écran. En effet, il est impossible de saisir les informations demandées sans effectuer réellement la demande d&#39;APL._

Suivez simplement les étapes suivantes :

- **Les informations sur votre bailleur vous seront demandées** (propriétaire, agence immobilière, ou encore organisme locatif). Vous les trouverez sur votre contrat de location. Il convient de connaître les particularités en cas [de location auprès de sa famille](https://www.aide-sociale.fr/apl-location-famille/)
- **Renseignez les informations sur le logement** à l&#39;origine de la demande telle que le loyer hors charge, l&#39;adresse, la surface …
- Il vous faudra également indiquer les revenus que vous percevez et que vous avez perçus depuis les deux dernières années. **La CAF étudiera ces revenus pour décider du montant de l&#39;APL auquel vous pouvez prétendre**.

Une fois votre demande d&#39;aide au logement en ligne complétée, il vous suffira de valider le dossier pour qu&#39;il soit envoyé à votre CAF.  Vous serez informé dans les plus brefs délais de l&#39;ouverture de vos droits ou non à l&#39;APL.

**Point important** : Le dossier APL en ligne à une valeur officielle. Lorsque vous remplissez les différents champs, vous vous engagez à saisir les véritables informations. Il se peut que la CAF vérifie les renseignements que vous avez saisis lors de votre demande d&#39;aide au logement. Si un versement injustifié était constaté, la CAF vous réclamera le trop-perçu (voir [les explications](https://www.aide-sociale.fr/caf-trop-percu/)).

**Deuxième partie : attestation de loyer**

**L&#39;attestation de loyer est à remplir lors d&#39;une demande d&#39;APL**. Elle doit être complétée par le propriétaire du logement faisant l&#39;objet de la demande puis transmise à la CAF afin que votre dossier soit traité. Vous pouvez la télécharger directement [en cliquant ici](https://www.aide-sociale.fr/wp-content/uploads/2018/05/attestation-loyer-apl-21.pdf).

Lors de l&#39;entrée dans les lieux, vous avez 2 options possibles pour le paiement de l&#39;APL :

- **Soit l&#39;aide est versée directement au bailleur**  : Dans ce cas, le propriétaire ou le bailleur doit remplir la demande de versement direct disponible [ici](https://www.aide-sociale.fr/wp-content/uploads/2018/05/demande-versement-apl-proprietaire-22.pdf)
- **Soit l&#39;aide vous est versée directement**  : Dans ce cas, la partie concernant la demande de versement directe n&#39;est pas à remplir

**Les pièces justificatives à fournir pour la demande APL CAF**

Afin que votre dossier de demande d&#39;APL soit traité par la CAF, vous devez fournir les pièces justificatives demandées par exemple l&#39;attestation de loyer dont les explications sont disponibles dans le paragraphe précédent.

Pour cela deux cas sont à distinguer :

- **Vous êtes allocataire CAF au moment de votre demande APL** : Vous pouvez télécharger directement les documents demandés depuis votre compte
- **Vous n&#39;êtes pas encore allocataire CAF** : La demande d&#39;APL s&#39;accompagne de la création de votre compte CAF qui sera actif lorsque vous recevrez vos identifiants. Vous pourrez alors télécharger les documents directement en ligne. Cependant cela peut prendre du temps, **nous vous conseillons donc d&#39;apporter les justificatifs demandés directement dans votre agence CAF** afin que votre demande d&#39;APL soit traitée le plus rapidement possible.

**En savoir plus sur la CAF et le dossier APL**

Une fois que vous avez complété votre demande d&#39;APL en ligne, le récapitulatif de votre dossier sera disponible sur votre compte [http://www.caf.fr/](http://www.caf.fr/). **Si vous n&#39;étiez pas encore allocataire, votre compte sera créé durant votre demande**.

**Si des justificatifs vous sont demandés afin de compléter votre dossier d&#39;APL** , vous pourrez les télécharger directement depuis votre espace personnel, mais notez bien que vous ne pourrez plus modifier les informations complétées lors de votre demande d&#39;APL en ligne.

Si vous ne disposez pas d&#39;une connexion internet ou pour toutes questions concernant la constitution de votre dossier de demande d&#39;aide au logement, n&#39;hésitez pas à vous rendre directement dans l&#39;agence CAF la plus proche de chez vous. De plus, il est important de faire la demande le plus rapidement possible, car vos droits ne sont pas rétroactifs. Le premier paiement se détermine en fonction de la date de dépôt de votre dossier (en savoir plus sur [la date de versement APL](https://www.aide-sociale.fr/versement-apl-date/)).

Les droits à l&#39;aide s&#39;ouvrent le mois correspondant au dépôt du dossier APL à la CAF et ne sont pas rétroactifs. ', ' Les étapes pour faire sa demande APL à la CAF', 'https://www.aide-sociale.fr/wp-content/uploads/2017/08/demande-apl-en-ligne-19.jpg', 'Crédit photo : © BillionPhotos.com et Ainoa / Fotolia', 'Aide-Sociale.fr', ''),


/*2*/('zefnhuizehg', 'zefnhuizehg', 'zefnhuizehg', 'zefnhuizehg', 'zefnhuizehg', 'zefnhuizehg', 'zefnhuizehg'),

/*3*/('fjzioefgjfke', 'fjzioefgjfke', 'fjzioefgjfke', 'fjzioefgjfke', 'fjzioefgjfke', 'fjzioefgjfke', 'fjzioefgjfke'),

/*4*/('jfizejejpogmj', 'jfizejejpogmj', 'jfizejejpogmj', 'jfizejejpogmj', 'jfizejejpogmj', 'jfizejejpogmj', 'jfizejejpogmj'),

/*5*/('jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi', 'jfoisjfzijfùpzjfi'),

/*6*/('fjiejfiejiejijiji', 'fjiejfiejiejijiji', 'fjiejfiejiejijiji', 'fjiejfiejiejijiji', 'fjiejfiejiejijiji', 'fjiejfiejiejijiji', 'fjiejfiejiejijiji');

COMMIT;