const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User extends Model {

};

User.init({
  first_name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  last_name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  login: {
    type: DataTypes.STRING(76),
    allowNull: false
  },

  password: {
    type: DataTypes.STRING(76),
    allowNull: false
  },

  avatar: {
    type: DataTypes.TEXT,
  },

  email: {
    type: DataTypes.CHAR(76),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "user",
  createdAt: false,
  updatedAt: false
});


module.exports = User;