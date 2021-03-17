import React from 'react';
import PropTypes from 'prop-types';
import { StPopupWrapper } from '../style/components/PopupLayout';

const PopupLayout = ({prop}) => {
    return(
        <StPopupWrapper>
            {prop}
        </StPopupWrapper>
    );
}

PopupLayout.propTypes = {
    prop: PropTypes.node.isRequired,
}

export default PopupLayout;