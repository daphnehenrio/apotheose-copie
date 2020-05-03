const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Document extends Model {

};

Document.init({
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  link: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "document",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Document;