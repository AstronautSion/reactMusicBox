import React from "react";
import { NextSeo } from "next-seo";
import SignUpForm from "../components/From/SiginUpFrom";
import AppLayout from "../components/Layout/AppLayout";
import { StContainer, StSmLayout } from "../style/components/AppLayout";

const Signup = () => (
  <>
    <NextSeo
      title="YTList Signup"
      description="After registering as a member, try saving the video as a YouTube link."
    />
    <AppLayout>
      <StContainer>
        <StSmLayout>
          <SignUpForm />
        </StSmLayout>
      </StContainer>
    </AppLayout>
  </>
);

export default Signup;
