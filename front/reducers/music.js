const dummyMusic = {
  
  playList : [
    {id:0, title: 'Easily', author:'Bruno Major', writter: '우주인', musicUrl: 'dsE2HTeFC-E', type: 0},
		{id:1,title: 'Weekend', author:'PERC%NT', writter: '우주인', musicUrl: 'jwTpp7ODeiw', type: 0},
		{id:2,title: 'Fool For You', author:'Snoh Aalegra', writter: '우주인', musicUrl: 'jwTpp7ODeiw', type: 0},
		{id:3,title: 'See You Again', author:'Tyler, The Creator', writter: '우주인', musicUrl: 'jwTpp7ODeiw', type: 0},
		{id:4,title: '운전만해', author:'브레이브걸스', writter: '우주인', musicUrl: 'jwTpp7ODeiw', type: 0},
  ]
};
  
export const initialState = {
	isPlay: false,
  volume: 0,
  musicId: null,
  musicType: null,
  musicPlayer : null,  
};

export const MUSIC_PLAY = 'MUSIC_PLAY';
export const LOAD_MUSIC_LIST = 'LOAD_MUSIC_LIST';
export const CHANGE_MUSIC_ID = 'CHANGE_MUSIC_ID';
export const MUSIC_PLAYER = 'MUSIC_PLAYER';

export const MUSIC_DELETE = 'MUSIC_DELETE';

export const changeMusicIdAction = (data) => {  
  return{
    type: CHANGE_MUSIC_ID,
    data,
  }
}
export const musicPlayerAction = (data) =>{
  return{
    type: MUSIC_PLAYER,
    data,
  }  
}

export const musicDeleteAction = (data) =>{
  return{
    type: MUSIC_DELETE,
    data,
  }
}

export const musicPlay = {
  type: MUSIC_PLAY,
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
			};
		}
    case MUSIC_PLAY: {
      return {
        ...state,
        isPlay : true,
      }
    }
    case CHANGE_MUSIC_ID: {
      return {
        ...state,
        musicId: action.data,
      }
    }
    case MUSIC_PLAYER: {
      return {
        ...state,
        musicPlayer: action.data,
      }
    }
    // case MUSIC_MODIFY: {
    //   const playLists = [...state.playList];
    //   return {
    //     ...state,
    //     playList: playLists
    //   }
    // }
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