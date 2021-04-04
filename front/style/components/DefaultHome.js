import styled from 'styled-components';

export const StHomeArea = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -43%);
  text-align:center;  
`;
export const StHomeContent = styled.div`
  z-index:1;
  position:relative;
  margin-top:5em;
  strong{
    font-size:2rem;
    color:#fff;
    line-height:1.4;
    padding-bottom:1em;
    display:block;
  }
  p{
    font-size:1rem;
    color:#9195b5;
  }
`;
export const StLp = styled.div`
  position:relative;
  display:block;
  width:13rem;
  height:13rem;
  border-radius:50%;
  margin:0 auto;
  margin-bottom:2em;
  box-sizing:border-box;
  &:after{
    position:absolute;
    top:50%;
    left:50%;
    content:'';
    display:block;
    width:4.5rem;
    height:4.5rem;
    background-color:#c30051;
    margin-top:-2.25rem;
    margin-left:-2.25rem;
    border-radius:50%;
    box-sizing:border-box;
  }
  &:before{
    z-index:1;
    position:absolute;
    top:50%;
    left:50%;
    content:'';
    display:block;
    width:1rem;
    height:1rem;
    background-color:#111;
    margin-top:-0.5rem;
    margin-left:-0.5rem;
    border-radius:50%;
    box-sizing:border-box;
  }
`;
export const StLoginButton = styled.button`
  width:200px;
  height:40px;
  line-height:40px;
  color:#fff;
  font-size:.875rem;
  text-align:center;
  border:0;
  border-radius:.25em;
  background-color:#5f56e0;
  margin-top:3em;
  cursor:pointer;
`;
export const StWave = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%);
  > div{
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    border-radius:50%;
    border:1px solid #333;
    &:nth-child(1){ width:16rem; height:16rem; }
    &:nth-child(2){ width:19rem; height:19rem; }
    &:nth-child(3){ width:22rem; height:22rem; }
    &:nth-child(4){ width:25rem; height:25rem; }
    &:nth-child(5){ width:28rem; height:28rem; }
    &:nth-child(6){ width:31rem; height:31rem; }
  }
`;
