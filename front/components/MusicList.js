import React from 'react';
import styled from '@emotion/styled';

const StMusicList = styled.ul`

`;


const MusicList = () => {
  return (
    <StMusicList>
      <li>
        <p>title</p>
        <span>author</span>
        <span>writter</span>
      </li>
    </StMusicList>
  );
}
export default MusicList;