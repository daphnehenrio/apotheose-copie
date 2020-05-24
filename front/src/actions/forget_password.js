export const SET_MAIL_FORGET = 'action/SET_MAIL_FORGET';
export const SEND_MAIL_FORGET_PASSWORD = 'action/SEND_MAIL_FORGET_PASSWORD';


export const actionSetMailForget = (value) => ({
  type: SET_MAIL_FORGET,
  value,
});


export const actionSendMailForgetPassword = (data) => ({
  type: SEND_MAIL_FORGET_PASSWORD,
  data,
});
