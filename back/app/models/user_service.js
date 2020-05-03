const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_service extends Model {

};

User_service.init({
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
  tableName: "user_service",
  createdAt: false,
  updatedAt: false
});


module.exports = User_service;