import {all} from 'redux-saga/effects';
import ListSaga from './ListSaga';
import AuthSaga from './AuthSaga';

const combinedSaga = [...ListSaga, ...AuthSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
