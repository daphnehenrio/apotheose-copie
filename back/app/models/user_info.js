const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_info extends Model {

};

User_info.init({

  identify: {
    type: DataTypes.TEXT,
  },

  service_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  service_phone: {
    type: DataTypes.TEXT,
  },

  service_address: {
    type: DataTypes.TEXT,
  },

  service_referent: {
    type: DataTypes.TEXT,
  },
  note_file: {
    type: DataTypes.TEXT,
  },


}, {
  sequelize: dbConnection,
  tableName: "user_info",
  createdAt: false,
  updatedAt: false
});


module.exports = User_info;