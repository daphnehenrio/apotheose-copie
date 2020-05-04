export const GET_MENU = 'action/GET_MENU';
export const SET_MENU = 'action/SET_MENU';

export const actionGetMenu = () => ({
  type: GET_MENU,
});

export const actionSetMenu = (data) => ({
  type: SET_MENU,
  data
});

