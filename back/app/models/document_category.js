const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Document_category extends Model {

};

Document_category.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

  color: {
    type: DataTypes.STRING(40),
  },

}, {
  sequelize: dbConnection,
  tableName: "document_category",
  createdAt: false,
  updatedAt: false
});


module.exports = Document_category;