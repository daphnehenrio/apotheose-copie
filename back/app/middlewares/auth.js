const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_GENERATE_TOKEN);
    const userId = decodedToken.userId;
    if (!req.body.user_id && req.body.user_id !== userId) {
      console.log('Invalid user ID')
      throw 'Invalid user ID';
    } else {
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