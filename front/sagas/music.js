import {
  all,
  put,
  fork,
  delay,
  takeLatest,
  throttle,
  call,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_MUSIC_FAILURE, ADD_MUSIC_REQUEST, ADD_MUSIC_SUCCESS,
  GET_MUSIC_FAILURE, GET_MUSIC_REQUEST, GET_MUSIC_SUCCESS,
  LOAD_MUSIC_FAILURE, LOAD_MUSIC_REQUEST, LOAD_MUSIC_SUCCESS,
  DELETE_MUSIC_FAILURE, DELETE_MUSIC_REQUEST, DELETE_MUSIC_SUCCESS,
  MODIFY_MUSIC_FAILURE, MODIFY_MUSIC_REQUEST, MODIFY_MUSIC_SUCCESS,
} from '../reducers/music';

function getMusicAPI() {
  return axios.get('/music');
}

function* getMusic(action) {
  try {
    const result = yield call(getMusicAPI, action.data);
    yield put({
      type: GET_MUSIC_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_MUSIC_FAILURE,
      error: error.response.data,
    });
  }
}

function addMusicAPI(data) {
  return axios.post('/music/add', data);
}
function* addMusic(action) {
  try {
    const result = yield call(addMusicAPI, action.data);
    yield put({
      type: ADD_MUSIC_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_MUSIC_FAILURE,
      error: error.response.data,
    });
  }
}

function modifyMusicAPI(data) {
  console.log(data);
  // return axios.post('/api/login')
}
function* modifyMusic(action) {
  try {
    yield delay(2000);
    // const result = yield call(modifyMusicAPI, action.data);
    yield put({
      type: MODIFY_MUSIC_SUCCESS,
      // data: result.data
    });
  } catch (error) {
    yield put({
      type: MODIFY_MUSIC_FAILURE,
      error: error.response.data,
    });
  }
}

function deleteMusicAPI(data) {
  console.log(data);
}
function* deleteMusic(action) {
  try {
    yield delay(1000);
    // const result = yield call(deleteMusicAPI, action.data);
    yield put({
      type: DELETE_MUSIC_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_MUSIC_FAILURE,
      error: error.response.data,
    });
  }
}

function loadMusicAPI(data) {
  return axios.get(`/music?lastId=${data.lastId || 0}`);
}
function* loadMusic(action) {
  try {
    const result = yield call(loadMusicAPI, action.data);
    yield put({
      type: LOAD_MUSIC_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_MUSIC_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadMusic() {
  yield throttle(5000, LOAD_MUSIC_REQUEST, loadMusic);
}
function* watchGetMusic() {
  yield takeLatest(GET_MUSIC_REQUEST, getMusic);
}
function* watchAddMusic() {
  yield takeLatest(ADD_MUSIC_REQUEST, addMusic);
}
function* watchModifyMusic() {
  yield takeLatest(MODIFY_MUSIC_REQUEST, modifyMusic);
}
function* watchDeleteMusic() {
  yield takeLatest(DELETE_MUSIC_REQUEST, deleteMusic);
}

export default function* musicSaga() {
  yield all([
    fork(watchAddMusic),
    fork(watchGetMusic),
    fork(watchLoadMusic),
    fork(watchModifyMusic),
    fork(watchDeleteMusic),
  ]);
}
