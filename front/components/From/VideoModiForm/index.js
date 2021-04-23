import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StInput, StLable } from "../../../style/Form";
import { StButton, StFieldset } from "../../../Layout/AppLayout/styles";
import { updateVideoRequestAction } from "../../../reducers/video";
import { popupCloseRequestAction } from "../../../reducers/user";

const VideoModiForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.popup.data);
  const [title, setTitle] = useState(data?.title);
  const [author, setAuthor] = useState(data?.author);

  const onChangeVideoTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const onChangeVideoAuthor = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);
  const onSubmitModiVideoList = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        updateVideoRequestAction({
          id: data.id,
          videoId: data.videoId.trim(),
          title: title.trim(),
          author: author.trim(),
        })
      );
      dispatch(popupCloseRequestAction);
    },
    [data.id, data.videoId, author, title]
  );
  return (
    <div>
      <form onSubmit={onSubmitModiVideoList}>
        <StFieldset>
          <StLable>Video ID</StLable>
          <StInput value={data.videoId} readOnly />
        </StFieldset>
        <StFieldset>
          <StLable>Title</StLable>
          <StInput
            value={title}
            onChange={onChangeVideoTitle}
            minLength="1"
            maxLength="100"
            required
          />
        </StFieldset>
        <StFieldset>
          <StLable>Author</StLable>
          <StInput
            value={author}
            onChange={onChangeVideoAuthor}
            minLength="1"
            maxLength="100"
            required
          />
        </StFieldset>
        <StButton stMain type="submit">
          수정
        </StButton>
      </form>
    </div>
  );
};

export default VideoModiForm;
