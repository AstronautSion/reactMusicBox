import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  StLoginFormTitle,
  StSingupTextButton,
  StHr,
  StButtonGoogleLogin,
} from "../../components/From/LoginForm/styles";

import CreateAccountNicknameForm from "../../components/From/CreateAccountNicknameForm";
import LoginForm from "../../components/From/LoginForm";
import CreateAccountInfoForm from "../../components/From/CreateAccountInfoForm";

const LoginFormLayout = () => {
  const { loginPopupOrder } = useSelector((state) => state.user);
  const [nickname, setNickname] = useState("");
  return (
    <div>
      {loginPopupOrder === 0 && (
        <>
          <StLoginFormTitle>Login YTList</StLoginFormTitle>
          <div>
            <StButtonGoogleLogin href="http://localhost:3065/auth/google">
              Continue with Google
            </StButtonGoogleLogin>
          </div>
          <StHr />
          <LoginForm />
          <Link href="/signup">
            <StSingupTextButton>Create Account</StSingupTextButton>
          </Link>
        </>
      )}
      {loginPopupOrder === 2 && <CreateAccountInfoForm />}
      {loginPopupOrder === 3 && (
        <CreateAccountNicknameForm
          nickname={nickname}
          setNickname={setNickname}
        />
      )}
    </div>
  );
};
export default LoginFormLayout;
