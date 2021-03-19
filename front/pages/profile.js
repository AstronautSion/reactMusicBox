import React from 'react';
import NicknameEditForm from '../components/From/NicknameEditForm';
import AppLayout from '../components/Layout/AppLayout';
import { StSection } from '../style/components/AppLayout';

const Profile = () => {

    return (
        <AppLayout>
            <NicknameEditForm nickname="Astronaut.sion" />
            <StSection>
                {/* <PlayList />
                <Aside /> */}
            </StSection>
        </AppLayout>
    );
}

export default Profile;