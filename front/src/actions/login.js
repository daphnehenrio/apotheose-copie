export const LOGIN = 'action/LOGIN';
export const ERROR_LOGIN = 'action/ERROR_LOGIN';
export const LOGOUT = 'action/LOGOUT';

// => Requete axios findUser
export const actionLogin = (data, history) => ({
  type: LOGIN,
  data,
  history,
});

// => if not findUser => display error message
export const actionErrorLogin = (message) => ({
  type: ERROR_LOGIN,
  message,
});

export const actionLogout = (history) => ({
  type: LOGOUT,
  history,
});
