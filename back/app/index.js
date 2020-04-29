require('dotenv').config();

const Hapi = require('@hapi/hapi');
const qs = require('qs');
const routes = require('./routes/access.routes');
const { Client } = require('pg');

const port = process.env.PORT ||7777;

(async () => {

    const server = Hapi.server({
        port: port,
        debug: { request: ['error'] },
        query: {
            parser: query => qs.parse(query)
        }
    });

    const client = new Client();

    await server.register([
        {
            plugin: require('@hapi/yar'),
            options: {
                cookieOptions: {
                    password: 'lqLBOnES6Kx/IMkIwnGP9RoHo7aOc8suyZYPxPEWTZGJz4ux0JGzuA==', // un mot de passe généré aléatoirement pour encrypter les cookies
                    isSecure: false // parce qu'on utilise http, passer à true pour https
                }
            }
        },
        {
            plugin: require('./routes/access.routes'),
            /*routes: {
                vhost: 'tickets.oparc.fr'
                // pas de prefix ici, certaines routes l'auront, d'autres non
            }*/
        },
    ]);

    server.app.db = client;

    server.app.db.user = 'aldahe';

    server.app.db.password = 'aldahe';

    await client.connect();

    await server.start();

    console.dir(server.app.db.user);
    console.dir(server.app.db.password);

    console.log(`Server running on port ${server.settings.port} at http://localhost:${port}`);

    //server.route(routes);

})();

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);

});