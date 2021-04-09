import styled, { css } from 'styled-components';

export const StMusicBoxLayout = styled.div`
  transition: all .3s;
  z-index:1;
  position:fixed;
  left:0;
  bottom:-100%;
  width:100%;
  padding:.5em 0;
  background-color:#103493;
  box-sizing:border-box;
  opacity:0;
  ${(props) => props.isShow && css`
    opacity:1;
    bottom:0;
  `}
`;
export const StMusicPlayerWrapper = styled.div`
  max-width:1200px;
  width:95%;
  margin:0 auto;
  display:flex;
  flex-wrap:wrap;
  align-items: center;
`;

export const StMusicPlayerControl = styled.div`
    width:20%;
    display:flex;
`;

export const StMusicPlayerInfo = styled.div`

`;
export const StMusicPlayerTitle = styled.strong`
  display:block;
  font-size:.875rem;
  color:#9195b5;
  font-weight:400;
  line-height:1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StMusicPlayerAuthor = styled.p`
  dispaly:block;
  font-size:.75rem;
  color:#c6c7d0;
  font-weight:400;
  line-height:1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StMusicBoxButton = styled.button`
  transition:all .3s;
  position:relative;
  display:block;
  width:40px;
  height:40px;
  margin-right:5px;
  border-radius:50%;
  box-sizing:border-box;
  background-color:#fff;
  outline:none;
  cursor:pointer;
  i {
    transition:all .3s;
    display:block;
    color:#9195b5;
    font-size:1rem;
    position:relative;
    
    &.fa-play{
      left:3px;
    }
  }
  &:hover{
    box-shadow:0 0 7px rgba(0,0,0,0.3);
    i{
      color:#333;
    }
  }
`;

export const StMusicBoxButtonSm = styled.button`
  transition:all .3s;
  display:block;
  width:30px;
  height:30px;
  color:#9195b5;
  border-radius:50%;
  margin: 5px 3px; 
  cursor:pointer;
  outline:none;
  &:hover{
    color:#333;
  }
`;

/**
 * progress bar
 */
export const StMusicBoxProgress = styled.div`
  width:60%;
`;
export const StMusicBoxProgressBar = styled.div`
  position:relative;
  border-radius:2em;
  height:5px;
  width:100%;
  background-color:#fff;
`;
export const StMusicBoxProgressBarItem = styled.div`
  position:absolute;
  top:0;
  left:0;
  width: ${(props) => props.stWidth || '0px'};
  height:5px;
  border-radius:2em;
  background-color:#9195b5;
`;
export const MusicBoxMaxTime = styled.div`
  display:block;
  width:100%;
  padding-bottom:.5em;
  text-align:right;
  font-size:.875rem;
  font-weight:500;
  color:#9195b5;
`;
export const MusicBoxTime = styled.div`
  display:block;
  padding-top:.5em;
  text-align:left;
  font-size:.875rem;
  color:#9195b5;
`;
