// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { GET_SERVICES, GET_ALL_SERVICES, actionSetServices , actionSetAllServices} from '../../actions/services';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET MENU ----------------------------

    case GET_SERVICES: {
      axios
        .get(`${base_url}/category/${action.category}/services`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetServices(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case GET_ALL_SERVICES: {
      axios
        .get(`${base_url}/services`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetAllServices(res.data));
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
