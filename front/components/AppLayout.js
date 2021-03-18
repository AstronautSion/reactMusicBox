import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import PropTypes from 'prop-types';

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
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;