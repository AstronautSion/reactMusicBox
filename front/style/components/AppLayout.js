import styled from "@emotion/styled";

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

export const StLoginLayout = styled.div`
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
    background-color:#fff;
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
      color:#f50;
      border-color:#f50;
    }
  }
`;

export const StSectionTitle = styled.h3`
  display:block;
  font-size:1.25rem;
  font-weight:bold;
  color:#333;
  padding-bottom:1em;
`;

export const StFixedButton = styled.div`
  position:fixed;
  bottom:10%;
  right:1rem;
  width:50px;
  height:50px;
  background-color:#f50;
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
    background-color:#ff7734;
  }
`;


export const StTitle = styled.strong`
  display:block;
  font-size:1.25rem;
  font-weight:bold;
  color:#333;
  padding-bottom:1em;
`;

export const StFieldset = styled.div`
  margin:1em 0;
`;

export const StButton = styled.button`
  position:relative;
  width:100%;
  height:40px;
  color:#fff;
  background-color:${props => props.main ? '#f50' : '#eee'};
  border:${props => props.main ? '1px solid #f50': '1px solid #eee'};
  line-height:40px;
  border-radius:.2em;
  font-size:.875rem;
`;