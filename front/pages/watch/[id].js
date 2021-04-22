import React, { useCallback, useEffect } from "react";
import { NextSeo } from "next-seo";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import axios from "axios";
import YouTube from "react-youtube";

import moment from "moment";
import AppLayout from "../../Layout/AppLayout";
import {
  LOAD_MY_INFO_REQUEST,
  popupOpenRequestAction,
} from "../../reducers/user";
import { StContainer, StWrapper } from "../../Layout/AppLayout/styles";
import wrapper from "../../store/configureStore";
import {
  deleteVideoRequestAction,
  getOneVideoRequestAction,
  getVideosRequestAction,
} from "../../reducers/video";
import Popup from "../../components/Popup";
import VideoAddForm from "../../components/From/VideoAddForm";
import VideoModiForm from "../../components/From/VideoModiForm";
import {
  StDetailWatchAuthor,
  StDetailWatchButton,
  StDetailWatchInfoArea,
  StDetailWatchSta,
  StDetailWatchTime,
  StDetailWatchTitle,
  StDetailWatchView,
  StVideoId,
} from "./style";
import ContentsVideoImgList from "../../Layout/ContentsVideoImgList";

const Video = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addVideo, updateVideo } = useSelector((state) => state.user.popup);
  const opts = { playerVars: { autoplay: 1 } };
  const id = useSelector((state) => state.video.nowPlayList?.id);
  const title = useSelector((state) => state.video.nowPlayList?.title);
  const videoId = useSelector((state) => state.video.nowPlayList?.videoId);
  const author = useSelector((state) => state.video.nowPlayList?.author);
  const createdAt = useSelector((state) => state.video.nowPlayList?.createdAt);

  const onStateChangesAddVideo = useCallback(() => {}, []);
  const onReadyYouTubeAddVideo = useCallback(() => {}, []);

  const onClickUpdateVideo = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        popupOpenRequestAction({
          key: "updateVideo",
          value: {
            id,
            videoId,
            title,
            author,
          },
        })
      );
    },
    [title, author, id, videoId]
  );

  const onClickDeleteVideo = useCallback(
    (e) => {
      e.preventDefault();
      if (confirm("삭제하시겠습니까?")) {
        dispatch(deleteVideoRequestAction(id));
        Router.replace("/");
      }
    },
    [id]
  );

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return (
    <>
      <NextSeo
        title="YTList Watch"
        description="Try adding various YouTube links."
      />
      <AppLayout>
        <StWrapper>
          <StContainer>
            <StDetailWatchView>
              <YouTube
                videoId={videoId}
                containerClassName="embed embed-youtube"
                onStateChange={(e) => onStateChangesAddVideo(e)}
                opts={opts}
                onReady={onReadyYouTubeAddVideo}
              />
              <StDetailWatchInfoArea>
                <StDetailWatchTitle>{title}</StDetailWatchTitle>
                <StDetailWatchAuthor>{author}</StDetailWatchAuthor>
                <StVideoId>{videoId}</StVideoId>
                <StDetailWatchTime>
                  {moment(createdAt).format("YYYY.MM.DD hh:mm:ss a")}
                </StDetailWatchTime>

                <StDetailWatchSta>
                  <StDetailWatchButton
                    className="fa fa-pencil"
                    onClick={onClickUpdateVideo}
                  />
                  <StDetailWatchButton
                    className="fa fa-trash-o"
                    onClick={onClickDeleteVideo}
                  />
                </StDetailWatchSta>
              </StDetailWatchInfoArea>
            </StDetailWatchView>
            {addVideo && (
              <Popup>
                <VideoAddForm />
              </Popup>
            )}
            {updateVideo && (
              <Popup>
                <VideoModiForm />
              </Popup>
            )}

            <ContentsVideoImgList />
          </StContainer>
        </StWrapper>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({ type: LOAD_MY_INFO_REQUEST });

    if (cookie) {
      context.store.dispatch(getOneVideoRequestAction(context.query.id));
      context.store.dispatch(
        getVideosRequestAction({
          word: context.query.word || "",
        })
      );
    }

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Video;
