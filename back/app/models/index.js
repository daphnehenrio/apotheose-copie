const User = require('./user');
const User_profil = require('./user_profil');
const Category = require('./category');
const Sub_category = require('./sub_category');

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


// exports models
module.exports = {
  User,
  User_profil,
  Category,
  Sub_category
};
