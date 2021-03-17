import React from 'react';
import PropTypes from 'prop-types';
import { StPopupWrapper } from '../style/components/PopupLayout';

const PopupLayout = ({ children }) => {
    

    return(
        <StPopupWrapper>
            <button type="button">X</button>
            {children}
        </StPopupWrapper>
    );
}

PopupLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PopupLayout;