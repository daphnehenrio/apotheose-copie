const capture = (mafunction) => {
  // on renvoie une nouvelle fonction, qui appelle la première dans un try catch
  return async (req, res, next) => {
    try {
      await mafunction(req, res, next);
    } catch (error) {
      console.error(error);
      //console.trace(error);
      res.status(500).send({
        message: error.message,
        details: error
      });
    }
  };
};

module.exports = capture;