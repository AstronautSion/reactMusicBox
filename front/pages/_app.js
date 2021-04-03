import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Reset from '../style/Reset';
import FormReset from '../style/FromReset';
import wrapper from '../store/configureStore';
import { getMusicRequestAction } from '../reducers/music';
import YoutubeAPI from '../components/YoutubeAPI';
import { StBackgroundYouTube } from '../style/components/AppLayout';

const MusicBox = ({ Component }) => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);
  const link = useSelector((state) => state.music.nowPlayList.link);
  useEffect(() => {
    if (me) {
      dispatch(getMusicRequestAction);
    }
  }, [me]);

  return (
    <>
      <Head>
        <title>MusicBox</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Reset />
      {me
        && (
          <StBackgroundYouTube stImg={`https://img.youtube.com/vi/${link}/hqdefault.jpg`}>
            <YoutubeAPI />
          </StBackgroundYouTube>
        )}
      <FormReset />
      <Component />
    </>
  );
};

MusicBox.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MusicBox);
