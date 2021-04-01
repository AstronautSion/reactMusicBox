import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StInput } from '../../../style/Form';
import { StBtnLoginForm, StWarnningText } from '../../../style/LoginForm';
import { AccountCheckRequestAction } from '../../../reducers/user';
import { testEmail } from '../../Common';

const CreateAccountForm = ({ setOrder }) => {
  const dispatch = useDispatch();
  const [signin, setSignin] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);

  const onSubmitFIndAccount = useCallback((e) => {
    e.preventDefault();
    if (checkEmail) {
      dispatch(AccountCheckRequestAction({
        email: signin,
      }));
      setOrder(1);
    }
  }, [signin, checkEmail]);

  const onChangeSignin = useCallback((e) => {
    setSignin(e.target.value);
    setCheckEmail(testEmail(signin));
  }, [signin]);

  return (
    <form onSubmit={onSubmitFIndAccount}>
      <StInput
        type="text"
        value={signin}
        onChange={onChangeSignin}
        minLength="8"
        maxLength="30"
        autoFocus
        required
      />
      {!checkEmail && <StWarnningText>계정 이메일을 다시 확인해 주세요.</StWarnningText>}
      <StBtnLoginForm type="submit">Continue</StBtnLoginForm>
    </form>
  );
};

CreateAccountForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
};

export default CreateAccountForm;
