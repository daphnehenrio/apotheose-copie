import axios from 'axios';

import { base_url } from 'src/utils/axios';
import { SAVE_UPDATE_PROFIL, actionSetProfil, actionSetOpenEditProfil } from '../../actions/user_profil';
import { actionLogUser } from '../../actions/user';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';
import { actionLoading } from '../../actions/document';



export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- SAVE UPDATE PROFIL ----------------------------

    case SAVE_UPDATE_PROFIL: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if (userSession.token) {


        const token = userSession.token


      const user = action.data;
      const oldUser = store.getState().user_profil;

      const userInfo = {
        login: userSession.login,
        first_name: user.first_name ? user.first_name : oldUser.first_name,
        last_name: user.last_name ? user.last_name : oldUser.last_name,
        email: user.email ? user.email : oldUser.email,
        gender: user.gender ? user.gender : oldUser.gender,
        cellphone_number: user.cellphone_number ? user.cellphone_number : oldUser.cellphone_number,
        phone_number: user.phone_number ? user.phone_number : oldUser.phone_number,
        phone_work: user.phone_work ? user.phone_work : oldUser.phone_work,
        zip_code: user.zip_code ? user.zip_code : oldUser.zip_code,
        city: user.city ? user.city : oldUser.city,
        children: user.children ? user.children : oldUser.children ? oldUser.children : 0,
        address: user.address ? user.address : oldUser.address,
        age: user.age ? user.age : oldUser.age,
        statut: user.statut ? user.statut : oldUser.statut,
        user_id: userSession.user_id,
      };

      axios
        .patch(
          // eslint-disable-next-line camelcase
          `${base_url}/update-user`,
          userInfo,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {

          store.dispatch(actionSetProfil(res.data));
          store.dispatch(actionSetOpenEditProfil(false));
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
