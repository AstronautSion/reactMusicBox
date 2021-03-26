import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setMusicInfoAction } from '../reducers/music';

export let TYAPI = null;

const YoutubeAPI = () => {
  const dispatch = useDispatch();
  const musicId = useSelector(state => state.music.nowPlayList.link);
  const onStateChanges = useCallback((e) => {
    console.log(e.target.getDuration())
    console.log('e.target',e.target);
  },[]);

  const onReadyYouTube = (e) => {
    e.target.pauseVideo();
    TYAPI = e.target;

    //set music info
    dispatch(setMusicInfoAction({
      volume: e.target.getVolume(),
      duration: e.target.getDuration(),
    }));
  }

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