const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Sub_category extends Model {

};

Sub_category.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "sub_category",
  createdAt: false,
  updatedAt: false
});


module.exports = Sub_category;