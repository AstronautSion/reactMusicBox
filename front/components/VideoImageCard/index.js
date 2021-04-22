import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Link from "next/link";
import VideoImageCardMenu from "../VideoImageCardMenu";
import { timeFormat } from "../Common";
import {
  StVideoBoxDuration,
  StVideoBoxFigure,
  StVideoBoxImgAuthor,
  StVideoBoxImgInfo,
  StVideoBoxImgItem,
  StVideoBoxImgThumb,
  StVideoBoxImgTitle,
  StVideoBoxTime,
  StVideoId,
} from "./styles";

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
      <Link href={`/watch/${data.id}`}>
        <a>
          <StVideoBoxImgTitle>{data.title}</StVideoBoxImgTitle>
        </a>
      </Link>
      <StVideoBoxImgAuthor>{data.author}</StVideoBoxImgAuthor>

      <StVideoId>{data.videoId}</StVideoId>
      <StVideoBoxTime>
        {moment(data.createdAt).format("YYYY.MM.DD h:mm:ss a")}
      </StVideoBoxTime>
    </StVideoBoxImgInfo>
  </StVideoBoxImgItem>
);

VideoImageCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(VideoImageCard);
