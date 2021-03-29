import React, { useState } from 'react';
import { StCheckbox, StInput, StLable } from "../../../style/Form";
import { StBtnLoginForm, StLoginFormTitle } from "../../../style/LoginForm";
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { StButtonBack } from '../../../style/components/AppLayout';

const CreateAccountForm = ({setOrder}) => { //order 2
  const [account, onChangeAccount] = useInput('');
	const [password, onChangePassword] = useInput('');
  const [agree, setAgree] = useState(false);
  
  const onClickBackContents = () =>{ 
    setOrder(0); 
  }

  const onCheckAgree = (e) => {
		e.preventDefault();
		setAgree(!agree); 
	}

  const onClickNext = () => {
    //account, agree, password 저장
    setOrder(3);
  }

  return(
    <form>
      <StButtonBack onClick={onClickBackContents} type="button">&larr;</StButtonBack>
      <StLoginFormTitle stBlack>Create your MusicBox account</StLoginFormTitle>
      <div>
        <StInput type="text" stMargin="0 0 1em 0" value={account} onChange={onChangeAccount} minLength="8" maxLength="20" required />
      </div>
      <div>
        <StLable>Choose a password</StLable>
        <StInput type="password" value={password} onChange={onChangePassword} minLength="10" maxLength="30" placeholder="비밀번호를 입력해주세요." required /> 
      </div>
      <div>
        <StCheckbox onClick={onCheckAgree}>
            <input type="checkbox" id="agree" checked={agree} required />
            <span></span>
            동의 합니다.
        </StCheckbox>
      </div>
      <div>
          <StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
      </div>
    </form>
  );
}

CreateAccountForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
}

export default CreateAccountForm;