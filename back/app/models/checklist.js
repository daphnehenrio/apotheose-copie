const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Checklist extends Model {

};

Checklist.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "checklist",
  createdAt: false,
  updatedAt: false
});


module.exports = Checklist;