const fs = require('fs');

const documentController = {

    upload: async (req, res) => {
        /* console.log(req); */
        console.log(req.body, 'FILES');
        console.log(req.files, 'REQ FILES');

},


};

module.exports = documentController;