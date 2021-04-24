import React, { useCallback, useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { StInput, StLable } from "../../../style/Form";
import {
  StButtonBack,
  StFieldset,
  StAddVideoYoutube,
  StAddVideoSpanText,
} from "../../../Layout/AppLayout/styles";
import { StButtonLonger } from "../LoginForm/styles";
import { popupCloseRequestAction } from "../../../reducers/user";
import { addVideoRequestAction } from "../../../reducers/video";
import { timeFormat } from "../../Common";

const VideoAddForm = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const [readySubmit, setReadySubmit] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [duration, setDuration] = useState("");
  const [loadingVideo, setLoadingVideo] = useState("Loading"); // loading, complete, error
  const UserId = useSelector((state) => state.user.me.id);
  const addVideoDone = useSelector((state) => state.video.addVideoDone);
  const addVideoError = useSelector((state) => state.video.addVideoError);

  const onChangeLink = useCallback(
    (e) => {
      setLink(e.target.value.trim());
    },
    [link]
  );

  const checkLink = useCallback(() => {
    const piece = "?v=";
    const piece2 = "&";

    const splitFront = link.includes(piece) ? link.split(piece)[1] : link;
    const splitFinal = splitFront.includes(piece2)
      ? splitFront.split(piece2)[0]
      : splitFront;
    setVideoId(splitFinal);
  }, [link]);

  const onSubmitAddVideoConfirm = useCallback(
    (e) => {
      e.preventDefault();
      setReadySubmit(true);
      checkLink();
    },
    [link]
  );

  const onSubmitAddVideoComplete = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        addVideoRequestAction({
          videoId,
          title: title.trim(),
          author: author.trim(),
          UserId,
          duration,
        })
      );
    },
    [duration, videoId, title, author, UserId]
  );

  useEffect(() => {
    if (addVideoDone && !addVideoError) {
      dispatch(popupCloseRequestAction);
      setTitle("");
      setAuthor("");
      setLoadingVideo("Loading");
      setReadySubmit(false);
    }
  }, [addVideoDone, addVideoError]);

  const onclickBack = () => {
    setTitle("");
    setAuthor("");
    setLoadingVideo("Loading");
    setReadySubmit(false);
  };

  const onChangetitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeYutubeAuthor = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);

  const onStateChangesAddVideo = useCallback((e) => {
    const video = e.target;
    if (video.data === null) {
      e.target.setVolume(0);
    } else {
      setDuration(video.getDuration());
      setTitle(video.getVideoData().title.substring(0, 100));
      setAuthor(video.getVideoData().author.substring(0, 100));

      video.pauseVideo();
      video.seekTo(0);
      setLoadingVideo("Complete");
    }
  }, []);

  const onReadyYouTubeAddVideo = useCallback((e) => {
    e.target.setVolume(0);
  }, []);

  const opts = { playerVars: { autoplay: 1 } };

  return (
    <div>
      {!readySubmit ? (
        <form onSubmit={onSubmitAddVideoConfirm}>
          <StLable>Add Video</StLable>
          <StInput
            onChange={onChangeLink}
            value={link}
            placeholder="Youtube 링크를 입력해주세요."
            required
            readOnly={readySubmit}
          />
          <StButtonLonger tyle="submit">Continue</StButtonLonger>
        </form>
      ) : (
        <>
          <form onSubmit={onSubmitAddVideoComplete}>
            <StButtonBack onClick={onclickBack}>&larr;</StButtonBack>
            <StFieldset>
              <StLable>Video ID</StLable>
              <StInput value={videoId} readOnly />
            </StFieldset>
            <StFieldset>
              <StLable>Duratino</StLable>
              <StInput value={timeFormat(duration)} readOnly />
            </StFieldset>
            <StFieldset>
              <StLable>Title</StLable>
              <StInput
                onChange={onChangetitle}
                value={title}
                minLength="3"
                maxLength="100"
              />
            </StFieldset>
            <StFieldset>
              <StLable>author</StLable>
              <StInput
                onChange={onChangeYutubeAuthor}
                value={author}
                minLength="3"
                maxLength="100"
              />
            </StFieldset>
            {loadingVideo !== "Loading" && (
              <StButtonLonger type="submit">Add Video</StButtonLonger>
            )}
          </form>
          <StAddVideoYoutube>
            <YouTube
              videoId={videoId}
              containerClassName="embed embed-youtube"
              onStateChange={(e) => onStateChangesAddVideo(e)}
              opts={opts}
              onReady={onReadyYouTubeAddVideo}
            />
          </StAddVideoYoutube>
          {addVideoError && (
            <StAddVideoSpanText>이미 등록된 영상입니다.</StAddVideoSpanText>
          )}
          {loadingVideo === "Loading" ? (
            <>
              <StAddVideoSpanText>
                Title, author값을 불러오지 못한다면
                <br />
                Video ID 값을 다시 확인해 주세요.
              </StAddVideoSpanText>
            </>
          ) : (
            <StAddVideoSpanText stColor="#33b73c">
              {loadingVideo}!!
            </StAddVideoSpanText>
          )}
        </>
      )}
    </div>
  );
};
export default VideoAddForm;
