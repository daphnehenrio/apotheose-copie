const { User } = require('../models');

const userController = {

  homePage: async (req, res) => {
    try {

      let user = await User.findAll({
        include : [
          {
              association : 'user_profil',
          }
      ]
      });

      res.send(user);

    } catch (err) {
      console.trace(err);
      res.status(500).render('500', {err});
    }

  }

};


module.exports = userController;