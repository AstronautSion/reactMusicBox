import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayAction, setNowMusicListAction } from '../reducers/music';
import { TYAPI } from './YoutubeAPI';


const StMusicboxCard = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform:translateX(-50%) translateY(-50%);
  width:20rem;
  min-height:25rem;
  background-color:#fafafb;
  border-radius:.85em;
  box-shadow: 0 0 1rem rgba(9,56,128,0.1);
`;
const StMusicBoxButton = styled.button`
  transition:all .3s;
  position:relative;
  display:block;
  width:65px;
  height:65px;
  border-radius:50%;
  box-shadow:0 0 7px rgba(9,56,128,0.1);
  box-sizing:border-box;
  background-color:#fff;
  outline:none;
  cursor:pointer;
  i {
    transition:all .3s;
    display:block;
    color:#9195b5;
    font-size:1.5rem;
    position:relative;
    
    &.fa-play{
      left:3px;
    }
  }
  &:hover{
    box-shadow:0 0 7px rgba(0,0,0,0.3);
    i{
      color:#333;
    }
  }
`;
const StMusicBoxButtonSm = styled.button`
  transition:all .3s;
  display:block;
  width:50px;
  height:50px;
  color:#9195b5;
  border-radius:50%;
  margin: 1em auto 0;
  cursor:pointer;
  outline:none;
  &:hover{
    color:#333;
  }
`;
const StMusicBoxImg = styled.div`
  position:absolute;
  top:1rem;
  left:-1rem;
  display:block;
  width:14rem;
  height:14rem;
  background:${props => {
    if(!props.StImgUrl ){
      return '#333';
    }else{
      return 'url('+props.StImgUrl+') no-repeat center';
    }
  }};
  background-size:cover;
  border-radius:1em;
  box-shadow:0 0 7px rgba(0,0,0,0.2);
`;
const StMusicBoxControlArea = styled.div`
  position:absolute;
  top:1rem;
  right:1.5rem;
`;
const StMusicBoxBottom = styled.div`
  position:absolute;
  top:15rem;
  left:0;
  padding:1.5em;
  width:100%;
  box-sizing:border-box;
`;
const StMusicBoxTitle = styled.strong`
  display:block;
  font-size:1rem;
  color:#9195b5;
  font-weight:400;
  line-height:1.2;
  padding-bottom:.5em;
`;
const StMusicBoxAuthor = styled.p`
  dispaly:block;
  font-size:.75rem;
  color:#c6c7d0;
  font-weight:400;
  line-height:1.2;
`;
const StMusicBoxProgress = styled.div`
  margin-top:1.5em;
`;
const StMusicBoxProgressBar = styled.div`
  position:relative;
  border-radius:2em;
  height:5px;
  width:100%;
  background-color:#fff;
`;
const StMusicBoxProgressBarItem = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:5px;
  border-radius:2em;
  background-color:#
`;
const MusicBoxMaxTime = styled.div`
  display:block;
  width:100%;
  padding-bottom:.5em;
  text-align:right;
  font-size:.875rem;
  font-weight:500;
  color:#9195b5;
`;
const MusicBoxTime = styled.div`
  display:block;
  padding-top:.5em;
  text-align:left;
  font-size:.875rem;
  color:#9195b5;
`;

const MusicBoxCard = () => {

  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const isPlay = useSelector(state => state.music.isPlay);
  const {link, title, author, writter, id, type} = useSelector(state => state.music?.nowPlayList);
  const playList = useSelector(state => state.music.playList);
  const [duration, setDuration] = useState('00:00');
  // const [volume, setVolume] = useState(TYAPI.getVolume());
  // const [currentTime, setCurrentTime] = useState()
  const [musicImg, setMusicImg] = useState();
  
  const timeFormat = (time) => {
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
  useEffect(()=>{
    setMusicImg('https://img.youtube.com/vi/'+link+'/maxresdefault.jpg');
    console.log(TYAPI)
  },[link])
  const onClickPlay = useCallback(() => {
    setPlay((prev) => !prev);
    dispatch(musicPlayAction(play));
    console.log(TYAPI)
    console.log(TYAPI.getCurrentTime())
    play ? TYAPI.playVideo() : TYAPI.pauseVideo();
  },[play, isPlay]);

  const onClickPrev = useCallback(() => {
    playList.map((v, i) => {
      if(v.id === id){
        if(i !== 0){
          dispatch(setNowMusicListAction(playList[i - 1]))
        }
        console.log(v, i)
      }
    });
  },[playList, id]);

  const conClickNext = useCallback(() => {
    playList.map((v, i) => {
      if(v.id === id){
        if(i !== (playList.length - 1) ){
          dispatch(setNowMusicListAction(playList[i + 1]));
        }
        console.log(v, i)
      }
    });
  },[playList, id]);

  return (
    <StMusicboxCard>
      <StMusicBoxImg StImgUrl={musicImg}/>
      <StMusicBoxControlArea>
        
        <StMusicBoxButton onClick={onClickPlay}><i className={isPlay ? 'fa fa-play' : 'fa fa-pause'}></i>
        {/* fa-pause */}
        </StMusicBoxButton>
        <StMusicBoxButtonSm onClick={onClickPrev}><i className="fa fa-backward"></i></StMusicBoxButtonSm>
        <StMusicBoxButtonSm onClick={conClickNext}><i className="fa fa-forward"></i></StMusicBoxButtonSm>
      </StMusicBoxControlArea>
      
      <StMusicBoxBottom>
        <StMusicBoxTitle>{title}</StMusicBoxTitle>
        <StMusicBoxAuthor>{author}</StMusicBoxAuthor>

        <StMusicBoxProgress>
          <MusicBoxMaxTime>{duration}</MusicBoxMaxTime>
          <StMusicBoxProgressBar>
            <StMusicBoxProgressBarItem />
          </StMusicBoxProgressBar>
          <MusicBoxTime>00:00</MusicBoxTime>
        </StMusicBoxProgress>
      </StMusicBoxBottom>
    </StMusicboxCard>
  );
}

export default MusicBoxCard;