const { User, Document, Category } = require('../models');
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const mkdirp = require('mkdirp');

const documentController = {

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

        const file = `./public/uploads/$2a$10$SofZyjFQ0Mlauo0GmfTFueL26Gsq5yNkXuUCWVTVqJrpOKlmEsZi/Projet-Henri.pdf`;
        res.download(file); // Set disposition and send it.        

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

    allCategories: async (req, res) => {
        const categories = await Category.findAll({
            where: {
                type_id: 2
            },
            include: ["sub_category"]
        });

        res.send(categories)
    }

}

module.exports = documentController;