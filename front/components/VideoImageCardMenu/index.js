import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { popupOpenRequestAction } from "../../reducers/user";
import { deleteVideoRequestAction } from "../../reducers/video";
import { StVideoImageCardMenu, StVideoImageCardMenuButton } from "./styles";

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

export default React.memo(VideoImageCardMenu);
