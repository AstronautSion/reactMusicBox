import styled, { css } from "styled-components";

export const StWrapper = styled.div`
    max-width:1200px;
    width: 95%;
    margin:0 auto;
`;
export const StSection = styled.div`
    position:relative;
    padding:2em 0;
`;

export const StPopupWrapper = styled.div`
    z-index:10000;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-contents:center;
    align-items: center;
    background-color:rgba(0,0,0,.75);
    > div{
      position:relative;
      background-color:#fff;
      max-width:500px;
      width:95%;
      margin:0 auto;
      padding:2em;
      box-sizing:border-box;
    }
`;

export const StSmLayout = styled.div`
  position: relative;
  padding:10rem 0;
  box-sizing:border-box;
  max-width:500px;
  width:100%;
  margin:0 auto;
  @media screen and (max-width: 768px){
    padding:5rem 0;
  }
`;

export const StPopupBtnClose = styled.button`
    position:absolute;
    top:1em;
    right:1em;
    font-size:1rem;
    color:#fff;
`;

export const StContainer = styled.div`
    padding:1em 1em 3em 1em;
`;
 
export const StP = styled.p`
display:block;
font-weight:normal;
line-height:1.4;
font-size: ${props => {
    if(props.sm){ return '.785rem';}
    else if(props.lg){return '1.2rem;';}
    else{return '1rem;'} 
}};
color: ${props => {
    if(props.light){return '#666'}
    else{return '#111'}
}};
margin: ${props => props.StMargin || '0'};
`;

export const StTitleCenter = styled.strong`
  display:block;
  text-align:center;
  font-size:2rem;
  font-weight:400;
  margin-bottom:3em;
  color:#fff;
`;
export const StLocalNav = styled.ul`
  border-bottom:1px solid #efefef;
  box-sizing:border-box;
  display:flex;

  li{
    padding:0 .875em;
    a{
      position:relative;
      top:1px;
      display:block;
      padding:.875em 0;
      font-size:1rem;
      font-weight:bold;
      text-decoration:none;
      box-sizing:border-box;
      border-bottom:1px solid transparent;
      &:hover{
        border-bottom:1px solid #111;
      }
    }
    &:first-child{
      padding-left:0;
    }
    &.active a{
      color:#5f56e0;
      border-color:#5f56e0;
    }
  }
`;
export const StButtonBack = styled.button`
  color:#9195b5;
  padding:1em;
  box-sizing:border-box;
  display:block;
  cursor:pointer;
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

  ${props => props.main && css`
    background-color:#5f56e0;
    border:1px solid #5f56e0;
  `}
`;


export const StBackgroundYouTube = styled.div`
  transition:all 1s;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow:hidden;
  background:#333;
  ${props => props.StImg && css`
    background:url(${props.StImg}) no-repeat center;
  `}
  background-size:cover;
  filter: blur(10px);
  
  &:after{
    position:absolute;
    content:'';
    display:block;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.15);
  }
  & > div{
    iframe{
      position:absolute;
      top:0;
      left:0;
      width:1px;
      height:1px;
      opacity:0;
    }
  }
`;

