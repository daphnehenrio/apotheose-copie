const { User, User_profil } = require('../models');

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

    console.log(req.body)

    try {

      const user = await User.findByPk(req.body.user_id, {
        include : [
          {
            association : 'user_profil',
          }
        ]
      });

      console.log(user, 'JE SUIS LE USER');

      const user_profilId = user.user_profil.id;
      console.log(user_profilId)
      const user_profil = await User_profil.findByPk(user_profilId);

      console.log(user_profil, 'JE SUIS UNE VALEUR NULL');

      await user.update(req.body);

      await user_profil.update(req.body);

      const userUpdate = await User.findByPk(req.body.user_id, {
        include : [
          {
            association : 'user_profil',
          }
        ]
      });

      console.log(userUpdate)

      res.send(userUpdate);

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);

    }
  },

  delete: async (req, res, next) => {
    try {

      const userId = req.params.id;
      const user_profilId = req.params.id;
      const user = await User.findByPk(userId);
      const user_profil = await User_profil.findByPk(user_profilId);

      if (user) {

        await user_profil.destroy();
        await user.destroy();
        res.send("OK");

      } else {

        return next();

      }

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  }

};


module.exports = userController;