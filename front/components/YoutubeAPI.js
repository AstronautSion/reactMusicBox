import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setDurationRequestAction, setMusicChangeRequestAction } from '../reducers/music';

export let TYAPI = null;

const YoutubeAPI = () => {
  const dispatch = useDispatch();
  const musicId = useSelector((state) => state.music.nowPlayList?.link);
  const isPlay = useSelector((state) => state.music.isPlay);
  const musicChange = useSelector((state) => state.music.musicChange);

  const onStateChanges = useCallback((e) => {
    console.log('API:: [YOUTUBE ONCHANGE]');
    if (musicChange && e.target.getVideoData().title !== '') {
      console.log('API:: ', e.target.getVideoData().title);
      console.log('API:: ', e.target);
      // console.log(e.target.playerInfo);
      // if(e.target.getDuration){
      //   if(e.target.get)
      // }

      dispatch(setDurationRequestAction(e.target.getDuration()));
      dispatch(setMusicChangeRequestAction(false));
      console.log('API:: [ YOUTUBE ONCHANGE WITH TITLE]');
    }

    if (isPlay) {
      e.target.playVideo();
    } else {
      e.target.pauseVideo();
    }
  }, [isPlay, musicChange]);

  const onReadyYouTube = useCallback((e) => {
    TYAPI = e.target;
    console.log('API:: [[READY]]');
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
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
};

export default YoutubeAPI;
