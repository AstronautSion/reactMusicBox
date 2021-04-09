import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import MusicListItem from '../components/Items/MusicListItem';
import AppLayout from '../components/Layout/AppLayout';
import MusicAddForm from '../components/From/MusicAddForm';
import Popup from '../components/Popup/Popup';
import { LOAD_MY_INFO_REQUEST, popupOpenRequestAction } from '../reducers/user';
import MusicModiForm from '../components/From/MusicModiForm';
import { StMusicList } from '../style/components/MusicList';
import {
  StContainer,
  StFixedButton,
  StP,
  StTitle,
  StWrapper,
} from '../style/components/AppLayout';
import wrapper from '../store/configureStore';
import { getMusicRequestAction } from '../reducers/music';

const Music = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  const dispatch = useDispatch();
  const { addMusic, modifyMusic } = useSelector((state) => state.user.popup);
  const { playList } = useSelector((state) => state.music);

  const onClickAddMusicButton = () => {
    dispatch(popupOpenRequestAction({
      key: 'addMusic',
      value: null,
    }));
  };
  return (
    <AppLayout>
      <StWrapper>
        <StContainer>
          {me && (
            <>
              <StTitle>
                MUSIC LIST
                <StP sm light stMargin=".5em 0">length: {playList.length}</StP>
              </StTitle>
              { addMusic && <Popup><MusicAddForm /></Popup>}
              <StMusicList>
                { playList && playList.map((v) => (<MusicListItem data={v} key={v.id} />))}
              </StMusicList>
              { modifyMusic && <Popup> <MusicModiForm /> </Popup>}
              <StFixedButton onClick={onClickAddMusicButton} />
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
    context.store.dispatch(getMusicRequestAction);
  }

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Music;
