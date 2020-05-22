import {
    OPEN_ADD_FILE,
    SET_FOLDER,
    CHANGE_FILE_NAME,
    ADD_FILE_TO_STATE,
    OPEN_SUCCESS_MESSAGE,
    SET_DOCUMENTS,
    SET_ONE_FILE,
    GET_DOCUMENTS,
    SEND_FILES,
    SET_SEARCH,
    LOADING,

} from '../actions/document';


const initialState = {
    openAddFile: false,
    filesToUpload: [],
    successUpload: false,
    category: [],
    files: [],
    file: {},
    fileType: '',
    totalFiles: 0,
    checkFiles: false,
    current_sub_cat_id: null,
    search: '',
    loading:true,
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
            totalFile: action.data.length,
            checkFiles: true,
            current_sub_cat_id: action.id,
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
                totalFile: state.files.length + 1,
                checkFiles: false,
            }
        }

        case SET_ONE_FILE: {
          return {
              ...state,
              file: action.file,
              fileType: action.type_file,

          }
      }

      case SET_SEARCH: {
          return {
              ...state,
              search: action.text,
          }
      }

      case LOADING: {
          return {
              ...state,
              loading: action.bool,
          }
      }

        default: {
            return state;
        }

    }

};
