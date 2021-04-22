import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import LoginFormLayout from "../Layout/LoginFormLayout";
import AppLayout from "../Layout/AppLayout";
import { StContainer, StSmLayout } from "../Layout/AppLayout/styles";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.split("?error=")[1] === "ER_DUP_ENTRY") {
      alert("이미 사용중인 이메일입니다. 아이디 비밀번호를 입력하세요.");
    }
  }, []);
  return (
    <>
      <NextSeo
        title="YTList Login"
        description="After logging in, try saving the video as a YouTube link."
      />
      <AppLayout>
        <StContainer>
          <StSmLayout>
            <LoginFormLayout />
          </StSmLayout>
        </StContainer>
      </AppLayout>
    </>
  );
};

export default Login;
