// == import node modules
import axios from 'axios';

// == import local
import { base_url } from 'src/utils/axios'

import { SEND_MAIL_FORGET_PASSWORD } from '../../actions/forget_password';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- CHANGE PAGE ----------------------------

    case SEND_MAIL_FORGET_PASSWORD: {
      axios
      .post(`${base_url}/forget-pass`,
      action.data,
      {
        withCredentials: true,
      })
      .then((res) => {
      })
      .catch((err) => {
        console.trace(err);
      });
    break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
