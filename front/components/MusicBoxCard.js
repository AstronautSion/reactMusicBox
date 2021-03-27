import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayAction, setMusicChangeAction, setNowMusicListAction } from '../reducers/music';
import { MusicChangeBool, TYAPI } from './YoutubeAPI';
import { MusicBoxMaxTime, MusicBoxTime, StMusicBoxAuthor, StMusicBoxBottom, StMusicBoxButton, StMusicBoxButtonSm, StMusicboxCard, StMusicBoxControlArea, StMusicBoxImg, StMusicBoxProgress, StMusicBoxProgressBar, StMusicBoxProgressBarItem, StMusicBoxTitle } from '../style/components/MusicBoxCard';


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

const MusicBoxCard = () => {

  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const isPlay = useSelector(state => state.music.isPlay);
  const {link, title, author, id } = useSelector(state => state.music?.nowPlayList);
  const playList = useSelector(state => state.music.playList);
  const duration = useSelector(state => state.music.duration);
  const progressBarArea = useRef();
  const [currentTime, setCurrentTime] = useState('00:00');
  const [musicImg, setMusicImg] = useState();
  const [barWidth, setBarWidth ] = useState('0');
  let aniFrameCount = 0;
  

  useEffect(()=>{
    setMusicImg('https://img.youtube.com/vi/'+link+'/hqdefault.jpg');
    setCurrentTime('00:00');
    setBarWidth('0');
    
    //playProgressAnimation();
    
  },[link]);

  
  const playProgressAnimation = useCallback(() => {
    window.requestAnimationFrame(function(){
        playProgressAni();
    });
  },[isPlay]);

  const playProgressAni = useCallback(() => {
    if(aniFrameCount % 60 == 0){
      if(TYAPI.getDuration() != TYAPI.getCurrentTime()){
          setBarWidth((TYAPI.getCurrentTime() / TYAPI.getDuration() ) * 100 + '%')
          setCurrentTime(timeFormat(TYAPI.getCurrentTime()));        
          playProgressAnimation();
      }else if(TYAPI.getDuration() == TYAPI.getCurrentTime()){
          cancelAnimationFrame(playProgressAni); 
          // setCurrentTime($(that.durationArea).text());
          //다음곡
      }
    }
  },[aniFrameCount, TYAPI, playProgressAni]);


  const onClickPlay = useCallback(() => {
    if(TYAPI){    
      setPlay((prev) => !prev);
      dispatch(musicPlayAction(play));
      if(play){
        TYAPI.playVideo();
        playProgressAnimation();
      }else{
        TYAPI.pauseVideo();
      }
    }
  },[play, isPlay]);

  const onClickPrev = useCallback(() => {
      playList.map((v, i) => { if(v.id === id){
        if(i !== 0){ 
          dispatch(setNowMusicListAction(playList[i - 1])); 
          playProgressAnimation();
        }}
      });  
  },[playList, id, TYAPI]);

  const conClickNext = useCallback(() => {
      playList.map((v, i) => {
        if(v.id === id){ if(i !== (playList.length - 1) ){
          dispatch(setNowMusicListAction(playList[i + 1]));
          playProgressAnimation();
        }}
      });
  },[playList, id, TYAPI]);

  return (
    <StMusicboxCard>
      <StMusicBoxImg StImgUrl={musicImg}/>
      <StMusicBoxControlArea>
    
        <StMusicBoxButton onClick={onClickPlay}>
          <i className={isPlay ? 'fa fa-pause' : 'fa fa-play'}></i>
        </StMusicBoxButton>
        <StMusicBoxButtonSm onClick={onClickPrev}><i className="fa fa-backward"></i></StMusicBoxButtonSm>
        <StMusicBoxButtonSm onClick={conClickNext}><i className="fa fa-forward"></i></StMusicBoxButtonSm>
    
      </StMusicBoxControlArea>
      
      <StMusicBoxBottom>
        <StMusicBoxTitle>{title}</StMusicBoxTitle>
        <StMusicBoxAuthor>{author}</StMusicBoxAuthor>

        <StMusicBoxProgress>
          <MusicBoxMaxTime>{timeFormat(duration)}</MusicBoxMaxTime>
          <StMusicBoxProgressBar>
            <StMusicBoxProgressBarItem ref={progressBarArea} width={barWidth} />
          </StMusicBoxProgressBar>
          <MusicBoxTime>{currentTime}</MusicBoxTime>
        </StMusicBoxProgress>

      </StMusicBoxBottom>
    </StMusicboxCard>
  );
}

export default MusicBoxCard;