import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { popupOpenRequestAction } from "../../reducers/user";
import { deleteVideoRequestAction } from "../../reducers/video";

const StVideoImageCardMenu = styled.div`
  transition: all 0.3s;
  position: absolute;
  bottom: 0.25em;
  right: 0.25em;
  opacity: 0;
`;
const StVideoImageCardMenuButton = styled.button`
  transition: all 0.3s;
  display: block;
  width: 30px;
  height: 30px;
  margin-top: 0.5em;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const VideoImageCardMenu = ({ data }) => {
  const dispatch = useDispatch();

  const onCLickUpdateVideo = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        popupOpenRequestAction({
          key: "updateVideo",
          value: {
            id: data.id,
            videoId: data.videoId,
            title: data.title,
            author: data.author,
          },
        })
      );
    },
    [data.id, data.title, data.author, data.videoId]
  );

  const onCLickDeleteVideo = useCallback((e) => {
    e.preventDefault();
    if (confirm("삭제하시겠습니까?")) {
      dispatch(deleteVideoRequestAction(data.id));
    }
  });
  return (
    <StVideoImageCardMenu className="videoCard__showItem">
      <StVideoImageCardMenuButton
        className="fa fa-pencil"
        onClick={onCLickUpdateVideo}
      />
      <StVideoImageCardMenuButton
        className="fa fa-trash-o"
        onClick={onCLickDeleteVideo}
      />
    </StVideoImageCardMenu>
  );
};

VideoImageCardMenu.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoImageCardMenu;
