const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class Article extends Model {

};

Article.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
  },
  source_image: {
    type: DataTypes.TEXT,
  },
  source_content: {
    type: DataTypes.TEXT,
  },
  author: {
    type: DataTypes.TEXT,
  },


}, {
  sequelize: dbConnection,
  tableName: "article",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Article;