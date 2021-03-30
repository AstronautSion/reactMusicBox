import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { musicDeleteAction } from '../reducers/music';
import { popupOpenRequestAction } from '../reducers/user';

const MusicList = ({data}) => {
  const dispatch = useDispatch();
  const onClickDeleteButton = () => {
    if(confirm('삭제하시겠습니까?')){
      dispatch(musicDeleteAction(data.id))
    }
  }
  const onClickModifyButton = () => {
    dispatch(popupOpenRequestAction({
      key:'isModiMusic',
      value: data,
    }));
  }
  return (
    <li>
      <div className="music-list__wrapper">
        <div className="music-list__thumb"></div>
        <div className="music-list__info">
          <p 
            className="music-list__title"
            title={`${data.title}-${data.author}`}
          >
            {data.title}
            <span className="music-list__author">{data.author}</span>
          </p>
          <span className="music-list__writter">{data.writter}</span>
        </div>
        <div className="music-list__control">
          <button onClick={onClickModifyButton} className="music-list__button--modify">수정</button>
          <button onClick={onClickDeleteButton} className="music-list__button--delete">삭제</button>
        </div>
      </div>
    </li>
    
  );
}

MusicList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MusicList;