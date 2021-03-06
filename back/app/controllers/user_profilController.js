const { User, User_profil } = require('../models');


const user_profilController = {

  user_profilPage: async (req, res, next) => {
    // recup id from url
    const user_id = req.params.id;

      //recup user from bdd with profil
      await User.findByPk(user_id, {
          include: [
              "user_profil"
            ]
      }).then( async (user) => {
        // if not exist null
        if (! user) {
          return next();
        }
        // send user with profil
        await res.send([user]);

      }).catch( (err) => {
        console.trace(err);
        res.status(500).render('500', {err});
      });

  },

};


module.exports = user_profilController;