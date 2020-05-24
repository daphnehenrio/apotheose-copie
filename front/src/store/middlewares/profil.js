// == import node modules
import axios from 'axios';

// == import actions
import { GET_PROFIL, actionSetProfil } from 'src/actions/user_profil'
import { actionChangePage } from 'src/actions/routes'
import { actionLoading } from 'src/actions/document';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';



// == import local
import { base_url } from 'src/utils/axios';


// == export
export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- GET PROFIL ----------------------------

    case GET_PROFIL: {
      store.dispatch(actionLoading(true));

      const { history } = action;

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));


      if(userSession.token){

        const token = userSession.token

        axios
        .get(`${base_url}/user/${userSession.user_id}`,
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        .then((res) => {

          if(res.data){
            store.dispatch(actionSetProfil(res.data[0]));
            store.dispatch(actionLoading(false));
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
      } else {
        window.sessionStorage.clear()
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetLoginForm());
      }


      return;
    }

  // ---------------------------- DEFAULT ----------------------------

  default: {
    next(action);
  }
}
};
