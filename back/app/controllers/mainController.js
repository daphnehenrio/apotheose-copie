const User = require('../models/user');

const mainController = {

  // méthode pour afficher la page d'accueil
  homePage: async (req, res) => {
    try {
      // on va chercher tous les Quiz
      let user = await User.findAll({
      });
      
      res.send(user);

    } catch (err) {
      console.trace(err);
      res.status(500).render('500', {err});
    }
    
  }  

};


module.exports = mainController;