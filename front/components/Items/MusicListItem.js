import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMusicRequestAction } from '../../reducers/music';
import { popupOpenRequestAction } from '../../reducers/user';
import {
  StMusicListItem,
  StMusicListItemControl,
  StMusicListItemInfo,
  StMusicListItemThumb,
  StMusicListItemWrapper,
} from '../../style/components/MusicList';

const MusicListItem = ({ data }) => {
  const dispatch = useDispatch();
  const onClickDeleteButton = () => {
    if (confirm('삭제하시겠습니까?')) {
      dispatch(deleteMusicRequestAction(data.id));
    }
  };

  const onClickModifyButton = () => {
    dispatch(popupOpenRequestAction({
      key: 'modifyMusic',
      value: data,
    }));
  };
  return (
    <StMusicListItem>
      <StMusicListItemWrapper>
        <StMusicListItemThumb stImg={`https://img.youtube.com/vi/${data.link}/default.jpg`} />
        <StMusicListItemInfo>
          <p
            className="music-list__title"
            title={`${data.title}-${data.author}`}
          >
            {data.title}
            <span className="music-list__author">{data.author}</span>
          </p>
          <span className="music-list__writter">{data.writter}</span>
        </StMusicListItemInfo>
        <StMusicListItemControl>
          <button type="button" onClick={onClickModifyButton} className="music-list__button--modify">수정</button>
          <button type="button" onClick={onClickDeleteButton} className="music-list__button--delete">삭제</button>
        </StMusicListItemControl>
      </StMusicListItemWrapper>
    </StMusicListItem>
  );
};

MusicListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicListItem;
