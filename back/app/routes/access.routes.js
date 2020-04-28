const User = require('../models/accueil.model');

module.exports = {
    name: 'Accueil',
    register: async server => {

        server.route({
            method: 'GET',
            path: '/',
            handler: request => User.findAll(request.query.user)
        });

    }
};