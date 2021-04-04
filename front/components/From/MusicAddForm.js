import React, { useCallback, useState } from 'react';
import { StInput, StLable } from '../../style/Form';
import { StButtonBack, StFieldset } from '../../style/components/AppLayout';
import { StButtonLonger } from '../../style/LoginForm';

const MusicAddForm = () => {
  const [link, setLink] = useState('');
  const [readySubmit, setReadySubmit] = useState(false);
  const [resultLink, setResultLink] = useState('');

  const onChangeLink = useCallback((e) => {
    setLink(e.target.value);
  }, [link]);

  const checkLink = useCallback(() => {
    const substring = 'https://www.youtube.com/';
    const substring2 = 'https://youtu.be/';
    if (link.includes(substring)) {
      setResultLink(link.split(substring)[1].split('watch?v=')[1]);
    } else if (link.includes(substring2)) {
      setResultLink(link.split(substring2)[1]);
    } else {
      setResultLink(link);
    }
  }, [link]);

  const onSubmitAddMusic = useCallback((e) => {
    e.preventDefault();
    setReadySubmit(true);
    checkLink();
  }, [link]);

  const onclickBack = () => {
    console.log('hi');
    setReadySubmit(false);
  };
  return (
    <div>
      {!readySubmit
        ? (
          <form onSubmit={onSubmitAddMusic}>
            <StLable>Add Music</StLable>
            <StInput
              onChange={onChangeLink}
              value={link}
              placeholder="Youtube 또는 SoundCloud 링크를 입력해주세요."
              required
              readOnly={readySubmit}
            />
            <StButtonLonger tyle="submit">추가</StButtonLonger>
          </form>
        ) : (
          <form>
            <StButtonBack onClick={onclickBack}>&larr;</StButtonBack>
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
        )}
    </div>
  );
};
export default MusicAddForm;
