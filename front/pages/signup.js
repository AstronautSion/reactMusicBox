import React from 'react';
import SignUpForm from '../components/From/SiginUpFrom';
import AppLayout from '../components/Layout/AppLayout';
import { StContainer, StSmLayout } from '../style/components/AppLayout';

const Signup = () => (
  <AppLayout>
    <StContainer>
      <StSmLayout>
        <SignUpForm />
      </StSmLayout>
    </StContainer>
  </AppLayout>
);

export default Signup;
