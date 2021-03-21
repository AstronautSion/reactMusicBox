import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Reset from '../style/Reset';
import FormReset from '../style/FromReset';
import wrapper from '../store/configureStore';

const MusicBox = ({ Component }) => {
    return(
        <>
            <Head>
                <title>MusicBox</title>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
            </Head>
            <Reset />
            <FormReset />
            <Component />
        </>
    );
}

MusicBox.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MusicBox);