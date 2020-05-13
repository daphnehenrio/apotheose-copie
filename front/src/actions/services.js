export const GET_SERVICES = 'action/GET_SERVICES';
export const GET_ALL_SERVICES = 'action/GET_ALL_SERVICES';
export const SET_SERVICES = 'action/SET_SERVICES';
export const SET_ALL_SERVICES = 'action/SET_ALL_SERVICES';

export const actionGetServices = (category) => ({
  type: GET_SERVICES,
  category,
});

export const actionGetAllServices = () => ({
  type: GET_ALL_SERVICES,
});

export const actionSetServices = (services) => ({
  type: SET_SERVICES,
  services,
});

export const actionSetAllServices = (services) => ({
  type: SET_ALL_SERVICES,
  services,
});


