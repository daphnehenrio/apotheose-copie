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
        text: "Hello!",
        html: `<b>Hello!</b><p><a href=\"${process.env.VALID}${user.validation_key}\">Validation</a></p>`
    }
    
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