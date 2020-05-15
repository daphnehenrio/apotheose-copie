export const OPEN_ADD_FILE = 'action/ADD_FILE';
export const SEND_FILES = 'action/SEND_FILES';
export const CHANGE_FILE_NAME = 'action/CHANGE_FILE_NAME';
export const ADD_FILE_TO_STATE = 'action/ADD_FILE_TO_STATE';
export const OPEN_SUCCESS_MESSAGE = 'action/OPEN_SUCCESS_MESSAGE';
export const GET_FOLDER = 'action/GET_FOLDER';
export const SET_FOLDER = 'action/SET_FOLDER';

export const actionOpenAddFile = (bool) => ({
    type: OPEN_ADD_FILE,
    bool,
});

export const actionSendFiles = (files) => ({
    type: SEND_FILES,
    files,
});

export const actionChangeFileName = (id, name) => ({
    type: CHANGE_FILE_NAME,
    id,
    name,
});

export const actionAddFileToState = (id, name) => ({
    type: ADD_FILE_TO_STATE,
    id,
    name,
});

export const actionOpenSuccessMessage = (bool) => ({
    type: OPEN_SUCCESS_MESSAGE,
    bool,
});

export const actionGetFolder = () => ({
  type: GET_FOLDER,
});

export const actionSetFolder = (data) => ({
  type: SET_FOLDER,
  data
})



