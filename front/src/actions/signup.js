// --------------- index ---------------

export const SET_STEP = 'action/SET_STEP';

// --------------- step one ---------------
export const SET_LAST_NAME = 'action/SET_LAST_NAME';
export const SET_FIRST_NAME = 'action/SET_FIRST_NAME';

export const SET_LOGIN = 'action/SET_LOGIN';

export const SET_PASSWORD = 'action/SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'action/SET_CONFIRM_PASSWORD';
export const CONFIRM_PASSWORD = 'action/CONFIRM_PASSWORD';
export const CHECK_PASSWORD_STRENGTH = 'action/CHECK_PASSWORD_STRENGTH';


// --------------- step two ---------------
export const SET_GENDER = 'action/SET_GENDER';

export const SET_ADDRESS = 'action/SET_ADDRESS';
export const SET_ZIP_CODE = 'action/SET_ZIP_CODE';
export const SET_CITY = 'action/SET_CITY';

export const SET_PHONE_NUMBER = 'action/SET_PHONE_NUMBER';
export const SET_CELLPHONE_NUMBER = 'action/SET_CELLPHONE_NUMBER';
export const SET_WORK_PHONE = 'action/SET_WORK_PHONE';

export const SET_CHILDREN = 'action/SET_CHILDREN';

// --------------- validation ---------------
export const MISSING_FIELD = 'action/MISSING_FIELD';
export const SET_EMAIL = 'action/SET_EMAIL';
export const CHECK_EMAIL_EXISTS = 'action/CHECK_EMAIL_EXISTS';

export const SIGNUP = 'action/SIGNUP';
export const ERROR_LIST_SIGNUP ='action/ERROR_LIST_SIGNUP'

// --------------- set step ---------------


export const actionSetStep = (step) => ({
  type: SET_STEP,
  step,
});

// --------------- step one ---------------
export const actionSetLastName = (last_name) => ({
  type: SET_LAST_NAME,
  last_name,
});

export const actionSetFirstName = (first_name) => ({
  type: SET_FIRST_NAME,
  first_name,
});

export const actionSetLogin = (login) => ({
  type: SET_LOGIN,
  login,
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



// --------------- step two ---------------

// gender
export const actionSetGender = (gender) => ({
  type: SET_GENDER,
  gender,
});

// address
export const actionSetAddress = (address) => ({
  type: SET_ADDRESS,
  address,
});
export const actionSetZipCode = (zip_code) => ({
  type: SET_ZIP_CODE,
  zip_code,
});
export const actionSetCity = (city) => ({
  type: SET_CITY,
  city,
});

// phones
export const actionSetPhoneNumber = (phone_number) => ({
  type: SET_PHONE_NUMBER,
  phone_number,
});
export const actionSetCellphoneNumber = (cellphone_number) => ({
  type: SET_CELLPHONE_NUMBER,
  cellphone_number,
});
export const actionSetWorkPhone = (phone_work) => ({
  type: SET_WORK_PHONE,
  phone_work,
});

// childrens
export const actionSetChildren = (children) => ({
  type: SET_CHILDREN,
  children,
});

// --------------- validations ---------------
export const actionPasswordValidation = (isStrong) => ({
  type: CHECK_PASSWORD_STRENGTH,
  isStrong,
});

export const actionEmailValidation = (exists) => ({
  type: CHECK_EMAIL_EXISTS,
  exists,
});

export const actionSetMissingField = () => ({
  type: MISSING_FIELD,
});

// --------------- Signup ---------------

export const actionSignup = (history) => ({
  type: SIGNUP,
  history,
});

export const actionErrorListSignup = (errors) => ({
  type: ERROR_LIST_SIGNUP,
  errors,
});





