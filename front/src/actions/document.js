export const OPEN_ADD_FILE = 'action/ADD_FILE';
export const SEND_FILES = 'action/SEND_FILES';
export const CHANGE_FILE_NAME = 'action/CHANGE_FILE_NAME';
export const ADD_FILE_TO_STATE = 'action/ADD_FILE_TO_STATE';

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



