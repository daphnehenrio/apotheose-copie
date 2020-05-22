// == import node modules
import axios from 'axios';

// == import actions
import { SIGNUP, actionErrorListSignup, actionSetStep } from '../../actions/signup';
import { actionSetProfil } from '../../actions/user_profil';
import { actionSetLoginForm } from 'src/actions/toggle';
import { actionChangePage } from '../../actions/routes';

// == import local
import { base_url } from 'src/utils/axios'

export default (store) => (next) => (action) => {
  switch (action.type) {

    // ---------------------------- SIGNUP ----------------------------

    case SIGNUP: {
      const { user } = store.getState().signup;

      const userInfo = {
        login: user.login,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        email: user.email,
        gender: user.gender,
        cellphone_number: user.cellphone_number,
        phone_number: user.phone_number,
        phone_work: user.phone_work,
        zip_code: user.zip_code,
        city: user.city,
        children: user.children ? user.children : 0,
        address: user.address,
      };

      axios
        .post(`${base_url}/signup`,
          userInfo,
          {
            withCredentials: true,
          })
        .then( (res) => {
          store.dispatch(actionChangePage('/', action.history));
          store.dispatch(actionSetLoginForm())
        })
        .catch((err) => {
          if(err.response && err.response.status  === 400) {
            store.dispatch(actionErrorListSignup(err.response.data))
            store.dispatch(actionSetStep(0))
            return
          }
          console.trace(err);
        });
      return;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
