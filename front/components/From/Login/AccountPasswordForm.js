import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { StButtonBack } from '../../../style/components/AppLayout';
import { StBtnLoginForm, StLoginFormTitle, StWarnningText } from '../../../style/LoginForm';
import { StInput, StLable } from '../../../style/Form';
import { testEmail, textPassword } from '../../Common';
import { loginRequestAction, popupCloseRequestAction } from '../../../reducers/user';

const AccountPasswordForm = ({ setOrder }) => {
  const dispatch = useDispatch();
  const { loginDone } = useSelector((state) => state.user);
  const { email } = useSelector((state) => state.user.loginData);
  const [account, setAccount] = useState(email);
  const [password, setPassword] = useState('');

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const onChangeAccount = useCallback((e) => {
    setAccount(e.target.value);
    setCheckEmail(testEmail(e.target.value));
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setCheckPassword(textPassword(e.target.value));
  }, []);

  const onClickBackContents = () => {
    setOrder(0);
  };

  const onClickNext = useCallback((e) => {
    e.preventDefault();
    // account, password 저장
    dispatch(loginRequestAction({
      email: account,
      password,
    }));
  }, [account, password]);

  useEffect(() => {
    if (loginDone) {
      dispatch(popupCloseRequestAction);
    }
  }, [loginDone]);

  return(
    <form onSubmit={onClickNext}>
      <StButtonBack ButtonBack onClick={onClickBackContents} type="button">&larr;</StButtonBack>
      <StLoginFormTitle stBlack>Login MusicBox</StLoginFormTitle>
      <div>
        <StInput type="text" stMargin="0 0 1em 0" value={account} onChange={onChangeAccount} minLength="8" maxLength="30" required />
        {!checkEmail && <StWarnningText>계정 이메일 다시 확인해 주세요.</StWarnningText>}
      </div>
      <div>
        <StLable>password</StLable>
        <StInput type="password" value={password} onChange={onChangePassword} minLength="10" maxLength="30" placeholder="비밀번호를 입력해주세요." required autoFocus />
        { !checkPassword
          && <StWarnningText>비밀번를 확인해주세요 [대문자, 숫자, 특수문자를 포함한 최소 8 자]  </StWarnningText>}
      </div>
      <div>
        <StBtnLoginForm type="submit">Continue</StBtnLoginForm>
      </div>
    </form>
  );
};

AccountPasswordForm.propTypes = {
  setOrder: PropTypes.number.isRequired,
};

export default AccountPasswordForm;
