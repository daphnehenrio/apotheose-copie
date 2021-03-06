// == import node modules
import axios from 'axios';

// == import actions
import { LOGIN, actionErrorLogin, LOGOUT } from '../../actions/login';
import { actionSetProfil, actionCleanProfil } from 'src/actions/user_profil'
import { actionChangePage } from '../../actions/routes';
import { actionSetLoginForm , actionSetSnack} from '../../actions/toggle';
import { actionLoading } from '../../actions/document';

// == import local
import { base_url } from 'src/utils/axios';


// == export
export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- LOGIN ----------------------------

    case LOGIN: {

      store.dispatch(actionLoading(true));


      const { history, data } = action;
      const { login, password } = data;
      const userLogin = {
        login: login,
        password: password,
      };

      axios
        .post(`${base_url}/login`,
          userLogin,
          { withCredentials: true }
        )
        .then((res) => {

          if (res.data) {

            // traitements d'erreurs
            if (typeof res.data === 'string') {
              store.dispatch(actionErrorLogin(res.data));
            }
            else {
              // 1. => set sessionStorage
              window.sessionStorage.setItem('user', JSON.stringify({
                token: res.data.token,
                user_id: res.data.user.id,
                login: res.data.user.login,
                avatar: res.data.user.avatar
              }));
              // 2. => set timeout clear token
              //let logoutTimer = setTimeout(function() { window.sessionStorage.clear(); }, (10 * 60 * 1000));

              // 3. => set profil
              store.dispatch(actionSetProfil(res.data.user));
              // 4. => close form
              store.dispatch(actionSetLoginForm());
              // 5. => redirect dashboard
              //store.dispatch(actionChangePage('/mon-espace-personnel', history));
              store.dispatch(actionLoading(false));
              store.dispatch(actionSetSnack('success', "Vous êtes connecté"));
              const button = document.querySelector('#snack');
              button.click();

            }
          }
          else {
            store.dispatch(actionErrorLogin('Une erreur est survenue'));
          }
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });
      return;
    }

    // ---------------------------- LOGOUT ----------------------------

    case LOGOUT: {
      const { history } = action;
      axios
        .post(`${base_url}/logout`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionChangePage('/', history));
          window.sessionStorage.removeItem('user');
          store.dispatch(actionCleanProfil());
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
