import axios from 'axios';

export const SET_LAST_NAME = 'action/SET_LAST_NAME';
export const SET_FIRST_NAME = 'action/SET_FIRST_NAME';
export const SET_USERNAME = 'action/SET_USERNAME';
export const SET_PASSWORD = 'action/SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'action/SET_CONFIRM_PASSWORD';
export const CONFIRM_PASSWORD = 'action/CONFIRM_PASSWORD';
export const SET_EMAIL = 'action/SET_EMAIL';
export const SET_ADDRESS = 'action/SET_ADDRESS';
export const SET_ZIPCODE = 'action/SET_ZIPCODE';
export const SET_CITY = 'action/SET_CITY';
export const SET_FIX_NUMBER = 'action/SET_FIX_NUMBER';
export const SET_CELLPHONE_NUMBER = 'action/SET_CELLPHONE_NUMBER';
export const SET_WORK_PHONE = 'action/SET_WORK_PHONE';
export const SET_CHILDREN = 'action/SET_CHILDREN';
export const SET_GENDER = 'action/SET_GENDER';
export const MISSING_FIELD = 'action/MISSING_FIELD';
export const SIGNUP = 'action/SIGNUP';
export const LOGIN = 'action/LOGIN';
export const CHECK_PASSWORD_STRENGTH = 'action/CHECK_PASSWORD_STRENGTH';
export const CHECK_EMAIL_EXISTS = 'action/CHECK_EMAIL_EXISTS';

export const actionSetLastName = (lastName) => ({
  type: SET_LAST_NAME,
  lastName,
});
export const actionSetFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  firstName,
});
export const actionSetUsername = (username) => ({
  type: SET_USERNAME,
  username,
});
export const actionSetEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const actionSetPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});

export const actionSetConfirmPasswordValue = (password) => ({
  type: SET_CONFIRM_PASSWORD,
  password,
});

export const actionSetConfirmPassword = (password) => ({
  type: CONFIRM_PASSWORD,
  password,
});

export const actionSetGender = (gender) => ({
  type: SET_GENDER,
  gender,
});

export const actionSetAddress = (adress) => ({
  type: SET_ADDRESS,
  adress,
});
export const actionSetZipCode = (zipCode) => ({
  type: SET_ZIPCODE,
  zipCode,
});
export const actionSetCity = (city) => ({
  type: SET_CITY,
  city,
});
export const actionSetFixNumber = (fixNumber) => ({
  type: SET_FIX_NUMBER,
  fixNumber,
});
export const actionSetCellphoneNumber = (cellphoneNumber) => ({
  type: SET_CELLPHONE_NUMBER,
  cellphoneNumber,
});
export const actionSetWorkPhone = (workPhone) => ({
  type: SET_WORK_PHONE,
  workPhone,
});
export const actionSetChildren = (children) => ({
  type: SET_CHILDREN,
  children,
});

export const actionSetMissingField = () => ({
  type: MISSING_FIELD,
});

export const actionSignup = (user) => ({
  type: SIGNUP,
  user,
});

export const actionLogin = () => ({
  type: LOGIN,
});

export const actionPasswordValidation = (isStrong) => ({
  type: CHECK_PASSWORD_STRENGTH,
  isStrong,
});

export const actionEmailValidation = (exists) => ({
  type: CHECK_EMAIL_EXISTS,
  exists,
});

