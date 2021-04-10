import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import moment from 'moment';
import AppLayout from '../../components/Layout/AppLayout';
import { LOAD_MY_INFO_REQUEST, popupOpenRequestAction } from '../../reducers/user';
import {
  StContainer,
  StWrapper,
} from '../../style/components/AppLayout';
import wrapper from '../../store/configureStore';
import { deleteVideoRequestAction, getOneVideoRequestAction } from '../../reducers/video';
import Popup from '../../components/Popup/Popup';
import VideoAddForm from '../../components/From/VideoAddForm';
import VideoModiForm from '../../components/From/VideoModiForm';

const StDetailWatchView = styled.div`
  position:relative;
  padding:1em 0;
  .embed-youtube{
    position:relative;
    padding-bottom:56%;
    box-sizing:border-box;
    iframe {
      position:absolute;
      width:100%;
      height:100%;
    }
  }
`;

const StDetailWatchInfoArea = styled.div`
  padding:1em 0;
  border-bottom:1px solid #212121;
`;

const StDetailWatchTitle = styled.strong`
  font-size:1.25rem;
  color:#fff;
  line-height:1.6;
`;
const StDetailWatchAuthor = styled.p`
  font-size:1rem;
  color:#fff;
  line-height:1.6;
`;

const StDetailWatchTime = styled.span`
  display:block;
  color:#666;
  margin-top:1em;
`;
const StDetailWatchSta = styled.div`
  position:absolute;
  right:0;
  bottom:0;
  padding:1em;
  line-height:1.6;
  font-size:1rem;
  color:#fff;
`;
const StDetailWatchButton = styled.button`
  display:inline-block;
  line-height:1.6;
  font-size:1rem;
  color:#fff;
  width:30px;
  height:30px;
  border-radius:.35em;
  background-color:#5f56e0;
  margin-bottom:1em;
  margin-left:.5em;
  cursor:pointer;
  opacity:0.5;
  &:hover{
    opacity:1;
  }
`;
const StVideoId = styled.span`
  display:inline-block;
  padding:.25em .5em;
  border-radius:5px;
  margin-top:1em;
  background-color:#201e3c;
  font-size:.75rem;
  color:#ddd;
`;

const Video = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addVideo, updateVideo } = useSelector((state) => state.user.popup);
  const opts = { playerVars: { autoplay: 1 } };
  const id = useSelector((state) => state.video.nowPlayList?.id);
  const title = useSelector((state) => state.video.nowPlayList?.title);
  const videoId = useSelector((state) => state.video.nowPlayList?.videoId);
  const author = useSelector((state) => state.video.nowPlayList?.author);
  const createdAt = useSelector((state) => state.video.nowPlayList?.createdAt);

  const onStateChangesAddVideo = useCallback((e) => {
    console.log(e);
  }, []);
  const onReadyYouTubeAddVideo = useCallback((e) => {
    console.log(e);
  }, []);

  const onClickUpdateVideo = useCallback((e) => {
    e.preventDefault();
    dispatch(popupOpenRequestAction({
      key: 'updateVideo',
      value: {
        id,
        videoId,
        title,
        author,
      },
    }));
  }, [title, author, id, videoId]);

  const onClickDeleteVideo = useCallback((e) => {
    e.preventDefault();
    if (confirm('삭제하시겠습니까?')) {
      dispatch(deleteVideoRequestAction(id));
      Router.replace('/');
    }
  }, [id]);

  useEffect(() => {
    if (!(me && me.id)) { Router.push('/'); }
  }, [me && me.id]);

  if (!me) { return null; }

  return (
    <AppLayout>
      <StWrapper>
        <StContainer>
          <StDetailWatchView>
            <YouTube
              videoId={videoId}
              containerClassName="embed embed-youtube"
              onStateChange={(e) => onStateChangesAddVideo(e)}
              opts={opts}
              onReady={onReadyYouTubeAddVideo}
            />
            <StDetailWatchInfoArea>
              <StDetailWatchTitle>{title}</StDetailWatchTitle>
              <StDetailWatchAuthor>{author}</StDetailWatchAuthor>
              <StVideoId>{videoId}</StVideoId>
              <StDetailWatchTime>{moment(createdAt).format('YYYY.MM.DD hh:mm:ss a')}</StDetailWatchTime>

              <StDetailWatchSta>
                <StDetailWatchButton className="fa fa-pencil" onClick={onClickUpdateVideo} />
                <StDetailWatchButton className="fa fa-trash-o" onClick={onClickDeleteVideo} />
              </StDetailWatchSta>
            </StDetailWatchInfoArea>
          </StDetailWatchView>
          {addVideo
            && <Popup><VideoAddForm /></Popup>}
          {updateVideo
            && <Popup> <VideoModiForm /> </Popup>}
        </StContainer>
      </StWrapper>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  if (cookie) {
    context.store.dispatch(getOneVideoRequestAction(context.query.id));
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Video;
