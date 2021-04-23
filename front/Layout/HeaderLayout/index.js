import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StAccountMenu, StBtnSignin, StButtonSm, StHeader } from "./styles";
import { StWrapper } from "../AppLayout/styles";
import { logoutRequestAction } from "../../reducers/user";
import Search from "../../components/From/SearchForm";

const HeaderLayout = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);

  const onClickLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  }, []);

  return (
    <StHeader>
      <StWrapper>
        <div className="menu">
          <Link href="/">
            <a rel="noreferrer noopener">YTLIST</a>
          </Link>
        </div>
        <Search />
        <div className="header__right">
          {me ? (
            <>
              <StAccountMenu>
                <Link href="/profile">
                  <a rel="noreferrer noopener">{me.nickname}</a>
                </Link>
              </StAccountMenu>
              <StButtonSm onClick={onClickLogout}>Logout</StButtonSm>
            </>
          ) : (
            <>
              <Link href="/login">
                <StBtnSignin rel="noreferrer noopener">Login</StBtnSignin>
              </Link>
              <Link href="/signup">
                <StBtnSignin stMainColor rel="noreferrer noopener">
                  Create Account
                </StBtnSignin>
              </Link>
            </>
          )}
        </div>
      </StWrapper>
    </StHeader>
  );
};

export default React.memo(HeaderLayout);
