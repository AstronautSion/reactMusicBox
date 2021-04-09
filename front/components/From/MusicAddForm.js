import React, { useCallback, useState } from 'react';
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { StInput, StLable } from '../../style/Form';
import {
  StButtonBack,
  StFieldset,
  StAddMusicYoutube,
  StAddMusicSpanText,
} from '../../style/components/AppLayout';
import { StButtonLonger } from '../../style/LoginForm';
import { popupCloseRequestAction } from '../../reducers/user';
import { addMusicRequestAction } from '../../reducers/music';

const MusicAddForm = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState('');
  const [readySubmit, setReadySubmit] = useState(false);
  const [musicId, setMusicId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loadingVideo, setLoadingVideo] = useState('Loading'); // loading, complete, error
  const { id: UserId } = useSelector((state) => state.user.me);

  const onChangeLink = useCallback((e) => {
    setLink(e.target.value);
  }, [link]);

  const checkLink = useCallback(() => {
    const substring = 'https://www.youtube.com/';
    const substring2 = 'https://youtu.be/';
    if (link.includes(substring)) {
      setMusicId(link.split(substring)[1].split('watch?v=')[1]);
    } else if (link.includes(substring2)) {
      setMusicId(link.split(substring2)[1]);
    } else {
      setMusicId(link);
    }
  }, [link]);

  const onSubmitAddMusicConfirm = useCallback((e) => {
    e.preventDefault();
    setReadySubmit(true);
    checkLink();
  }, [link]);

  const onSubmitAddMusicComplete = useCallback((e) => {
    e.preventDefault();
    dispatch(popupCloseRequestAction);
    setTitle('');
    setAuthor('');
    setLoadingVideo('Loading');
    setReadySubmit(false);
    dispatch(addMusicRequestAction({
      musicId,
      title,
      author,
      UserId,
    }));
  }, [musicId, title, author]);

  const onclickBack = () => {
    setTitle('');
    setAuthor('');
    setLoadingVideo('Loading');
    setReadySubmit(false);
  };

  const onChangetitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeYutubeAuthor = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);

  const onStateChangesAddMusic = useCallback((e) => {
    e.target.setVolume(0);
    setTitle(e.target.getVideoData().title.substring(0, 49));
    setAuthor(e.target.getVideoData().author.substring(0, 49));
    if (e.target.getVideoData().title !== '') {
      e.target.pauseVideo();
      e.target.seekTo(0);
      setLoadingVideo('Complete');
    }
  }, []);

  const onReadyYouTubeAddMusic = useCallback((e) => {
    e.target.setVolume(0);
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {!readySubmit
        ? (
          <form onSubmit={onSubmitAddMusicConfirm}>
            <StLable>Add Music</StLable>
            <StInput
              onChange={onChangeLink}
              value={link}
              placeholder="Youtube 또는 SoundCloud 링크를 입력해주세요."
              required
              readOnly={readySubmit}
            />
            <StButtonLonger tyle="submit">Continue</StButtonLonger>
          </form>
        ) : (
          <>
            <form onSubmit={onSubmitAddMusicComplete}>
              <StButtonBack onClick={onclickBack}>&larr;</StButtonBack>
              <StFieldset>
                <StLable>Video ID</StLable>
                <StInput value={musicId} readOnly />
              </StFieldset>
              <StFieldset>
                <StLable>Title</StLable>
                <StInput onChange={onChangetitle} value={title} minLength="3" maxLength="50" />
              </StFieldset>
              <StFieldset>
                <StLable>author</StLable>
                <StInput onChange={onChangeYutubeAuthor} value={author} minLength="3" maxLength="50" />
              </StFieldset>
              {loadingVideo !== 'Loading'
                && <StButtonLonger type="submit">Add Music</StButtonLonger>}
            </form>
            <StAddMusicYoutube>
              <YouTube
                videoId={musicId}
                containerClassName="embed embed-youtube"
                onStateChange={(e) => onStateChangesAddMusic(e)}
                opts={opts}
                onReady={onReadyYouTubeAddMusic}
              />
            </StAddMusicYoutube>
            {loadingVideo === 'Loading'
              ? (
                <StAddMusicSpanText>
                  Title, author값을 불러오지 못한다면<br />Video ID 값을 다시 확인해 주세요.
                </StAddMusicSpanText>
              ) : (
                <StAddMusicSpanText stColor="#33b73c">{loadingVideo}!!</StAddMusicSpanText>
              )}
          </>
        )}
    </div>
  );
};
export default MusicAddForm;
