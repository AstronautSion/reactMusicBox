import {all, put, call, fork, delay, takeLatest, throttle} from 'redux-saga/effects';
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  ACCOUNT_CHECK_REQUEST, ACCOUNT_CHECK_SUCCESS, ACCOUNT_CHECK_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function loginAPI(data) {
  console.log(data);
  // return axios.post('/api/login')
}
function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      // data: result.data
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      data: error.response.data,
    });
  }
}

function accountCheckAPI(data) {
  console.log(data);
  // return axios.post('/api/login')
}
function* accountCheck(action) {
  try {
    console.log('accountcheck::', action.data);
    // const result = yield call(accountCheckAPI, action.data);
    yield delay(1000);
    yield put({
      type: ACCOUNT_CHECK_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: ACCOUNT_CHECK_FAILURE,
      data: error.response.data,
    });
  }
}

function logoutAPI() {

}
function* logout() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: error.response.data,
    });
  }
}

function signupAPI() {

}
function* signup(action) {
  try {
    // const result = yield call(signupAPI);
    yield delay(6000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchLogin() {
  yield throttle(2000, LOG_IN_REQUEST, login);
}

function* watchAccountCheck() {
  yield throttle(2000, ACCOUNT_CHECK_REQUEST, accountCheck);
}
function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}
function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchAccountCheck),
    fork(watchLogout),
    fork(watchSignup),
  ]);
}