import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { StWrapper } from '../../style/components/AppLayout';

const AppLayout = ({ children }) => (
  <>
    <Header />
    <StWrapper>
      { children }
    </StWrapper>
  </>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
