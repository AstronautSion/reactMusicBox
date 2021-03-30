import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayRequestAction, setMusicChangeRequestAction, setNowMusicRequestAction } from '../reducers/music';
import { TYAPI } from './YoutubeAPI';
import { 
  StMusicBoxAuthor,
  StMusicBoxBottom,
  StMusicBoxButton,
  StMusicBoxButtonSm,
  StMusicboxCard,
  StMusicBoxControlArea,
  StMusicBoxImg,
  StMusicBoxTitle
} from '../style/components/MusicBoxCard';
import MusicBoxProgressBar, { playProgressAnimation } from './MusicBoxProgressBar';

export let onClickNext = null;

const MusicBoxCard = () => {

  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const isPlay = useSelector(state => state.music.isPlay);
  const {link, title, author, id } = useSelector(state => state.music?.nowPlayList);
  const playList = useSelector(state => state.music.playList);
  const [musicImg, setMusicImg] = useState();

  useEffect(()=>{
    setMusicImg('https://img.youtube.com/vi/'+link+'/hqdefault.jpg');  
  },[link,TYAPI]);

  const onClickPlay = useCallback(() => {
    if(TYAPI){    
      setPlay((prev) => !prev);
      dispatch(musicPlayRequestAction(play));
      dispatch(setMusicChangeRequestAction(true));
      if(play){
        TYAPI.playVideo();
        playProgressAnimation();
      }else{
        TYAPI.pauseVideo();
      }
    }
  },[play, isPlay, playProgressAnimation]);

  const onClickPrev = useCallback(() => {
    playList.map((v, i) => { 
      if(v.id === id){ if(i !== 0){ 
        dispatch(setNowMusicRequestAction(playList[i - 1]));
        dispatch(setMusicChangeRequestAction(true)); 
      }}
    });  
  },[playList, id, TYAPI]);

  onClickNext = useCallback(() => {
    playList.map((v, i) => {
      if(v.id === id){ if(i !== (playList.length - 1) ){
        dispatch(setNowMusicRequestAction(playList[i + 1]));
        dispatch(setMusicChangeRequestAction(true));
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
        <StMusicBoxButtonSm onClick={onClickNext}><i className="fa fa-forward"></i></StMusicBoxButtonSm>
      </StMusicBoxControlArea>
      <StMusicBoxBottom>
        <StMusicBoxTitle>{title}</StMusicBoxTitle>
        <StMusicBoxAuthor>{author}</StMusicBoxAuthor>
        <MusicBoxProgressBar />
      </StMusicBoxBottom>
    </StMusicboxCard>
  );
}

export default MusicBoxCard;