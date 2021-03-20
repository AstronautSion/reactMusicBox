import React, { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import LoginForm from '../From/LoginForm';
import { StPopupWrapper, StWrapper } from '../../style/components/AppLayout';

const AppLayout = ({ children }) => {
    
    const [showPopup, setShowPopup ] = useState(false);
    
    return (
        <>
            <Header 
                showPopup={showPopup}
                setShowPopup={setShowPopup} 
            />

            { showPopup &&  
                <StPopupWrapper>
                    <LoginForm setShowPopup={setShowPopup} /> 
                </StPopupWrapper>
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