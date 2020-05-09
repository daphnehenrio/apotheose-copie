const { Service } = require('../models');

const serviceController = {

    servicesPage: async (req, res) => {
      try {
  
        let service = await Service.findAll({
          include : ['category'],
          order: [
            ['name', 'ASC'],
          ],      
        });
  
        res.send(service);
  
      } catch (err) {
        console.trace(err);
        res.status(500).render('500', {err});
      }
  
    },
  
  
};
  
  module.exports = serviceController;