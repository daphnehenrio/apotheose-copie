# Pense-bête des commandes Sqitch

## Init

`sqitch init nom-du-projet --engine pg`

## Config initiale

```bash
sqitch config --user engine.pg.client psql
sqitch config --user user.name 'Perceval'
sqitch config --user user.email 'perceval@oclock.io'
```

## Vérif automatique des migrations

`sqitch config --bool deploy.verify true`

## Voir la config

`sqitch config -l`

## Première migration

`sqitch add nom-de-la-migration -n 'description'`

## Migrations avec dépendance

`sqitch add migration-suivante --requires migration-precedente -n 'description'`

## Ajout de la cible

```
sqitch target add origin db:pg:vrai-nom-de-la-db
sqitch engine add pg origin
```

## Déploiement

`sqitch deploy`

## Rembobinage

`sqitch revert`

## État

`sqitch status`

## Journal

`sqitch log`