import { applyMiddleware } from 'redux';
import loggers from './loggers';
import routesMW from './routes';
import auth from './auth';
import signup from './signup';


export default applyMiddleware(
  loggers,
  routesMW,
  auth,
  signup,
);
