const incrementPlusThree = storeAPI => next => action => {
  if (action.type === 'counter/incrementByAmount') {
    const newAction = {
      ...action,
      payload: action.payload + 3,
    };
    return next(newAction);
  }
  return next(action)
};

export default incrementPlusThree;