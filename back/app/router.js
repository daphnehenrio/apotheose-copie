const express = require('express');

//const genericController = require('./controllers/genericController');

//const cardToLabelController = require('./controllers/cardToLabelController');

const mainController = require('./controllers/mainController');

const authController = require('./controllers/authController');

const router = express.Router();


router.get('/', mainController.homePage );

//connexion
router.post('/login', authController.loginAction );

//inscription
router.post('/signup', authController.signupAction );


// 404
router.use( (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;