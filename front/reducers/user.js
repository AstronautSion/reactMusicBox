const dummyUser = {
	id: 1,
	userId: 'Astronaut.sion',
	nickname: '사자',
};
  
export const initialState = {
	loginLoading: false, // 로그인 시도중
	loginDone: false,
	loginError: null,
	logoutLoading: false, // 로그아웃 시도중
	logoutDone: false,
	logoutError: null,
	AccountCheckLoading: false, // 계정 확인 시도중
	AccountCheckDone: false,
	AccountCheckError: null,
	signupLoading: false, // 회원가입 시도중
	signupDone: false,
	signupError: null,
	userModifyLoading: false, // 회원정보수정 시도중
	userModifyDone: false,
	userModifyError: null,
	me: null,
	popup: {
		data: null,
		isLoginPopup: false,
		isAddMusic: false,
		isModiMusic: false,
	},
	loginData: {},
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'LOG_IN_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const ACCOUNT_CHECK_REQUEST = 'ACCOUNT_CHECK_REQUEST';
export const ACCOUNT_CHECK_SUCCESS = 'ACCOUNT_CHECK_SUCCESS';
export const ACCOUNT_CHECK_FAILURE = 'ACCOUNT_CHECK_FAILURE';

export const USER_MODIFY_REQUEST = 'USER_MODIFY_REQUEST';
export const USER_MODIFY_SUCCESS = 'USER_MODIFY_SUCCESS';
export const USER_MODIFY_FAILURE = 'USER_MODIFY_FAILURE';


export const POPUP_OPEN = 'POPUP_OPEN';
export const POPUP_CLOSE = 'POPUP_CLOSE';
 

export const AccountCheckRequestAction = (data) => {
	return{
		type: ACCOUNT_CHECK_REQUEST,
		data,
	}
}

export const loginRequestAction = (data) => {
	return {
		type: LOG_IN_REQUEST,
		data,
	}
};

export const signUpRequestAction = (data) => {
	return {
		type: SIGN_UP_REQUEST,
		data,
	}
};

export const userModifyRequestAction = (data) => {
	return {
		type: USER_MODIFY_REQUEST,
		data,
	}
}

export const logoutRequestAction = {
	type: LOG_OUT_REQUEST,
};

export const popupOpenRequestAction = (data) => {
	return {
		type: POPUP_OPEN,
		data,
	}
};
export const popupCloseRequestAction = {
	type: POPUP_CLOSE,
};


export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST: {
			return {
				...state,
				loginLoading: true,
				loginDone: false,
				logInError: null,
			};
		}

		case LOG_IN_SUCCESS: {
			return{
				...state,
				loginLoading: false,
				loginDone:true,
				me: dummyUser,
			}
		}

		case LOG_IN_FAILURE: {
			return {
				...state,
				loginLoading: false,
				logInError: action.error,
				loginData: null,
			}
		}

		case ACCOUNT_CHECK_REQUEST: {
			return{
				...state,
				loginData: action.data,
			}
		}
		case ACCOUNT_CHECK_SUCCESS: {
			return{
				...state,
				loginData: action.data,
			}
		}
		case ACCOUNT_CHECK_FAILURE: {
			return{
				...state,
				loginData: action.data,
			}
		}

		case LOG_OUT_REQUEST: {
			return {
				...state,
				logoutLoading: true, // 로그아웃 시도중
				logoutDone: false,
				logoutError: null,
			};
		}
		case LOG_OUT_SUCCESS: {
			return {
				...state,
				me: null,
				logoutLoading: false,
				logoutDone: true,
			};
		}
		case LOG_OUT_FAILURE: {
			return {
				...state,
				logoutLoading: false,
				logoutError: action.error,
			};
		}

		case SIGN_UP_REQUEST: {
			return {
				...state,
				signupLoading: true,
				signupDone:false,
				signUpError: null,
			};
		}
		case SIGN_UP_SUCCESS: {
			return {
				...state,
				signupLoading: false,
				signupDone: true,
				signUpData: action.data,
			};
		}
		case SIGN_UP_FAILURE: {
			return {
				...state,
				signupLoading: false,
				signUpError: action.error,
			};
		}

		case USER_MODIFY_REQUEST: {
			return {
				...state,
				userModifyLoading: true,
				userModifyDone: false,
				userModifyError: null,
			}
		}

		case USER_MODIFY_SUCCESS: {
			return {
				...state,
				userModifyLoading: false,
				userModifyDone: true,
				user: {
					...state.user,
					nickname: action.data.nickname,
					userId: action.data.userId,
				},
			}
		}
		case USER_MODIFY_FAILURE: {
			return {
				...state,
				userModifyLoading: false,
				userModifyError: action.error,
			}
		}

		case POPUP_OPEN: {
			return {
				...state,
				popup : {
					...state.popup,
					[action.data.key]: true,
					data: action.data.value,
				},
			}
		}
		case POPUP_CLOSE: {
			return {
				...state,
				popup : {
					...initialState.popup
				},
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
};