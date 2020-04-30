const express = require('express');

const userController = require('./controllers/userController');

const authController = require('./controllers/authController');

const user_profilController = require('./controllers/user_profilController');

const router = express.Router();


router.get('/', userController.homePage );

router.get('/:id', user_profilController.user_profilPage );

//connexion
router.post('/login', authController.loginAction );

//inscription
router.post('/signup', authController.signupAction );


// 404
router.use( (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;