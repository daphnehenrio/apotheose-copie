const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Type extends Model {

};

Type.init({
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  color: {
    type: DataTypes.STRING(40),
  },

}, {
  sequelize: dbConnection,
  tableName: "type",
  createdAt: false,
  updatedAt: false
});


module.exports = Type;