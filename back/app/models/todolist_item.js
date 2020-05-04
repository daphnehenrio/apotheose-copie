const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Todolist_item extends Model {

};

Todolist_item.init({

  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "todolist_item",
  createdAt: false,
  updatedAt: false
});


module.exports = Todolist_item;