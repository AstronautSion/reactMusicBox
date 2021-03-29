import React from 'react';
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { 
  MusicBoxMaxTime, 
  MusicBoxTime, 
  StMusicBoxProgress, 
  StMusicBoxProgressBar, 
  StMusicBoxProgressBarItem
} from "../style/components/MusicBoxCard";
import { TYAPI } from "./YoutubeAPI";
import { onClickNext } from './MusicBoxCard';

export const timeFormat = (time) => {
  let timestamp = time;
  let hours = Math.floor(timestamp / 60 / 60);
  let minutes = Math.floor(timestamp / 60) - (hours * 60);
  let seconds = Math.ceil(timestamp % 60);
  let formatted = '';

  if(minutes < 10){ minutes = '0' + String(minutes);}
  if(seconds < 10){ seconds = '0' + String(seconds);}

  (hours) 
      ?  formatted = hours+':'+minutes+':'+seconds 
      : formatted =  minutes+':'+seconds

  return formatted;
}

export let playProgressAnimation = null;

const MusicBoxProgressBar = () => {
  const duration = useSelector(state => state.music.duration);
  const playList = useSelector(state => state.music.playList);
  
  const [currentTime, setCurrentTime] = useState('00:00');
  const [barWidth, setBarWidth ] = useState('0');
  const progressBarArea = useRef();

  let aniFrameCount = 0;
  
  useEffect(() => {
    setCurrentTime('00:00');
    setBarWidth('0');
  },[TYAPI]);

  playProgressAnimation = useCallback(() => {
    window.requestAnimationFrame(function(){
        playProgressAni();
    });
  },[]);

  const playProgressAni = useCallback(() => {
  
    if(aniFrameCount % 60 == 0){
      if(TYAPI){
        if(TYAPI.getDuration() != TYAPI.getCurrentTime()){
          setBarWidth((TYAPI.getCurrentTime() / TYAPI.getDuration() ) * 100 + '%')
          setCurrentTime(timeFormat(TYAPI.getCurrentTime()));        
          playProgressAnimation();
        }else if(TYAPI.getCurrentTime() == TYAPI.getDuration()){
          const par = Math.ceil(TYAPI.getCurrentTime() / TYAPI.getDuration())* 100;
          // cancelAnimationFrame(playProgressAni);
          if(par >= 100){
            onClickNext();
          } 
          playProgressAnimation();  
        } 
      }
    }
  },[aniFrameCount, TYAPI, playProgressAni, playList, duration]);

  return(
    <StMusicBoxProgress>
      <MusicBoxMaxTime>{timeFormat(duration)}</MusicBoxMaxTime>
      <StMusicBoxProgressBar>
      {TYAPI && 
        <StMusicBoxProgressBarItem ref={progressBarArea} StWidth={barWidth} />
      }
      </StMusicBoxProgressBar>
      <MusicBoxTime>{currentTime}</MusicBoxTime>
    </StMusicBoxProgress>
  );
}

export default MusicBoxProgressBar;