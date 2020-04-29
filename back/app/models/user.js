const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User extends Model {

};

User.init({
  first_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },

  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },

  login: {
    type: DataTypes.STRING(40),
    allowNull: false
  },

  password: {
    type: DataTypes.STRING(76),
    allowNull: false
  },

  avatar: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "user",
  createdAt: false,
  updatedAt: false
});


module.exports = User;