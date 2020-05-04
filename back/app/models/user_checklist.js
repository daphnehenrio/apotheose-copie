const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_checklist extends Model {

};

User_checklist.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "user_checklist",
  createdAt: false,
  updatedAt: false
});


module.exports = User_checklist;