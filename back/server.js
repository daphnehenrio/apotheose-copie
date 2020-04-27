const Hapi = require('@hapi/hapi');
const qs = require('qs');
const routes = require('./plugins/routes');

const port = 7777;

(async () => {
    const server = Hapi.server({
        port: port,
        query: {
            parser: query => qs.parse(query)
        }
    });         
                                
    await server.start();
    console.log(`Server running on port ${server.settings.port} at http://localhost:${port}`);

    server.route(routes);
        
})();

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});