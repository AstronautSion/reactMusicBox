import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loadVideosRequestAction } from '../../reducers/video';
import { StFixedButton } from '../../style/components/AppLayout';
import Loading from '../Items/Loading';
import VideoImageCard from '../Items/VideoImageCard';
import VideoAddForm from '../From/VideoAddForm';
import Popup from '../Popup/Popup';
import { StVideoImgList } from '../../style/components/VideoList';
import { popupOpenRequestAction } from '../../reducers/user';
import VideoModiForm from '../From/VideoModiForm';

const VideoImgListContents = () => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.video.playList);
  const { addVideo, updateVideo } = useSelector((state) => state.user.popup);
  const { hasMoreVideo, loadVideosLoading } = useSelector((state) => state.video);
  const router = useRouter();

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMoreVideo && !loadVideosLoading) {
          const lastNum = playList.length - 1;
          dispatch(loadVideosRequestAction({
            lastId: playList[lastNum].id,
            word: router.query.word || '',
          }));
        }
      }
    }
    if (playList) {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [playList, hasMoreVideo, loadVideosLoading]);

  const onClickAddMusic = useCallback(() => {
    dispatch(popupOpenRequestAction({
      key: 'addVideo',
      value: null,
    }));
  }, []);

  return (
    <>
      {playList && (
        <StVideoImgList>
          {playList.map((v) => (
            <VideoImageCard key={v.id} data={v} />
          ))}
        </StVideoImgList>
      )}

      {loadVideosLoading
        && <Loading center />}

      {addVideo
        && <Popup><VideoAddForm /></Popup>}

      {updateVideo
        && <Popup> <VideoModiForm /> </Popup>}

      <StFixedButton onClick={onClickAddMusic} />
    </>
  );
};

export default VideoImgListContents;
