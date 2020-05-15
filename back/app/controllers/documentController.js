const { User, Document, Category, Sub_category } = require('../models');
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const multer = require('multer');

const documentController = {

    upload: async (req, res) => {

      console.log(req.file)
        // console.log(req.session, 'REQ SESSION');
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_GENERATE_TOKEN);
        const userId = decodedToken.userId;

        const {category, sub_category } = req.params;

        const reconstruct_sub_cat = sub_category.substr(0,1).toUpperCase()+sub_category.slice(1).replace(/-/gi, " ")


        const user = await User.findByPk(userId, {});


        const sub_cat = await Sub_category.findOne({
          where: {
            name: `${reconstruct_sub_cat}`,
          }
        })

        const data = req.file;
        const meta = JSON.parse(req.body.meta); // all other values passed from the client, like name, etc..

        const filename = req.file.filename;

        const newDocument = new Document();
        newDocument.name = meta.name;
        newDocument.link = data.path;
        newDocument.user_id = userId;
        newDocument.sub_category_id = sub_cat.id;
        await newDocument.save();
        console.log(req.session.user.id);

        fs.move('./public/uploads/' + filename, `./public/uploads/${user.folder_name}/${category}/${sub_category}/${filename}`, function (err) {
          if (err) {
              return console.error(err);
          }
        });

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