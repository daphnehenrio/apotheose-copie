const initialState = {
  openDrawer: false,
  openLoginForm: false,
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_DRAWER': {
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
    case 'SET_LOGIN_FORM': {
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
