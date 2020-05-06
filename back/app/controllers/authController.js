const { User, User_profil } = require('../models');
const Sequelize = require('sequelize');

//password verify
const emailValidator = require('email-validator');

// bcrypt = hash
const bcrypt = require('bcrypt');

const authController = {

  // connexion form
  loginAction:  (req, res) => {
    // recup form
    const {login, password} = req.body;

    // recup user with login
    User.findOne({
      where: {
        login: login
      },
      include:  ["user_profil"]
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

      // All is good => add user on session
      req.session.user = user ;
      // redirect user at "/"
      res.send(user);

    }).catch( err => {
      console.trace(err);
      res.status(500).send(err);
    });

  },

  // treatement of inscription form => save new user
  signupAction: async (req, res) => {
    // take the data of the form
    const data = req.body;

    // NTUI => verify info
    // - verify if user exist
    User.findOne({

        where:
          Sequelize.or(
            { login: data.login },
            { email: data.email }
          )

    }).then( async (user) => {

      console.log("test");
      // list to take errors
      let errorsList = [];

      if (user) {
        if(user.login === data.login)
        {
          errorsList.push('Cet utilisateur existe déjà');
        }
        if(user.email === data.email)
        {
          errorsList.push('Cet email existe déjà');
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

        await newUser.save().then( (user) => {
          // recup user on session
          req.session.user = user;
          res.send(user);
        });

        const myNewUser = await User.findOne({

          where:{
            login: data.login
          }

        })
        console.log(myNewUser)
        //profil

        const newUser_profil = new User_profil();
        newUser_profil.user_id = myNewUser.id;
        newUser_profil.address = data.address;
        newUser_profil.zip_code = data.zip_code;
        newUser_profil.city = data.city;
        newUser_profil.phone_number = data.phone_number;
        newUser_profil.cellphone_number = data.cellphone_number;
        newUser_profil.phone_work = data.phone_work;
        newUser_profil.children = data.children;
        newUser_profil.statut = data.statut;
        newUser_profil.gender = data.gender;

        newUser_profil.save()
        console.log(newUser_profil)
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
    console.log(req.session.user)
    res.send('la session à bien été supprimée');
  }

};


module.exports = authController;