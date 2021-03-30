import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { StInput } from '../../../style/Form';
import { StBtnLoginForm, StWarnningText } from '../../../style/LoginForm';
import { useDispatch } from 'react-redux';
import { AccountCheckRequestAction } from '../../../reducers/user';

const CreateAccountForm = ({setOrder}) => {
  const dispatch = useDispatch();
	const [signin, setSignin] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);

  const onSubmitFIndAccount = useCallback((e) => {
    e.preventDefault();
    if(checkEmail){
      dispatch(AccountCheckRequestAction({
        email: signin,
      }));
      setOrder(1); 
    }
	},[signin, checkEmail]);

  const onChangeSignin = useCallback((e) => {
    setSignin(e.target.value);
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regEmail.test(String(signin));
    setCheckEmail(result);
  },[signin]);

  return(
    <form onSubmit={onSubmitFIndAccount}>
      <StInput 
        type="text" 
        value={signin} 
        onChange={onChangeSignin} 
        minLength="8" 
        maxLength="30" 
        required
      />
      {!checkEmail && <StWarnningText>이메일 형식을 다시 확인해 주세요.</StWarnningText>}
      <StBtnLoginForm type="submit" >Continue</StBtnLoginForm>
    </form>
  );
}

CreateAccountForm.propTypes = {
  setOrder:PropTypes.func.isRequired,
}

export default CreateAccountForm;