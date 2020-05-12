const moment = require('moment');
const { Article, Sub_category } = require('../models');

const articleController = {

    homePage: async (req, res) => {

      let lastArticle = await Article.findAll( {
        order: [
          ['updated_at', 'DESC'],
        ],
        limit: 4,
        include : [
          {
            association : 'sub_category',
            order: [
              ['name', 'ASC'],
            ],
            include : [
              {
                association : 'category',
              },
            ],
          },
        ],
      })
      res.send(lastArticle);

    },

    getOneArticle: async (req, res) => {

      const article = await Article.findByPk(req.params.id, {
        include : [
          {
            association : 'sub_category',
            order: [
              ['name', 'ASC'],
            ],
            include : [
              {
                association : 'category',
              },
            ],
          },
        ],
      });
      console.log(article)


      res.send(article);

    },

    getAllArticles: async (req, res) => {

      const articles = await Article.findAll();


      res.send(articles);

    },


    articleBySubCategory: async (req, res) => {

      const subCategoryId = req.params.id

        let artilecs = await Sub_category.findByPk(subCategoryId, {
          include : [
            {
              association : 'article',
              order: [
                ['name', 'ASC'],
              ],
              include : [
                {
                  association : 'sub_category',
                  order: [
                    ['name', 'ASC'],
                  ],
                  include : [
                    {
                      association : 'category',
                      order: [
                        ['name', 'ASC'],
                      ]
                    },
                  ],
                },
              ],
            },
          ],
        });

        res.send(artilecs);



    },


};

  module.exports = articleController;