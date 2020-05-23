import {
  SET_NOTE,
  SET_NOTE_CONTENT,
  CHANGE_NOTE_CONTENT,
  OPEN_ADD_NOTE,
  SET_NEW_TITLE,
  SET_NEW_CONTENT,
  ADD_NEW_NOTE,
  SET_NEW_CATEGORY
} from '../actions/user_note';


const initialState = {
  noteContent: { id: '', title: '', content: '', category_id: '' },
  notes: [],
  addNote: false,
  newNoteTitle : null,
  newNoteContent: null,
  newNoteCategory: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOTE: {
      return {
        ...state,
        notes: action.data
      }
    }
    case SET_NOTE_CONTENT: {
      return {
        ...state,
        noteContent: { id: action.note.id, title: action.note.title, content: action.note.content, category_id: action.note.category_id },
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
      return {
        ...state,
        notes: action.data
      }
    }

    default: {
      return state;
    }
  }
};
