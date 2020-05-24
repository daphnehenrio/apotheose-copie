const { User } = require('../models');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-pool');

const emailController = {

  emailValidator: async (req, res) => {

      const data = req.body;
      const mailAccountUser = data.email;

      const mailAldahe = process.env.MAIL;
      const passwordAldahe = process.env.MAILPASS;

      const user = await User.findOne({
        where:{
          email: data.email
        }
      });


      // Or using SMTP Pool if you need to send a large amount of emails

      const  smtpPool = require('nodemailer-smtp-pool');
      let transport = nodemailer.createTransport(smtpPool({
        service: "gmail",
        auth: {
          user: 'projet.aldahe@gmail.com',
          pass: 'yluv rhcn jojd byon',
        },

      }))



      let mail = {
        from: mailAldahe,
        to: mailAccountUser,
        subject: "Bienvenue",
        text: "Bienvenue à vous nouvel utilisateur",
        html: `<p>Bonjour ${user.first_name} ${user.last_name},<br /><br />
        Ce message à pour but de valider votre compte pour pouvoir profiter de toutes les fonctionnalités de notre site.<br />
        Veuillez conserver la clé de validation: <br /><br />
        <strong><b>${user.validation_key}</b></strong><br /><br />
        Afin de pouvoir l'envoyer au support en cas de problème ou récupérer vos identifiants pour plus de sécurité.</p><br />
        <p><a href=\"${process.env.VALID}${user.validation_key}\">Cliquez ici pour valider votre compte</a></p><br />
        <p><img src="https://www.webmarketing-com.com/wp-content/uploads/2017/09/digitalisation.png" width="500"></a><p><br />
        <p>Bonne visite et merci pour votre confiance.</p>`
      };

      transport.sendMail(mail, function(err){

        if(err){
            console.log(err);
        }else{
            console.log("Message sent");
        }

        transport.close();

      });

  },

  forgetPass: async (req, res) => {

    const data = req.body;
    const mailAccountUser = data.email;

    const mailAldahe = process.env.MAIL;
    const passwordAldahe = process.env.MAILPASS;

    const user = await User.findOne({
      where:{
        email: data.email
      }
    });

    const  smtpPool = require('nodemailer-smtp-pool');
    let transport = nodemailer.createTransport(smtpPool({
      service: "gmail",
      auth: {
        user: 'projet.aldahe@gmail.com',
        pass: 'yluv rhcn jojd byon',
      },

    }))

    // let transport = nodemailer.createTransport(smtpTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: mailAldahe,
    //     pass: passwordAldahe
    //   },
    //   tls: { rejectUnauthorized: false }
    // }));

    let mail = {
      from: mailAldahe,
      to: mailAccountUser,
      subject: "Compte oublié",
      text: "Récupération de compte",
      html: `<p>Bonjour ${user.first_name} ${user.last_name},<br /><br />
      Votre nom d'utilisateur: ${user.login}<br />
      Veuillez vous munir de votre clé d'activation pour pouvoir changer votre mot de passe.<br />
      <p><a href=\"${process.env.RECUP}${user.validation_key}\">Cliquez ici pour modifier vos informations</a></p><br />
      <p><img src="https://www.webmarketing-com.com/wp-content/uploads/2017/09/digitalisation.png" width="500"></a><p><br />
      <p>Merci pour votre confiance.</p>`
    };

    transport.sendMail(mail, function(err){

      if(err){
          console.log(err);
      }else{
          console.log("Message sent");
          res.send('ok')
      }

      transport.close();

    });

  },

};


module.exports = emailController;
