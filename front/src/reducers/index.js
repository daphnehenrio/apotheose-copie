import { combineReducers } from 'redux';

import user from './user';
import toggle from './toggle';

export default combineReducers({
  user,
  toggle,
});
