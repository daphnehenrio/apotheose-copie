// == import node modules
import axios from 'axios';

// == import local
import { base_url } from 'src/utils/axios'

import { SEND_MAIL_FORGET_PASSWORD } from '../../actions/forget_password';
import { actionLoading } from '../../actions/document';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';



export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- CHANGE PAGE ----------------------------

    case SEND_MAIL_FORGET_PASSWORD: {
      store.dispatch(actionLoading(true));

      axios
      .post(`${base_url}/forget-pass`,
      action.data,
      {
        withCredentials: true,
      })
      .then((res) => {
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetSnack('success', `Un mail vous a été envoyé à l'adresse ${action.data.email}`));
        const button = document.querySelector('#snack');
        button.click();

      })
      .catch((err) => {
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
        const button = document.querySelector('#snack');
        button.click();
      });
    break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
