const dummyMusic = {
  playList : [
    {id:0, title: 'Easily', author:'Bruno Major', writter: '우주인', link: 'dsE2HTeFC-E', type: 0},
		{id:1,title: 'Weekend', author:'PERC%NT', writter: '우주인', link: 'jwTpp7ODeiw', type: 0},
		{id:2,title: 'Fool For You', author:'Snoh Aalegra', writter: '우주인', link: 'jwTpp7ODeiw', type: 0},
		{id:3,title: 'See You Again', author:'Tyler, The Creator', writter: '우주인', link: 'jwTpp7ODeiw', type: 0},
		{id:4,title: '운전만해', author:'브레이브걸스', writter: '우주인', link: 'jwTpp7ODeiw', type: 0},
  ],
};
  
export const initialState = {
	isPlay: false,
  volume: 0,
  duration: 0,
  nowPlayList: {},
  playList: [],
};

export const MUSIC_PLAY = 'MUSIC_PLAY';
export const LOAD_MUSIC_LIST = 'LOAD_MUSIC_LIST';
export const MUSIC_DELETE = 'MUSIC_DELETE';
export const MUSIC_MODIFY = 'MUSIC_MODIFY';
export const SET_MUSIC_INFO = 'SET_MUSIC_INFO';

export const setMusicInfoAction = (data) => {
  return {
    type: SET_MUSIC_INFO,
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
    case SET_MUSIC_INFO: {
      return{
        ...state,
        volume: action.data.volume,
        duration: action.data.duration,
      }
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
    
		default: {
			return {
				...state,
			}
		}
	}
};