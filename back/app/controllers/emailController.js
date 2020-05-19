const { User, User_profil  } = require('../models');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const slugify = require("slugify");


const emailController = {

    emailValidator: async (req, res) => {

      /* nodemailer */
      const data = req.body;
      const mailAccountUser = data.email;

      const mailAldahe = process.env.MAIL;
      const passwordAldahe = process.env.MAILPASS;

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
        subject: "hello world!",
        text: "Hello!",
        html: "<b>Hello!</b><p><a href=\"http://ec2-54-146-37-131.compute-1.amazonaws.com/\">Validation</a></p>"
    }
    
      transport.sendMail(mail, function(err){

        if(err){
            console.log(err);
        }else{
            console.log(`Message sent`);
        }
    
        transport.close();

      });
    
      //res.status(200).send('ok');

    },

};


module.exports = emailController;