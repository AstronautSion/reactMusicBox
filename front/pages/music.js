import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicList from '../components/MusicList';
import AppLayout from '../components/Layout/AppLayout';
import MusicAddForm from '../components/From/MusicAddForm';
import Popup from '../components/Popup/Popup';
import { popupOpenRequestAction } from '../reducers/user';
import MusicModiForm from '../components/From/MusicModiForm';
import LoginForm from '../components/From/LoginForm';
import { StMusicList } from '../style/components/MusicList';
import {
  StContainer,
  StFixedButton,
  StP,
  StSmLayout,
  StTitle,
  StTitleCenter,
  StWrapper,
} from '../style/components/AppLayout';

const Music = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);
  const isAddMusic = useSelector((state) => state.user.popup.isAddMusic);
  const isModiMusic = useSelector((state) => state.user.popup.isModiMusic);
  const playList = useSelector((state) => state.music.playList);
  const onClickAddMusicButton = () => {
    dispatch(popupOpenRequestAction({
      key: 'isAddMusic',
      value: null,
    }));
  };
  return (
    <AppLayout>
      <StWrapper>
        <StContainer>
          {me ? (
            <>
              <StTitle>
                MUSIC LIST
                <StP sm light stMargin=".5em 0">length: {playList.length}</StP>
              </StTitle>
              { isAddMusic && <Popup><MusicAddForm /></Popup>}
              <StMusicList>
                { playList && playList.map((v) => (<MusicList data={v} key={v.id} />))}
              </StMusicList>
              { isModiMusic && <Popup> <MusicModiForm /> </Popup>}
              <StFixedButton onClick={onClickAddMusicButton} />
            </>
          ) : (
            <StSmLayout>
              <StTitleCenter>Please Login</StTitleCenter>
              <LoginForm />
            </StSmLayout>
          )}
        </StContainer>
      </StWrapper>
    </AppLayout>
  );
};

export default Music;
