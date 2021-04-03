import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { StInput, StLable, StSelect } from '../../../style/Form';
import { StBtnLoginForm, StLoginFormTitle } from '../../../style/LoginForm';
import useInput from '../../../hooks/useInput';

const CreateAccountInfoForm = ({ setOrder }) => { // order 2
  const [age, onChangeAge] = useInput(0);
  const gender = useRef();
  const onClickNext = () => {
    // age gender 추가
    setOrder(3);
  };

  return (
    <form>
      <StLoginFormTitle>Create your MusicBox account</StLoginFormTitle>
      <div>
        <StLable>Tell us your age</StLable>
        <StInput type="number" stMargin="0 0 1em 0" min="0" max="100" value={age} onChange={onChangeAge} autoFocus />
      </div>
      <div>
        <StLable>Gender</StLable>
        <StSelect ref={gender}>
          <option value="0">Indicate your gender</option>
          <option value="female">Female</option>
          <option value="Male">Male</option>
          <option value="notSay">Prefer not to say</option>
        </StSelect>
      </div>
      <div>
        <StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
      </div>
    </form>
  );
};

CreateAccountInfoForm.propTypes = {
  setOrder: PropTypes.func.isRequired,
};

export default CreateAccountInfoForm;
