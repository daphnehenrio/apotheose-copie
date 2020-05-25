/* eslint-disable no-fallthrough */
// == import action
import { CHANGE_PAGE } from '../../actions/routes';
import { actionSetDrawer } from '../../actions/toggle';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- CHANGE PAGE ----------------------------

    case CHANGE_PAGE: {
      action.history.push(action.route);
      store.dispatch(actionSetDrawer("false"))
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
