/* eslint-disable no-fallthrough */
// == import action
import { CHANGE_PAGE } from "../../actions/routes";


export default (store) => (next) => (action) => {

  switch (action.type) {

    // ---------------------------- CHANGE PAGE ----------------------------

    case CHANGE_PAGE: {
      action.history.push(action.route);
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
