const express = require('express');

// == Factorisation du try catch
const capture = require('./controllers/capture');

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
const mainController = require('./controllers/mainController');

// == require controllers
const userController = require('./controllers/userController');

const authController = require('./controllers/authController');

const user_profilController = require('./controllers/user_profilController');

const leftMenu = require('./controllers/leftMenu');

// == router
const router = express.Router();


router.get('/', userController.homePage );


router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/user/:id', user_profilController.user_profilPage );

//connexion
router.post('/login', authController.loginAction );

//inscription
router.post('/signup', authController.signupAction );

//left menu
router.get('/left-menu', capture(leftMenu.getMenu) );

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
router.get('/contenu-table/:class', capture(mainController.getAll) );


// 404
router.use( (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;