export const OPEN_ADD_FILE = 'action/ADD_FILE';
export const SEND_FILES = 'action/SEND_FILES';

export const actionOpenAddFile = (bool) => ({ 
    type: OPEN_ADD_FILE,
    bool, 
});

export const actionSendFiles = (files) => ({
    type: SEND_FILES,
    files,
});

