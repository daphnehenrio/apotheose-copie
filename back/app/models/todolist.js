const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Todolist extends Model {

};

Todolist.init({

  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "todolist",
  createdAt: false,
  updatedAt: false
});


module.exports = Todolist;