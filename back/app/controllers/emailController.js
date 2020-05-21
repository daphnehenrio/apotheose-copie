const { User } = require('../models');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

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
    
      let transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
          user: mailAldahe,
          pass: passwordAldahe
        },  
        tls: { rejectUnauthorized: false } 
      }));

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

};


module.exports = emailController;