const { User, Document, Category, Sub_category } = require('../models');
const Sequelize = require('sequelize')
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const multer = require('multer');
const Op = Sequelize.Op;

const documentController = {

    upload: async (req, res) => {

        // console.log(req.session, 'REQ SESSION');
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_GENERATE_TOKEN);
        const userId = decodedToken.userId;

        const {category, sub_category } = req.params;

        const reconstruct_cat = category.substr(0,1).toUpperCase()+category.slice(1).replace(/-/gi, " ")

        const reconstruct_sub_cat = sub_category.substr(0,1).toUpperCase()+sub_category.slice(1).replace(/-/gi, " ")


        const user = await User.findByPk(userId, {});

        const cat = await Category.findOne({
          where: {
            type_id: 2,
            name: Sequelize.where(
              Sequelize.fn('unaccent', Sequelize.col('name')), {
                [Op.iLike]:`%${reconstruct_cat}%`
              }
            ),
          }
        })


        const sub_cat = await Sub_category.findOne({
          where: {
            category_id: cat.id,
            name: Sequelize.where(
              Sequelize.fn('unaccent', Sequelize.col('name')), {
                [Op.iLike]:`%${reconstruct_sub_cat}%`
              }
            )
          },
        })

        const data = req.file;
        const meta = JSON.parse(req.body.meta); // all other values passed from the client, like name, etc..

        const filename = req.file.filename;

        const newDocument = new Document();
        newDocument.name = meta.name;
        newDocument.link = `./public/uploads/${user.folder_name}/${category}/${sub_category}/${filename}`;
        newDocument.user_id = userId;
        newDocument.sub_category_id = sub_cat.id;

        await newDocument.save();

        fs.move('./public/uploads/' + filename, `./public/uploads/${user.folder_name}/${category}/${sub_category}/${filename}`, function (err) {
          if (err) {
              return console.error(err);
          }
        });

        res.status(200).send('ok')

  },

  download: async (req, res) => {

      const file = await Document.findByPk(req.params.document_id)

      res.download(file.link); // Set disposition and send it.

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
            order:[
              ['name', 'ASC'],
            ],
            include: [
              {
                association : 'sub_category',
                order:[
                  ['name', 'ASC'],
                ],
              }
            ],
        });

        res.send(categories)
  },

  documentsBySubCategory: async (req, res) => {

      const { id, sub_category_id } = req.params;

      let documents = await Document.findAll({
          where: {
              user_id: id,
              sub_category_id: sub_category_id,
          },
      })

      res.send(documents);

  },

  deleteFile: async (req, res) => {

    const document_id = req.params.id;

        let document = await Document.findOne({

            where: {
                id: document_id
            },
        });

    const path = document.link;
   
    fs.unlinkSync(path, (err) => {
      
      if (err) {
        console.error(err)
        return
      }

    });

    await document.destroy();

    res.send("Votre fichier a bien été supprimer.");

  },

  

}

module.exports = documentController;