export const SET_LOGIN_FORM = 'action/SET_LOGIN_FORM';
export const SET_DRAWER = 'action/SET_DRAWER';
export const SET_FORGET_PASSWORD = 'action/SET_FORGET_PASSWORD';
export const SET_SNACK = 'action/SET_SNACK';

export const actionSetLoginForm = () => ({ type: SET_LOGIN_FORM });


export const actionSetDrawer = (bool) => ({ type: SET_DRAWER, bool });

export const actionSetForgetPassword = () => ({ type: SET_FORGET_PASSWORD });

export const actionSetSnack = (variant, message) => ({
  type: SET_SNACK,
  variant,
  message
});
