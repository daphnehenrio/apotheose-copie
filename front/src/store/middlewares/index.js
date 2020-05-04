import { applyMiddleware } from 'redux';
import loggers from './loggers';
import routesMW from './routes';
import auth from './auth';
import signup from './signup';
import menu from './menu';


export default applyMiddleware(
  loggers,
  menu,
  routesMW,
  auth,
  signup,
);
