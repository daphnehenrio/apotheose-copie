import axios from 'axios';

import { base_url } from 'src/utils/axios';
import { SAVE_UPDATE_PROFIL, actionSetProfil, actionSetOpenEditProfil } from '../../actions/user_profil';
import { actionLogUser } from '../../actions/user';


export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- SAVE UPDATE PROFIL ----------------------------

    case SAVE_UPDATE_PROFIL: {
      const user = action.data;
      const oldUser = store.getState().user_profil;
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));
      const { token } = userSession;
      const userInfo = {
        login: user.login ? user.login : oldUser.login,
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
          console.log(res);

          store.dispatch(actionSetProfil(res.data));
          store.dispatch(actionSetOpenEditProfil(false));
        })
        .catch((err) => {
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
