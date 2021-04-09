import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  musicPlayRequestAction,
  setMusicChangeRequestAction,
  setNowMusicRequestAction,
} from '../../reducers/music';
import {
  StMusicBoxLayout,
  StMusicPlayerWrapper,
  StMusicPlayerControl,
  StMusicPlayerInfo,
  StMusicPlayerTitle,
  StMusicPlayerAuthor,
  StMusicBoxButton,
  StMusicBoxButtonSm,
} from '../../style/components/MusicBoxCard';
import MusicBoxProgressBar from '../Items/MusicBoxProgressBar';
import { TYAPI } from '../YoutubeAPI';

const MusicBoxLayout = () => {
  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);

  const isPlay = useSelector((state) => state.music.isPlay);
  const nowPlayList = useSelector((state) => state.music.nowPlayList);
  const title = useSelector((state) => state.music.nowPlayList?.title);
  const author = useSelector((state) => state.music.nowPlayList?.author);
  const id = useSelector((state) => state.music.nowPlayList?.id);
  const playList = useSelector((state) => state.music.playList);

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
        <StMusicBoxLayout isShow={nowPlayList}>
          <StMusicPlayerWrapper>
            <StMusicPlayerControl>
              <StMusicBoxButton onClick={onClickPlay}>
                <i className={isPlay ? 'fa fa-pause' : 'fa fa-play'} />
              </StMusicBoxButton>
              <StMusicBoxButtonSm onClick={onClickPrev}><i className="fa fa-backward" /></StMusicBoxButtonSm>
              <StMusicBoxButtonSm onClick={onClickNext}><i className="fa fa-forward" /></StMusicBoxButtonSm>
            </StMusicPlayerControl>
            <MusicBoxProgressBar />
            <StMusicPlayerInfo>
              <StMusicPlayerTitle title={title}>{title}</StMusicPlayerTitle>
              <StMusicPlayerAuthor>{author}</StMusicPlayerAuthor>
            </StMusicPlayerInfo>
          </StMusicPlayerWrapper>
        </StMusicBoxLayout>
      )}
    </>
  );
};

export default MusicBoxLayout;
