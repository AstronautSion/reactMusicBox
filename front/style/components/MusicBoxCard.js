import styled from '@emotion/styled';

export const StMusicboxCard = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform:translateX(-50%) translateY(-50%);
  width:28rem;
  min-height:34rem;
  background-color:#fafafb;
  border-radius:.85em;
  box-shadow: 0 0 1rem rgba(9,56,128,0.1);
  display:flex;
  flex-wrap:wrap;
`;
export const StMusicBoxButton = styled.button`
  transition:all .3s;
  position:relative;
  display:block;
  width:65px;
  height:65px;
  border-radius:50%;
  box-shadow:0 0 7px rgba(9,56,128,0.1);
  box-sizing:border-box;
  background-color:#fff;
  outline:none;
  cursor:pointer;
  i {
    transition:all .3s;
    display:block;
    color:#9195b5;
    font-size:1.5rem;
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
  width:50px;
  height:50px;
  color:#9195b5;
  border-radius:50%;
  margin: 1em auto 0;
  cursor:pointer;
  outline:none;
  &:hover{
    color:#333;
  }
`;
export const StMusicBoxImg = styled.div`
  transition:all .5s;
  position:relative;
  top:1.5rem;
  left:-2rem;
  display:block;
  width:20rem;
  height:20rem;
  background:${props => {
    if(!props.StImgUrl ){
      return '#333';
    }else{
      return 'url('+props.StImgUrl+') no-repeat center';
    }
  }};
  background-size:cover;
  border-radius:1em;
  box-shadow:0 0 7px rgba(0,0,0,0.2);
`;
export const StMusicBoxControlArea = styled.div`
  padding:1.5rem 0 0 1rem;
  box-sizing:border-box;
`;
export const StMusicBoxBottom = styled.div`
  padding:1.5em;
  width:100%;
  box-sizing:border-box;
`;
export const StMusicBoxTitle = styled.strong`
  display:block;
  font-size:1.125rem;
  color:#9195b5;
  font-weight:400;
  line-height:1.2;
  padding-bottom:.875em;
`;
export const StMusicBoxAuthor = styled.p`
  dispaly:block;
  font-size:.875rem;
  color:#c6c7d0;
  font-weight:400;
  line-height:1.2;
`;
export const StMusicBoxProgress = styled.div`
  margin-top:1.5em;
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
  width: ${props => props.width };
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
