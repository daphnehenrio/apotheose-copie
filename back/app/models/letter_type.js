const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Letter_type extends Model {

};

Letter_type.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "letter_type",
  createdAt: false,
  updatedAt: false
});


module.exports = Letter_type;