import React from "react";
import { useSelector } from "react-redux";
import VideoAddForm from "../From/VideoAddForm";
import Popup from "../Popup";

const AddVideoPopup = () => {
  const addVideo = useSelector((state) => state.user.popup.addVideo);
  return (
    <>
      {addVideo && (
        <Popup>
          <VideoAddForm />
        </Popup>
      )}
    </>
  );
};

export default AddVideoPopup;
