import { applyMiddleware } from 'redux';
import loggers from './loggers';
import routesMW from './routes';
import login from './login';
import signup from './signup';
import get_profil from './get_profil';
import menu from './menu';
import update_user from './update_user';




export default applyMiddleware(
  loggers,
  routesMW,
  menu,
  login,
  signup,
  get_profil,
  update_user,
);
