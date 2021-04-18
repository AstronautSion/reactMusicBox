import React from "react";
import { NextSeo } from "next-seo";
import LoginFormLayout from "../components/Layout/LoginFormLayout";
import AppLayout from "../components/Layout/AppLayout";
import { StContainer, StSmLayout } from "../style/components/AppLayout";

const Login = () => (
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

export default Login;
