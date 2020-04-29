const sanitizer = require('sanitizer');

module.exports = (req, res, next) => {

  for( let prop in req.body ) {
  
    req.body[prop] = sanitizer.escape( req.body[prop] );
  }

  next();
};