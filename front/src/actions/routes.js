

export const CHANGE_PAGE = 'action/CHANGE_PAGE';

export const actionChangePage = (route, history) => ({
  type: CHANGE_PAGE,
  route,
  history
});
