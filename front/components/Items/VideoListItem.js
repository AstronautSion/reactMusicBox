import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteVideoRequestAction } from '../../reducers/video';
import { popupOpenRequestAction } from '../../reducers/user';
import {
  StVideoListItem,
  StVideoListItemControl,
  StVideoListItemInfo,
  StVideoListItemThumb,
  StVideoListItemWrapper,
} from '../../style/components/VideoList';

const VideoListItem = ({ data }) => {
  const dispatch = useDispatch();
  const onClickDeleteButton = () => {
    if (confirm('삭제하시겠습니까?')) {
      dispatch(deleteVideoRequestAction(data.id));
    }
  };

  const onClickModifyButton = () => {
    dispatch(popupOpenRequestAction({
      key: 'updateVideo',
      value: data,
    }));
  };
  return (
    <StVideoListItem>
      <StVideoListItemWrapper>
        <StVideoListItemThumb stImg={`https://img.youtube.com/vi/${data.link}/default.jpg`} />
        <StVideoListItemInfo>
          <p
            className="video-list__title"
            title={`${data.title}-${data.author}`}
          >
            {data.title}
            <span className="video-list__author">{data.author}</span>
          </p>
          <span className="video-list__writter">{data.writter}</span>
        </StVideoListItemInfo>
        <StVideoListItemControl>
          <button type="button" onClick={onClickModifyButton} className="video-list__button--modify">수정</button>
          <button type="button" onClick={onClickDeleteButton} className="video-list__button--delete">삭제</button>
        </StVideoListItemControl>
      </StVideoListItemWrapper>
    </StVideoListItem>
  );
};

VideoListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoListItem;
