import { GET_MENU , actionSetMenu } from "../../actions/menu";
import axios from 'axios';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MENU: {
      axios
        .get('http://localhost:5050/left-menu',
        {
            withCredentials: true,
        })
        .then((res) => {
          console.log(res)
          store.dispatch(actionSetMenu(res.data))
        })
        .catch((err) => {
            console.log(err);
        });
      break;
    }
    default: {
      next(action);
    }
  }
};



