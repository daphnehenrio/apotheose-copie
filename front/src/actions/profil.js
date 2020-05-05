export const SET_NOTE_CONTENT = 'action/SET_NOTE_CONTENT';
export const CHANGE_NOTE_CONTENT = 'action/CHANGE_NOTE_CONTENT';
export const SET_OPEN_EDIT_PROFIL = 'action/SET_OPEN_EDIT_PROFIL';
export const ADD_INFO_SUP = 'action/ADD_INFO_SUP';
export const SET_INFO_SUP_TITLE = 'action/SET_INFO_SUP_TITLE';
export const SET_INFO_SUP_VALUE = 'action/SET_INFO_SUP_VALUE';
export const CLEAR_INFO_SUP = 'action/CLEAR_INFO_SUP';

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