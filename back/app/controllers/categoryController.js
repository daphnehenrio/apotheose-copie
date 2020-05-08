const { Category, Sub_category } = require('../models');

const categoryController = {

    categoriesPage: async (req, res) => {
      try {
  
        let category = await Category.findAll({
          include : ['sub_category'],
          order: [
            ['name', 'ASC'],
          ],      
        });
  
        res.send(category);
  
      } catch (err) {
        console.trace(err);
        res.status(500).render('500', {err});
      }
  
    },

    categoryPage: async (req, res) => {
        try {
            

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
    
        } catch (err) {
          console.trace(err);
          res.status(500).render('500', {err});
        }
    
      },
  
  
};
  
  module.exports = categoryController;