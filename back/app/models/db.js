const { Pool } = require('pg');

// un pool de connection est un ensemble de connecteurs toujours prêts à être utilisés
// plus d'infos ici : https://node-postgres.com/features/pooling

module.exports = new Pool();