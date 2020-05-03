const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Service extends Model {

};

Service.init({
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  link: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "service",
  createdAt: false,
  updatedAt: false
});


module.exports = Service;