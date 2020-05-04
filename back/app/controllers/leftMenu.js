const { Category } = require('../models');



const leftMenu = {

  // connexion form
  getMenu: async (req, res, next) => {

    const menu = await Category.findAll({
      where: {
        type_id: 1
      },
      include:['sub_category'],
      order: ['id', ['sub_category','name', 'ASC']]

    })

    if (!menu) {
      return next();
    }
    console.log([menu])
    res.send([menu]);

  },

};


module.exports = leftMenu;