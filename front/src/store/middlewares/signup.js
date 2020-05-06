import axios from 'axios';

import {
  SIGNUP,
  actionLogUser,
} from '../../actions/user';
import { actionChangePage } from '../../actions/routes';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const { user } = store.getState().user;
      console.log(user);
      const userInfo = {
        login: user.login,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        email: user.email,
        gender: user.gender,
        cellphone_number: user.cellphone_number,
        phone_number: user.phone_umber,
        phone_work: user.phone_work,
        zip_code: user.zip_code,
        city: user.city,
        children: user.children ? user.children : 0,
        address: user.address,

      };
      axios
        .post('http://localhost:5050/signup',
          userInfo,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionLogUser(userInfo));
          store.dispatch(actionChangePage('profil', action.history));

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
