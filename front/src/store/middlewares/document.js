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
        axios
          .post(`${base_url}/upload-files`,
            action.files,
            {
              withCredentials: true,
            })
          .then((res) => {
            console.log('SEND FILES SUCCED')
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
  
      // ---------------------------- DEFAULT ----------------------------
  
      default: {
        next(action);
      }
    }
  };