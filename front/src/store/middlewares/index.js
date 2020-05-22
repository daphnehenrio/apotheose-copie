
import { applyMiddleware } from 'redux';
import loggers from './loggers';
import routesMW from './routes';
import login from './login';
import signup from './signup';
import profil from './profil';
import menu from './menu';
import update_user from './update_user';
import services from './services';
import articles from './articles';
import document from './document';
import user_notes from './user_notes';


export default applyMiddleware(
  loggers,
  routesMW,
  menu,
  login,
  signup,
  profil,
  update_user,
  services,
  articles,
  document,
  user_notes,
);
