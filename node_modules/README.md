# Aldahe (All documents are here)

## Create db

In shell

```shell

sudo -i -u postgres

psql

```

```psql

CREATE ROLE username WITH LOGIN PASSWORD "password";

CREATE DATABASE db_name OWNER username;

```

### At the root of the project

In shell

#### Create table

```shell

cd back

psql -U username -d db_name -f ./app/data/create_db.sql

## enter the password

cd migrations

sqitch deploy

```

**If you don't have `sqitch` after `## enter the password`**

```shell

cd migrations/deploy

psql -U username -d db_name -f category.sql

## enter the password

psql -U username -d db_name -f sub_category.sql

## enter the password

psql -U username -d db_name -f service.sql

## enter the password

psql -U username -d db_name -f service_has_sub_category.sql

## enter the password


```

#### Drop all tables

```shell

cd back/app/migrations

sqitch revert

cd ..

psql -U username -d db_name -f ./app/data/drop_table.sql

## enter the password

```

## .env

```.env
PG_URL=postgres://usernname:password@address:port/db_name
TOKEN_GENERATE_TOKEN=RANDOM_TOKEN
TOKEN_SESSION=OTHER_RANDOM_TOKEN
```

## Launch application

At the root of the project in shell

* api :

```shell
cd back

npm i

node server.js
```

At the root of the project in shell

* front :

```shell
cd front

yarn

yarn start
```

-------------------------------

-------------------------------

## Détail de l'application

### Accéder au menu

Dans la barre de navigation, cliquer sur l'icône ☰ pour ouvrir le menu latéral. Il permet de naviguer dans le site. Les titre accompagné d'une petite flèche développe un sous-menu.

#### La navigation

- Accueil : comme son nom l'indique ramène à l'accueil.
- Services : Répertorie tout les liens vers les sites officiel des services concernés. Il est divisé en sous-menu
  - L'accueil affichant tous les services
  - un classement par catégorie regroupant les services de même type
- Articles : Répertorie les infos et conseils selons les services, chaque article donnera accès aux checklist et lettre-type. Trié en sous menu:
  - Un accueil qui affiche un appeçu du tout
  - Des grandes catégorie donnant accès aux différents services
- Simulation: La gestion des simulation n'est actuellement pas prévue dans la v1 
- Support: Donne accès au formulaire de contact pour poser une question, ou proposer un contenu.

### Se connecter ou s'inscrire

Pour se connecter il suffit de cliquer sur le bouton connexion en haut à droite.
Ce bouton donne aussi accès au formulaire d'inscription sur le site.
