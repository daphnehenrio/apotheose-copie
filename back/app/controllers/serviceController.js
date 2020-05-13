const {
  Service,
  Category
} = require('../models');

const serviceController = {

  servicesPage: async (req, res) => {

      let service = await Service.findAll({
        include: ['category'],
        order: [
          ['name', 'ASC'],
        ],
      });

      res.send(service);

  },

  servicesCategoryPage: async (req, res) => {

    const categoryId = req.params.id

    let service = await Category.findByPk(categoryId, {
      include: [
        {
          association : 'service',
          order: [
            ['name', 'ASC'],
          ]
        },
      ]
    });

    res.send(service);

  },

};

module.exports = serviceController;