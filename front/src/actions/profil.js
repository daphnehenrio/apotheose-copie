export const SET_NOTE_CONTENT = 'action/SET_NOTE_CONTENT';
export const CHANGE_NOTE_CONTENT = 'action/CHANGE_NOTE_CONTENT';
export const SET_OPEN_EDIT_PROFIL = 'action/SET_OPEN_EDIT_PROFIL';

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
