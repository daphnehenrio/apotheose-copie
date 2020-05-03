const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Simulation_filed_select extends Model {

};

Simulation_filed_select.init({
  option: {
    type: DataTypes.TEXT,
    allowNull: false
  },


}, {
  sequelize: dbConnection,
  tableName: "simulation_filed_select",
  createdAt: false,
  updatedAt: false
});


module.exports = Simulation_filed_select;