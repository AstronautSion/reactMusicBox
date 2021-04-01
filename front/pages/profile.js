import React from 'react';
import ProfileForm from '../components/From/ProfileForm';
import AppLayout from '../components/Layout/AppLayout';
import { StContainer, StSmLayout } from '../style/components/AppLayout';

const Profile = () => (
  <AppLayout>
    <StContainer>
      <StSmLayout>
        <ProfileForm />
      </StSmLayout>
    </StContainer>
  </AppLayout>
);

export default Profile;
