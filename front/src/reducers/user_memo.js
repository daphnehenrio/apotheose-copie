import {
  SET_MEMO,
  SET_MEMO_CONTENT,
  SET_NEW_IDENTIFY_MEMO,
  SET_NEW_SERVICE_MEMO,
  SET_NEW_PHONE_MEMO,
  SET_NEW_ADDRESS_MEMO,
  SET_NEW_REFERENT_MEMO,
  SET_NEW_NOTE_MEMO,
  SET_NEW_CATEGORY_MEMO,
  CHANGE_CONTENT_MEMO,
} from '../actions/user_memo';


const initialState = {
  memoContent: { id: '', identify: '', service_name: '', service_phone: '', service_address: '', service_referent: '', note_file: '',  category_id: '' },
  memos: [],
  newMemoIdentify: null,
  newMemoServiceName: null,
  newMemoServicePhone: null,
  newMemoServiceAddress: null,
  newMemoServiceReferent: null,
  newMemoNote: null,
  newMemoCategory: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MEMO: {
      return {
        ...state,
        memos: action.data
      }
    }
    case SET_MEMO_CONTENT: {
      return {
        ...state,
        memoContent: {
          id: action.memo.id,
          identify: action.memo.identify,
          service_name: action.memo.service_name,
          service_phone: action.memo.service_phone,
          service_address: action.memo.service_address,
          service_referent: action.memo.service_referent,
          note_file: action.memo.note_file,
          category_id: action.memo.category_id
        },
      };
    }

    case CHANGE_CONTENT_MEMO: {
      return {
        ...state,
        memos: state.memos.map((memo) => {
          if (memo.id === action.data.id) {
            return {
              ...memo,
              id: action.data.id,
              identify: action.data.identify,
              service_name: action.data.service_name,
              service_phone: action.data.service_phone,
              service_address: action.data.service_address,
              service_referent: action.data.service_referent,
              note_file: action.data.note_file,
              category_id: action.data.category_id,
            };
          }
          return {
            ...memo,
          };
        }),
      };
    }


    case SET_NEW_IDENTIFY_MEMO: {
      return {
        ...state,
        newMemoIdentify: action.value,
      }
    }

    case SET_NEW_SERVICE_MEMO: {
      return {
        ...state,
        newMemoServiceName: action.value,
      }
    }

    case SET_NEW_PHONE_MEMO: {
      return {
        ...state,
        newMemoServicePhone: action.value,
      }
    }

    case SET_NEW_ADDRESS_MEMO: {
      return {
        ...state,
        newMemoServiceAddress: action.value,
      }
    }

    case SET_NEW_REFERENT_MEMO: {
      return {
        ...state,
        newMemoServiceReferent: action.value,
      }
    }

    case SET_NEW_NOTE_MEMO: {
      return {
        ...state,
        newMemoNote: action.value,
      }
    }

    case SET_NEW_CATEGORY_MEMO: {
      return {
        ...state,
        newMemoCategory: action.value,
      }
    }

    default: {
      return state;
    }
  }
};
