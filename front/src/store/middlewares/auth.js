import axios from 'axios';

import {
    LOGIN, actionLogUser, actionErrorLogin, LOGOUT
} from '../../actions/user';
import { actionChangePage } from '../../actions/routes';
import { actionSetLoginForm } from '../../actions/toggle';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const user = store.getState().user.user;
            const userLogin = {
              login: user.login ,
              password: user.password ,
            };
            const history = action.history;
            console.log(action)
              axios
                  .post('http://localhost:5050/login',
                    userLogin
                  , {
                      withCredentials: true,
                  })
                  .then((res) => {
                    console.log(res)
                      if(res.data) {
                        if(typeof res.data === "string") {
                          store.dispatch(actionErrorLogin(res.data))
                        } else {
                          store.dispatch(actionLogUser(res.data));
                          store.dispatch(actionSetLoginForm());
                          store.dispatch(actionChangePage("mon-espace-personnel", history));
                        }
                      } else {
                        store.dispatch(actionErrorLogin("Une erreur est survenue"))
                      }
                  })
                  .catch((err) => {
                      console.log(err);
                  });
              return;
          }
        case LOGOUT: {
          const history = action.history;
          axios
          .post('http://localhost:5050/logout',
          {
              withCredentials: true,
          })
          .then((res) => {
            console.log(res)
            store.dispatch(actionChangePage("/", history));
          })
          .catch((err) => {
              console.log(err);
          });
        }
          default: {
              next(action);
          }
      }
};
