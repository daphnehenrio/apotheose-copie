import {
  SET_SERVICES, SET_ALL_SERVICES,
} from 'src/actions/services';

const initialState = {
  services: [],
  category: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SERVICES: {
      return {
        ...state,
        category: action.services.name,
        services: action.services.service,
      };
    }
    case SET_ALL_SERVICES: {
      return {
        ...state,
        services: action.services,
        category: 'all',
      };
    }

    default: {
      return state;
    }
  }
};
