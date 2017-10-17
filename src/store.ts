import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpics);

export default createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
