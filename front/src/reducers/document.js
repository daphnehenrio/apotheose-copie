import {
    OPEN_ADD_FILE,
    SET_FOLDER,
    CHANGE_FILE_NAME,
    ADD_FILE_TO_STATE,
    OPEN_SUCCESS_MESSAGE,

} from '../actions/document';


const initialState = {
    openAddFile: false,
    filesToUpload: [],
    successUpload: false,
    category: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case OPEN_ADD_FILE: {
            return {
                ...state,
                openAddFile: action.bool,

            }
        }
        case SET_FOLDER: {
          return {
              ...state,
              category: action.data,

          }
      }
        case CHANGE_FILE_NAME: {
            return {
                ...state,
                filesToUpload: state.filesToUpload.map(file => {
                    if(file.id === action.id) {
                        return {
                            ...file,
                            name: action.name
                        }
                    }
                    return {
                        ...file,
                    }
                }),
            }
        }
        case ADD_FILE_TO_STATE: {
            return {
                ...state,
                filesToUpload: [
                    ...state.filesToUpload,
                    {id: action.id, name: action.name}
                ],
            }
        }
        case OPEN_SUCCESS_MESSAGE: {
            return {
                ...state,
                successUpload: action.bool,
            }
        }



        default: {
            return state;
        }

    }

};
