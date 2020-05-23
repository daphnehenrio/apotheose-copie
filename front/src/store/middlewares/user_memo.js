// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { actionSetMemo, GET_MEMO, SAVE_NEW_MEMO, UPDATE_MEMO, DELETE_MEMO } from 'src/actions//user_memo';
import { actionSetLoginForm } from 'src/actions/toggle';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET_MEMO ----------------------------

    case GET_MEMO: {
      console.log('test get note axios')
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));
      console.log(userSession)

      if(userSession.token){

      const token = userSession.token

      axios
        .get(`${base_url}/memo/${userSession.user_id}`,
          action.memo,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          console.log(res.data)
          store.dispatch(actionSetMemo(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        store.dispatch(actionSetLoginForm());
      }

      break;
    }
    // ---------------------------- SAVE_NEW_MEMO ----------------------------

    case SAVE_NEW_MEMO: {

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token
        const noteStore = store.getState().user_memo;
        const memo = {
          identify: noteStore.newMemoIdentify,
          service_name: noteStore.newMemoServiceName,
          service_phone: noteStore.newMemoServicePhone,
          service_address: noteStore.newMemoServiceAddress,
          service_referent: noteStore.newMemoServiceReferent,
          note_file: noteStore.newMemoNote,
          category_id: noteStore.newMemoCategory
        }
        console.log(memo)
      axios
        .post(`${base_url}/memo/${userSession.user_id}`,
        memo,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionSetMemo(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    // ---------------------------- UPDATE_MEMO ----------------------------

    case UPDATE_MEMO: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      console.log(action)
      axios
        .patch(`${base_url}/memo/${userSession.user_id}/${action.memo.id}`,
        action.memo,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionSetMemo(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    // ---------------------------- DELETE_MEMO ----------------------------

    case DELETE_MEMO: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .delete(`${base_url}/memo/${userSession.user_id}/${action.id}`,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionSetMemo(res.data));
        })
        .catch((err) => {
          console.trace(err);
        });

      } else {
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
