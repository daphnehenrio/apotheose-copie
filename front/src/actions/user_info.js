export const SET_OPEN_ADD_INFO_SUP = 'action/SET_OPEN_ADD_INFO_SUP';
export const ADD_INFO_SUP = 'action/ADD_INFO_SUP';
export const SET_INFO_SUP_TITLE = 'action/SET_INFO_SUP_TITLE';
export const SET_INFO_SUP_VALUE = 'action/SET_INFO_SUP_VALUE';
export const CLEAR_INFO_SUP = 'action/CLEAR_INFO_SUP';
export const EDIT_INFO_SUP = 'action/EDIT_INFO_SUP';
export const EDIT_INFO_SUP_CONTENT = 'action/EDIT_INFO_SUP_CONTENT';
export const CLOSE_EDIT_INFO_SUP = 'action/CLOSE_EDIT_INFO_SUP';
export const DELETE_ACCOUNT = 'action/DELETE_ACCOUNT';

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

export const actionDeleteAccount = (key, history) => ({
  type: DELETE_ACCOUNT,
  key,
  history
})
