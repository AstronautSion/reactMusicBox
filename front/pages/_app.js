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