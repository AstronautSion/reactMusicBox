import React, { useEffect } from "react";
import { END } from "redux-saga";
import axios from "axios";
import { useSelector } from "react-redux";
import Router from "next/router";
import { getVideosRequestAction } from "../reducers/video";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import AppLayout from "../Layout/AppLayout";
import { StContainer, StWrapper } from "../Layout/AppLayout/styles";
import ContentsVideoImgList from "../Layout/ContentsVideoImgList";
import ContentsMain from "../Layout/ContentsMain";
import wrapper from "../store/configureStore";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { loadMyInfoError } = useSelector((state) => state.user);
  useEffect(() => {
    if (loadMyInfoError) {
      alert(loadMyInfoError);

      Router.push("/login");
    }
  }, [loadMyInfoError]);

  return (
    <>
      <AppLayout>
        {me ? (
          <StWrapper>
            <StContainer>
              <ContentsVideoImgList />
            </StContainer>
          </StWrapper>
        ) : (
          <ContentsMain />
        )}
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

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    if (cookie) {
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

export default Home;
