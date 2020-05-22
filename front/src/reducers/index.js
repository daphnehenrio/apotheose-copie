/* eslint-disable camelcase */
import { combineReducers } from 'redux';

import menu from './menu';
import services from './services';
import articles from './articles';
import toggle from './toggle';
import login from './login';
import forget_password from './forget_password';
import signup from './signup';
import user_profil from './user_profil';
import user_info from './user_info';
import user_note from './user_note';
import document from './document';




export default combineReducers({
  menu,
  services,
  articles,
  toggle,
  login,
  forget_password,
  signup,
  user_profil,
  user_info,
  user_note,
  document,
});
