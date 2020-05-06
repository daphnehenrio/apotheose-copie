import { applyMiddleware } from 'redux';
import loggers from './loggers';
import routesMW from './routes';
import auth from './auth';
import signup from './signup';
import menu from './menu';
import update_user from './update_user';



export default applyMiddleware(
  loggers,
  update_user,
  auth,
  menu,
  routesMW,
  signup,
);
