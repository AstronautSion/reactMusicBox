import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  StAccountMenu,
  StBtnSignin,
  StButtonSm,
  StHeader,
  StMenuUl,
} from '../../style/components/Header';
import { StWrapper } from '../../style/components/AppLayout';
import { logoutRequestAction } from '../../reducers/user';

const HeaderLayout = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [accountMenu, setAccountMenu] = useState(true);
  const accountMenuRef = useRef();

  const onClickBtnMenu = () => {
    if (accountMenu) {
      accountMenuRef.current.style.opacity = 1;
      accountMenuRef.current.style.top = '100%';
      accountMenuRef.current.style.visibility = 'visible';
    } else {
      accountMenuRef.current.style.opacity = 0;
      accountMenuRef.current.style.top = '70%';
      accountMenuRef.current.style.visibility = 'hidden';
    }
    setAccountMenu(!accountMenu);
  };

  const onClickLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  }, []);

  return (
    <StHeader>
      <StWrapper>
        <div className="menu">
          <Link href="/"><a rel="noreferrer noopener">Home</a></Link>
          {me && <Link href="/music"><a rel="noreferrer noopener">Music</a></Link> }
        </div>
        <div className="header__right">
          {me
            ? (
              <>
                <StAccountMenu>
                  <button type="button" onClick={onClickBtnMenu}>
                    {me.nickname}
                  </button>
                  <StMenuUl ref={accountMenuRef}>
                    <li><Link href="/profile"><a rel="noreferrer noopener">Profile</a></Link></li>
                  </StMenuUl>
                </StAccountMenu>
                <StButtonSm onClick={onClickLogout}>Logout</StButtonSm>
              </>
            ) : (
              <>
                <Link href="/login"><StBtnSignin rel="noreferrer noopener">Login</StBtnSignin></Link>
                <Link href="/signup"><StBtnSignin stMainColor rel="noreferrer noopener">Create Account</StBtnSignin></Link>
              </>
            )}
        </div>
      </StWrapper>
    </StHeader>
  );
};

export default HeaderLayout;
