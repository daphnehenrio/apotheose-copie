const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Simulation_result extends Model {

};

Simulation_result.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "simulation_result",
  createdAt: false,
  updatedAt: false
});


module.exports = Simulation_result;