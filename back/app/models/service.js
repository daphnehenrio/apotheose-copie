const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Service extends Model {

};

Service.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  logo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "service",
  createdAt: false,
  updatedAt: false
});


module.exports = Service;