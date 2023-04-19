import Center from '@layouts/Center/Center';
import LeftSideBar from '@layouts/LeftSidebar/LeftSidebar';
import RightSideBar from '@layouts/RightSidebar/RightSidebar';
import Navbar from '@components/Navbar/Navbar';
import React from 'react';
import './home.scss';

const Home: React.FC = () => (
  <div>
    <Navbar />
    <div className='page'>
      <div className='page__left'><LeftSideBar /></div>
      <div className='page__center'><Center /></div>
      <div className='page__right'><RightSideBar /></div>
    </div>
  </div>
);

export default Home;
