import axios from 'axios';

import {
    SIGNUP,
} from '../../actions/user';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case SIGNUP: {
            axios
                .post('http://localhost:3001/signup', {
                    user: action.user
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