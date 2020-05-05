import {
    SET_NOTE_CONTENT,
    CHANGE_NOTE_CONTENT,
    SET_OPEN_EDIT_PROFIL,
    ADD_INFO_SUP,
    SET_INFO_SUP_TITLE,
    SET_INFO_SUP_VALUE,
    CLEAR_INFO_SUP,
} from '../actions/profil';

const initialState = {
    noteContent: { id: '',title: '', content: '' },
    notes: [
        { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
        { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
    ],
    openEditProfil: false,
    infosSup: [
        {title: 'Ecole', value:'Poudlard'},
        {title: 'Nounou', value:'Joséphine'},
    ],
    infoSupToAdd: {title: '', value: ''},
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
        case SET_OPEN_EDIT_PROFIL: {
            return{
                ...state,
                openEditProfil: action.bool,
            }
        }
        case SET_INFO_SUP_TITLE: {
            return {
                ...state,
                infoSupToAdd: {...state.infoSupToAdd, title: action.title }
            }
        }
        case SET_INFO_SUP_VALUE: {
            return {
                ...state,
                infoSupToAdd: {...state.infoSupToAdd, value: action.value}
            }
        }
        case ADD_INFO_SUP: {
            return{
                ...state,
                infosSup: [
                    ...state.infosSup,
                    {title: action.info.title, value: action.info.value},
                ],
            }
        }
        case CLEAR_INFO_SUP: {
            return {
                ...state,
                infoSupToAdd:{title: '', value: ''},
            }
        }
        default: {
            return state;
        }
    }
};
