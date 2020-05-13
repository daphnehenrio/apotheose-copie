const moment = require('moment');
const { Article, Sub_category } = require('../models');
const sequelize = require('sequelize')

const articleController = {

    homePage: async (req, res) => {

      let lastArticle = await Article.findAll( {
        order: [
          ['updated_at', 'DESC'],
        ],
        limit: 8,
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

        let articles = await Sub_category.findByPk(subCategoryId, {
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

        res.send(articles);



    },

    searchArticle : async (req, res) => {


      const lookupValue = req.params.value;

      const articles = await Article.findAll({
            limit: 20,
            where: {
                content: sequelize.where(sequelize.fn('LOWER', sequelize.col('content')), 'LIKE', '%' + lookupValue + '%')
            },
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


        res.send(articles);
    }


};

  module.exports = articleController;