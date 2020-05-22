// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { GET_SERVICES, GET_ALL_SERVICES, actionSetServices , actionSetAllServices} from '../../actions/services';
import { actionLoading } from '../../actions/document';

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
          console.trace(err);
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
