import React, { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import LoginForm from '../From/LoginForm';
import { StWrapper } from '../../style/components/AppLayout';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup ] = useState(false);
   
    return (
        <>
            <Header 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                showPopup={showPopup}
                setShowPopup={setShowPopup} 
            />

            { showPopup &&  
                <LoginForm
                    setShowPopup={setShowPopup} 
                    setIsLoggedIn={setIsLoggedIn} 
                /> 
            }
            <StWrapper>
                {children}
            </StWrapper>
            
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;