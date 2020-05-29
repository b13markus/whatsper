import React, { Component } from 'react';
import './MainPageLayout.css';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import CenterContent from './CenterContent/CenterContent';

class MainPageLayout extends Component {

  render() {
    return (
      <div className="main-page-layout">
        <LeftSideBar />
        <CenterContent />
      </div>
    );
  }
}

export default MainPageLayout;