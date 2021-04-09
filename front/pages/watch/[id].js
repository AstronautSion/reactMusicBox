import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import moment from 'moment';
import AppLayout from '../../components/Layout/AppLayout';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import {
  StContainer,
  StWrapper,
} from '../../style/components/AppLayout';
import wrapper from '../../store/configureStore';
import { getOneVideoRequestAction } from '../../reducers/video';

const StDetailWatchTitle = styled.strong`
  font-size:1.25rem;
  color:#fff;
`;
const StDetailWatchAuthor = styled.p`
  font-size:1rem;
  color:#fff;
`;

const Video = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) { Router.push('/'); }
  }, [me && me.id]);
  if (!me) { return null; }
  const opts = { playerVars: { autoplay: 1 } };
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

  return (
    <AppLayout>
      <StWrapper>
        <StContainer>
          {me && (
            <>
              <YouTube
                videoId={videoId}
                containerClassName="embed embed-youtube"
                onStateChange={(e) => onStateChangesAddVideo(e)}
                opts={opts}
                onReady={onReadyYouTubeAddVideo}
              />

              <StDetailWatchTitle>{title}</StDetailWatchTitle>
              <StDetailWatchAuthor>{author}</StDetailWatchAuthor>
              <div>{moment(createdAt).format('YYYY.MM.DD hh:mm:ss a')}</div>
            </>
          )}
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
