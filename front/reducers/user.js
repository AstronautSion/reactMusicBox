const dummyUser = {
	id: 1,
	userId: 'Astronaut.sion',
	nickname: '사자',
};
  
export const initialState = {
	isLoggedIn: false,
	user: null,
	popup: {
		data: null,
		isLoginPopup: false,
		isAddMusic: false,
		isModiMusic: false,
	}
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

export const USER_MODIFY = 'USER_MODIFY';

export const POPUP_OPEN = 'POPUP_OPEN';
export const POPUP_CLOSE = 'POPUP_CLOSE';

export const signUpAction = (data) => {
	return {
		type: SIGN_UP,
		data,
	};
};

export const signUpSuccess = {
	type: SIGN_UP_SUCCESS,
};

export const loginAction = (data) => {
	return {
		type: LOG_IN,
		data,
	}
};
export const logoutAction = {
	type: LOG_OUT,
};

export const signUp = (data) => {
	return {
		type: SIGN_UP,
		data,
	}
};

export const userModifyAction = (data) => {
	return {
		type: USER_MODIFY,
		data,
	}
}

export const popupOpen = (data) => {
	return {
		type: POPUP_OPEN,
		data,
	}
};
export const popupClose = {
	type: POPUP_CLOSE,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN: {
			return {
				...state,
				isLoggedIn: true,
				user: dummyUser,
				loginData: action.data,
			};
		}
		case LOG_OUT: {
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		}
		case SIGN_UP: {
			return {
				...state,
				signUpData: action.data,
			};
		}
		case USER_MODIFY: {
			return {
				...state,
				user: {
					...state.user,
					nickname: action.data.nickname,
					userId: action.data.userId,
				},
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