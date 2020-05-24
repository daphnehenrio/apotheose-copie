// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { GET_NOTE, actionAddNewNote, actionSetNote, SAVE_NEW_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../../actions/user_note';
import {  actionSetSnack, actionSetLoginForm } from '../../actions/toggle';
import { actionLoading } from '../../actions/document';


export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET NOTE ----------------------------

    case GET_NOTE: {

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .get(`${base_url}/note/${userSession.user_id}`,
          action.note,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionSetNote(res.data));
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetLoginForm());
      }

      break;
    }
    // ---------------------------- SAVE_NEW_NOTE ----------------------------

    case SAVE_NEW_NOTE: {

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

        const token = userSession.token
        const noteStore = store.getState().user_note
        const note = {
          title: noteStore.newNoteTitle,
          content: noteStore.newNoteContent,
          category_id: noteStore.newNoteCategory,
        }
        axios
          .post(`${base_url}/note/${userSession.user_id}`,
            note,
            {
              withCredentials: true,
              headers: {
                'Authorization': `Bearer ${token}`
              },
            }
          )
          .then((res) => {
            store.dispatch(actionAddNewNote(res.data));
          })
          .catch((err) => {
            store.dispatch(actionLoading(false));
            store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
            const button = document.querySelector('#snack');
            button.click();
          });
      } else {
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    case UPDATE_NOTE: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .patch(`${base_url}/note/${userSession.user_id}/${action.note.id}`,
        action.note,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionAddNewNote(res.data));
        })
        .catch((err) => {
          store.dispatch(actionLoading(false));
          store.dispatch(actionSetSnack('error', "Une erreur s'est produite"));
          const button = document.querySelector('#snack');
          button.click();
        });

      } else {
        store.dispatch(actionLoading(false));
        store.dispatch(actionSetLoginForm());      }
      break;
    }

    case DELETE_NOTE: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .delete(`${base_url}/note/${userSession.user_id}/${action.id}`,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionAddNewNote(res.data));
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

    // ---------------------------- DEFAULT ----------------------------

    default: {
      next(action);
    }
  }
};
