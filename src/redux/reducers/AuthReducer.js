import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  token: null,
  isLoading: true,
  error: {},
  loginResponse: {},
  logoutResponse: {},
  resetPassword: {},
  signupResponse: {},
  userType: null,
  otpVerifyResponse: {},
};

const AuthReducer = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    //getToken
    getTokenRequest(state, action) {
      state.isLoading = true;
      state.status = action.type; // Auth/getTokenRequest
    },
    getTokenSuccess(state, action) {
      // getTokenSuccess({token:'sdfgfffea',userType:'admin'})
      state.isLoading = false;
      state.token = action.payload.token;
      state.userType = action.payload.userType;
      state.status = action.type; // Auth/getTokenSuccess
    },
    getTokenFailure(state, action) {
      state.isLoading = false;
      state.error = action.error;
      state.status = action.type;
    },
    //login
    loginRequest(state, action) {
      state.status = action.type;
    },
    loginSuccess(state, action) {
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //signup
    signupRequest(state, action) {
      state.status = action.type;
    },
    signupSuccess(state, action) {
      state.signupResponse = action.payload;
      state.status = action.type;
    },
    signupFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});

export const {
  getTokenFailure,
  getTokenRequest,
  getTokenSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
} = AuthReducer.actions;
export default AuthReducer.reducer;
