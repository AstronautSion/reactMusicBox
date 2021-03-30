import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { popupCloseRequestAction } from '../../reducers/user';
import { StPopupBtnClose, StPopupWrapper } from '../../style/components/AppLayout';
import PropTypes from 'prop-types';

const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const onClickClosePopup = useCallback(() => {
		dispatch(popupCloseRequestAction);
	},[]);

  return(
    <StPopupWrapper>
      <StPopupBtnClose onClick={onClickClosePopup}>X</StPopupBtnClose>
      {children}
    </StPopupWrapper>
  );
}

Popup.propTypes = {
  children : PropTypes.node.isRequired,
}
export default Popup;