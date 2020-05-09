// == import node modules
import axios from 'axios';

// == import actions
import { GET_PROFIL, actionSetProfil } from 'src/actions/user_profil'
import { actionChangePage } from 'src/actions/routes'


// == import local
import { base_url } from 'src/utils/axios';


// == export
export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- GET PROFIL ----------------------------

    case GET_PROFIL: {
      console.log('get session')
      const { history } = action;

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      console.log('session : ', userSession)
      console.log('token : ', userSession.token)

      if(userSession.token){

        const userInfo = {
          user_id: userSession.user_id
        };
        const token = userSession.token

        axios
        .get(`${base_url}/user/${userSession.user_id}`,
        userInfo,
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        .then((res) => {
          console.log(res.data[0])

          if(res.data){
            store.dispatch(actionSetProfil(res.data[0]));
          }
          else {
            console.log('error axios get session')
            store.dispatch(actionErrorLogin('Une erreur est survenue'));
          }
        })
        .catch((err) => {
          console.trace(err);
        });
      } else {
        store.dispatch(actionChangePage('/', history));
      }


      return;
    }

  // ---------------------------- DEFAULT ----------------------------

  default: {
    next(action);
  }
}
};
