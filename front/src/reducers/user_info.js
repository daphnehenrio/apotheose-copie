import {
  SET_OPEN_ADD_INFO_SUP,
  ADD_INFO_SUP,
  SET_INFO_SUP_TITLE,
  SET_INFO_SUP_VALUE,
  CLEAR_INFO_SUP,
  EDIT_INFO_SUP,
  EDIT_INFO_SUP_CONTENT,
  CLOSE_EDIT_INFO_SUP,
} from '../actions/user_info';


const initialState = {
  openEditProfil: false,
  openAddInfoSup: false,
  infosSup: [
    {
      id: 1, title: 'Ecole', value: 'Poudlard', edit: false,
    },
    {
      id: 2, title: 'Nounou', value: 'Joséphine', edit: false,
    },
  ],
  infoSupToAdd: { title: '', value: '' },

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OPEN_ADD_INFO_SUP: {
      return {
        ...state,
        openAddInfoSup: action.bool,
      };
    }
    case SET_INFO_SUP_TITLE: {
      return {
        ...state,
        infoSupToAdd: { ...state.infoSupToAdd, title: action.title },
      };
    }
    case SET_INFO_SUP_VALUE: {
      return {
        ...state,
        infoSupToAdd: { ...state.infoSupToAdd, value: action.value },
      };
    }
    case ADD_INFO_SUP: {
      return {
        ...state,
        infosSup: [
          ...state.infosSup,
          {
            id: action.info.id, title: action.info.title, value: action.info.value, edit: false,
          },
        ],
      };
    }
    case CLEAR_INFO_SUP: {
      return {
        ...state,
        infoSupToAdd: { title: '', value: '' },
      };
    }
    case EDIT_INFO_SUP: {
      return {
        ...state,
        infosSup: state.infosSup.map((info) => {
          if (info.id === action.id) {
            return {
              ...info, edit: true,
            };
          }
          return {
            ...info,
          };
        }),
      };
    }
    case EDIT_INFO_SUP_CONTENT: {
      return {
        ...state,
        infosSup: state.infosSup.map((info) => {
          if (info.id === action.info.id) {
            return {
              ...info, title: action.info.title, value: action.info.value, edit: false,
            };
          }
          return {
            ...info,
          };
        }),
      };
    }
    case CLOSE_EDIT_INFO_SUP: {
      return {
        ...state,
        infosSup: state.infosSup.map((info) => {
          if (info.id === action.id) {
            return {
              ...info, edit: false,
            };
          }
          return {
            ...info,
          };
        }),
      };
    }
    default: {
      return state;
    }
  }
};
