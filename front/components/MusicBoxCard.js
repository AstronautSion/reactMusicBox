import React from 'react';
import styled from '@emotion/styled';

const StMusicboxCard = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform:translateX(-50%) translateY(-50%);
  width:20rem;
  min-height:25rem;
  background-color:#fafafb;
  border-radius:.85em;
  box-shadow: 0 0 1rem rgba(9,56,128,0.1);
`;
const StMusicBoxButton = styled.button`
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
    left:3px;
  }
  &:hover{
    box-shadow:0 0 7px rgba(0,0,0,0.3);
    i{
      color:#333;
    }
  }
`;

const StMusicBoxButtonSm = styled.button`
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

const StMusicBoxImg = styled.div`
  position:absolute;
  top:1rem;
  left:-1rem;
  display:block;
  width:14rem;
  height:14rem;
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

const StMusicBoxControlArea = styled.div`
  position:absolute;
  top:1rem;
  right:1.5rem;
`;
  
const StMusicBoxBottom = styled.div`
  position:absolute;
  top:15rem;
  left:0;
  padding:1.5em;
  width:100%;
  box-sizing:border-box;
`;
const StMusicBoxTitle = styled.strong`
  display:block;
  font-size:1rem;
  color:#9195b5;
  font-weight:400;
  line-height:1.2;
  padding-bottom:.5em;
`;
const StMusicBoxAuthor = styled.p`
  dispaly:block;
  font-size:.75rem;
  color:#c6c7d0;
  font-weight:400;
  line-height:1.2;
`;
const StMusicBoxProgress = styled.div`
  margin-top:1.5em;
`;
const StMusicBoxProgressBar = styled.div`
  position:relative;
  border-radius:2em;
  height:5px;
  width:100%;
  background-color:#fff;
`;
const StMusicBoxProgressBarItem = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:5px;
  border-radius:2em;
  background-color:#
`;
const MusicBoxMaxTime = styled.div`
  display:block;
  width:100%;
  padding-bottom:.5em;
  text-align:right;
  font-size:.875rem;
  font-weight:500;
  color:#9195b5;
`;
const MusicBoxTime = styled.div`
  display:block;
  padding-top:.5em;
  text-align:left;
  font-size:.875rem;
  color:#9195b5;
`;

const MusicBoxCard = () => {
  return (
    <StMusicboxCard>
      <StMusicBoxImg StImgUrl="data:image/jpeg;base64,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"/>
      <StMusicBoxControlArea>
        
        <StMusicBoxButton><i className="fa fa-play"></i>
        {/* fa-pause */}
        </StMusicBoxButton>
        <StMusicBoxButtonSm><i className="fa fa-backward"></i></StMusicBoxButtonSm>
        <StMusicBoxButtonSm><i className="fa fa-forward"></i></StMusicBoxButtonSm>
      </StMusicBoxControlArea>
      
      <StMusicBoxBottom>
        <StMusicBoxTitle>Slow dancing in the dark</StMusicBoxTitle>
        <StMusicBoxAuthor>Joji</StMusicBoxAuthor>

        <StMusicBoxProgress>
          <MusicBoxMaxTime>03:00</MusicBoxMaxTime>
          <StMusicBoxProgressBar>
            <StMusicBoxProgressBarItem />
          </StMusicBoxProgressBar>
          <MusicBoxTime>00:00</MusicBoxTime>
        </StMusicBoxProgress>
      </StMusicBoxBottom>
    </StMusicboxCard>
  );
}

export default MusicBoxCard;