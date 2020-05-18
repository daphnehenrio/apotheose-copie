const { User, User_profil  } = require('../models');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const emailController = {

    emailer: async (req, res) => {

    /* nodemailer */

      const mailAccountUser = 'aldahe[add]@gmail.com'
      const mailAccountPassword = '[pass]'

      const fromEmailAddress = 'aldahe[add]@gmail.com'
      const toEmailAddress = '[add user email]'

      let transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
          user: mailAccountUser,
          pass: mailAccountPassword
        },  
        tls: { rejectUnauthorized: false } 
      }));

      let mail = {
        from: fromEmailAddress,
        to: toEmailAddress,
        subject: "hello world!",
        text: "Hello!",
        html: "<b>Hello!</b><p><a href=\"http://ec2-54-146-37-131.compute-1.amazonaws.com/\">Validation</a></p>"
    }
    
      transport.sendMail(mail, function(error, response){

        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    
        transport.close();

      });
    
        res.status(200).send('ok');

    },

};


module.exports = emailController;