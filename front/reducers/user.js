const dummyUser = {
	id: 1,
	nickname: '사자',
	playList : [
    {title: '브레이브걸스1', writter: '오리1', musicUrl: 'dsE2HTeFC-E', type: 0},
		{title: '브레이브걸스2', writter: '오리2', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스3', writter: '오리3', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스4', writter: '오리4', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스5', writter: '오리5', musicUrl: 'jwTpp7ODeiw', type: 0},
  ]
};
  
export const initialState = {
	isLoggedIn: false,
	isLoginPopup: false,
	user: null,
	signUpData: {},
	loginData: {},
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';
export const POPUP_LOGIN_OPEN = 'POPUP_LOGIN_OPEN';
export const POPUP_LOGIN_CLOSE = 'POPUP_LOGIN_CLOSE';

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

export const popupLoginOpen =  {
	type: POPUP_LOGIN_OPEN,
};
export const popupLoginClose = {
	type: POPUP_LOGIN_CLOSE,
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
		case POPUP_LOGIN_OPEN: {
			return {
				...state,
				isLoginPopup : true,
			}
		}
		case POPUP_LOGIN_CLOSE: {
			return {
				...state,
				isLoginPopup: false,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
};