import { AppHeader } from '@coreui/react';
import React from 'react';
import DefaultHeader from '../components/DefaultHeader';
import DefaultSidebar from '../components/DefaultSidebar';
import HomeSlider from '../components/HomeSlider';
import PostsList from '../components/PostsList';

const HomePage = () => {
  return (
    <div className="app">
      <AppHeader fixed>
        <DefaultHeader />
      </AppHeader>
      <div className="app-body">
        <DefaultSidebar />
        <HomeSlider />
        <main className="main">
          <PostsList />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
