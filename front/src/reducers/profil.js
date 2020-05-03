import {
    SET_NOTE_CONTENT,
    CHANGE_NOTE_CONTENT,
} from '../actions/profil';

const initialState = {
    noteContent: { id: '',title: '', content: '' },
    notes: [
        { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
        { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
    ]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NOTE_CONTENT: {
            console.log('ACTION', action.note);
            return {
                ...state,
                noteContent: {id: action.note.id, title: action.note.title, content: action.note.content},
            }
        }
        case CHANGE_NOTE_CONTENT: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    console.log('RETURN', note, action.note);
                    if (note.id === action.note.id) {
                        console.log('SUCCESSSS');
                        return {
                            ...note,title: action.note.title, content: action.note.content
                        }
                    } else return {
                        ...note,
                    }
                }
                ),
            }
        }
        default: {
            return state;
        }
    }
};
