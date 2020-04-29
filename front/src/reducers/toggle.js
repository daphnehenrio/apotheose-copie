import {
  SET_DRAWER, SET_LOGIN_FORM
} from '../actions/toggle';

const initialState = {
  openDrawer: false,
  openLoginForm: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DRAWER: {
      console.log('open: ', state.openDrawer)
      if(state.openDrawer){
        return{
          ...state,
          openDrawer: false,
        }
      } else {
        return {
          ...state,
          openDrawer: true,
        }
      }
    }
    case SET_LOGIN_FORM: {
      return {
        ...state,
        openLoginForm: !state.openLoginForm,
      }
  }
    default: {
      return state;
    }
  }
};
