export const GET_NOTE = 'action/GET_NOTE';
export const SET_NOTE = 'action/SET_NOTE';
export const SET_NOTE_CONTENT = 'action/SET_NOTE_CONTENT';
export const CHANGE_NOTE_CONTENT = 'action/CHANGE_NOTE_CONTENT';
export const OPEN_ADD_NOTE = 'action/OPEN_ADD_NOTE';
export const SET_NEW_TITLE = 'action/SET_NEW_TITLE';
export const SET_NEW_CONTENT = 'action/SET_NEW_CONTENT';
export const SAVE_NEW_NOTE = 'action/SAVE_NEW_NOTE';
export const ADD_NEW_NOTE = 'action/ADD_NEW_NOTE';
export const UPDATE_NOTE = 'action/UPDATE_NOTE';
export const SET_NEW_CATEGORY = 'action/SET_NEW_CATEGORY';
export const DELETE_NOTE = 'action/DELETE_NOTE';


export const actionGetNote = () => ({
  type: GET_NOTE,
})

export const actionSetNote = (data) => ({
  type: SET_NOTE,
  data,
})

export const actionSetNoteContent = (note) => ({
  type: SET_NOTE_CONTENT,
  note,
});

export const actionChangeNoteContent = (note) => ({
  type: CHANGE_NOTE_CONTENT,
  note,
});

export const actionOpenAddNote = () => ({
  type: OPEN_ADD_NOTE,

});

export const actionSetNewTitle = (value) => ({
  type: SET_NEW_TITLE ,
  value
})

export const actionSetNewContent = (value) => ({
  type: SET_NEW_CONTENT,
  value
})

export const actionSaveNewNote = (note) => ({
  type: SAVE_NEW_NOTE,
  note
})

export const actionUpdateNote = (note) => ({
  type: UPDATE_NOTE,
  note
})

export const actionAddNewNote = (data) => ({
  type: ADD_NEW_NOTE,
  data
})

export const actionSetCategoryNewNote = (value) => ({
  type: SET_NEW_CATEGORY,
  value
})

export const actionDeleteNote = (id) => ({
  type: DELETE_NOTE,
  id
})

