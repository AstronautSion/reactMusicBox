import  React from 'react';
import ActiveLink from './ActiveLink';
import { StLocalNav } from '../style/components/AppLayout';


const UserNav = () => {
  return(
    <StLocalNav>
      <ActiveLink path="/likes">Likes</ActiveLink>
      <ActiveLink path="/following">Following</ActiveLink>
      <ActiveLink path="/follower">Follower</ActiveLink>
    </StLocalNav>
  );
}
export default UserNav;