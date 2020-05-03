const Article = require('./article');
const Category = require('./category');
const Checklist = require('./checklist');
const Checklist_item = require('./checklist_item');
const Document = require('./document');
const Document_category = require('./document_category');
const Document_sub_category = require('./document_sub_category');
const Letter_type = require('.');
const Note = require('./note');
const Service = require('./service');
const Simulation = require('./simulation');
const Simulation_field = require('./simulation_field');
const Simulation_field_select = require('./simulation_field_select');
const Simulation_result = require('./simulation_result');
const Sub_category = require('./sub_category');
const Todolist = require('./todolist');
const Todolist_item = require('./todolist_item');
const User = require('./user');
const User_category = require('./user_category');
const User_checklist = require('./user_checklist');
const User_nfo = require('./user_info');
const User_profil = require('./user_profil');
const User_service = require('./user_service');

User.hasOne( User_profil ,{
  foreignKey: "user_id",
  as: "user_profil"
});

User_profil.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

// Category <-> Sub_category
// "une Category possède plusieurs Sub_category"
Category.hasMany( Sub_category, {
  foreignKey: "category_id",
  as: "sub_category"
});

// la réciproque " une Sub_category appartient à une seule Category"
Sub_category.belongsTo( Category, {
  foreignKey: "category_id",
  as: "category"
});

// Category <-> Services
// "une Category possède plusieurs Services"
Category.belongsToMany( Service, {
  through: "category_has_service",
  foreignKey: "category_id",
  otherKey: "category_id",
  as: "service"
});

Service.belongsToMany( Category, {
  through: "category_has_service",
  foreignKey: "service_id",
  otherKey: "category_id",
  as: "category",
});


// exports models
module.exports = {
  User,
  User_profil,
  Category,
  Sub_category,
  Service,
};

