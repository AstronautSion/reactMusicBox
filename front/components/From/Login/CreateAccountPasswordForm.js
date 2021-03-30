import React, { useState } from 'react';
import { StCheckbox, StInput, StLable } from "../../../style/Form";
import { StBtnLoginForm, StLoginFormTitle } from "../../../style/LoginForm";
import PropTypes from 'prop-types';
import { StButtonBack } from '../../../style/components/AppLayout';
import useInput from '../../../hooks/useInput';
import { useSelector } from 'react-redux';

const CreateAccountPasswordForm = ({setOrder}) => { //order 2

  const email = useSelector(state => state.user.loginData?.email);
  const [account, onChangeAccount] = useInput(email);
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
    if(account && agree && password){
      
      setOrder(3);
    }
    
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
            <input type="checkbox" id="agree" defaultChecked={agree} required />
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

CreateAccountPasswordForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
}

export default CreateAccountPasswordForm;