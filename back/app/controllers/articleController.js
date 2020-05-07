const moment = require('moment');
const { Op } = require('sequelize')
const { Article, Sub_category } = require('../models');

/*Post.findAll({
    where: {
      authorId: {
        [Op.eq]: 2
      }
    }
  });*/

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

  //delete this
  update: async (req, res, next) => {

    try {

      const articleUpdated = req.body.updated_at;
      const article = await Article.findOne(({
        where: {
          updated_at: articleUpdated 
        },
      }));

      await article.update(req.body);

      res.send(articleUpdated);

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);

    }
  },
  
};
  
  module.exports = articleController;