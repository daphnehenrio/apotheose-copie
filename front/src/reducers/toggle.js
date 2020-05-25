import {
  SET_DRAWER, SET_LOGIN_FORM, SET_FORGET_PASSWORD, SET_SNACK,
} from '../actions/toggle';

const initialState = {
  openDrawer: false,
  openLoginForm: false,
  openForgetPassword: false,
  stateSnakbar: 'success',
  messageSnackbar: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DRAWER: {

      return {
        ...state,
        openDrawer: action.bool ? false : !state.openDrawer,
      }
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

    case SET_SNACK: {
      return {
        ...state,
        stateSnakbar: action.variant,
        messageSnackbar: action.message,
      }
    }
    default: {
      return state;
    }
  }
};
