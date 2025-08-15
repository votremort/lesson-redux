const customLogger = storeApi => next => action => {
  if (action.type === 'counter/increment') {
    console.log('Добавляем значение');
  }
  return next(action);
}

export default customLogger;