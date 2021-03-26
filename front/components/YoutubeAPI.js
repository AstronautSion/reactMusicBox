import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

export let TYAPI = null;
let oneBool = true;

const YoutubeAPI = () => {
  const musicId = useSelector(state => state.music.nowPlayList.link);
  const isPlay = useSelector(state => state.music.isPlay);
  let volumeInit = 0;
  
  const onStateChanges = useCallback((e) => {
    
    if(oneBool && e.target.getDuration()){
      e.target.pauseVideo();
      e.target.setVolume(volumeInit);
      e.target.seekTo(0)
      oneBool = false;
    }
    
  },[volumeInit]);
  
  const onReadyYouTube = useCallback((e) => {
    TYAPI = e.target;
    volumeInit = TYAPI.getVolume();
    TYAPI.setVolume(0);
    
  },[volumeInit]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };


  return (
    <YouTube 
      videoId={musicId}
      containerClassName="embed embed-youtube"
      onStateChange={(e) => onStateChanges(e)}
      opts={opts}
      onReady={onReadyYouTube}
    />
  );
}

export default YoutubeAPI;