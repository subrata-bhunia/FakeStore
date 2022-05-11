import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import {ListReducer, AuthReducer} from '../reducers/index';
import RootSaga from '../saga/RootSaga';
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const reducer = combineReducers({
  ListReducer,
  AuthReducer,
});
const store = configureStore({
  reducer,
  middleware,
});
sagaMiddleware.run(RootSaga);

export default store;
