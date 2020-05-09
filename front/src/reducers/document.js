import {
    OPEN_ADD_FILE,

} from '../actions/document';


const initialState = {
    openAddFile: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case OPEN_ADD_FILE: {
            console.log('CASE OPEN_ADD_FILE', action.bool);
            return {
                ...state,
                openAddFile: action.bool,
            }
        }
        default: {
            return state;
        }

    }

};