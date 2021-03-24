
import React from 'react';
import ProfileForm from '../components/From/ProfileForm';
import AppLayout from "../components/Layout/AppLayout";
import { StContainer } from "../style/components/AppLayout";

const Profile = () => {
  return (
    <AppLayout>
      <StContainer>
        <ProfileForm />
      </StContainer>
    </AppLayout>

  );
}

export default Profile;