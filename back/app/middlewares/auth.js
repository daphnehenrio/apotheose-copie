const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('header', req.headers)
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    const decodedToken = jwt.verify(token, process.env.TOKEN_GENERATE_TOKEN);
    console.log('2')
    const userId = decodedToken.userId;
    console.log(token)
    console.log(decodedToken)
    console.log(userId)


    if (req.body.user_id && Number(req.body.user_id) !== userId) {
      console.log('plop')
      console.log('Invalid user ID')
      throw 'Invalid user ID body';
    }
    else if (req.params.id && Number(req.params.id) !== userId) {

        console.log('Invalid user ID params')
        throw 'Invalid user ID';
    }
    else if(!req.params.id && !req.body.user_id) {
      console.log('No id')
        throw 'Invalid user ID';
    }
    else {
      console.log('token ok')
      next();
    }

  } catch {
    console.log('Invalid request!')
    res.status(401).send({
      error: new Error('Invalid request!')
    });
  }
};