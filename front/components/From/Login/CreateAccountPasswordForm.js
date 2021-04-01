import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { StInput, StLable } from '../../../style/Form';
import { StBtnLoginForm, StLoginFormTitle, StWarnningText } from '../../../style/LoginForm';
import { StButtonBack } from '../../../style/components/AppLayout';
import { testEmail, textPassword } from '../../Common';
import Checkbox from '../../Checkbox';
import { signUpRequestAction } from '../../../reducers/user';

const CreateAccountPasswordForm = ({ setOrder }) => { // order 2
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.loginData?.email);
  const signupDone = useSelector((state) => state.user.signupDone);
  const [account, setAccount] = useState(email);
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkAgree, setCheckAgree] = useState(true);

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

  const onClickNext = useCallback(() => {
    // account, password 저장
    if (agree === false) {
      setCheckAgree(false);
    }
    if (account && password && agree) {
      dispatch(signUpRequestAction({
        email: account,
        password,
      }));
    }
  }, [account, password, agree]);

  useEffect(() => {
    if (signupDone) {
      setOrder(2);
    }
  }, [signupDone]);

  return (
    <form>
      <StButtonBack onClick={onClickBackContents} type="button">&larr;</StButtonBack>
      <StLoginFormTitle stBlack>Create your MusicBox account</StLoginFormTitle>
      <div>
        <StInput type="text" stMargin="0 0 1em 0" value={account} onChange={onChangeAccount} minLength="8" maxLength="30" required />
        {!checkEmail && <StWarnningText>계정 이메일 다시 확인해 주세요.</StWarnningText>}
      </div>
      <div>
        <StLable>Choose a password</StLable>
        <StInput type="password" value={password} onChange={onChangePassword} minLength="10" maxLength="30" placeholder="비밀번호를 입력해주세요." required autoFocus />
        { !checkPassword
          && <StWarnningText>비밀번를 확인해주세요 [대문자, 숫자, 특수문자를 포함한 최소 8 자]  </StWarnningText>}
      </div>
      <div>
        <Checkbox check={agree} setCheck={setAgree} text="동의 합니다." />
        {!checkAgree && <StWarnningText>동의를 해주셔야 합니다.</StWarnningText>}
      </div>
      <div>
        <StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
      </div>
    </form>
  );
};

CreateAccountPasswordForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
};

export default CreateAccountPasswordForm;
