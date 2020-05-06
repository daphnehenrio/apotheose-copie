import axios from 'axios';
import { SAVE_UPDATE_PROFIL } from '../../actions/profil';
import { actionLogUser } from '../../actions/user';


export default (store) => (next) => (action) => {
  switch (action.type) {

    case SAVE_UPDATE_PROFIL: {
      console.log('update')
      const user   = store.getState().profil.user;
      const oldUser = store.getState().user.user;
      console.log(user, 'CECI EST LE USER');
      const userInfo = {
        login: user.login ? user.login : oldUser.login,
        first_name: user.firstName ? user.firstName : oldUser.firstName,
        last_name: user.lastName ? user.lastName : oldUser.lastName,
        email: user.email ? user.email: oldUser.email,
        gender: user.gender ? user.gender: oldUser.gender,
        cellphone_number: user.cellphoneNumber ? user.cellphoneNumber : oldUser.cellphoneNumber,
        phone_number: user.fixNumber ? user.fixNumber : oldUser.fixNumber,
        phone_work: user.workPhone ? user.workPhone : oldUser.workPhone,
        zip_code: user.zipCode ? user.zipCode : oldUser.zipCode,
        city: user.city ? user.city : oldUser.city,
        children: user.children ? user.children : oldUser.children ? oldUser.children : 0,
        address: user.adress ? user.adress : oldUser.adress,
        age: user.age ? user.age : oldUser.age,
        statut: user.statut ? user.statut : oldUser.statut,

      };
      console.log(userInfo, 'CECI EST LE USER INFO');

      axios
        .post('http://localhost:5050/update-user',
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
