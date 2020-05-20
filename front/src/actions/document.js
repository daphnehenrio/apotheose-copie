export const OPEN_ADD_FILE = 'action/ADD_FILE';
export const SEND_FILES = 'action/SEND_FILES';
export const CHANGE_FILE_NAME = 'action/CHANGE_FILE_NAME';
export const ADD_FILE_TO_STATE = 'action/ADD_FILE_TO_STATE';
export const OPEN_SUCCESS_MESSAGE = 'action/OPEN_SUCCESS_MESSAGE';
export const GET_FOLDER = 'action/GET_FOLDER';
export const SET_FOLDER = 'action/SET_FOLDER';
export const GET_DOCUMENTS = 'action/GET_DOCUMENTs';
export const SET_DOCUMENTS = 'action/SET_DOCUMENTS';
export const GET_ONE_FILE = 'action/GET_ONE_FILE';
export const SET_ONE_FILE = 'action/SET_ONE_FILE';
export const DOWNLOAD_FILE = 'action/DOWNLOAD_FILE'

export const actionOpenAddFile = (bool) => ({
    type: OPEN_ADD_FILE,
    bool,
});

export const actionSendFiles = (files, category, subCategory) => ({
    type: SEND_FILES,
    files,
    category,
    subCategory
});

export const actionChangeFileName = (id, name) => ({
    type: CHANGE_FILE_NAME,
    id,
    name,
});

export const actionAddFileToState = (id, name) => ({
    type: ADD_FILE_TO_STATE,
    id,
    name,
});

export const actionOpenSuccessMessage = (bool) => ({
    type: OPEN_SUCCESS_MESSAGE,
    bool,
});

export const actionGetFolder = () => ({
  type: GET_FOLDER,
});

export const actionSetFolder = (data) => ({
  type: SET_FOLDER,
  data
})
/**
 * action  ➔ axios's request to get documents from sub_categorie
 * @param {number} id - sub_category's id
 */
export const actionGetDocuments = (id) => ({
  type: GET_DOCUMENTS,
  id,
});

/**
 * action  ➔ Set documents in reducer document
 * @param {array} data - array of object whith documents infos
 * @param {number} id - sub_category_id
 */
export const actionSetDocuments = (data, id) => ({
  type: SET_DOCUMENTS,
  data,
  id,
})

/**
 *
 * @param {number} id - file id
 */
export const actionGetOneFile = (id) => ({
  type: GET_ONE_FILE,
  id
})

/**
 *
 * @param {string} file - response axios - url file
 * @param {string} type_file - type of file 
 */
export const actionSetOneFile = (file, type_file) => ({
  type: SET_ONE_FILE,
  file,
  type_file
})

export const actionDownloadFile = (id, name) => ({
  type: DOWNLOAD_FILE,
  id,
  name
})



