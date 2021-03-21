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
`;

export const StLoginLayout = styled.div`
    padding:10rem 0;
    box-sizing:border-box;
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
