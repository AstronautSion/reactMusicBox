import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMusicChangeRequestAction, setNowMusicRequestAction } from '../../reducers/music';
import {
  MusicBoxMaxTime,
  MusicBoxTime,
  StMusicBoxProgress,
  StMusicBoxProgressBar,
  StMusicBoxProgressBarItem,
} from '../../style/components/MusicBoxCard';
import { TYAPI } from '../YoutubeAPI';

export const timeFormat = (time) => {
  const timestamp = time;
  const hours = Math.floor(timestamp / 60 / 60);
  let minutes = Math.floor(timestamp / 60) - (hours * 60);
  let seconds = Math.ceil(timestamp % 60);
  let formatted = '';

  if (minutes < 10) { minutes = `0${String(minutes)}`; }
  if (seconds < 10) { seconds = `0${String(seconds)}`; }

  if (hours) {
    formatted = `${hours}:${minutes}:${seconds}`;
  } else {
    formatted = `${minutes}:${seconds}`;
  }

  return formatted;
};

const MusicBoxProgressBar = () => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.music.duration);
  const isPlay = useSelector((state) => state.music.isPlay);
  const playList = useSelector((state) => state.music.playList);
  const id = useSelector((state) => state.music?.nowPlayList?.id);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [barWidth, setBarWidth] = useState('0');
  const requestRef = useRef();
  const prevTimeRef = useRef();

  const animate = useCallback((time) => {
    if (prevTimeRef.current !== undefined && isPlay) {
      if (TYAPI) {
        if (TYAPI.getDuration() > TYAPI.getCurrentTime()) {
          setBarWidth(`${(TYAPI.getCurrentTime() / TYAPI.getDuration()) * 100}%`);
          setCurrentTime(timeFormat(TYAPI.getCurrentTime()));
        } else {
          const par = Math.ceil(TYAPI.getCurrentTime() / TYAPI.getDuration()) * 100;
          if (par >= 100) {
            // 다음곡
            playList.map((v, i) => {
              if (v.id === id) {
                if (i !== (playList.length - 1)) {
                  console.log(i, id);
                  dispatch(setNowMusicRequestAction(playList[i + 1]));
                  dispatch(setMusicChangeRequestAction(true));
                }
              }
            });
          }
        }
      }
    }
    prevTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [isPlay]);

  useEffect(() => {
    if (isPlay) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }

    if (!isPlay) {
      cancelAnimationFrame(requestRef.current);
    }
  }, [isPlay]);

  useEffect(() => {
    setCurrentTime('00:00');
    setBarWidth('0');
  }, []);

  return (
    <StMusicBoxProgress>
      <MusicBoxMaxTime>{timeFormat(duration)}</MusicBoxMaxTime>
      <StMusicBoxProgressBar>
        <StMusicBoxProgressBarItem stWidth={barWidth} />
      </StMusicBoxProgressBar>
      <MusicBoxTime>{currentTime}</MusicBoxTime>
    </StMusicBoxProgress>
  );
};

export default MusicBoxProgressBar;
