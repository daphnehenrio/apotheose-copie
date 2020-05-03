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
    type: DataTypes.STRING(100),
  },
  source_image: {
    type: DataTypes.STRING(100),
  },
  source_content: {
    type: DataTypes.STRING(100),
  },
  author: {
    type: DataTypes.STRING(60),
  },


}, {
  sequelize: dbConnection,
  tableName: "article",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Article;