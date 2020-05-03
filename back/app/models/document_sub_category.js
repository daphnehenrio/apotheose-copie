const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Document_sub_category extends Model {

};

Document_sub_category.init({
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },

}, {
  sequelize: dbConnection,
  tableName: "document_sub_category",
  createdAt: false,
  updatedAt: false
});


module.exports = Document_sub_category;