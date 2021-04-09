import styled, { css } from 'styled-components';

export const StMusicListItem = styled.li`
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

export const StMusicListItemWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const StMusicListItemThumb = styled.div`
  display:block;
  width:70px;
  height:70px;
  background-color:#9195b5;

  ${(props) => props.stImg && css`
    background:url(${props.stImg}) no-repeat center;
    background-size:cover;
  `}
  
`;
export const StMusicListItemInfo = styled.div`
  padding-left:1em;
  box-sizing: border-box;
  width: calc(100% - 70px);
  word-break: break-all;

  .music-list__title{
    font-size:1rem;
    display:block;
    padding-bottom:.25em;
    line-height:1.4;
    color:#474c71;

    .music-list__author {
      color:#9195b5;
      display:inline-block;
      font-size:.75rem;
      line-height:1.2;
      vertical-align:baseline;
      padding-left:1em;
    }
  }
  .music-list__writter {
    padding-top:1em;
    font-size:.75rem;
    display:block;
    color:#9195b5;
  }
`;

export const StMusicListItemControl = styled.div`
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

  .music-list__button--delete {
    border-color:#9195b5;
    background-color:#9195b5;
    color:#fff;
  }
`;

export const StMusicList = styled.ul`
  position:relative;
`;
