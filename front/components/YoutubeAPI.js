import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setDurationRequestAction, setVideoChangeRequestAction } from '../reducers/video';

export let YTAPI = null;

const YoutubeAPI = () => {
  const dispatch = useDispatch();
  const videoId = useSelector((state) => state.video.nowPlayList?.link);
  const isPlay = useSelector((state) => state.video.isPlay);
  const videoChange = useSelector((state) => state.video.videoChange);

  const onStateChanges = useCallback((e) => {
    console.log('API:: [YOUTUBE ONCHANGE]');
    if (videoChange && e.target.getVideoData().title !== '') {
      console.log('API:: ', e.target.getVideoData().title);
      console.log('API:: ', e.target);
      // console.log(e.target.playerInfo);
      // if(e.target.getDuration){
      //   if(e.target.get)
      // }

      dispatch(setDurationRequestAction(e.target.getDuration()));
      dispatch(setVideoChangeRequestAction(false));
      console.log('API:: [ YOUTUBE ONCHANGE WITH TITLE]');
    }

    if (isPlay) {
      e.target.playVideo();
    } else {
      e.target.pauseVideo();
    }
  }, [isPlay, videoChange]);

  const onReadyYouTube = useCallback((e) => {
    YTAPI = e.target;
    console.log('API:: [[READY]]');
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      containerClassName="embed embed-youtube"
      onStateChange={(e) => onStateChanges(e)}
      opts={opts}
      onReady={onReadyYouTube}
    />
  );
};

export default YoutubeAPI;
