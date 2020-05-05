const { User, User_profil } = require('../models');

//password verify
const emailValidator = require('email-validator');

// bcrypt = hash
const bcrypt = require('bcrypt');

const authController = {

  /* show connexion form
  loginPage: (req, res) => {
    res.render('login');
  },*/

  // connexion form
  loginAction: (req, res) => {
    // recup form
    const {login, password} = req.body;
    // const email = req.body.email;
    // const password = req.body.password;

    // recup user with login
    User.findOne({
      where: {
        login: login
      },
    }).then( (user) => {

      // if not exist => error
      if (!user) {
        return res.send("Ce login n'existe pas");
      }

      // if exist, verify password
      if(! bcrypt.compareSync( password, user.password ) ) {
        // if not good => error
        return res.send("Mauvais mot de passe");
      }

      /*if( password !== user.password  ) {
        // if not good => error
        return res.send("Mauvais mot de passe");
      }*/

      // All is good => add user on session
      req.session.user = user ;
      // redirect user at "/"
      res.send(user);

    }).catch( err => {
      console.trace(err);
      res.status(500).send(err);
    });

  },

  /* show inscription form
  signupPage: (req, res) => {
    res.render('signup');
  },*/

  // treatement of inscription form => save new user
  signupAction: (req, res) => {
    // take the data of the form
    const data = req.body;

    // NTUI => verify info
    // - verify if user exist
    User.findOne({


          //login: data.login,
          //email: data.email

        where: {
          $or: {
            login: data.login,
            email: data.email
        }

    }
    }).then( (user) => {

      console.log("test");
      // list to take errors
      let errorsList = [];

      if (user) {
        if(user.login === data.login)
        {
          errorsList.push('Cet utilisateur existe déjà', user.login, data.login);
        }
        if(user.email === data.email)
        {
          errorsList.push('Cet email existe déjà', data.email, user.email);
        }
      }

      // - last_name and first_name, not null
      if (!data.first_name) {
        errorsList.push("Le prénom ne peut pas être vide");
      }
      if (!data.last_name) {
        errorsList.push("Le nom ne peut pas être vide");
      }

      // - good login
      if (!data.login) {
        errorsList.push("Le login ne peut pas être vide");
      }

      // - good format for email
      if (!emailValidator.validate(data.email)) {
        errorsList.push("L'email n'est pas un email correct");
      }

      // - minimum length of the password
      if (data.password.length < 8) {
        errorsList.push("Le mot de passe doit contenir un minimum de 8 caractères");
      }
      console.log(errorsList)
      // Insertion on DB
      // errorsList is null if  "ok"
      if (errorsList.length === 0) {

        // create user

        const newUser = new User();
        newUser.login = data.login;
        newUser.first_name = data.first_name;
        newUser.last_name = data.last_name;
        newUser.email = data.email;
        // HASH password
        newUser.password = bcrypt.hashSync(data.password, 10);

        newUser.save().then( (user) => {
          // recup user on session
          req.session.user = user;
          res.send(user);
        });

        let myNewUser = "";

        User.findOne({

          where:{
            login: data.login
          }

        }).then((user) => {

          return myNewUser = user;

        });

        //profil

        const newUser_profil = new User_profil();
        newUser_profil.user_id = myNewUser.id;

      } else {
        res.send(errorsList);
      }

    }).catch( err => {
      console.trace(err);
      res.status(500).send(err);
    });

  },

  logout: (req, res) => {
    delete req.session.user;
    res.send('Compte bien supprimer');
  }

};


module.exports = authController;