import React from 'react';
import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';
import { StBtnLoginForm, StLoginFormTitle } from '../../../style/LoginForm';
import { StInput, StLable } from '../../../style/Form';
import { StP } from '../../../style/components/AppLayout';

const CreateAccountNicknameForm = ({setOrder}) => { //order 3

  const [nickname, onChangeNickname] = useInput('');
  const onClickNext = () => {
    //nickname 추가
    setOrder(0)
  }
  return(
    <form>
					<StLoginFormTitle>Tell us a bit<br />about yourself</StLoginFormTitle>
					<div>
						<StLable>Choose your display name</StLable>
						<StInput type="text" stMargin="0 0 1em 0" value={nickname} onChange={onChangeNickname} />
						<StP sm light>Your display name can be anything you like. Your name or artist name are good choices.</StP>
					</div>
					<div>
						<StBtnLoginForm type="submit" onClick={onClickNext}>Get stared</StBtnLoginForm>
					</div>
				</form>
  );
}
CreateAccountNicknameForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
}
export default CreateAccountNicknameForm;