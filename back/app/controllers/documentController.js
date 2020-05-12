const { User, Document } = require('../models');

const documentController = {

    check: async (req, res) => {
        /* console.log(req); */
        //console.log(req.body, 'FILES');
        //console.log(req.files, 'REQ FILES');
        console.log(req.file.path);

    },

    upload: async (req, res) => {

        // console.log(req.session, 'REQ SESSION');
        console.log(req.body, 'REQ BODY');
        console.log(req.file, 'REQ FILE');
        const parsedMeta = JSON.parse(req.body.meta);
        console.log(parsedMeta, 'METAAAAAAAA');

        const file = req.file; // file passed from client
        const meta = parsedMeta; // all other values passed from the client, like name, etc..

        //console.log(req.body);
        //console.log(req.body.meta.toString());
        /* console.log(req.file.path); */
        /* const obj = req.body.meta; */ // req.body = [Object: null prototype] { title: 'product' }

        //console.log(obj.name, 'meta'); // { title: 'product' }

        const data = req.file;
        const user = req.session.user;
        console.log(user, 'user')

       const newDocument = new Document();
        newDocument.name = meta.name;
        newDocument.link = data.path;
        newDocument.user_id = user.id;

        await newDocument.save();

        res.status(200).send('ok')
    },

    allDocuments: async (req, res) => {

        const user_id = req.params.id;

        let documents = await Document.findAll({

            where: {
                user_id: user_id
            },
        })

        res.send(documents);

    },

}

module.exports = documentController;