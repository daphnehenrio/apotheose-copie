import {
    SET_NOTE_CONTENT,
    CHANGE_NOTE_CONTENT,
    SET_OPEN_EDIT_PROFIL,
    SET_OPEN_ADD_INFO_SUP,
    ADD_INFO_SUP,
    SET_INFO_SUP_TITLE,
    SET_INFO_SUP_VALUE,
    CLEAR_INFO_SUP,
    EDIT_INFO_SUP,
    EDIT_INFO_SUP_CONTENT,
    CLOSE_EDIT_INFO_SUP,
} from '../actions/profil';

const initialState = {
    noteContent: { id: '',title: '', content: '' },
    notes: [
        { id: 1, title: 'Note 1', content: 'hello, note numéro 1' },
        { id: 2, title: 'Note 2', content: 'Je suis la note numéro 2' },
    ],
    openEditProfil: false,
    openAddInfoSup: false,
    infosSup: [
        {id: 1,title: 'Ecole', value:'Poudlard', edit:false},
        {id: 2,title: 'Nounou', value:'Joséphine', edit:false},
    ],
    infoSupToAdd: {title: '', value: ''},
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NOTE_CONTENT: {
            return {
                ...state,
                noteContent: {id: action.note.id, title: action.note.title, content: action.note.content},
            }
        }
        case CHANGE_NOTE_CONTENT: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.note.id) {
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
        case SET_OPEN_ADD_INFO_SUP: {
            return {
                ...state,
                openAddInfoSup: action.bool,
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
                    {id: action.info.id, title: action.info.title, value: action.info.value, edit: false},
                ],
            }
        }
        case CLEAR_INFO_SUP: {
            return {
                ...state,
                infoSupToAdd:{title: '', value: ''},
            }
        }
        case EDIT_INFO_SUP: {
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if (info.id === action.id) {
                        return {
                            ...info, edit: true,
                        }
                    } else return {
                        ...info,
                    }
                }
                ),
            }
        }
        case EDIT_INFO_SUP_CONTENT: {
            console.log('TEST EDIT', action.info);
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if(info.id === action.info.id){
                        return {
                            ...info, title: action.info.title, value: action.info.value, edit:false,
                        }
                    } else return {
                        ...info,
                    }
                })
            }
        }
        case CLOSE_EDIT_INFO_SUP: {
            return {
                ...state,
                infosSup: state.infosSup.map(info => {
                    if(info.id === action.id){
                        return {
                            ...info, edit: false,
                        }
                    } else return {
                        ...info,
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
};
