import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { popupOpenRequestAction } from '../reducers/user';
import { StHomeArea, StHomeContent, StLoginButton, StLp, StWave } from '../style/components/DefaultHome';

const DefaultHome = () => {
  const dispatch = useDispatch();
  const onClickLoginButton = useCallback(() => {
    dispatch(popupOpenRequestAction({
			key:'isLoginPopup',
			value: null,
		}));
  }, [])
  return(
    <StHomeArea>
      <StLp>
        <StWave>
          <div></div><div></div>
          <div></div><div></div>
          <div></div><div></div>
        </StWave>
      </StLp>
      <StHomeContent>
        <strong>Please Sign in</strong>
        <p>로그인후 사용해 주세요.</p>
        <StLoginButton type="button" onClick={onClickLoginButton}>Sign in</StLoginButton>
      </StHomeContent>  
    </StHomeArea>
  );
}

export default DefaultHome;