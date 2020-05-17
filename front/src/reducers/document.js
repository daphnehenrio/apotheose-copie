import {
    OPEN_ADD_FILE,
    SET_FOLDER,
    CHANGE_FILE_NAME,
    ADD_FILE_TO_STATE,
    OPEN_SUCCESS_MESSAGE,
    SET_DOCUMENTS,
    SET_ONE_FILE,

} from '../actions/document';


const initialState = {
    openAddFile: false,
    filesToUpload: [],
    successUpload: false,
    category: [],
    files: [],
    file: {},
    fileType: '',
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

      case SET_DOCUMENTS: {
        return {
            ...state,
            files: action.data,

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

        case SET_ONE_FILE: {
          console.log('reducer', action.type_file)
          return {
              ...state,
              file: action.file,
              fileType: action.type_file,
          }
      }

        default: {
            return state;
        }

    }

};
