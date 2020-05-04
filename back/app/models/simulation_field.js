const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Simulation_field extends Model {

};

Simulation_field.init({
  label: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  input_type: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  obligatory: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "simulation_field",
  createdAt: false,
  updatedAt: false
});


module.exports = Simulation_field;