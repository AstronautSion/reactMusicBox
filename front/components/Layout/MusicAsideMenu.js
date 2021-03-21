import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const StMusicAsideMenu = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:18rem;
  height:100%;
  background-color:#fff;
`;
const StMusicAsideList = styled.ul`

`;

const MusicAsideMenu = () => {

  const playList = useSelector(state => state.user.playList);
  console.log(playList);
  return (
    <StMusicAsideMenu>
      <div className="music-menu__option">
        <button>추가</button>
        <button>제거</button>
      </div>
      <StMusicAsideList>
        <li></li>
      </StMusicAsideList>
    </StMusicAsideMenu>
  );
}

export default MusicAsideMenu;