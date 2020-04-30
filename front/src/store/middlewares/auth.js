import axios from 'axios';

import {
    LOGIN,
} from '../../actions/user';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const user = store.getState().user.user;
            const userLogin = {
              login: user.username ,
              password: user.password ,
            }
              axios
                  .post('http://localhost:5050/login',
                    userLogin
                  , {
                      withCredentials: true,
                  })
                  .then((response) => {
                      console.log(response);
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
