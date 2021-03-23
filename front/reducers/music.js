const dummyMusic = {
  playList : [
    {title: '브레이브걸스1', writter: '오리1', musicUrl: 'dsE2HTeFC-E', type: 0},
		{title: '브레이브걸스2', writter: '오리2', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스3', writter: '오리3', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스4', writter: '오리4', musicUrl: 'jwTpp7ODeiw', type: 0},
		{title: '브레이브걸스5', writter: '오리5', musicUrl: 'jwTpp7ODeiw', type: 0},
  ]
};
  
export const initialState = {
	isPlay: false,
  volume: 0,
};

export const MUSIC_PLAY = 'MUSIC_PLAY';
export const LOAD_MUSIC_LIST = 'LOAD_MUSIC_LIST';

export const musicPlay = () => {
  return {
    type: MUSIC_PLAY,
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
			};
		}
    case MUSIC_PLAY: {
      return {
        ...state,
        isPlay : true,
      }
    }
		default: {
			return {
				...state,
			}
		}
	}
};