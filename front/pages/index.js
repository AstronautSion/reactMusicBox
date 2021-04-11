import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AppLayout from '../components/Layout/AppLayout';
import { getVideosRequestAction } from '../reducers/video';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import MainContents from '../components/Contents/MainContents';
import { StContainer, StWrapper } from '../style/components/AppLayout';
import VideoImgListContents from '../components/Contents/VideoImgListContents';

const Home = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <AppLayout>
      {me ? (
        <StWrapper>
          <StContainer>
            <VideoImgListContents />
          </StContainer>
        </StWrapper>
      ) : (
        <MainContents />
      )}
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
    context.store.dispatch(getVideosRequestAction({
      word: context.query.word || '',
    }));
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
