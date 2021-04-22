import styled from "styled-components";

export const StDetailWatchView = styled.div`
  position: relative;
  padding: 1em 0;
  .embed-youtube {
    position: relative;
    padding-bottom: 56%;
    background-color: #000;
    box-sizing: border-box;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StDetailWatchInfoArea = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid #212121;
`;

export const StDetailWatchTitle = styled.strong`
  font-size: 1.25rem;
  color: #fff;
  line-height: 1.6;
`;
export const StDetailWatchAuthor = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
`;

export const StDetailWatchTime = styled.span`
  display: block;
  color: #666;
  margin-top: 1em;
`;
export const StDetailWatchSta = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em;
  line-height: 1.6;
  font-size: 1rem;
  color: #fff;
`;
export const StDetailWatchButton = styled.button`
  display: inline-block;
  line-height: 1.6;
  font-size: 1rem;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 0.35em;
  background-color: #5f56e0;
  margin-bottom: 1em;
  margin-left: 0.5em;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
export const StVideoId = styled.span`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  margin-top: 1em;
  background-color: #201e3c;
  font-size: 0.75rem;
  color: #ddd;
`;
