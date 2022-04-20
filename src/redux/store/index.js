import {legacy_createStore} from 'redux';
// import rootReducer from '../reducers';
const rootReducer = () => {};

export const store = legacy_createStore(rootReducer);
