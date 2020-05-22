import {
  SET_MAIL_FORGET
} from '../actions/forget_password';

const initialState = {
  mail: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MAIL_FORGET:{
      return {
        ...state, 
        mail: action.value
      }
    }
    default: {
      return state;
    }
  }
};
