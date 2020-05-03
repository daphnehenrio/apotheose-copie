const models = require('../models');

const getModel = (className) => {
  const modelName = className[0].toUpperCase() + className.slice(1);
  return models[modelName];
};

mainController = {

  getAll : async (req, res) => {
    const options = {
      include: {all: true, nested: true},
      order: ['id'],
    }

    const data = await getModel(req.params.class).findAll(options);

    res.send(data);
  },

  getOne: async (req, res, next) => {
    const data = await getModel(req.params.class).findByPk(req.params.id, {
      include: {
        all: true,
        nested: true
      }
    });

    if (!data) {
      return next();
    }

    res.send(data);
  },

  create: async (req, res, ) => {
    // note : possibilité de créer un label en meme temps qu'une carte grâce à l'association
    res.send(await getModel(req.params.class).create(req.body));
  },

  update: async (req, res, next) => {
    let data = await getModel(req.params.class).findByPk(req.params.id);

    if (!data) {
      return next();
    }

    res.send( await data.update(req.body));
  },

  delete: async (req, res, next) => {

    let data = await getModel(req.params.class).findByPk(req.params.id, {
      include: {
        all: true,
        nested: true
      }
    });

    if (!data) {
      return next();
    }

    await data.destroy();

    res.send('ok');
  },

};

module.exports = mainController