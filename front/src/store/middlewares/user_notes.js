// == import node modules
import axios from 'axios';

// == import action

// == import local
import { base_url } from 'src/utils/axios';
import { actionAddNewNote, SAVE_NEW_NOTE} from '../../actions/user_note';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // ---------------------------- GET MENU ----------------------------

    case SAVE_NEW_NOTE: {

      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .post(`${base_url}/notes/`,
          action.note,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data; boundary=${form._boundary}',
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          store.dispatch(actionAddNewNote(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        store.dispatch(actionSetLoginForm());
      }
      break;
    }

    case UPDATE_NOTE: {
      const userSession = JSON.parse(window.sessionStorage.getItem('user'));

      if(userSession.token){

      const token = userSession.token

      axios
        .patch(`${base_url}/notes/${action.note.id}`,
        action.note,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data; boundary=${form._boundary}',
              'Authorization': `Bearer ${token}`
            },
          })
        .then((res) => {
          console.log('success')
        })
        .catch((err) => {
          console.log(err);
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
