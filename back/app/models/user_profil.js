const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../db_connection');

class User_profil extends Model {

};

User_profil.init({
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  zip_code: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  city: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  phone_number: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  cellphone_number: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  phone_work: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  children: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  statut: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  gender: {
    type: DataTypes.STRING(40),
    allowNull: true
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

}, {
  sequelize: dbConnection,
  tableName: "user_profil",
  createdAt: false,
  updatedAt: false
});


module.exports = User_profil;