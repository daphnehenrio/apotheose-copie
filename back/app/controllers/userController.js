const { User, User_profil } = require('../models');

const bcrypt = require('bcryptjs');

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

      const user_profilId = user.user_profil.id;
      const user_profil = await User_profil.findByPk(user_profilId);


      await user.update(req.body);
      await user_profil.update(req.body);

      const userUpdate = await User.findByPk(req.body.user_id, {
        include : [
          {
            association : 'user_profil',
          }
        ]
      });

      res.send(userUpdate);
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  delete: async (req, res, next) => {

    try {

      const userId = req.params.id;
      const user = await User.findByPk(userId);
      const user_profil = await User_profil.findOne({
        where: {
          user_id: userId
        }
      });

      if (user_profil) {

        await user_profil.destroy();

      };

      if (user) {

        await user.destroy();
        res.send("OK");

      } else {

        return next();

      }

    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  rename: async (req, res) => {

    const data = req.body;

    const user = await User.findOne({
      where: 
        {
          validation_key: data.validation_key
        }      
    });

    if(user.validation_key) {
      user.update({
        password: bcrypt.hashSync(data.password, 10)
      });
    };

    res.end();

  }

};


module.exports = userController;