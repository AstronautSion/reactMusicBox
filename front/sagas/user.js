import { all, put, call, fork, takeLatest, throttle } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  UPDATE_MY_INFO_REQUEST,
  UPDATE_MY_INFO_SUCCESS,
  UPDATE_MY_INFO_FAILURE,
} from "../reducers/user";

function loginAPI(data) {
  return axios.post("/user/login", data);
}
function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post("/user/logout");
}
function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}

function signupAPI(data) {
  return axios.post("/user/signup", data);
}
function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get("/user");
}
function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    if (result.data.error) {
      yield put({
        type: LOAD_MY_INFO_FAILURE,
        error: result.data.error,
      });
    } else {
      yield put({
        type: LOAD_MY_INFO_SUCCESS,
        data: result.data,
      });
    }
  } catch (error) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error.response.error,
    });
  }
}

function updateMyInfoAPI(data) {
  return axios.post("/user/update", data);
}
function* updateMyInfo(action) {
  try {
    const result = yield call(updateMyInfoAPI, action.data);
    yield put({
      type: UPDATE_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_MY_INFO_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLogin() {
  yield throttle(2000, LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}
function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchUpdateMyInfo() {
  yield throttle(2000, UPDATE_MY_INFO_REQUEST, updateMyInfo);
}
export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLoadMyInfo),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchUpdateMyInfo),
  ]);
}
