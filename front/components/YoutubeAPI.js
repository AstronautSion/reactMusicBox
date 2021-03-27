import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setDurationAction, setMusicChangeAction } from '../reducers/music';

export let TYAPI = null;
let timeouts = null;

const YoutubeAPI = () => {
  const dispatch = useDispatch();
  const musicId = useSelector(state => state.music.nowPlayList.link);
  const isPlay = useSelector(state => state.music.isPlay);
  const musicChange = useSelector(state => state.music.musicChange);
  
  const onStateChanges = useCallback((e) => {
    console.log('[[CHANGE]]')

    if(musicChange && e.target.getVideoData().title){
        e.target.pauseVideo();
        e.target.seekTo(0);
        dispatch(setDurationAction(e.target.getDuration()));
        dispatch(setMusicChangeAction(false));
        console.log('^^')
    }
  },[isPlay, musicChange]);
  
  const onReadyYouTube = useCallback((e) => {
    TYAPI = e.target;
    console.log('[[READY]]');
  },[]);

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