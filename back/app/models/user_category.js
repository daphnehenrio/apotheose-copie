const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_category extends Model {

};

User_category.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  color: {
    type: DataTypes.STRING(40),
  },

}, {
  sequelize: dbConnection,
  tableName: "user_category",
  createdAt: false,
  updatedAt: false
});


module.exports = User_category;