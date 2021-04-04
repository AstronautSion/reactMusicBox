import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { StInput } from '../../../style/Form';
import { StBtnLoginForm, StWarnningText } from '../../../style/LoginForm';
import { loginRequestAction } from '../../../reducers/user';
import { testEmail, textPassword } from '../../Common';

const MusicBoxLoginForm = () => { // order0
  const dispatch = useDispatch();

  const { loginDone, loginError } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const onChangeemail = useCallback((e) => {
    setEmail(e.target.value);
    setCheckEmail(testEmail(email));
  }, [email]);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setCheckPassword(textPassword(password));
  }, [password]);

  const onSubmitFIndAccount = useCallback((e) => {
    e.preventDefault();
    if (checkEmail) {
      dispatch(loginRequestAction({
        email,
        password,
      }));
    }
  }, [email, password, checkEmail]);

  useEffect(() => {
    if (loginDone) {
      Router.push('/');
    }
  }, [loginDone]);

  return (
    <>
      <form onSubmit={onSubmitFIndAccount}>
        <StInput
          type="text"
          value={email}
          onChange={onChangeemail}
          minLength="8"
          maxLength="30"
          placeholder="아이디를 입력하세요."
          autoFocus
          required
        />
        {!checkEmail && <StWarnningText>이메일 형식을 다시 확인해 주세요.</StWarnningText>}
        <StInput
          stMargin="5px 0 0 0"
          type="password"
          value={password}
          onChange={onChangePassword}
          minLength="10"
          maxLength="30"
          placeholder="비밀번호를 입력하세요."
          required
        />
        { !checkPassword
          && <StWarnningText>비밀번를 확인해주세요 [대문자, 숫자, 특수문자를 포함한 최소 8 자]  </StWarnningText>}

        <StBtnLoginForm type="submit">MusicBox Login</StBtnLoginForm>
      </form>
      {loginError
        && <StWarnningText>{loginError}</StWarnningText>}
    </>
  );
};

export default MusicBoxLoginForm;
