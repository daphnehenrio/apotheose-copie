const { User, Document } = require('../models');
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const mkdirp = require('mkdirp');

const documentController = {

    addFolderCategory: async (req, res) => {
       
        
        mkdirp(`./public/uploads/${req.session.user.login}/${red.body}`, function(err) { 

        // path exists unless there was an error

        });

    },

    addFolderSubCategory: async (req, res) => {
       
        
        mkdirp(`./public/uploads/${req.session.user.login}/${red.params}/${req.body}`, function(err) { 

        // path exists unless there was an error

        });

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

    download: async (req, res) => {

        /*const file = fs.createWriteStream("file.jpg");
        const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
        response.pipe(file);
        });*/

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