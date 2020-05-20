// == import node modules
import axios from 'axios';

// == import action
import {
  SEND_FILES,
  GET_DOCUMENTS,
  GET_FOLDER,
  actionSetFolder,
  actionSetDocuments,
  GET_ONE_FILE,
  actionSetOneFile,
  DOWNLOAD_FILE,
  actionOpenSuccessMessage,
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
            console.log(typeof action.name, 'ACTION NAME HELLOOOOOOOOOOOOOO');
            store.dispatch(actionSetDocuments(res.data, action.id))
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
              },

            })
          .then((res) => {
            console.log('SEND FILES SUCCED')
            store.dispatch(actionOpenSuccessMessage(true));
          })
          .catch((err) => {
            console.log(err);
          });

      } else {
        store.dispatch(actionChangePage('/', history));
      }

      break;
    }


    // ---------------------------- GET ONE FILE ----------------------------


    case GET_ONE_FILE: {

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token) {

        const token = userSession.token

        axios
        .get(`${base_url}/file/${userSession.user_id}/${action.id}`,
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          },
          responseType: 'blob',

        })
        .then((res) => {
          console.log(res)
          const blob = new Blob([res.data])
          const url = window.URL.createObjectURL(blob);
          store.dispatch(actionSetOneFile(url, res.data.type))
        })

      } else {
        store.dispatch(SET_LOGIN_FORM());
      }

      break;
    }

        // ---------------------------- GET ONE FILE ----------------------------


        case DOWNLOAD_FILE: {

          const userSession = JSON.parse(window.sessionStorage.getItem('user'));

          if(userSession.token) {

            const token = userSession.token
            console.log(action)
            axios
            .get(`${base_url}/file/${userSession.user_id}/${action.id}`,
            {
              withCredentials: true,
              headers: {
                'Authorization': `Bearer ${token}`
              },
              responseType: 'blob',
            })
            .then((res) => {
              console.log(res)
              let type = "";
              switch (res.data.type) {
                case 'application/pdf':
                  type = 'pdf'
                  break;
                case 'image/png':
                  type = 'png'
                  break;
                case 'image/jpg':
                  type = 'jpg'
                  break;
                case 'image/jpeg':
                  type = 'jpeg'
                  break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    type = 'docx'
                    break;
              }
              const blob = new Blob([res.data])
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', `${action.name}`); //or any other extension
              document.body.appendChild(link);
              link.click();
            })

          } else {
            store.dispatch(SET_LOGIN_FORM());
          }

          break;
        }



    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
