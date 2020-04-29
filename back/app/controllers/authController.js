const { User } = require('../models');

//password verify
const emailValidator = require('email-validator');

// bcrypt = hash
const bcrypt = require('bcrypt');

const authController = {

  // show connexion form
  loginPage: (req, res) => {
    res.render('login');
  },

  // connexion form
  loginAction: (req, res) => {
    // recup form
    const {email, password} = req.body;
    // const email = req.body.email;
    // const password = req.body.password;


    // recup user with email
    User.findOne({
      where: {
        email: email        
      }
    }).then( (user) => {

      // if not exist => error
      if (!user) {
        return res.render('login', {
          error: "Cet email n'existe pas"
        });
      }

      // if exist, verify password
      if(! bcrypt.compareSync( password, user.password ) ) {
        // if not good => error
        return res.render('login', {
          error: "Mauvais mot de passe"
        });
      }

      // All is good => add user on session
      req.session.user = user ; 
      // redirect user at "/"
      res.redirect('/');


    }).catch( err => {
      console.trace(err);
      res.status(500).render('500', {err});
    });

  },

  // show inscription form
  signupPage: (req, res) => {
    res.render('signup');
  },

  // treatement of inscription form => save new user
  signupAction: (req, res) => {
    // take the data of the form
    const data = req.body;

    // NTUI => verify info 

    // - verify if user exist
    User.findOne({
      where: {
        email: data.email
      }
    }).then( (user) => {

      // list to take errors
      let errorsList = [];

      if (user) {
        errorsList.push('Cet email existe déjà');
      }

      // - last_name and first_name, not null
      if (!data.firstname) {
        errorsList.push("Le prénom ne peut pas être vide");
      }
      if (!data.lastname) {
        errorsList.push("Le nom ne peut pas être vide");
      }
      // - good format for email
      if (!emailValidator.validate(data.email)) {
        errorsList.push("L'email n'est pas un email correct");
      }

      // - minimum length of the password 
      if (data.password.length < 8) {
        errorsList.push("Le mot de passe doit contenir un minimum de 8 caractères");
      }

      // - password = confirm
      if (data.password !== data['password-confirm'] ) {
        errorsList.push("Le mot de passe et la confirmation ne correspondent pas");
      }
      
      // Insertion on DB 
      // errorsList is null if  "ok"
      if (errorsList.length === 0) {
        // create user
        const newUser = new User();
        newUser.firstname = data.firstname;
        newUser.lastname = data.lastname;
        newUser.email = data.email;
        // HASH password
        newUser.password = bcrypt.hashSync(data.password, 10);

        newUser.save().then( (user) => {
          // recup user on session
          req.session.user = user;
          res.redirect('/');
        });

      } else {
        res.render('signup', {
          errorsList
        });
      }

    }).catch( err => {
      console.trace(err);
      res.status(500).render('500', {err});
    });
  
  },

  logout: (req, res) => {
    delete req.session.user;
    res.redirect('/');
  }

};


module.exports = authController;