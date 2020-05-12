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
        console.log(action.files, 'original files');
        const files = action.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0].file);

        reader.onload = (e) => {
          const formData = new FormData();
          formData.append('file',files[0].file);
          formData.append('meta', JSON.stringify(files[0].meta));

          console.log(formData, 'formdata');
          axios
          .post(`${base_url}/public/storage`,
          formData,
            {
              withCredentials: true,
              headers: {
                'Content-Type': 'multipart/form-data; boundary=${form._boundary}'
              }
            })
          .then((res) => {
            console.log('SEND FILES SUCCED')
          })
          .catch((err) => {
            console.log(err);
          });
        }
       
        break;
      }
  
      // ---------------------------- DEFAULT ----------------------------
  
      default: {
        next(action);
      }
    }
  };