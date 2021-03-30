const dummyMusic = {
  playList : [
    {id:0, title: 'Photograph ', author:'offonoff', writter: '우주인', link: '2b1E-zu-QEM', type: 0},
		{id:1,title: 'Weekend', author:'PERC%NT', writter: '우주인', link: 'WRtbq1W1GFY', type: 0},
		{id:2,title: 'Slow dancing in the dark', author:'Joji', writter: '우주인', link: 'K3Qzzggn--s', type: 0},
    {id:3,title: '5초 샘플입니다.', author:'5초', writter: '우주인', link: 'Jv8YaypLNBc', type: 0},
    
		{id:4,title: 'Sanctuary', author:'Joji', writter: '우주인', link: '5-uWlFq380M', type: 0},
		{id:5,title: 'Liar', author:'Taek ', writter: '우주인', link: 'XP0lIqnvFCY', type: 0},
  ],
};
  
export const initialState = {
  getMusicLoading: false,  //음악가져오기 시도중
  getMusicDone: false,
  getMusicError: null,

  modifyMusicLoading: false,  //음악수정 시도중
  modifyMusicDone: false,
  modifyMusicError: null,

  deleteMusicLoading: false,  //음악삭제 시도중
  deleteMusicDone: false,
  deleteMusicError: null,
 
	isPlay: false,
  musicChange: true,
  duration: 0,
  nowPlayList: {},
  playList: [],
};


export const ADD_MUSIC_REQUEST = 'ADD_MUSIC_REQUEST';
export const ADD_MUSIC_SUCCESS = 'ADD_MUSIC_SUCCESS';
export const ADD_MUSIC_FAILURE = 'ADD_MUSIC_FAILURE';

export const GET_MUSIC_REQUEST = 'GET_MUSIC_REQUEST';
export const GET_MUSIC_SUCCESS = 'GET_MUSIC_SUCCESS';
export const GET_MUSIC_FAILURE = 'GET_MUSIC_FAILURE';

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
 

export const addMusicRequestAction = (data) => {
  return{
    type: ADD_MUSIC_REQUEST,
    data,
  }
}
export const setNowMusicRequestAction = (data) => {
  return{
    type: SET_NOW_MUSIC_REQUEST,
    data,
  }
}
export const deleteMusicRequestAction = (data) => {
  return{
    type: DELETE_MUSIC_REQUEST,
    data,
  }
}
export const modifyMusicRequestAction = (data) => {
  return{
    type: MODIFY_MUSIC_REQUEST,
    data,
  }
}
export const getMusicRequestAction = (data) => {
  return{
    type: GET_MUSIC_REQUEST,
    data,
  }
};
 
export const musicPlayRequestAction = (data) => {
  return {
    type: MUSIC_PLAY,
    data,
  }
}
export const setDurationRequestAction = (data) => {
  return{
    type: SET_DURATION,
    data,
  }
}
export const setMusicChangeRequestAction = (data) => {
  return{
    type: SET_MUSIC_CHANGE,
    data,
  }
}

export default (state = initialState, action) => {
	switch (action.type) {
    
		case GET_MUSIC_REQUEST: {
			return {
				...state,
				getMusicLoading: true,
        getMusicDone: false,
        getMusicError: null,
			};
		}
    case GET_MUSIC_SUCCESS: {
			return {
				...state,
        getMusicLoading: false,
        getMusicDone: false,
				playList: dummyMusic.playList,
        nowPlayList: dummyMusic.playList[0]
			};
		}
    case GET_MUSIC_FAILURE: {
			return {
				...state,
        getMusicLoading: false,
        getMusicError: action.error,
			};
		}
  
    
    case MODIFY_MUSIC_REQUEST: {
      return {
        ...state,
        modifyMusicLoading: true,
        modifyMusicDone: false,
        modifyMusicError: null,
      }
    }
    case MODIFY_MUSIC_SUCCESS: {
      const playLists = [...state.playList]
      playLists.map(v => {
        if(v.id === action.data.id){
          v.title = action.data.title;
          v.author = action.data.author;
        }
      });
      return {
        ...state,
        modifyMusicLoading: false,
        modifyMusicDone: true,
        playList: playLists
      }
    }
    case MODIFY_MUSIC_FAILURE: {
      return {
        ...state,
        modifyMusicError: action.error,
        modifyMusicLoading: false,
      }
    }


    case DELETE_MUSIC_REQUEST: {
      return {
        ...state, 
        deleteMusicLoading: true,
        deleteMusicDone: true,
        deleteMusicError: null,
      }
    }
    case DELETE_MUSIC_SUCCESS: {
      const playLists = [...state.playList];
      return {
        ...state, 
        deleteMusicLoading: false,
        deleteMusicDone: true,
        playList: playLists.filter(v => v.id !== action.data) 
      }
    }
    case DELETE_MUSIC_FAILURE: {
      return {
        ...state, 
        deleteMusicLoading: false,
        deleteMusicError: action.error,
      }
    }


    case SET_NOW_MUSIC_REQUEST: {
      return {
        ...state,
        nowPlayList: action.data,
      }
    }
    case MUSIC_PLAY: {
      return {
        ...state,
        isPlay : action.data,
      }
    }

    case SET_DURATION: {
      return{
        ...state,
        duration: action.data,
      }
    }
    
    case SET_MUSIC_CHANGE: {
      return{
        ...state,
        musicChange: action.data,
      }
    }
    
		default: {
			return {
				...state,
			}
		}
	}
};