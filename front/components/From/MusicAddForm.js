import React, { useCallback, useState } from 'react';
import { StInput, StLable } from '../../style/Form';
import styled from '@emotion/styled';
import { StFieldset, StTitle } from '../../style/components/AppLayout';

const StButtonLonger = styled.button`
  width:100%;
  height:40px;
  line-height:40px;
  margin-top:1em;
  background-color:#5f56e0;
  font-size:.875rem;
  color:#fff;
  text-align:center;
  box-sizing:border-box;
  border-radius:.25em;
`;
 

const MusicAddForm = () => {
  const [link, setLink] = useState('');
  const [readySubmit, setReadySubmit] = useState(false);
  const [resultLink, setResultLink] = useState('');

  const onChangeLink = useCallback((e) => {
    setLink(e.target.value);
  },[link]);

  const checkLink = useCallback(() => {
    const substring = 'https://www.youtube.com/';
    const substring2 = 'https://youtu.be/';
    if(link.includes(substring)){
      setResultLink(link.split(substring)[1].split('watch?v=')[1]);
    }else if(link.includes(substring2)){
      setResultLink(link.split(substring2)[1]);
    }else{
      setResultLink(link);
    }
    

  },[link])

  const onSubmitAddMusic = useCallback((e) => {
    e.preventDefault();
    setReadySubmit(true);
    checkLink();
  },[link]);

  const onclickBack = () => {
    setReadySubmit(false);
  }
  return(
    <div>
      {!readySubmit ? 
        <form onSubmit={onSubmitAddMusic}>
          <StTitle>Add Music</StTitle>
          <StInput
            onChange={onChangeLink}
            value={link}
            placeholder="Youtube 또는 SoundCloud 링크를 입력해주세요." 
            required 
            readOnly={readySubmit}
          />
          <StButtonLonger tyle="submit">추가</StButtonLonger>
        </form>
      :
        <form>
          <button onClick={onclickBack}>←</button>
          <StInput value={resultLink} readOnly />
          <StFieldset>
            <StLable>Title</StLable>
            <StInput />
          </StFieldset>
          <StFieldset>
            <StLable>author</StLable>
            <StInput />
          </StFieldset>
        </form>
      }
    </div>
  );
}
export default MusicAddForm;