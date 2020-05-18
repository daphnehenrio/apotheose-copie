/* eslint-disable camelcase */

import {
  SET_OPEN_EDIT_PROFIL, SET_CONNECTED, SET_PROFIL, CLEAN_PROFIL,
} from 'src/actions/user_profil';


const initialState = {
  login: '',
  first_name: '',
  last_name: '',
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
  openEditProfil: false,
  connected: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PROFIL: {
      const { user } = action;

      return {
        ...state,
        login: user.login,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.user_profil.gender,
        cellphone_number: user.user_profil.cellphone_number,
        phone_number: user.user_profil.phone_number,
        phone_work: user.user_profil.phone_work,
        zip_code: user.user_profil.zip_code,
        city: user.user_profil.city,
        children: user.user_profil.children,
        address: user.user_profil.address,
        age: user.user_profil.age,
        statut: user.user_profil.statut,
        connected: true,
      };
    }

    case SET_CONNECTED: {
      return {
        ...state,
        connected: true,
      };
    }

    case SET_OPEN_EDIT_PROFIL: {
      return {
        ...state,
        openEditProfil: action.bool,
      };
    }

    case CLEAN_PROFIL: {
      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};
