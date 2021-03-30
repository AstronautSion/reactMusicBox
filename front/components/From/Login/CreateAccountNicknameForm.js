import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StBtnLoginForm, StLoginFormTitle } from '../../../style/LoginForm';
import { StInput, StLable } from '../../../style/Form';
import { StButtonBack, StP } from '../../../style/components/AppLayout';

const CreateAccountNicknameForm = ({nickname, setNickname, setOrder}) => { //order 3
  
	const onChangeNickname = useCallback((e) => {
		setNickname(e.target.value);
	},[]);
	const onClickBackContents = () => {
		setOrder(2);
	}
  const onClickNext = () => {
    //nickname 추가
    setOrder(0)
  }
  return(
    <form>
			<StButtonBack onClick={onClickBackContents} type="button">&larr;</StButtonBack>
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
	nickname: PropTypes.string.isRequired,
	setNickname: PropTypes.func.isRequired,
	setOrder: PropTypes.func.isRequired,
}
export default CreateAccountNicknameForm;