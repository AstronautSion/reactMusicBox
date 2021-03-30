import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setDurationRequestAction, setMusicChangeRequestAction } from '../reducers/music';
import { playProgressAnimation } from './MusicBoxProgressBar';

export let TYAPI = null;

const YoutubeAPI = () => {
  const dispatch = useDispatch();
  const musicId = useSelector(state => state.music.nowPlayList.link);
  const isPlay = useSelector(state => state.music.isPlay);
  const musicChange = useSelector(state => state.music.musicChange);
  
  const onStateChanges = useCallback((e) => {
    if(musicChange && e.target.getVideoData().title !== ''){
      e.target.pauseVideo();
      e.target.seekTo(0);
      dispatch(setDurationRequestAction(e.target.getDuration()));
      dispatch(setMusicChangeRequestAction(false));
      playProgressAnimation();
      console.log('YOUTUBE ONCHANGE')
    }

    if(isPlay){
      e.target.playVideo()
      
    }else{
      e.target.pauseVideo();
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