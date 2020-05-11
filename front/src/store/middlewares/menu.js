// == import node modules
import axios from 'axios';

// == import action
import { GET_MENU, actionSetMenu } from '../../actions/menu';

// == import local
import { base_url } from 'src/utils/axios'

export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- GET MENU ----------------------------

    case GET_MENU: {
      axios
        .get(`${base_url}/left-menu`,
          {
            withCredentials: true,
          })
        .then((res) => {
          store.dispatch(actionSetMenu(res.data));
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
