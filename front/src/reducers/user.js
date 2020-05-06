/* eslint-disable camelcase */
import {
  SET_LAST_NAME,
  SET_FIRST_NAME,
  SET_LOGIN,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_ADDRESS,
  SET_ZIP_CODE,
  SET_CITY,
  SET_FIX_NUMBER,
  SET_CELLPHONE_NUMBER,
  SET_WORK_PHONE,
  SET_CHILDREN,
  SET_GENDER,
  MISSING_FIELD,
  CHECK_PASSWORD_STRENGTH,
  CHECK_EMAIL_EXISTS,
  LOG_USER,
  ERROR_LOGIN,
  LOGOUT,
} from '../actions/user';

import {
  SET_LOGIN_FORM,
} from '../actions/toggle';
import { SAVE_UPDATE_PROFIL } from '../actions/profil';

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
    zip_Code: '',
    city: '',
    children: '',
    address: '',
    age: '',
    statut: '',
  },
  isPasswordCorrect: 'init',
  missingField: false,
  passwordStrength: 'init',
  emailExists: 'init',
  isLoginCorrect: 'init',
  messageWrongLogin: false,
  connected: false,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
          zip_Code: action.zip_Code,
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
    case SET_FIX_NUMBER: {
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
    case SET_CHILDREN: {
      return {
        ...state,
        user: {
          ...state.user,
          children: action.children,
        },
      };
    }
    case SET_GENDER: {
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.gender,
        },
      };
    }
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
    case LOG_USER: {
      const {
        login,
        first_name,
        last_name,
        email,
        gender,
        cellphone_number,
        phone_number,
        phone_work,
        zip_code,
        city,
        children,
        address,
        age,
        statut,
      } = action.user;
      return {
        ...state,
        user: {
          ...state.user,
          login: login ? login : state.user.login,
          first_name: first_name,
          last_name: last_name,
          email,
          gender,
          cellphone_number: cellphone_number,
          phone_number: phone_number,
          phone_work: phone_work,
          zip_Code: zip_code,
          city,
          children,
          address: address,
          age,
          statut,
        },
        isLoginCorrect: true,
        connected: true,
      };
    }
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
    case SAVE_UPDATE_PROFIL: {
        const {
          login,
          first_name,
          last_name,
          email,
          gender,
          cellphone_number,
          phone_number,
          phone_work,
          zip_code,
          city,
          children,
          address,
          age,
          statut,
        } = action.user;
        return {
          ...state,
          user: {
            ...state.user,
            login: login ? login : state.user.login,
            first_name: first_name,
            last_name: last_name,
            email,
            gender,
            cellphoneNumber: cellphone_number,
            phone_number: phone_number,
            phone_work: phone_work,
            zip_Code: zip_code,
            city,
            children,
            address: address,
            age,
            statut,
          },
      }
    }
    default: {
      return state;
    }
  }
};
