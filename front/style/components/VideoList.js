import styled, { css } from 'styled-components';

export const StNoVideoCard = styled.div`
  position:relative;
  width:25%;
  border:1px solid #ddd;
  opacity:.2;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  > i {
    padding:30% 0;
    display:block;
    font-size:2rem;
    line-height:1;
    vertical-align:middle;
    color:#fff;
  }
  :hover {
    opacity:.5;
  }
`;
export const StVideoImgList = styled.ul`
  display:flex;
  flex-wrap:wrap;
`;

export const StVideoListItem = styled.li`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.5em 1em 1em 1em;
  display: block;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin-bottom: .5em;
  background-color: #fafafb;
  border-radius: .5em;
`;

export const StVideoListItemWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const StVideoListItemThumb = styled.div`
  display:block;
  width:70px;
  height:70px;
  background-color:#9195b5;

  ${(props) => props.stImg && css`
    background:url(${props.stImg}) no-repeat center;
    background-size:cover;
  `}
  
`;
export const StVideoListItemInfo = styled.div`
  padding-left:1em;
  box-sizing: border-box;
  width: calc(100% - 70px);
  word-break: break-all;

  .video-list__title{
    font-size:1rem;
    display:block;
    padding-bottom:.25em;
    line-height:1.4;
    color:#474c71;

    .video-list__author {
      color:#9195b5;
      display:inline-block;
      font-size:.75rem;
      line-height:1.2;
      vertical-align:baseline;
      padding-left:1em;
    }
  }
  .video-list__writter {
    padding-top:1em;
    font-size:.75rem;
    display:block;
    color:#9195b5;
  }
`;

export const StVideoListItemControl = styled.div`
  position:absolute;
  bottom:0;
  right:0;
  > button {
    font-size:.75rem;
    border:1px solid #eee;
    border-radius:.2em;
    padding:.25em .7em;
    margin-left:.25em;
    cursor:pointer;
    color:#9195b5;
  }

  .video-list__button--delete {
    border-color:#9195b5;
    background-color:#9195b5;
    color:#fff;
  }
`;

export const StVideoList = styled.ul`
  position:relative;
`;
