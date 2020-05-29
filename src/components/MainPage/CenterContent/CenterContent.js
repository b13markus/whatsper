import React, { Component } from 'react';
import './CenterContent.css';
import TopSideBar from './TopSideBar/TopSideBar';

class CenterContent extends Component {

  render() {
    return (
      <div className="center-content">
        <TopSideBar />
      </div>
    );
  }
}

export default CenterContent;