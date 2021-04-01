import { all, fork } from 'redux-saga/effects';

import musicSaga from './music';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    fork(musicSaga),
    fork(userSaga),
  ]);
}
