import {
  SET_DRAWER, SET_LOGIN_FORM, SET_FORGET_PASSWORD,
} from '../actions/toggle';

const initialState = {
  openDrawer: false,
  openLoginForm: false,
  openForgetPassword: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DRAWER: {
      if (state.openDrawer) {
        return {
          ...state,
          openDrawer: false,
        };
      }
      return {
        ...state,
        openDrawer: true,
      };
    }
    case SET_LOGIN_FORM: {
      return {
        ...state,
        openLoginForm: !state.openLoginForm,
      };
    }
    case SET_FORGET_PASSWORD: {
      return {
        ...state,
        openForgetPassword: !state.openForgetPassword,
      }
    }
    default: {
      return state;
    }
  }
};
