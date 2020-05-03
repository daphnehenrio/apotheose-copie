const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Simulation extends Model {

};

Simulation.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "simulation",
  createdAt: false,
  updatedAt: false
});


module.exports = Simulation;