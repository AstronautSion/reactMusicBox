import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { StInput, StLable } from '../../style/Form';
import { StButton, StFieldset } from '../../style/components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { musicModifyAction } from '../../reducers/music';
import { popupClose } from '../../reducers/user';

const StMusicModiForm = styled.div`
  
`;

const MusicModiForm = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.popup.data);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    setTitle(data.title);
    setAuthor(data.author);
    setLink(data.link);
  },[data]);
  const onChangeMusicTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeMusicAuthor = (e) => {
    setAuthor(e.target.value);
  }
  const onSubmitModiMusicList = (e) =>{
    e.preventDefault();
    dispatch(musicModifyAction({
      id: data.id,
      link: data.link,
      type: data.type,
      writter: data.writter,
      author,
      title,
    }))
    dispatch(popupClose);
  }
  return(
    <StMusicModiForm>
    <form onSubmit={onSubmitModiMusicList}>
    <StFieldset>
        <StLable>Link</StLable>
        <StInput value={link} readOnly/>
      </StFieldset>
      <StFieldset>
        <StLable>Title</StLable>
        <StInput value={title} onChange={onChangeMusicTitle} minLength="1" maxLength="30" required/>
      </StFieldset>
      <StFieldset>
        <StLable>Author</StLable>
        <StInput value={author} onChange={onChangeMusicAuthor} minLength="1" maxLength="30" required/>
      </StFieldset>
      <StButton main type="submit">수정</StButton>
    </form>
    </StMusicModiForm>
  );
}

export default MusicModiForm;