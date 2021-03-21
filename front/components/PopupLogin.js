import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { popupLoginClose } from '../reducers/user';
import { StPopupBtnClose, StPopupWrapper } from '../style/components/AppLayout';
import LoginForm from './From/LoginForm';

const PopupLogin = () => {
  const dispatch = useDispatch();
  const onClickClosePopup = useCallback(() => {
		dispatch(popupLoginClose);
	},[]);

  return(
    <StPopupWrapper>
      <StPopupBtnClose onClick={onClickClosePopup}>X</StPopupBtnClose>
      <LoginForm />
    </StPopupWrapper>
  );
}

export default PopupLogin;