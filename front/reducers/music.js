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
	isPlay: false,
  musicChange: true,
  duration: 0,
  nowPlayList: {},
  playList: [],
};

export const MUSIC_PLAY = 'MUSIC_PLAY';
export const LOAD_MUSIC_LIST = 'LOAD_MUSIC_LIST';
export const MUSIC_DELETE = 'MUSIC_DELETE';
export const MUSIC_MODIFY = 'MUSIC_MODIFY';
export const SET_NOW_MUSIC_LIST = 'SET_NOW_MUSIC_LIST';
export const SET_DURATION = 'SET_DURATION';
export const SET_MUSIC_CHANGE = 'SET_MUSIC_CHANGE';

export const setMusicChangeAction = (data) => {
  return{
    type: SET_MUSIC_CHANGE,
    data,
  }
}

export const setDurationAction = (data) => {
  return{
    type: SET_DURATION,
    data,
  }
}

export const setNowMusicListAction = (data) => {
  return{
    type: SET_NOW_MUSIC_LIST,
    data,
  }
}

export const musicDeleteAction = (data) => {
  return{
    type: MUSIC_DELETE,
    data,
  }
}
export const musicModifyAction = (data) => {
  return{
    type: MUSIC_MODIFY,
    data,
  }
}

export const musicPlayAction = (data) => {
  return {
    type: MUSIC_PLAY,
    data,
  }
}

export const loadMusicList = {
	type: LOAD_MUSIC_LIST
};
   
export default (state = initialState, action) => {
	switch (action.type) {
    
		case LOAD_MUSIC_LIST: {
			return {
				...state,
				playList: dummyMusic.playList,
        nowPlayList: dummyMusic.playList[0]
			};
		}
  
    case MUSIC_PLAY: {
      return {
        ...state,
        isPlay : action.data,
      }
    }
     
    case MUSIC_MODIFY: {
      const playLists = [...state.playList]
      playLists.map(v => {
        if(v.id === action.data.id){
          v.title = action.data.title;
          v.author = action.data.author;
        }
      });
      return {
        ...state,
        playList: playLists
      }
    }
    case MUSIC_DELETE: {
      const playLists = [...state.playList];
      return {
        ...state, 
        playList: playLists.filter(v => v.id !== action.data) 
      }
    }

    case SET_NOW_MUSIC_LIST: {
      return {
        ...state,
        nowPlayList: action.data,
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