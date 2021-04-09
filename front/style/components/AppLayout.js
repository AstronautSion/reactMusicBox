import styled, { css } from 'styled-components';

export const StWrapper = styled.div`
  z-index:1;
  position:relative;
  max-width:1200px;
  width: 95%;
  margin:0 auto;
`;
export const StSection = styled.div`
  position:relative;
  padding:2em 0;
`;

export const StSmLayout = styled.div`
  position: relative;
  padding:5rem 0;
  box-sizing:border-box;
  max-width:500px;
  width:100%;
  margin:0 auto;
  @media screen and (max-width: 768px){
    padding:3rem 0;
  }
`;

export const StContainer = styled.div`
  padding:3em 1em 3em 1em;
`;

export const StP = styled.p`
display:block;
font-weight:normal;
line-height:1.4;
font-size: ${(props) => {
    if (props.sm) { return '.785rem'; }
    if (props.lg) { return '1.2rem;'; }
    return '1rem;';
  }};
color: ${(props) => {
    if (props.light) { return '#666'; }
    return '#111';
  }};
margin: ${(props) => props.stMargin || '0'};
`;

export const StTitleCenter = styled.strong`
  display:block;
  text-align:center;
  font-size:2rem;
  font-weight:400;
  margin-bottom:3em;
  color:#fff;
`;
export const StButtonBack = styled.button`
  color:#666;
  padding:1em;
  box-sizing:border-box;
  display:block;
  cursor:pointer;
  &:hover{
    color:#111;
  }
`;

export const StFixedButton = styled.div`
  z-index:1;
  position:fixed;
  bottom:10%;
  right:1rem;
  width:50px;
  height:50px;
  background-color:#5f56e0;
  border-radius:50%;
  cursor:pointer;
  &:after{
    content:'';
    display:block;
    width:1px;
    height:20px;
    position:absolute; 
    top:50%;
    left:50%;
    margin-top:-10px;
    margin-left:-.5px;
    background-color:#fff;
  }
  &:before{
    content:'';
    display:block;
    width:20px;
    height:1px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-.5px;
    margin-left:-10px;
    background-color:#fff;
  }
  &:hover{
    background-color:#5f56e0;
  }
`;

export const StTitle = styled.strong`
  display:block;
  font-size:1.25rem;
  font-weight:bold;
  color:#fff;
  padding-bottom:1em;
  margin-top:2em;
`;

export const StFieldset = styled.div`
  margin:1em 0;
`;

export const StButton = styled.button`
  position:relative;
  width:100%;
  height:40px;
  color:#fff;
  background-color:#eee;
  border:1px solid #eee;
  line-height:40px;
  border-radius:.2em;
  font-size:.875rem;

  ${(props) => props.stMain && css`
    background-color:#5f56e0;
    border:1px solid #5f56e0;
  `}
`;

export const StBackgroundYouTube = styled.div`
  iframe{
    position:absolute;
    top:0;
    left:0;
    width:1px;
    height:1px;
    opacity:0;
  }
`;

export const StAddMusicYoutube = styled.div`
  position:relative;
  opacity:0;
  iframe{
    width:1px;
    height:1px;
  }
`;

export const StAddMusicSpanText = styled.span`
  display:block;
  font-size:.75rem;
  line-height:1.4;
  color:${(props) => (props.stColor ? props.stColor : '#f50')};
  
`;
