import styled from 'styled-components';

export const StPopupWrapper = styled.div`
  transition: all .3s;
  z-index:20000;
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
export const StPopupBtnClose = styled.button`
  z-index:1;
  position:absolute;
  top:0;
  right:0;
  font-size:1.5rem;
  color:#fff;
  padding:1em;
  cursor:pointer;
  opacity:.5;
  &:hover{
    opacity:1;
  }
`;

export const StPopupLayout = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow-y:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
`;
export const StPopupLayoutInner = styled.div`
  padding-top:30px;
`;
export const StPopupContents = styled.div`
  transition: all .3s;
  position:relative;
  background-color:#fff;
  min-width:450px;
  width:95%;
  margin: 0 auto;
  padding:2em;
  box-sizing:border-box;
  
  -webkit-animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(200px);
              transform: translateY(200px);
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(200px);
              transform: translateY(200px);
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
  }
`;
