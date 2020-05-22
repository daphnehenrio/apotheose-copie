export const GET_MEMO = 'action/GET_MEMO';
export const SET_MEMO = 'action/SET_MEMO';
export const SAVE_NEW_MEMO = 'action/SAVE_NEW_MEMO';
export const UPDATE_MEMO = 'action/UPDATE_MEMO';
export const DELETE_MEMO ='action/DELETE_MEMO';
export const SET_MEMO_CONTENT = 'action/SET_MEMO_CONTENT';
export const SET_NEW_TITLE_MEMO = 'action/SET_NEW_TITLE_MEMO';
export const SET_NEW_IDENTIFY_MEMO = 'action/SET_NEW_IDENTIFY_MEMO';
export const SET_NEW_SERVICE_MEMO = 'action/SET_NEW_SERVICE_MEMO';
export const SET_NEW_PHONE_MEMO = 'action/SET_NEW_PHONE_MEMO';
export const SET_NEW_ADDRESS_MEMO = 'action/SET_NEW_ADDRESS_MEMO';
export const SET_NEW_REFERENT_MEMO = 'action/SET_NEW_REFERENT_MEMO';
export const SET_NEW_NOTE_MEMO = 'action/SET_NEW_NOTE_MEMO';
export const SET_NEW_CATEGORY_MEMO = 'action/SET_NEW_CATEGORY_MEMO';
export const CHANGE_CONTENT_MEMO = 'action/CHANGE_CONTENT_MEMO';


export const actionGetMemo = () => ({
  type: GET_MEMO,
})

export const actionSetMemo = (data) => ({
  type: SET_MEMO,
  data,
})

export const actionSaveNewMemo = (memo) => ({
  type: SAVE_NEW_MEMO,
  memo
})

export const actionSetMemoContent = (memo) => ({
  type: SET_MEMO_CONTENT,
  memo,
})


export const actionChanqeContentMemo = (data) => ({
  type: CHANGE_CONTENT_MEMO,
  data,
})

export const actionUpdateMemo = (memo) => ({
  type: UPDATE_MEMO,
  memo,
})

export const actionDeleteMemo = (id) => ({
  type: DELETE_MEMO,
  id,
})

export const actionSetNewTitleMemo = (value) => ({
  type: SET_NEW_TITLE_MEMO,
  value,
})

export const actionSetNewIdentifyMemo = (value) => ({
  type: SET_NEW_IDENTIFY_MEMO,
  value,
})

export const actionSetNewServiceMemo = (value) => ({
  type: SET_NEW_SERVICE_MEMO,
  value,
})

export const actionSetNewPhoneMemo = (value) => ({
  type: SET_NEW_PHONE_MEMO,
  value,
})

export const actionSetNewAddressMemo = (value) => ({
  type: SET_NEW_ADDRESS_MEMO,
  value,
})

export const actionSetNewReferentMemo = (value) => ({
  type: SET_NEW_REFERENT_MEMO,
  value,
})

export const actionSetNewNoteMemo = (value) => ({
  type: SET_NEW_NOTE_MEMO,
  value,
})

export const actionSetNewCategoryMemo = (value) => ({
  type: SET_NEW_CATEGORY_MEMO,
  value,
})
