import axios from 'axios';

import {
    SIGNUP,
} from '../../actions/user';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case SIGNUP: {
            axios
                .post('http://localhost:5050/signup', {
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