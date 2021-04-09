import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Reset from '../style/Reset';
import FormReset from '../style/FromReset';
import wrapper from '../store/configureStore';
import YoutubeAPI from '../components/YoutubeAPI';
import { StBackgroundYouTube } from '../style/components/AppLayout';

const MusicBox = ({ Component }) => {
  const { me } = useSelector((state) => state.user);
  const link = useSelector((state) => state.music.nowPlayList?.link);

  return (
    <>
      <Head>
        <title>MusicBox</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500&family=Noto+Sans+KR:wght@300;400;500&display=swap" rel="stylesheet" />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
      </Head>
      <Reset />
      {me
        && (
          <StBackgroundYouTube>
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
