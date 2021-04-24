import React from "react";
import { useSelector } from "react-redux";
import VideoModiForm from "../From/VideoModiForm";
import Popup from "../Popup";

const UpdateVideoPopup = () => {
  const updateVideo = useSelector((state) => state.user.popup.updateVideo);
  return (
    <>
      {updateVideo && (
        <Popup>
          <VideoModiForm />
        </Popup>
      )}
    </>
  );
};

export default UpdateVideoPopup;
