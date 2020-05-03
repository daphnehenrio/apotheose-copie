import { CHANGE_PAGE } from "../../actions/routes";


export default (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      console.log(action)
      action.history.push(action.route);
      break;
    }
    default: {
      next(action);
    }
  }
};
