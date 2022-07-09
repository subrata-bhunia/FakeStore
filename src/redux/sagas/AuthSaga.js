import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import constants from '../../helper/constants';
import {getApi, postApi} from '../../apis';
import {getTokenFailure, getTokenSuccess} from '../reducers/AuthReducer';

export function* getTokenSaga() {
  //   let item = yield select(getItem);
  try {
    const response = yield call(AsyncStorage.getItem, constants.TOKEN);
    const response1 = yield call(AsyncStorage.getItem, constants.USERTYPE);
    if (response != null) {
      yield put(getTokenSuccess({token: response, userType: response1}));
    } else {
      yield put(getTokenSuccess({token: '4567838', userType: 'admin'}));
    }
  } catch (error) {
    yield put(getTokenFailure(error));
  }
}

// export function* loginSaga(action) {
//   let header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//   };
//   try {
//     let response = yield call(postApi, 'login', action.payload, header);
//     console.log(response.data.status);
//     if (response.data.status) {
//       if (action.payload?.remember) {
//         yield call(
//           AsyncStorage.setItem,
//           constants.TOKEN,
//           response.data.data.token,
//         );
//         yield call(
//           AsyncStorage.setItem,
//           constants.USERTYPE,
//           response.data.data.user.user_type,
//         );
//       }
//       yield put(
//         getTokenSuccess({
//           token: response.data.data.token,
//           userType: response.data.data.user.user_type,
//         }),
//       );
//       yield put(loginSuccess(response.data));
//       Toast('Login Successfully');
//     } else {
//       yield put(loginFailure(response.data));
//       Toast(response?.data?.message);
//       // console.log(response);
//     }
//   } catch (error) {
//     console.log(JSON.stringify(error));
//     Toast(error?.response?.data?.message);
//     yield put(loginFailure(error.response));
//   }
// }

export function* signUpSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(postApi, 'users', action.payload, header);
    console.log(response.data);
    // if (response.data.status) {
    //   if (action.payload?.remember) {
    //     yield call(
    //       AsyncStorage.setItem,
    //       constants.TOKEN,
    //       response.data.data.token,
    //     );
    //     yield call(
    //       AsyncStorage.setItem,
    //       constants.USERTYPE,
    //       response.data.data.user.user_type,
    //     );
    //   }
    //   yield put(
    //     getTokenSuccess({
    //       token: response.data.data.token,
    //       userType: response.data.data.user.user_type,
    //     }),
    //   );
    //   yield put(loginSuccess(response.data));
    //   Toast('Login Successfully');
    // } else {
    //   yield put(loginFailure(response.data));
    //   Toast(response?.data?.message);
    //   // console.log(response);
    // }
  } catch (error) {
    console.log(JSON.stringify(error));
    Toast(error?.response?.data?.message);
    yield put(loginFailure(error.response));
  }
}

const watchMan = [
  (function* () {
    yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/signupRequest', signUpSaga);
  })(),
];

export default watchMan;
