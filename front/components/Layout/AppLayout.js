import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from './Header';
import { StWrapper } from '../../style/components/AppLayout';
import Popup from '../Popup/Popup';
import LoginForm from '../From/LoginForm';

const AppLayout = ({ children }) => {
  const isLoginPopup = useSelector((state) => state.user.popup.isLoginPopup);
  return (
    <>
      <Header />
      { isLoginPopup
      && (
        <Popup>
          <LoginForm />
        </Popup>
      )}
      <StWrapper>
        { children }
      </StWrapper>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
