import React, { Component } from 'react';
import './MainPageLayout.css';
import LeftSideBar from './LeftSideBar/LeftSideBar';

class MainPageLayout extends Component {

  render() {
    return (
      <div className="main-page-layout">
        <LeftSideBar />
      </div>
    );
  }
}

export default MainPageLayout;