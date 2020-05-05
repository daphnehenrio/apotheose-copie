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

  },

  update: async (req, res, next) => {

    try {

      const userLogin = req.body.login;
      const user = await User.findOne(({
        where: {
          login: userLogin
        },
      }));

      console.log(req.body);

      const user_profilId = user.id;
      const user_profil = await User_profil.findByPk(user_profilId);

      await user.update(req.body);

      await user_profil.update(req.body);

      res.send(user);

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);

    }
  },



};


module.exports = userController;