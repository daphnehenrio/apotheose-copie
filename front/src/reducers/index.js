/* eslint-disable camelcase */
import { combineReducers } from 'redux';

import menu from './menu';
import toggle from './toggle';
import login from './login';
import signup from './signup';
import user_profil from './user_profil';
import user_info from './user_info';
import user_note from './user_note';

export default combineReducers({
  menu,
  toggle,
  login,
  signup,
  user_profil,
  user_info,
  user_note,
});
