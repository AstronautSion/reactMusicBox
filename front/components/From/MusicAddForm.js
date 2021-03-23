import React from 'react';
import { StInput, StLable } from '../../style/Form';
import styled from '@emotion/styled';


export const StMusicAddForm = styled.div`
  padding:2em;
  border:1px solid #eee;
`;

const MusicAddForm = () => {

  const onSubmitAddMusic = (e) => {
    e.preventDefault();
    
  };

  return(
    
      <StMusicAddForm>
      <form onSubmit={onSubmitAddMusic}>
        <div>
          <div>
            <StLable></StLable>
            <StInput />
            <button tyle="submit">추가</button>
          </div>
        </div>
      </form>
      </StMusicAddForm>
    
  );
}
export default MusicAddForm;