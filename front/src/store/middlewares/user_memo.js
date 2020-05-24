// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { actionSetMemo, GET_MEMO, SAVE_NEW_MEMO, UPDATE_MEMO, DELETE_MEMO } from 'src/actions//user_memo';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';
import { actionLoading } from '../../actions/document';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET_MEMO ----------------------------

    case GET_MEMO: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));


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
          store.dispatch(actionSetMemo(res.data));
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        window.sessionStorage.clear()
        store.dispatch(actionLoading(false));
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
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        window.sessionStorage.clear()
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    // ---------------------------- UPDATE_MEMO ----------------------------

    case UPDATE_MEMO: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token


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
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        window.sessionStorage.clear()
        store.dispatch(actionLoading(false));
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
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        window.sessionStorage.clear()
        store.dispatch(actionLoading(false));
        store.dispatch(SET_LOGIN_FORM());
      }
      break;
    }

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
