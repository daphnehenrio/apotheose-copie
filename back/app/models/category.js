const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Category extends Model {

};

Category.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  color: {
    type: DataTypes.STRING(40),
  },

}, {
  sequelize: dbConnection,
  tableName: "category",
  createdAt: false,
  updatedAt: false
});


module.exports = Category;