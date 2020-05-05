/* eslint-disable no-fallthrough */
import { CHANGE_PAGE } from "../../actions/routes";


export default (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      action.history.push(action.route);
    }
    default: {
      next(action);
    }
  }
};
