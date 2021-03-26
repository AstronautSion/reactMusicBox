import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userModifyAction } from '../../reducers/user';
import { StButton, StFieldset } from '../../style/components/AppLayout';
import { StInput, StLable } from '../../style/Form';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const nickname = useSelector(state => state.user.user.nickname);
  const userId = useSelector(state => state.user.user.userId);
  const [changeNickname, setChangeNickname] = useState(nickname);
  const [changeUserId, setChangeUserId] = useState(userId);
  const onChangeNickname = useCallback((e) => {
    setChangeNickname(e.target.value);
  },[]);
  const onChangeUserId = useCallback((e) => {
    setChangeUserId(e.target.value);
  },[]);
  const onSubmitProfileEdit = useCallback((e) => {
    e.preventDefault();
    dispatch(userModifyAction({
      userId: changeUserId,
      nickname: changeNickname,
    }));
  },[changeNickname, changeUserId])
  return(
    <form onSubmit={onSubmitProfileEdit}>
      <StFieldset>
        <StLable>User Id</StLable>
        <StInput value={changeUserId} onChange={onChangeUserId}></StInput>
      </StFieldset>
      <StFieldset>
        <StLable>Display Name</StLable>
        <StInput value={changeNickname} onChange={onChangeNickname}></StInput>
      </StFieldset>
      <StButton main type="submit">수정</StButton>
    </form>
  );
}
export default ProfileForm;