const dummyUser = {
	id: 1,
	nickname: '사자',
	myMusic: [{
		title: 'default',
		data: [
			{title: '브레이브걸스1', writter: '오리1', musicUrl: 'dsE2HTeFC-E', type: 0},
			{title: '브레이브걸스2', writter: '오리2', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스3', writter: '오리3', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스4', writter: '오리4', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스5', writter: '오리5', musicUrl: 'jwTpp7ODeiw', type: 0},
		]
	},{
		title: 'myFavorite',
		data: [
			{title: '브레이브걸스1', writter: '오리1', musicUrl: 'dsE2HTeFC-E', type: 0},
			{title: '브레이브걸스2', writter: '오리2', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스3', writter: '오리3', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스4', writter: '오리4', musicUrl: 'jwTpp7ODeiw', type: 0},
			{title: '브레이브걸스5', writter: '오리5', musicUrl: 'jwTpp7ODeiw', type: 0},
		]	
	}]
};
  
export const initialState = {
	isLoggedIn: false,
	user: null,
	popup: {
		isLoginPopup: false,
		isAddMusic: false,
	}
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

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
		case POPUP_OPEN: {
			console.log(action.type, action.data)
			const popupState = {...state.popup}
			popupState[action.data] = true;
			return {
				...state,
				popup : popupState,
			}
		}
		case POPUP_CLOSE: {
			const popupState = {...initialState.popup};
			return {
				...state,
				popup : popupState,
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
};