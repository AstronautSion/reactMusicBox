import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import VideoImageCardMenu from './VideoImageCardMenu';
import { timeFormat } from '../Common';

const StVideoBoxImgItem = styled.li`
  width:25%;
  color:#fff;
  padding:.5em;
  box-sizing:border-box;
  &:hover .videoCard__showItem{
    opacity:1;
  }
  @media screen and (max-width: 1200px){
    width:33.333%;
  }
  @media screen and (max-width: 768px){
    width:50%;
  }
  @media screen and (max-width: 560px){
    width:100%;
    margin-bottom:2em;
  }
`;
const StVideoBoxFigure = styled.figure`
  position:relative;
  overflow:hidden;
`;
const StVideoBoxImgThumb = styled.img`
  display:block;
  width:100%;
  transition: all .7s;
  -webkit-animation: text-focus-in .4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in .4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

  @-webkit-keyframes text-focus-in {
    0% { -webkit-filter: blur(12px); filter: blur(12px); opacity: 0; }
    100% { -webkit-filter: blur(0px); filter: blur(0px); opacity: 1; }
  }
  @keyframes text-focus-in {
    0% { -webkit-filter: blur(12px); filter: blur(12px); opacity: 0; }
    100% { -webkit-filter: blur(0px); filter: blur(0px); opacity: 1; }
  }
  &:hover{
    transform:scale(1.025);
  }
`;
const StVideoBoxImgInfo = styled.div`
  padding:.5em;
`;
const StVideoBoxImgTitle = styled.strong`
  font-size:.875rem;
  color:#fff;
  line-height:1.4;
  font-weight:400;
`;
const StVideoBoxImgAuthor = styled.div`
  margin-top:1em;
  font-size:.75rem;
  color:#999;
`;
const StVideoId = styled.span`
    display:inline-block;
    padding:.25em .5em;
    border-radius:5px;
    margin-top:3em;
    background-color:#201e3c;
    font-size:.75rem;
    color:#ddd;
`;
const StVideoBoxTime = styled.div`
  margin-top:1em;
  font-size:.85rem;
  color:#666;
`;
const StVideoBoxDuration = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  font-size:.75rem;
  background-color:#121212;
  color:#aaa;
  padding:.25em .4em;
`;

const VideoImageCard = ({ data }) => (
  <StVideoBoxImgItem>
    <Link href={`/watch/${data.id}`}>
      <a>
        <StVideoBoxFigure>
          <StVideoBoxImgThumb
            src={`https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`}
            alt={data.title}
          />
          <StVideoBoxDuration>{timeFormat(data.duration)}</StVideoBoxDuration>
          <VideoImageCardMenu data={data} />
        </StVideoBoxFigure>
      </a>
    </Link>
    <StVideoBoxImgInfo>
      <Link href={`/watch/${data.id}`}><a><StVideoBoxImgTitle>{data.title}</StVideoBoxImgTitle></a></Link>
      <StVideoBoxImgAuthor>{data.author}</StVideoBoxImgAuthor>

      <StVideoId>{data.videoId}</StVideoId>
      <StVideoBoxTime>{moment(data.createdAt).format('YYYY.MM.DD h:mm:ss a')}</StVideoBoxTime>

    </StVideoBoxImgInfo>
  </StVideoBoxImgItem>
);

VideoImageCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(VideoImageCard);
