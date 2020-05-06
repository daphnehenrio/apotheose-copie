export const SET_NOTE_CONTENT = 'action/SET_NOTE_CONTENT';
export const CHANGE_NOTE_CONTENT = 'action/CHANGE_NOTE_CONTENT';
export const SET_OPEN_EDIT_PROFIL = 'action/SET_OPEN_EDIT_PROFIL';
export const SET_OPEN_ADD_INFO_SUP = 'action/SET_OPEN_ADD_INFO_SUP';
export const ADD_INFO_SUP = 'action/ADD_INFO_SUP';
export const SET_INFO_SUP_TITLE = 'action/SET_INFO_SUP_TITLE';
export const SET_INFO_SUP_VALUE = 'action/SET_INFO_SUP_VALUE';
export const CLEAR_INFO_SUP = 'action/CLEAR_INFO_SUP';
export const EDIT_INFO_SUP = 'action/EDIT_INFO_SUP';
export const EDIT_INFO_SUP_CONTENT = 'action/EDIT_INFO_SUP_CONTENT';
export const CLOSE_EDIT_INFO_SUP = 'action/CLOSE_EDIT_INFO_SUP';
export const SAVE_UPDATE_PROFIL = 'action/SAVE_UPDATE_PROFIL';
export const UPDATE_LAST_NAME= 'action/UPDATE_LAST_NAME';
export const UPDATE_FIRST_NAME = 'action/UPDATE_FIRST_NAME';
export const UPDATE_LOGIN = 'action/UPDATE_LOGIN';
export const UPDATE_EMAIL = 'action/UPDATE_EMAIL';
export const UPDATE_ADDRESS = 'action/UPDATE_ADDRESS';
export const UPDATE_ZIP_CODE = 'action/UPDATE_ZIP_CODE';
export const UPDATE_CITY = 'action/UPDATE_CITY';
export const UPDATE_FIX_NUMBER = 'action/UPDATE_FIX_NUMBER';
export const UPDATE_CELLPHONE_NUMBER = 'action/UPDATE_CELLPHONE_NUMBER';
export const UPDATE_WORK_PHONE = 'action/UPDATE_WORK_PHONE';
export const UPDATE_CHILDREN = 'action/UPDATE_CHILDREN';
export const UPDATE_GENDER = 'action/UPDATE_GENDER';
export const UPDATE_AGE = 'action/UPDATE_AGE';
export const UPDATE_STATUT = 'action/UPDATE_STATUT';

export const actionSetNoteContent = (note) => ({
  type: SET_NOTE_CONTENT,
  note,
});

export const actionChangeNoteContent = (note) => ({
  type: CHANGE_NOTE_CONTENT,
  note,
});

export const actionSetOpenEditProfil = (bool) => ({
  type: SET_OPEN_EDIT_PROFIL,
  bool,
});

export const actionSetOpenAddInfoSup = (bool) => ({
    type: SET_OPEN_ADD_INFO_SUP,
    bool,
});

export const actionAddInfoSup = (info) => ({
    type: ADD_INFO_SUP,
    info,
});

export const actionSetInfoSupTitle = (title) => ({
    type: SET_INFO_SUP_TITLE,
    title,
});

export const actionSetInfoSupValue = (value) => ({
    type: SET_INFO_SUP_VALUE,
    value,
});

export const actionClearAddInfoSup = () => ({
    type: CLEAR_INFO_SUP,
});

export const actionEditInfoSup = (id) => ({
    type: EDIT_INFO_SUP,
    id,
});

export const actionEditInfosSupContent = (info) => ({
    type: EDIT_INFO_SUP_CONTENT,
    info,
});

export const actionCloseEditInfoSup = (id) => ({
    type: CLOSE_EDIT_INFO_SUP,
    id,
});

export const actionSaveUpdateProfil = () => ({
  type: SAVE_UPDATE_PROFIL,
});

export const actionUpdateLastName = (lastName) => ({
  type: UPDATE_LAST_NAME,
  lastName,
});

export const actionUpdateFirstName = (firstName) => ({
  type: UPDATE_FIRST_NAME,
  firstName,
});

export const actionUpdateLogin = (login) => ({
  type: UPDATE_LOGIN,
  login,
});

export const actionUpdateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});


export const actionUpdateGender = (gender) => ({
  type: UPDATE_GENDER,
  gender,
});

export const actionUpdateAddress = (adress) => ({
  type: UPDATE_ADDRESS,
  adress,
});
export const actionUpdateZipCode = (zipCode) => ({
  type: UPDATE_ZIPCODE,
  zipCode,
});
export const actionUpdateCity = (city) => ({
  type: UPDATE_CITY,
  city,
});
export const actionUpdateFixNumber = (fixNumber) => ({
  type: UPDATE_FIX_NUMBER,
  fixNumber,
});
export const actionUpdateCellphoneNumber = (cellphoneNumber) => ({
  type: UPDATE_CELLPHONE_NUMBER,
  cellphoneNumber,
});
export const actionUpdateWorkPhone = (workPhone) => ({
  type: UPDATE_WORK_PHONE,
  workPhone,
});
export const actionUpdateChildren = (children) => ({
  type: UPDATE_CHILDREN,
  children,
});
export const actionUpdateAge = (age) => ({
  type: UPDATE_AGE,
  age,
});
export const actionUpdateStatut = (statut) => ({
  type: UPDATE_STATUT,
  statut,
});
