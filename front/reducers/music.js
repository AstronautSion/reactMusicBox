import produce from 'immer';

export const initialState = {
  hasMoreMusic: true,
  getMusicLoading: false, // 음악가져오기 시도중
  getMusicDone: false,
  getMusicError: null,
  addMusicLoading: false, // 음악추가 시도중
  addMusicDone: false,
  addMusicError: null,
  modifyMusicLoading: false, // 음악수정 시도중
  modifyMusicDone: false,
  modifyMusicError: null,
  deleteMusicLoading: false, // 음악삭제 시도중
  deleteMusicDone: false,
  deleteMusicError: null,

  isPlay: false,
  musicChange: true,
  duration: 0,
  nowPlayList: null,
  playList: [],
};

export const ADD_MUSIC_REQUEST = 'ADD_MUSIC_REQUEST';
export const ADD_MUSIC_SUCCESS = 'ADD_MUSIC_SUCCESS';
export const ADD_MUSIC_FAILURE = 'ADD_MUSIC_FAILURE';

export const GET_MUSIC_REQUEST = 'GET_MUSIC_REQUEST';
export const GET_MUSIC_SUCCESS = 'GET_MUSIC_SUCCESS';
export const GET_MUSIC_FAILURE = 'GET_MUSIC_FAILURE';

export const LOAD_MUSIC_REQUEST = 'LOAD_MUSIC_REQUEST';
export const LOAD_MUSIC_SUCCESS = 'LOAD_MUSIC_SUCCESS';
export const LOAD_MUSIC_FAILURE = 'LOAD_MUSIC_FAILURE';

export const MODIFY_MUSIC_REQUEST = 'MODIFY_MUSIC_REQUEST';
export const MODIFY_MUSIC_SUCCESS = 'MODIFY_MUSIC_SUCCESS';
export const MODIFY_MUSIC_FAILURE = 'MODIFY_MUSIC_FAILURE';

export const DELETE_MUSIC_REQUEST = 'DELETE_MUSIC_REQUEST';
export const DELETE_MUSIC_SUCCESS = 'DELETE_MUSIC_SUCCESS';
export const DELETE_MUSIC_FAILURE = 'DELETE_MUSIC_FAILURE';

export const SET_NOW_MUSIC_REQUEST = 'SET_NOW_MUSIC_REQUEST';
export const SET_DURATION = 'SET_DURATION';
export const MUSIC_PLAY = 'MUSIC_PLAY';
export const SET_MUSIC_CHANGE = 'SET_MUSIC_CHANGE';

export const addMusicRequestAction = (data) => ({
  type: ADD_MUSIC_REQUEST,
  data,
});
export const setNowMusicRequestAction = (data) => ({
  type: SET_NOW_MUSIC_REQUEST,
  data,
});
export const deleteMusicRequestAction = (data) => ({
  type: DELETE_MUSIC_REQUEST,
  data,
});
export const modifyMusicRequestAction = (data) => ({
  type: MODIFY_MUSIC_REQUEST,
  data,
});
export const loadMusicRequestAction = (data) => ({
  type: LOAD_MUSIC_REQUEST,
  data,
});
export const getMusicRequestAction = {
  type: GET_MUSIC_REQUEST,
};
export const musicPlayRequestAction = (data) => ({
  type: MUSIC_PLAY,
  data,
});
export const setDurationRequestAction = (data) => ({
  type: SET_DURATION,
  data,
});
export const setMusicChangeRequestAction = (data) => ({
  type: SET_MUSIC_CHANGE,
  data,
});

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case GET_MUSIC_REQUEST:
      draft.getMusicLoading = true;
      draft.getMusicDone = false;
      draft.getMusicError = null;
      break;
    case GET_MUSIC_SUCCESS:
      draft.getMusicLoading = false;
      draft.getMusicDone = true;
      draft.playList = action.data;
      break;
    case GET_MUSIC_FAILURE:
      draft.getMusicLoading = false;
      draft.getMusicError = action.error;
      break;

    case ADD_MUSIC_REQUEST:
      draft.addMusicLoading = true;
      draft.addMusicDone = false;
      draft.addMusicError = null;
      break;
    case ADD_MUSIC_SUCCESS:
      console.log(action.data);
      draft.addMusicLoading = false;
      draft.addMusicDone = true;
      draft.playList.unshift(action.data);
      break;
    case ADD_MUSIC_FAILURE:
      draft.addMusicLoading = false;
      draft.addMusicError = action.error;
      break;

    case LOAD_MUSIC_REQUEST:
      draft.loadMusicLoading = true;
      draft.loadMusicDone = false;
      draft.loadMusicError = null;
      break;
    case LOAD_MUSIC_SUCCESS:
      draft.loadMusicLoading = false;
      draft.loadMusicDone = true;
      draft.playList = draft.playList.concat(action.data);
      draft.hasMoreMusic = action.data.length === 20;
      break;
    case LOAD_MUSIC_FAILURE:
      draft.loadMusicLoading = false;
      draft.loadMusicError = action.error;
      break;

    case MODIFY_MUSIC_REQUEST:
      draft.modifyMusicLoading = true;
      draft.modifyMusicDone = false;
      draft.modifyMusicError = null;
      break;
    case MODIFY_MUSIC_SUCCESS:
      const findList = draft.playList.find((v) => v.id === action.data.id);
      findList.title = action.data.title;
      findList.author = action.data.author;
      draft.modifyMusicLoading = false;
      draft.modifyMusicDone = true;
      break;
    case MODIFY_MUSIC_FAILURE:
      draft.modifyMusicError = action.error;
      draft.modifyMusicLoading = false;
      break;

    case DELETE_MUSIC_REQUEST:
      draft.deleteMusicLoading = true;
      draft.deleteMusicDone = false;
      draft.deleteMusicError = null;
      break;
    case DELETE_MUSIC_SUCCESS:
      draft.deleteMusicLoading = false;
      draft.deleteMusicDone = true;
      draft.playList = draft.playList.filter((v) => v.id !== action.data);
      break;
    case DELETE_MUSIC_FAILURE:
      draft.deleteMusicLoading = false;
      draft.deleteMusicError = action.error;
      break;

    case SET_NOW_MUSIC_REQUEST:
      draft.nowPlayList = action.data;
      break;

    case MUSIC_PLAY:
      draft.isPlay = action.data;
      break;

    case SET_DURATION:
      draft.duration = action.data;
      break;

    case SET_MUSIC_CHANGE:
      draft.musicChange = action.data;
      break;

    default:
      break;
  }
});
