import {
  SET_MENU,
} from '../actions/menu';

const initialState = {
  category: [],
  menuOK: false,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MENU: {
      return {
        ...state,
        category: action.data[0],
        menuOK: true,
      };
    }

    default: {
      return state;
    }
  }
};
