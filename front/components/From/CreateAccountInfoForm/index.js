import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { StInput, StLable, StSelect } from "../../../style/Form";
import { StBtnLoginForm, StLoginFormTitle } from "../LoginForm/styles";
import useInput from "../../../hooks/useInput";
import { setLoginPopupOrder } from "../../../reducers/user";

const CreateAccountInfoForm = () => {
  // order 2
  const dispatch = useDispatch();
  const [age, onChangeAge] = useInput(0);
  const gender = useRef();
  const onClickNext = useCallback(() => {
    // age gender 추가
    dispatch(setLoginPopupOrder(3));
  }, []);

  return (
    <form>
      <StLoginFormTitle>Create your YTList account</StLoginFormTitle>
      <div>
        <StLable>Tell us your age</StLable>
        <StInput
          type="number"
          stMargin="0 0 1em 0"
          min="0"
          max="100"
          value={age}
          onChange={onChangeAge}
          autoFocus
        />
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
        <StBtnLoginForm type="submit" onClick={onClickNext}>
          Continue
        </StBtnLoginForm>
      </div>
    </form>
  );
};

export default CreateAccountInfoForm;
