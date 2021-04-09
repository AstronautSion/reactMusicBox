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
  ADD_VIDEO_REQUEST, ADD_VIDEO_SUCCESS, ADD_VIDEO_FAILURE,
  GET_VIDEOS_REQUEST, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE,
  LOAD_VIDEOS_REQUEST, LOAD_VIDEOS_SUCCESS, LOAD_VIDEOS_FAILURE,
  DELETE_VIDEO_REQUEST, DELETE_VIDEO_SUCCESS, DELETE_VIDEO_FAILURE,
  MODIFY_VIDEO_REQUEST, MODIFY_VIDEO_SUCCESS, MODIFY_VIDEO_FAILURE,
  GET_ONE_VIDEO_REQUEST, GET_ONE_VIDEO_SUCCESS, GET_ONE_VIDEO_FAILURE,

} from '../reducers/video';

function getOneVideoAPI(data) {
  return axios.get(`/video?id=${data}`);
}

function* getOneVideo(action) {
  console.log(action);
  try {
    const result = yield call(getOneVideoAPI, action.data);
    yield put({
      type: GET_ONE_VIDEO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_ONE_VIDEO_FAILURE,
      error: error.response.data,
    });
  }
}

function getVideosAPI() {
  return axios.get('/videos');
}

function* getVideos(action) {
  try {
    const result = yield call(getVideosAPI, action.data);
    yield put({
      type: GET_VIDEOS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_VIDEOS_FAILURE,
      error: error.response.data,
    });
  }
}

function addVideoAPI(data) {
  return axios.post('/video/add', data);
}
function* addVideo(action) {
  try {
    const result = yield call(addVideoAPI, action.data);
    yield put({
      type: ADD_VIDEO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_VIDEO_FAILURE,
      error: error.response.data,
    });
  }
}

function updateVideoAPI(data) {
  // return axios.post('/api/login')
}
function* updateVideo(action) {
  try {
    yield delay(2000);
    // const result = yield call(updateVideoAPI, action.data);
    yield put({
      type: MODIFY_VIDEO_SUCCESS,
      // data: result.data
    });
  } catch (error) {
    yield put({
      type: MODIFY_VIDEO_FAILURE,
      error: error.response.data,
    });
  }
}

function deleteVideoAPI(data) {
  // return
}
function* deleteVideo(action) {
  try {
    yield delay(1000);
    // const result = yield call(deleteVideoAPI, action.data);
    yield put({
      type: DELETE_VIDEO_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_VIDEO_FAILURE,
      error: error.response.data,
    });
  }
}

function loadVideosAPI(data) {
  return axios.get(`/videos?lastId=${data.lastId || 0}`);
}
function* loadVideos(action) {
  try {
    const result = yield call(loadVideosAPI, action.data);
    yield put({
      type: LOAD_VIDEOS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_VIDEOS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadVideos() {
  yield throttle(5000, LOAD_VIDEOS_REQUEST, loadVideos);
}
function* watchGetVideos() {
  yield takeLatest(GET_VIDEOS_REQUEST, getVideos);
}
function* watchAddVideo() {
  yield takeLatest(ADD_VIDEO_REQUEST, addVideo);
}
function* watchUpdateVideo() {
  yield takeLatest(MODIFY_VIDEO_REQUEST, updateVideo);
}
function* watchDeleteVideo() {
  yield takeLatest(DELETE_VIDEO_REQUEST, deleteVideo);
}

function* watchGetOneVideo() {
  yield takeLatest(GET_ONE_VIDEO_REQUEST, getOneVideo);
}

export default function* videoSaga() {
  yield all([
    fork(watchGetOneVideo),
    fork(watchAddVideo),
    fork(watchGetVideos),
    fork(watchLoadVideos),
    fork(watchUpdateVideo),
    fork(watchDeleteVideo),
  ]);
}
