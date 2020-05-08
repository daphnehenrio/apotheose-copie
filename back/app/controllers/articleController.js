const moment = require('moment');
const { Article, Sub_category } = require('../models');

const articleController = {

    homePage: async (req, res) => {
      try {
  
        let lastArticle = await Article.findAll({
          include : ['sub_category'],
          order: [
            ['updated_at', 'DESC'],
          ],      
        });
  
        res.send(lastArticle);
  
      } catch (err) {
        console.trace(err);
        res.status(500).render('500', {err});
      }
  
    },
  
  
};
  
  module.exports = articleController;