import axios from 'axios';
import { SAVE_UPDATE_PROFIL } from '../../actions/profil';


export default (store) => (next) => (action) => {
  switch (action.type) {

    case SAVE_UPDATE_PROFIL: {
      const { user } = store.getState().profil.user;
      const userInfo = {
        login: user.login,
        first_name: user.firstName,
        last_name: user.lastName,
        password: user.password,
        email: user.email,
        gender: user.gender,
        cellphone_number: user.cellphoneNumber,
        phone_number: user.fixNumber,
        phone_work: user.workPhone,
        zip_code: user.zipCode,
        city: user.city,
        children: user.children ? user.children : 0,
        address: user.adress,
        age: user.age,
        statut: user.statut,

      };

      axios
        .post('http://localhost:5050/updtate-user',
        userInfo,
          {
            withCredentials: true,
          })
        .then((res) => {
          console.log(res);

              const user = {
                login: res.data.login,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
                gender: res.data.user_profil.gender,
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
