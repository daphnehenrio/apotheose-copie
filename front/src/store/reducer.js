const initialState = {
  openDrawer: false,
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
    default: {
      return state;
    }
  }
};
