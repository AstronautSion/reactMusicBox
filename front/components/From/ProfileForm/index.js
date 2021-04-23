import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMyInfoRequestAction } from "../../../reducers/user";
import {
  StButton,
  StFieldset,
  StTitleCenter,
} from "../../../Layout/AppLayout/styles";
import { StInput, StLable, StSelect } from "../../../style/Form";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { nickname, email, age, gender } = useSelector(
    (state) => state.user.me
  );
  const updateMyInfoDone = useSelector((state) => state.user.updateMyInfoDone);
  const [changeNickname, setChangeNickname] = useState(nickname);
  const [changeAge, setChangeAge] = useState(age || 0);
  const [changeGender, setChangeGender] = useState(gender || "notSay");

  const onChangeNickname = useCallback((e) => {
    setChangeNickname(e.target.value.trim());
  }, []);

  const onChangeAge = useCallback((e) => {
    setChangeAge(e.target.value.trim());
  }, []);

  const onChangeGender = useCallback(
    (e) => {
      setChangeGender(e.target.value.trim());
    },
    [changeGender]
  );

  const onSubmitProfileEdit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        updateMyInfoRequestAction({
          nickname: changeNickname,
          age: changeAge,
          gender: changeGender,
        })
      );
    },
    [changeNickname, changeAge, changeGender]
  );

  useEffect(() => {
    if (updateMyInfoDone) {
      alert("수정되었습니다.");
    }
  }, [updateMyInfoDone]);

  return (
    <>
      <StTitleCenter>Profile</StTitleCenter>
      <form onSubmit={onSubmitProfileEdit}>
        <StFieldset>
          <StLable>email</StLable>
          <StInput value={email} readOnly />
        </StFieldset>
        <StFieldset>
          <StLable>Display Name</StLable>
          <StInput value={changeNickname} onChange={onChangeNickname} />
        </StFieldset>
        <StFieldset>
          <StLable>Age</StLable>
          <StInput value={changeAge} onChange={onChangeAge} />
        </StFieldset>
        <StFieldset>
          <StLable>Gender</StLable>
          <StSelect onChange={onChangeGender} value={changeGender}>
            <option value="notSay">Prefer not to say</option>
            <option value="female">Female</option>
            <option value="Male">Male</option>
          </StSelect>
        </StFieldset>
        <br />
        <StButton stMain type="submit">
          Modify
        </StButton>
      </form>
    </>
  );
};
export default ProfileForm;
