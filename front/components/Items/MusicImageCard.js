import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setNowMusicRequestAction } from '../../reducers/music';

const StMusicBoxImgItem = styled.li`
  width:25%;
  color:#fff;
  padding:.5em;
  box-sizing:border-box;
  cursor:pointer;
`;
const StMusicBoxImgThumb = styled.img`
  display:block;
  width:100%;
`;
const StMusicBoxImgInfo = styled.div`
  padding:.5em;
`;
const StMusicBoxImgTitle = styled.strong`
  font-size:.875rem;
  color:#fff;
  line-height:1.4;
  font-weight:400;
`;
const StMusicBoxImgAuthor = styled.div`
  margin-top:1em;
  font-size:.75rem;
  color:#999;
`;

const MusicImageCard = ({ data }) => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.music.playList);

  const onClickMusicList = useCallback((e) => {
    const id = e.target.closest('li').value;
    const selectMusic = playList.find((v) => v.id === id);
    dispatch(setNowMusicRequestAction(selectMusic));
  }, []);

  return (
    <StMusicBoxImgItem onClick={onClickMusicList} value={data.id}>
      <figure>
        <StMusicBoxImgThumb src={`https://img.youtube.com/vi/${data.musicId}/hqdefault.jpg`} alt={data.title} />
      </figure>
      <StMusicBoxImgInfo>
        <StMusicBoxImgTitle>{data.title}</StMusicBoxImgTitle>
        <StMusicBoxImgAuthor>{data.author}</StMusicBoxImgAuthor>
      </StMusicBoxImgInfo>
    </StMusicBoxImgItem>
  );
};

MusicImageCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicImageCard;
