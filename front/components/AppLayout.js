import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { StMenu } from '../style/components/AppLayout';

const AppLayout = ({ children }) => {
    return (
        <>
           <StMenu>
                <Link href="/"><a>Home</a></Link>
                <Link href="/profile"><a>Profile</a></Link>
                <Link href="/signup"><a>Signup</a></Link>
            </StMenu>
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;