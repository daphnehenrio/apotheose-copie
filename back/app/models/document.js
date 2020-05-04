const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Document extends Model {

};

Document.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "document",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Document;