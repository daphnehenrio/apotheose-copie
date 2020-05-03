const { Category } = require('../models');



const leftMenu = {

  // connexion form
  getMenu: async (req, res, next) => {

    const menu = await Category.findAll({
      include: {
        all: true,
        nested: true
      }
    })

    if (!menu) {
      return next();
    }
    console.log([menu])
    res.send([menu]);

  },

};


module.exports = leftMenu;