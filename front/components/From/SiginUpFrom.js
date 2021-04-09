import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { StInput, StLable, StSelect } from '../../style/Form';
import { StBtnLoginForm, StLoginFormTitle, StWarnningText } from '../../style/LoginForm';
import { StFieldset, StP } from '../../style/components/AppLayout';
import Checkbox from '../Items/Checkbox';
import { testEmail, textPassword } from '../Common';
import { signUpRequestAction } from '../../reducers/user';
import useInput from '../../hooks/useInput';

const SignUpForm = () => { // order 1
  const dispatch = useDispatch();
  const { signupDone, signupError } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [age, onChangeAge] = useInput(0);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('notSay');

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkAgree, setCheckAgree] = useState(true);
  const [checkNickname, setCheckNickname] = useState(true);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    setCheckEmail(testEmail(e.target.value));
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setCheckPassword(textPassword(e.target.value));
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    if (nickname.length < 3) {
      setCheckNickname(false);
    } else {
      setCheckNickname(true);
    }
  }, [nickname]);

  const onChangeGender = useCallback((e) => {
    setGender(e.target.value);
  }, []);

  const onClickNext = useCallback((e) => {
    e.preventDefault();
    // account, password 저장
    if (agree === false) {
      setCheckAgree(false);
    }

    if (email && password && agree && age && gender && nickname) {
      dispatch(signUpRequestAction({
        email,
        password,
        age,
        gender,
        nickname,
      }));
    }
  }, [email, password, age, agree, gender, nickname]);

  useEffect(() => {
    if (signupDone) {
      alert('회원가입 되었습니다. 다시 로그인 해주세요.');
      Router.push('/login');
    }
    if (signupError) {
      alert(signupError);
    }
  }, [signupDone, signupError]);

  return (
    <form>
      <div>
        <StLoginFormTitle stBlack>Create your YTList account</StLoginFormTitle>
        <StFieldset>
          <StLable>Choose an account</StLable>
          <StInput
            type="text"
            value={email}
            onChange={onChangeEmail}
            minLength="8"
            maxLength="30"
            required
          />
          {!checkEmail
            && <StWarnningText>계정 이메일 다시 확인해 주세요.</StWarnningText>}
        </StFieldset>
        <StFieldset>
          <StLable>Choose a password</StLable>
          <StInput
            type="password"
            value={password}
            onChange={onChangePassword}
            minLength="10"
            maxLength="30"
            placeholder="비밀번호를 입력해주세요."
            required
          />
          {!checkPassword
            && <StWarnningText>비밀번를 확인해주세요 [대문자, 숫자, 특수문자를 포함한 최소 8 자]  </StWarnningText>}
        </StFieldset>
        <StFieldset>
          <StLable>Tell us your age</StLable>
          <StInput
            type="number"
            min="0"
            max="100"
            value={age}
            onChange={onChangeAge}
          />
        </StFieldset>
        <StFieldset>
          <StLable>Gender</StLable>
          <StSelect onChange={onChangeGender}>
            <option value="notSay">Prefer not to say</option>
            <option value="female">Female</option>
            <option value="Male">Male</option>
          </StSelect>
        </StFieldset>
        <StFieldset>
          <StLable>Choose your display name</StLable>
          <StInput
            type="text"
            value={nickname}
            onChange={onChangeNickname}
            minLength="3"
            maxLength="20"
          />
          {!checkNickname
          && <StWarnningText>Display Name을 다시 확인해 주세요.</StWarnningText>}
          <br />
          <StP sm light>
            Your display name can be anything you like. Your name or artist name are good choices.
          </StP>
        </StFieldset>
        <StFieldset>
          <Checkbox check={agree} setCheck={setAgree} text="동의 합니다." />
          {!checkAgree && <StWarnningText>동의를 해주셔야 합니다.</StWarnningText>}
        </StFieldset>
        <StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
      </div>
    </form>
  );
};

export default SignUpForm;
