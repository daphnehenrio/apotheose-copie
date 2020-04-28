const initialState = {
  openDrawer: false,
  openLoginForm: false,
  user: {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    gender: '',
    cellphoneNumber: '',
    fixNumber: '',
    workPhone: '',
    zipCode: '',
    city: '',
    children: '',
    adress: '',
  },
  isPasswordCorrect: 'init',
  missingField: false,

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
    case 'SET_LAST_NAME': {
      return{
        ...state,
        user: {
          ...state.user,
          lastName: action.lastName,
        },
      }
    }
    case 'SET_FIRST_NAME': {
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.firstName,
        }
      }
    }
    case 'SET_USERNAME': {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
        }
      }
    }
    case 'SET_PASSWORD': {
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        }
      }
    }
    case 'CONFIRM_PASSWORD' : {
      if(state.user.password === action.password){
        return {
          ...state,
          isPasswordCorrect: true,
        }
      } else {
        return {
          ...state,
          isPasswordCorrect: false,
        }
      }
    }
    case 'SET_EMAIL': {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        }
      }
    }
    case 'SET_ADRESS': {
      return {
        ...state,
        user: {
          ...state.user,
          adress: action.adress,
        }
      }
    }
    case 'SET_ZIPCODE': {
      return {
        ...state,
        user: {
          ...state.user,
          zipCode: action.zipCode,
        }
      }
    }
    case 'SET_CITY': {
      return {
        ...state,
        user: {
          ...state.user,
          city: action.city,
        }
      }
    }
    case 'SET_FIX_NUMBER': {
      return {
        ...state,
        user: {
          ...state.user,
          fixNumber: action.fixNumber,
        }
      }
    }
    case 'SET_CELLPHONE_NUMBER': {
      return {
        ...state,
        user: {
          ...state.user,
          cellphoneNumber: action.cellphoneNumber,
        }
      }
    }
    case 'SET_WORK_PHONE': {
      return {
        ...state,
        user: {
          ...state.user,
          workPhone: action.workPhone,
        }
      }
    }
    case 'SET_CHILDREN': {
      return {
        ...state,
        user: {
          ...state.user,
          children: action.children,
        }
      }
    }
    case 'SET_GENDER': {
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.gender,
        }
      }
    }
    case 'MISSING_FIELD': {
      return {
        ...state,
        missingField: true,
      }
    }
    default: {
      return state;
    }
  }
};
