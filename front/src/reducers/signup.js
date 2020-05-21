import {
  SET_STEP,
  SET_LAST_NAME,
  SET_FIRST_NAME,
  SET_LOGIN,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ACCEPT_TERMS,
  CONFIRM_PASSWORD,
  CHECK_PASSWORD_STRENGTH,
  SET_EMAIL,
  CHECK_EMAIL_EXISTS,
  SET_GENDER,
  SET_ADDRESS,
  SET_ZIP_CODE,
  SET_CITY,
  SET_PHONE_NUMBER,
  SET_CELLPHONE_NUMBER,
  SET_WORK_PHONE,
  SET_CHILDREN,
  MISSING_FIELD,
  ERROR_LIST_SIGNUP,
} from 'src/actions/signup';


const initialState = {
  user: {
    login: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    cellphone_number: '',
    phone_number: '',
    phone_work: '',
    zip_code: '',
    city: '',
    children: '',
    address: '',
    age: '',
    statut: '',
  },
  activeStep: 0,
  isPasswordCorrect: 'init',
  missingField: false,
  passwordStrength: 'init',
  emailExists: 'init',
  errorListSignup: false,
  acceptTerms: false,
  error_cellphone_number: false,
  error_phone_number: false,
  error_phone_work: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {

    // set step

    case SET_STEP: {
      return {
        ...state,
        activeStep: action.step,
      }
    }

    // --------------- step one ---------------

    case SET_LAST_NAME: {
      return {
        ...state,
        user: {
          ...state.user,
          last_name: action.last_name,
        },
      };
    }

    case SET_FIRST_NAME: {
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.first_name,
        },
      };
    }

    case SET_LOGIN: {
      return {
        ...state,
        user: {
          ...state.user,
          login: action.login,
        },
      };
    }

    case SET_PASSWORD: {
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    }

    case SET_CONFIRM_PASSWORD: {
      return {
        ...state,
        user: {
          ...state.user,
          confirmPassword: action.password,
        },
      };
    }

    case CONFIRM_PASSWORD: {
      if (state.user.password === action.password) {
        return {
          ...state,
          isPasswordCorrect: true,
        };
      }
      return {
        ...state,
        isPasswordCorrect: false,
      };
    }

    case SET_EMAIL: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    }

    case SET_ACCEPT_TERMS: {
      return {
        ...state,
        acceptTerms: !state.acceptTerms
      };
    }

    // --------------- step two ---------------

    case SET_GENDER: {
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.gender,
        },
      };
    }

    // address
    case SET_ADDRESS: {
      return {
        ...state,
        user: {
          ...state.user,
          address: action.address,
        },
      };
    }

    case SET_ZIP_CODE: {
      return {
        ...state,
        user: {
          ...state.user,
          zip_code: action.zip_code,
        },
      };
    }

    case SET_CITY: {
      return {
        ...state,
        user: {
          ...state.user,
          city: action.city,
        },
      };
    }

    // phones
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        user: {
          ...state.user,
          phone_number: action.phone_number,
        },
      };
    }

    case SET_CELLPHONE_NUMBER: {
      return {
        ...state,
        user: {
          ...state.user,
          cellphone_number: action.cellphone_number,
        },
      };
    }

    case SET_WORK_PHONE: {
      return {
        ...state,
        user: {
          ...state.user,
          phone_work: action.phone_work,
        },
      };
    }

    // childrens
    case SET_CHILDREN: {
      return {
        ...state,
        user: {
          ...state.user,
          children: action.children,
        },
      };
    }

    // --------------- validations ---------------

    case MISSING_FIELD: {
      return {
        ...state,
        missingField: true,
      };
    }

    case CHECK_PASSWORD_STRENGTH: {
      return {
        ...state,
        passwordStrength: action.isStrong,
      };
    }

    case CHECK_EMAIL_EXISTS: {
      return {
        ...state,
        emailExists: action.exists,
      };
    }

    case ERROR_LIST_SIGNUP: {
      return {
        ...state,
        errorListSignup: action.errors,
      }
    }

    default: {
      return state;
    }
  }
};
