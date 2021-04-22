import styled from "styled-components";

export const StVideoBoxImgItem = styled.li`
  width: 25%;
  color: #fff;
  padding: 0.5em;
  box-sizing: border-box;
  &:hover .videoCard__showItem {
    opacity: 1;
  }
  @media screen and (max-width: 1200px) {
    width: 33.333%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;
export const StVideoBoxFigure = styled.figure`
  position: relative;
  overflow: hidden;
`;
export const StVideoBoxImgThumb = styled.img`
  display: block;
  width: 100%;
  transition: all 0.7s;
  -webkit-animation: text-focus-in 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  &:hover {
    transform: scale(1.025);
  }
`;
export const StVideoBoxImgInfo = styled.div`
  padding: 0.5em;
`;
export const StVideoBoxImgTitle = styled.strong`
  font-size: 0.875rem;
  color: #fff;
  line-height: 1.4;
  font-weight: 400;
`;
export const StVideoBoxImgAuthor = styled.div`
  margin-top: 1em;
  font-size: 0.75rem;
  color: #999;
`;
export const StVideoId = styled.span`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  margin-top: 3em;
  background-color: #201e3c;
  font-size: 0.75rem;
  color: #ddd;
`;
export const StVideoBoxTime = styled.div`
  margin-top: 1em;
  font-size: 0.85rem;
  color: #666;
`;
export const StVideoBoxDuration = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.75rem;
  background-color: #121212;
  color: #aaa;
  padding: 0.25em 0.4em;
`;
