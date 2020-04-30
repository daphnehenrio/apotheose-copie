import axios from 'axios';
import React from 'react';

import {
    SIGNUP,
} from '../../actions/user';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case SIGNUP: {
          const { user } = store.getState().user.user;
          const userInfo = {
            login: user.username,
            first_name: user.firstName,
            last_name: user.lastName,
            password: user.password,
            email: user.email,
            gender: user.gender,
            cellphoneNumber: user.cellphoneNumber,
            fixNumber: user.fixNumber,
            workPhone: user.workPhone,
            zipCode: user.zipCode,
            city: user.city,
            children: user.children,
            adress: user.adress,
          }
            axios
                .post('http://localhost:5050/signup',
                  userInfo,
                {
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
