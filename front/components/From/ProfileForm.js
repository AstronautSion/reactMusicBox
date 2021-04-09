import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMyInfoRequestAction } from '../../reducers/user';
import { StButton, StFieldset, StTitleCenter } from '../../style/components/AppLayout';
import { StInput, StLable, StSelect } from '../../style/Form';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const {
    nickname,
    email,
    age,
    gender,
  } = useSelector((state) => state.user.me);

  const [changeNickname, setChangeNickname] = useState(nickname);
  const [changeAge, setChangeAge] = useState(age);
  const [changeGender, setChangeGender] = useState(gender);
  const SelectGender = useRef();

  const onChangeNickname = useCallback((e) => {
    setChangeNickname(e.target.value);
  }, []);

  const onChangeAge = useCallback((e) => {
    setChangeAge(e.target.value);
  }, []);

  const onChangeGender = useCallback((e) => {
    setChangeGender(e.target.value);
  }, [changeGender]);

  const onSubmitProfileEdit = useCallback((e) => {
    e.preventDefault();
    dispatch(updateMyInfoRequestAction({
      nickname: changeNickname,
      age: changeAge,
      gender: changeGender,
    }));
  }, [changeNickname]);

  useEffect(() => {
    SelectGender.current.value = gender;
  }, [SelectGender, gender]);

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
          <StSelect ref={SelectGender} onChange={onChangeGender}>
            <option value="notSay">Prefer not to say</option>
            <option value="female">Female</option>
            <option value="Male">Male</option>
          </StSelect>
        </StFieldset>
        <br />
        <StButton stMain type="submit">Modify</StButton>
      </form>
    </>
  );
};
export default ProfileForm;
