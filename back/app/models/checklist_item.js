const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Checklist_item extends Model {

};

Checklist_item.init({
  item: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "checklist_item",
  createdAt: false,
  updatedAt: false
});


module.exports = Checklist_item;