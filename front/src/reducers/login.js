/* eslint-disable camelcase */
import {
  ERROR_LOGIN,
  LOGOUT,
} from '../actions/login';

import {
  SET_LOGIN_FORM,
} from '../actions/toggle';

const initialState = {
  user: {
    login: '',
    password: '',
  },
  messageWrongLogin: false,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR_LOGIN: {
      return {
        ...state,
        isLoginCorrect: false,
        messageWrongLogin: action.message,
      };
    }
    case SET_LOGIN_FORM: {
      return {
        ...state,
        messageWrongLogin: false,
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};
