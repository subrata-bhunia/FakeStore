import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import AuthReducer from './reducers/AuthReducer';
import RootSaga from './sagas/RootSaga';
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {AuthReducer},
  middleware,
});
sagaMiddleware.run(RootSaga);
