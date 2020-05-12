// == import node modules
import axios from 'axios';

// == import action
import { SEND_FILES, actionSendFiles } from '../../actions/document';

// == import local
import { base_url } from 'src/utils/axios'

export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- GET MENU ----------------------------

    case SEND_FILES: {
      const formData = action.files;
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

        const token = userSession.token

        axios
          .post(`${base_url}/public/storage`,
            formData,
            {
              withCredentials: true,
              headers: {
                'Content-Type': 'multipart/form-data; boundary=${form._boundary}',
                'Authorization': `Bearer ${token}`
              }
            })
          .then((res) => {
            console.log('SEND FILES SUCCED')
          })
          .catch((err) => {
            console.log(err);
          });

      } else {
        store.dispatch(actionChangePage('/', history));
      }


      break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
