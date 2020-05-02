export default (store) => (next) => (action) => {
  switch (action.type) {
    default: {
      console.log('LOGGER : ', action.type);
      next(action);
    }
  }
};
