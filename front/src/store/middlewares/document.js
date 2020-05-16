// == import node modules
import axios from 'axios';

// == import action
import {
  SEND_FILES,
  GET_DOCUMENTS,
  GET_FOLDER,
  actionSetFolder,
  actionSetDocuments
} from '../../actions/document';

// == import local
import { base_url } from 'src/utils/axios'
import { SET_LOGIN_FORM } from '../../actions/toggle';

export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- GET FOLDERS ----------------------------


    case GET_FOLDER: {
      axios
      .get(`${base_url}/documents/categories`,
      {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res)
        store.dispatch(actionSetFolder(res.data))
      })
      break;
    }

    // ---------------------------- GET DOCUMENTS ----------------------------


      case GET_DOCUMENTS: {

        const userSession = JSON.parse(window.sessionStorage.getItem('user'));

        if(userSession.token) {

          const token = userSession.token

          axios
          .get(`${base_url}/my-documents/${userSession.user_id}/sub_category/${action.id}`,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          .then((res) => {
            console.log(res)
            store.dispatch(actionSetDocuments(res.data))
          })

        } else {
          store.dispatch(SET_LOGIN_FORM());
        }

        break;
      }

    // ---------------------------- SEND FILES ----------------------------

    case SEND_FILES: {
      const formData = action.files;
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

        const token = userSession.token

        axios
          .post(`${base_url}/public/storage/${userSession.user_id}/${action.category}/${action.subCategory}`,
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
