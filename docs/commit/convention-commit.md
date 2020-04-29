# Structure des commit pour l'équipe

## Emoji

Ici vous retrouverez la liste des emoji le plus souvent utilisé dans les titres de commit avec leur signification.

- :seedling: : Commit initial.
- :construction: : Fonctionnalité en cours de construction.
- :sparkles: : Nouvelle fonctionnalitée achevée.
- :recycle: : Refactorisation.
- :building_construction: Restructuration des dossiers.
- :wastebasket: : Nettoyages des fichiers ou bout de code inutiles.
- :card_file_box: : Ajout ou modification de data.
- :lipstick: : Ajout de style.
- :alembic: : Tests.
- :heavy_plus_sign: : Ajout de dépendances.
- :heavy_minus_sign: : Suppression de dépendance.
- :bug: : Bug non corrigé sur lequel on est pototiellement bloqué
- :ambulance: : Correction de bug crittique.
- :wrench: : Correction mineure.
- :pencil2: : Correction typographique.
- :pencil: : Rédaction de documentation.
- :page_facing_up: : Ajout de documents.
- :lock: : Ajout sécurité.
- :camera_flash: : Ajout de capture du rendu.
- :arrow_up: : Mise à jour.
- :tada: : Version terminée.
- :globe_with_meridians: : Déploiement.

## Scope

Dans la partie scope, y noter le champs d'action du commit. Quel dossier est concerné par le commit, ou quels types de fichiers. En règle général, je prends le nom du dossier, ou le nom du fichier tout simplement.

_Exemples :_

- (components) ➔  _pour signifier que les modifications touchent plusieurs composants réact_
- (Menu) ➔  _pour une modification sur le composant_ `<Menu />`
- (sass) ➔ _pour une modification qui touche aux styles_
- (data) ➔  _pour une modifications des données_
- (README.md) ➔  _pour un fichier spécifique_
- (All) ➔  _lorsque qu'une majorité de dossier est concernée ou qu'il n'y a pas de spécificitée particulière_

## Titre

Toujours en anglais, du moins autant que possible, en commençant par le "verbe", au plus court et simple.

_Exemple :_

- _Add styles_
- _Add comments_
- _Remove static data_
- _Correction bug_

## Message

On détail ensuite autant que l'on souhaite dans le message du commit, en français. Au besoin on peut meme y ajouter des notes, des emoji, structurer la mise en page...

Comme il n'est pas possible de faire du multiligne directement lorsque l'on fait le fait le commit, on valide le commit avec un message vide, puis on le modifie avec la commande suivante :

`git commit --amend`

On pourra alors gérer la mise en page avec nano. Une fois terminée, `ctrl X` puis `O` pour quitter en enregistrant.

Au besoin, un petit lien avec une [liste d'émoji](https://gist.github.com/rxaviers/7360908) pour github.

Je vous laisse des exemples _(pas parfait)_ de différents message de commit que j'ai pu faire:

![alt text][commit]

[commit]: img/commit-messages-example.png

## Conclusion

Si on arrive tous à respecter plus ou moins cette structure, on pourra facilement se repérer sur les commits des uns et des autres, et comprendre directement ce qui à été fait, et même pour nous même.
