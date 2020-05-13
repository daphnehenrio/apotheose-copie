const { User, Document } = require('../models');
const jwt = require('jsonwebtoken');

const documentController = {

    check: async (req, res) => {
        /* console.log(req); */
        //console.log(req.body, 'FILES');
        //console.log(req.files, 'REQ FILES');
        console.log(req.file.path);

    },

    upload: async (req, res) => {

        // console.log(req.session, 'REQ SESSION');
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_GENERATE_TOKEN);
        const userId = decodedToken.userId;

        const data = req.file;
        const meta = JSON.parse(req.body.meta); // all other values passed from the client, like name, etc..
        
        

        const newDocument = new Document();
        newDocument.name = meta.name;
        newDocument.link = data.path;
        newDocument.user_id = userId;
        await newDocument.save();
        console.log(req.session.user.id);
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