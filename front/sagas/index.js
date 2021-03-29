import {all, fork, take, call, put } from 'redux-saga/effects';

function loginAPI(){
  //return axios.post('/api/login')
}

function* login(){
  try{
    const result = yield call(loginAPI);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
    });
  }catch(error){
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

function* watchLogIn(){
  yield take('LOG_IN_REQUEST', login);
}
function* watchLogOut(){
  yield take('LOG_OUT_REQUEST');
}

function* watchAddMusic(){
  yield take('ADD_MUSIC_REQUEST');
}

export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddMusic),
  ]);
}