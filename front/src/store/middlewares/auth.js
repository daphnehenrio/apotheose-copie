import axios from 'axios';

import {
    LOGIN,
} from '../../actions/user';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            axios
                .post('http://localhost:5050/login', {
                    user: store.getState().user.user
                }, {
                    withCredentials: true,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
            return;
        }
        default: {
            next(action);
        }
    }
};