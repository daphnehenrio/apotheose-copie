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
      const files = action.files;
      files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('meta', JSON.stringify(file.meta));
        }
      });
      console.log(formData, 'FORM DATA HELLO');
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


      break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};