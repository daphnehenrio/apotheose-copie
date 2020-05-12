const { Category, Sub_category } = require('../models');

const categoryController = {

    categoriesPage: async (req, res) => {

        let category = await Category.findAll({
          include : ['sub_category'],
          order: [
            ['name', 'ASC'],
          ],
        });

        res.send(category);

    },

    categoryPage: async (req, res) => {

          let name = req.params.name;
          let category = await Category.findOne({
            where: {
                name: name,
            },
            include : ['sub_category'],
            order: [
              ['name', 'ASC'],
            ],
          });

          res.send(category);

      },


};

  module.exports = categoryController;