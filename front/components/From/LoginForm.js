import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { popupCloseRequestAction } from '../../reducers/user';
import GoogleLoginButton from '../oauth/googleLogin';
import { StBtnLoginForm } from '../../style/LoginForm';
import CreateAccountPasswordForm from './Login/CreateAccountPasswordForm';
import CreateAccountInfoForm from './Login/CreateAccountInfoForm';
import CreateAccountNicknameForm from './Login/CreateAccountNicknameForm';
import CreateAccountForm from './Login/createAccountForm';

function LoginForm() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState(0);
  const [nickname, setNickname] = useState('');
  const onClickLoginFacebook = useCallback(() => {
    // dispatch(loginAction({
    // id: account,
    // password
    // }));
    dispatch(popupCloseRequestAction);
    setOrder(0);
  }, []);

  return (
    <div>
      {order === 0 && (
      <>
        <div>
          <StBtnLoginForm
            stFacebook
            stMargin="0"
            onClick={onClickLoginFacebook}
            type="button"
          >Continue with Facebook
          </StBtnLoginForm>
          <GoogleLoginButton
            setNickname={setNickname}
            setOrder={setOrder}
          />
        </div>
        <hr />
        <CreateAccountForm setOrder={setOrder} />
      </>
      )}
      {order === 1 && (
        <CreateAccountPasswordForm
          setOrder={setOrder}
        />
      )}
      {order === 2 && <CreateAccountInfoForm setOrder={setOrder} />}
      {order === 3 && (
        <CreateAccountNicknameForm
          nickname={nickname}
          setNickname={setNickname}
          setOrder={setOrder}
        />
      )}
    </div>
  );
}

export default LoginForm;
