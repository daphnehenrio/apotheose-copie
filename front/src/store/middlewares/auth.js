import axios from 'axios';

import {
  LOGIN, actionLogUser, actionErrorLogin, LOGOUT, CHECK_SESSION,
} from '../../actions/user';
import { actionChangePage } from '../../actions/routes';
import { actionSetLoginForm } from '../../actions/toggle';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_SESSION: {
      axios
        .get('http://localhost:5050/session',
          {
            withCredentials: true,
          })
        .then((res) => {
          const user = {
            firstname: res.data.first_name,
            lastname: res.data.last_name,
            email: res.data.email,
            gender: '',
            cellphoneNumber: '',
            fixNumber: '',
            workPhone: '',
            zipCode: '',
            city: '',
            children: '',
            adress: '',

          };
          console.log(user);
          store.dispatch(actionLogUser(user));
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    case LOGIN: {
      const { user } = store.getState().user;
      const userLogin = {
        login: user.login,
        password: user.password,
      };
      const { history } = action;
      console.log(action);
      axios
        .post('http://localhost:5050/login',
          userLogin,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res);
          if (res.data) {
            if (typeof res.data === 'string') {
              store.dispatch(actionErrorLogin(res.data));
            }
            else {
              const user = {
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
                gender: res.data.user_profil.genrder,
                cellphone_number: res.data.user_profil.cellphone_number,
                phone_number: res.data.user_profil.phone_number,
                phone_work: res.data.user_profil.phone_work,
                zip_code: res.data.user_profil.zip_code,
                city: res.data.user_profil.city,
                children: res.data.user_profil.children,
                address: res.data.user_profil.address,
                age: res.data.user_profil.age,
                statut: res.data.user_profil.statut,
              };
              store.dispatch(actionLogUser(user));
              store.dispatch(actionSetLoginForm());
              store.dispatch(actionChangePage('mon-espace-personnel', history));
            }
          }
          else {
            store.dispatch(actionErrorLogin('Une erreur est survenue'));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    case LOGOUT: {
      const { history } = action;
      axios
        .post('http://localhost:5050/logout',
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res);
          store.dispatch(actionChangePage('/', history));
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
