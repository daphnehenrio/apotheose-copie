const User = require('./user');
const User_profil = require('./user_profil');

// association User <-> User_profil ("User has one User_profil")
User.belongsTo( User_profil ,{
  foreignKey: "user_profil_id",
  as: "user_profil"
});


// exports models
module.exports = {User, User_profil};
