import produce from 'immer';

export const initialState = {
  loadMyInfoLoading: false, // 유저정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,
  updateMyInfoLoading: false, // 회원정보수정 시도중
  updateMyInfoDone: false,
  updateMyInfoError: null,
  me: null,
  popup: {
    data: null,
    loginPopup: false,
    addMusic: false,
    modifyMusic: false,
  },
  loginPopupOrder: 0,
  loginData: {},
  signupData: {},
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const UPDATE_MY_INFO_REQUEST = 'UPDATE_MY_INFO_REQUEST';
export const UPDATE_MY_INFO_SUCCESS = 'UPDATE_MY_INFO_SUCCESS';
export const UPDATE_MY_INFO_FAILURE = 'UPDATE_MY_INFO_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const POPUP_OPEN = 'POPUP_OPEN';
export const POPUP_CLOSE = 'POPUP_CLOSE';

export const LOGIN_FORM_ORDER = 'LOGIN_FORM_ORDER';

export const setLoginPopupOrder = (data) => ({
  type: LOGIN_FORM_ORDER,
  data,
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});
export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});
export const updateMyInfoRequestAction = (data) => ({
  type: UPDATE_MY_INFO_REQUEST,
  data,
});

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};

export const popupOpenRequestAction = (data) => ({
  type: POPUP_OPEN,
  data,
});
export const popupCloseRequestAction = {
  type: POPUP_CLOSE,
};

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.loginLoading = true;
      draft.loginDone = false;
      draft.loginError = null;
      break;

    case LOG_IN_SUCCESS:
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.me = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.loginLoading = false;
      draft.loginError = action.error;
      draft.loginData = null;
      break;

    case LOG_OUT_REQUEST:
      draft.logoutLoading = true;
      draft.logoutDone = false;
      draft.logoutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logoutLoading = false;
      draft.logoutDone = true;
      draft.me = null;
      draft.loginDone = false;
      break;

    case LOG_OUT_FAILURE:
      draft.logoutLoading = false;
      draft.logoutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signupLoading = true;
      draft.signupDone = false;
      draft.signupError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signupLoading = false;
      draft.signupDone = true;
      draft.signupData = action.data;
      break;

    case SIGN_UP_FAILURE:
      draft.signupLoading = false;
      draft.signupError = action.error;
      break;

    case UPDATE_MY_INFO_REQUEST:
      draft.updateMyInfoLoading = true;
      draft.updateMyInfoDone = false;
      draft.updateMyInfoError = null;
      break;

    case UPDATE_MY_INFO_SUCCESS:
      draft.updateMyInfoLoading = false;
      draft.updateMyInfoDone = true;
      draft.me.nickname = action.data.nickname;
      draft.me.age = action.data.age;
      draft.me.gender = action.data.gender;
      break;

    case UPDATE_MY_INFO_FAILURE:
      draft.updateMyInfoLoading = false;
      draft.updateMyInfoError = action.error;
      break;

    case POPUP_OPEN:
      draft.popup[action.data.key] = true;
      draft.popup.data = action.data.value;
      break;

    case POPUP_CLOSE:
      draft.popup = initialState.popup;
      draft.loginPopupOrder = 0;
      break;
    case LOGIN_FORM_ORDER:
      draft.loginPopupOrder = action.data;
      break;

    default:
      break;
  }
});
