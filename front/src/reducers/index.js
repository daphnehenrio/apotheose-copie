import { combineReducers } from 'redux';

import user from './user';
import toggle from './toggle';
import profil from './profil';

export default combineReducers({
  user,
  toggle,
  profil,
});
