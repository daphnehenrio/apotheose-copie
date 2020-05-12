const fs = require('fs');

const documentController = {

    check: async (req, res) => {
        /* console.log(req); */
        console.log(req.body, 'FILES');
        console.log(req.files, 'REQ FILES');

    },

    upload: (req, res) => {

        const file = req.file; // file passed from client
        const meta = req.body; // all other values passed from the client, like name, etc..
      
        console.log(req.body);
        console.log(req.body.meta.toString());
        const obj = JSON.parse((req.body.meta)); // req.body = [Object: null prototype] { title: 'product' }
      
        console.log(obj.name, 'meta'); // { title: 'product' }
      
        console.log(file)
      
      
        res.status(200).send('ok')
    }


};

module.exports = documentController;