import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayRequestAction, setMusicChangeRequestAction, setNowMusicRequestAction } from '../../reducers/music';
import { TYAPI } from '../YoutubeAPI';
import MusicBoxProgressBar from './MusicBoxProgressBar';
import {
  StMusicBoxAuthor,
  StMusicBoxBottom,
  StMusicBoxButton,
  StMusicBoxButtonSm,
  StMusicboxCard,
  StMusicBoxControlArea,
  StMusicBoxImg,
  StMusicBoxTitle,
} from '../../style/components/MusicBoxCard';

const MusicBoxPlayer = () => {
  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const isPlay = useSelector((state) => state.music.isPlay);
  const {
    musicId,
    title,
    author,
    id,
  } = useSelector((state) => state.music.nowPlayList);
  const playList = useSelector((state) => state.music.playList);
  const [musicImg, setMusicImg] = useState();

  useEffect(() => {
    setMusicImg(`https://img.youtube.com/vi/${musicId}/hqdefault.jpg`);
  }, [musicId, TYAPI]);

  const onClickPlay = useCallback(() => {
    if (TYAPI) {
      setPlay((prev) => !prev);
      dispatch(musicPlayRequestAction(play));
      dispatch(setMusicChangeRequestAction(true));
      if (play) {
        TYAPI.playVideo();
      } else {
        TYAPI.pauseVideo();
      }
    }
  }, [play, isPlay]);

  const onClickPrev = useCallback(() => {
    playList.map((v, i) => {
      if (v.id === id) {
        if (i !== 0) {
          dispatch(setNowMusicRequestAction(playList[i - 1]));
          dispatch(setMusicChangeRequestAction(true));
        }
      }
    });
  }, [playList, id, TYAPI]);

  const onClickNext = useCallback(() => {
    playList.map((v, i) => {
      if (v.id === id) {
        if (i !== (playList.length - 1)) {
          dispatch(setNowMusicRequestAction(playList[i + 1]));
          dispatch(setMusicChangeRequestAction(true));
        }
      }
    });
  }, [playList, id, TYAPI]);

  return (
    <>
      { playList && (
        <StMusicboxCard>
          <StMusicBoxImg stImgUrl={musicImg} />
          <StMusicBoxControlArea>
            <StMusicBoxButton onClick={onClickPlay}>
              <i className={isPlay ? 'fa fa-pause' : 'fa fa-play'} />
            </StMusicBoxButton>
            <StMusicBoxButtonSm onClick={onClickPrev}><i className="fa fa-backward" /></StMusicBoxButtonSm>
            <StMusicBoxButtonSm onClick={onClickNext}><i className="fa fa-forward" /></StMusicBoxButtonSm>
          </StMusicBoxControlArea>
          <StMusicBoxBottom>
            <StMusicBoxTitle>{title}</StMusicBoxTitle>
            <StMusicBoxAuthor>{author}</StMusicBoxAuthor>
            <MusicBoxProgressBar />
          </StMusicBoxBottom>
        </StMusicboxCard>
      )}
    </>
  );
};

export default MusicBoxPlayer;
