import {
  SET_NOTE_CONTENT,
  CHANGE_NOTE_CONTENT,
} from '../actions/user_note';


const initialState = {
  noteContent: { id: '', title: '', content: '' },
  notes: [
    { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
    { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOTE_CONTENT: {
      return {
        ...state,
        noteContent: { id: action.note.id, title: action.note.title, content: action.note.content },
      };
    }

    case CHANGE_NOTE_CONTENT: {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.note.id) {
            return {
              ...note, title: action.note.title, content: action.note.content,
            };
          }
          return {
            ...note,
          };
        }),
      };
    }

    default: {
      return state;
    }
  }
};
