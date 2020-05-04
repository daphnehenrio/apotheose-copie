const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_service extends Model {

};

User_service.init({
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
  tableName: "user_service",
  createdAt: false,
  updatedAt: false
});


module.exports = User_service;