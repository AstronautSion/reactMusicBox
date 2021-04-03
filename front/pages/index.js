import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/Layout/AppLayout';
import MusicBoxCard from '../components/MusicBoxCard';
import DefaultHome from '../components/DefaultHome';
import wrapper from '../store/configureStore';

const Home = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <AppLayout>
      {me
        ? <MusicBoxCard />
        : <DefaultHome />}
    </AppLayout>
  );
};

export default Home;
