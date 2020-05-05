

const check_session = {

  // connexion form
  getSession:  (req, res) => {

    if(req.session.user) {
      console.log(req.session.user)
      res.send(req.session.user)

    }

  },

};


module.exports = check_session;