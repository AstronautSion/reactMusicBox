import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import ProfileForm from '../components/From/ProfileForm';
import AppLayout from '../components/Layout/AppLayout';
import { StContainer, StSmLayout } from '../style/components/AppLayout';

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => { if (!(me && me.id)) { Router.push('/'); } }, [me && me.id]);
  if (!me) { return null; }

  return (
    <AppLayout>
      <StContainer>
        <StSmLayout>
          <ProfileForm />
        </StSmLayout>
      </StContainer>
    </AppLayout>
  );
};

export default Profile;
