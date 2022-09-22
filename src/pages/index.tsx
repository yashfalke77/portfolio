import Center from "components/Layout/Center";
import LeftSideBar from "components/Layout/LeftSideBar";
import RightSideBar from "components/Layout/RightSideBar";
import Navbar from "components/Navbar";
import React from "react";
import "styles/index.scss"

const Home: React.FC = () => {
  return (
    <div>
      < Navbar />
      <div className="page">
        <div className="page__left"><LeftSideBar /></div>
        <div className="page__center"><Center /></div>
        <div className="page__right"><RightSideBar /></div>
      </div>
    </div>
  );
};

export default Home;
