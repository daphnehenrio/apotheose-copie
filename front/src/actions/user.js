export const LOG_USER = 'action/LOG_USER';

// => If findUser => Connect l'utilisateur
export const actionLogUser = (user) => ({
  type: LOG_USER,
  user,
});
