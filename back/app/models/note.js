const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Note extends Model {

};

Note.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "note",
  createdAt: false,
  updatedAt: false
});


module.exports = Note;