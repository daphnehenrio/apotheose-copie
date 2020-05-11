const Article = require('./article');
const Category = require('./category');
const Checklist = require('./checklist');
const Checklist_item = require('./checklist_item');
const Document = require('./document');
const Letter_type = require('./letter_type');
const Note = require('./note');
const Service = require('./service');
const Simulation = require('./simulation');
const Simulation_field = require('./simulation_field');
const Simulation_field_select = require('./simulation_field_select');
const Simulation_result = require('./simulation_result');
const Sub_category = require('./sub_category');
const Type = require('./type');
const Todolist = require('./todolist');
const Todolist_item = require('./todolist_item');
const User = require('./user');
const User_checklist = require('./user_checklist');
const User_info = require('./user_info');
const User_profil = require('./user_profil');
const User_service = require('./user_service');

/* --------------------------------------- CATEGORY --------------------------------------- */

// -------------------- Type <-> Category --------------------
Type.hasMany( Category, {
  foreignKey: "type_id",
  as: "category"
});

Category.belongsTo( Type, {
  foreignKey: "type_id",
  as: "type"
});

// -------------------- Category <-> Sub_category --------------------
Category.hasMany( Sub_category, {
  foreignKey: "category_id",
  as: "sub_category"
});

Sub_category.belongsTo( Category, {
  foreignKey: "category_id",
  as: "category"
});


/* --------------------------------------- SIMULATION --------------------------------------- */

// -------------------- simulation <-> simulation_field --------------------
Simulation.hasMany( Simulation_field, {
  foreignKey: "simulation_id",
  as: "simulation_field"
});

Simulation_field.belongsTo( Simulation, {
  foreignKey: "simulation_id",
  as: "simulation"
});

// -------------------- simulation_field <-> simulation_field_select --------------------
Simulation_field.hasMany( Simulation_field_select, {
  foreignKey: "simulation_field_id",
  as: "simulation_field_select"
});

Simulation_field_select.belongsTo( Simulation_field, {
  foreignKey: "simulation_field_id",
  as: "simulation_field"
});



// -------------------- simulation <-> simulation_result --------------------
Simulation.hasMany( Simulation_result, {
  foreignKey: "simulation_id",
  as: "simulation_result"
});

Simulation_result.belongsTo( Simulation, {
  foreignKey: "simulation_id",
  as: "simulation"
});

/* --------------------------------------- USER --------------------------------------- */


// -------------------- User <-> User_profil --------------------
User.hasOne( User_profil ,{
  foreignKey: "user_id",
  as: "user_profil"
});

User_profil.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

// -------------------- User <-> User_service --------------------
User.hasMany( User_service ,{
  foreignKey: "user_id",
  as: "user"
});

User_service.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user_service"
});



// -------------------- Category <-> User_service --------------------
Category.hasMany( User_service ,{
  foreignKey: "category_id",
  as: "user_service"
});


User_service.belongsTo( Category ,{
  foreignKey: "category_id",
  as: "category"
});

// -------------------- user_info <-> user_service --------------------
User_info.hasOne( User_service ,{
  foreignKey: "user_info_id",
  as: "user_service"
});

User_service.belongsTo( User_info ,{
  foreignKey: "user_info_id",
  as: "user_info"
});


// -------------------- user <-> user_info --------------------
User.hasOne( User_info ,{
  foreignKey: "user_id",
  as: "user_info"
});

User_info.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});



// -------------------- Category <-> user_info --------------------
Category.hasMany( User_info ,{
  foreignKey: "category_id",
  as: "user_info"
});

User_info.belongsTo( Category ,{
  foreignKey: "category_id",
  as: "category"
});

/* --------------------------------------- DOCUMENT --------------------------------------- */

// -------------------- sub_category <-> document --------------------
Sub_category.hasMany( Document ,{
  foreignKey: "sub_category_id",
  as: "document"
});

Document.belongsTo( Sub_category ,{
  foreignKey: "sub_category_id",
  as: "sub_category"
});

// -------------------- User <-> document --------------------
User.hasMany( Document ,{
  foreignKey: "user_id",
  as: "document"
});

Document.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

/* --------------------------------------- TODOLIST --------------------------------------- */

// -------------------- category <-> todolist --------------------
Category.hasMany( Todolist ,{
  foreignKey: "category_id",
  as: "todolist"
});

Todolist.belongsTo( Category ,{
  foreignKey: "category_id",
  as: "category"
});

// -------------------- User <-> todolist --------------------
User.hasMany( Todolist ,{
  foreignKey: "user_id",
  as: "todolist"
});

Todolist.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

// -------------------- todolist <-> todolist_item --------------------
Todolist.hasMany( Todolist_item ,{
  foreignKey: "todolist_id",
  as: "todolist_item"
});

Todolist_item.belongsTo( Todolist ,{
  foreignKey: "todolist_id",
  as: "todolist"
});

/* --------------------------------------- NOTE --------------------------------------- */

// -------------------- category <-> note --------------------
Category.hasMany( Note ,{
  foreignKey: "category_id",
  as: "note"
});

Note.belongsTo( Category ,{
  foreignKey: "category_id",
  as: "category"
});

// -------------------- User <-> note --------------------
User.hasMany( Note ,{
  foreignKey: "user_id",
  as: "note"
});

Note.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

/* --------------------------------------- USER CHECKLIST --------------------------------------- */

// -------------------- sub_category <-> user_checklist --------------------
Sub_category.hasMany( User_checklist ,{
  foreignKey: "sub_category_id",
  as: "user_checklist"
});

User_checklist.belongsTo( Sub_category ,{
  foreignKey: "sub_category_id",
  as: "sub_category"
});

// -------------------- User <-> user_checklist --------------------
User.hasMany( User_checklist ,{
  foreignKey: "user_id",
  as: "user_checklist"
});

User_checklist.belongsTo( User ,{
  foreignKey: "user_id",
  as: "user"
});

/* --------------------------------------- TABLE DE LIAISON --------------------------------------- */

/* ---------------------------------------- USER ---------------------------------------- */

// -------------------- user_has_article --------------------

User.belongsToMany( Article, {
  through: "user_has_article",
  foreignKey: "user_id",
  otherKey: "article_id",
  as: "article"
});

Article.belongsToMany( User, {
  through: "user_has_article",
  foreignKey: "article_id",
  otherKey: "user_id",
  as: "user"
});



/* ---------------------------------------- SERVICE ---------------------------------------- */

// -------------------- service_has_category --------------------

Category.belongsToMany( Service, {
  through: "service_has_category",
  foreignKey: "category_id",
  otherKey: "service_id",
  as: "service"
});

Service.belongsToMany( Category, {
  through: "service_has_category",
  foreignKey: "service_id",
  otherKey: "category_id",
  as: "category"
});


/* ---------------------------------------- ARTICLE ---------------------------------------- */

// -------------------- article_has_sub_category --------------------

Article.belongsToMany( Sub_category, {
  through: "article_has_sub_category",
  foreignKey: "article_id",
  otherKey: "sub_category_id",
  as: "sub_category",
  timestamps: false
});

Sub_category.belongsToMany( Article, {
  through: "article_has_sub_category",
  foreignKey: "sub_category_id",
  otherKey: "article_id",
  as: "article",
  timestamps: false
});

// -------------------- article_has_letter_type --------------------

Article.belongsToMany( Letter_type, {
  through: "article_has_letter_type",
  foreignKey: "article_id",
  otherKey: "letter_type_id",
  as: "letter_type",
  timestamps: false
});

Letter_type.belongsToMany( Article, {
  through: "article_has_letter_type",
  foreignKey: "letter_type_id",
  otherKey: "article_id",
  as: "article",
  timestamps: false
});

// -------------------- article_has_checklist --------------------

Article.belongsToMany( Checklist, {
  through: "article_has_checklist",
  foreignKey: "article_id",
  otherKey: "checklist_id",
  as: "checklist",
  timestamps: false
});

Checklist.belongsToMany( Article, {
  through: "article_has_checklist",
  foreignKey: "checklist_id",
  otherKey: "article_id",
  as: "article",
  timestamps: false
});

// -------------------- article_has_simulation --------------------

Article.belongsToMany( Simulation, {
  through: "article_has_simulation",
  foreignKey: "article_id",
  otherKey: "simulation_id",
  as: "simulation",
  timestamps: false
});

Simulation.belongsToMany( Article, {
  through: "article_has_simulation",
  foreignKey: "simulation_id",
  otherKey: "article_id",
  as: "article",
  timestamps: false
});

/* ---------------------------------------- LETTER TYPE ---------------------------------------- */

// -------------------- letter_type_has_sub_category --------------------

Letter_type.belongsToMany( Sub_category, {
  through: "letter_type_has_sub_category",
  foreignKey: "letter_type_id",
  otherKey: "sub_category_id",
  as: "sub_category",
  timestamps: false
});

Sub_category.belongsToMany( Letter_type, {
  through: "letter_type_has_sub_category",
  foreignKey: "sub_category_id",
  otherKey: "letter_type_id",
  as: "letter_type",
  timestamps: false
});

/* ---------------------------------------- SIMULATION ---------------------------------------- */

// -------------------- simulation_has_sub_category --------------------

Simulation.belongsToMany( Sub_category, {
  through: "simulation_has_sub_category",
  foreignKey: "simulation_id",
  otherKey: "sub_category_id",
  as: "sub_category",
  timestamps: false
});

Sub_category.belongsToMany( Simulation, {
  through: "simulation_has_sub_category",
  foreignKey: "sub_category_id",
  otherKey: "simulation_id",
  as: "simulation",
  timestamps: false
});

/* ---------------------------------------- CHECKLIST ---------------------------------------- */

// -------------------- checklist_has_sub_category --------------------

Checklist.belongsToMany( Sub_category, {
  through: "checklist_has_sub_category",
  foreignKey: "checklist_id",
  otherKey: "sub_category_id",
  as: "sub_category",
  timestamps: false
});

Sub_category.belongsToMany( Checklist, {
  through: "checklist_has_sub_category",
  foreignKey: "sub_category_id",
  otherKey: "checklist_id",
  as: "checklist",
  timestamps: false
});

// -------------------- checklist_has_checklist_item --------------------

Checklist.belongsToMany( Checklist_item, {
  through: "checklist_has_checklist_item",
  foreignKey: "checklist_id",
  otherKey: "checklist_item_id",
  as: "checklist_item",
  timestamps: false
});

Checklist_item.belongsToMany( Checklist, {
  through: "checklist_has_checklist_item",
  foreignKey: "checklist_item_id",
  otherKey: "checklist_id",
  as: "checklist",
  timestamps: false
});

// -------------------- user_checklist_has_checklist_item --------------------

User_checklist.belongsToMany( Checklist_item, {
  through: "user_checklist_has_checklist_item",
  foreignKey: "user_checklist_id",
  otherKey: "checklist_item_id",
  as: "checklist_item",
  timestamps: false
});

Checklist_item.belongsToMany( User_checklist, {
  through: "user_checklist_has_checklist_item",
  foreignKey: "checklist_item_id",
  otherKey: "user_checklist_id",
  as: "user_checklist",
  timestamps: false
});



// exports models
module.exports = {
  Article,
  Category,
  Checklist,
  Checklist_item,
  Document,
  Letter_type,
  Note,
  Service,
  Simulation,
  Simulation_field,
  Simulation_field_select,
  Simulation_result,
  Sub_category,
  Type,
  Todolist,
  Todolist_item,
  User,
  User_checklist,
  User_info,
  User_profil,
  User_service,
};

