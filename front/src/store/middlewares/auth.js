import axios from 'axios';

import {
    LOGIN, actionLogUser, actionErrorLogin
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
                          store.dispatch(actionChangePage("espace-personnel", history));
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
          default: {
              next(action);
          }
      }
};
