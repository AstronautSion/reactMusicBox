import React from 'react';
import LoginFormLayout from '../components/Layout/LoginFormLayout';
import AppLayout from '../components/Layout/AppLayout';
import { StContainer, StSmLayout } from '../style/components/AppLayout';

const Login = () => (
  <AppLayout>
    <StContainer>
      <StSmLayout>
        <LoginFormLayout />
      </StSmLayout>
    </StContainer>
  </AppLayout>
);

export default Login;
