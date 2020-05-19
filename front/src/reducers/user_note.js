import {
  SET_NOTE_CONTENT,
  CHANGE_NOTE_CONTENT,
  OPEN_ADD_NOTE,
  SET_NEW_TITLE,
  SET_NEW_CONTENT,
  ADD_NEW_NOTE,
  SET_NEW_CATEGORY
} from '../actions/user_note';


const initialState = {
  noteContent: { id: '', title: '', content: '' },
  notes: [
    { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
    { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
  ],
  addNote: false,
  newNoteTitle : 'Ma nouvelle note',
  newNoteContent: 'Contenu de ma nouvelle note',
  newNoteCategory: '',
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

    case OPEN_ADD_NOTE: {
      return {
        ...state,
        addNote: !state.addNote,
      }
    }

    case SET_NEW_TITLE: {
      return {
        ...state,
        newNoteTitle: action.value,
      }
    }

    case SET_NEW_CONTENT: {
      return {
        ...state,
        newNoteContent: action.value,
      }
    }

    case SET_NEW_CATEGORY: {
      return {
        ...state,
        newNoteCategory: action.value,
      }
    }

    case ADD_NEW_NOTE: {
      const { id, title, content } = action.data
      return {
        ...state,
        notes: [...state.notes, {id, title, content}]
      }
    }

    default: {
      return state;
    }
  }
};
