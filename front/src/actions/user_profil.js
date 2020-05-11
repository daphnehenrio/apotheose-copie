export const SET_CONNECTED = 'action/SET_CONNECTED';
export const GET_PROFIL = 'action/GET_PROFIL';
export const SET_PROFIL = 'action/SET_PROFIL';
export const SET_OPEN_EDIT_PROFIL = 'action/SET_OPEN_EDIT_PROFIL';
export const SAVE_UPDATE_PROFIL = 'action/SAVE_UPDATE_PROFIL';
export const CLEAN_PROFIL = 'action/CLEAN_PROFIL';

export const actionSetConnected = () => ({
  type: SET_CONNECTED,
});

export const actionGetProfil = (history) => ({
  type: GET_PROFIL,
  history
});


export const actionSetProfil = (user) => ({
  type: SET_PROFIL,
  user
});

export const actionSetOpenEditProfil = (bool) => ({
  type: SET_OPEN_EDIT_PROFIL,
  bool,
});

export const actionSaveUpdateProfil = (data) => ({
  type: SAVE_UPDATE_PROFIL,
  data
});

export const actionCleanProfil = () => ({
  type: CLEAN_PROFIL
})
