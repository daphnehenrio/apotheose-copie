// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { GET_SERVICES, GET_ALL_SERVICES, actionSetServices , actionSetAllServices} from '../../actions/services';
import { actionLoading } from '../../actions/document';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';


export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET MENU ----------------------------

    case GET_SERVICES: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/category/${action.category}/services`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetServices(res.data));
          store.dispatch(actionLoading(false));
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });
      break;
    }

    case GET_ALL_SERVICES: {
      store.dispatch(actionLoading(true));
      axios
        .get(`${base_url}/services`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetAllServices(res.data));
          store.dispatch(actionLoading(false));
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
