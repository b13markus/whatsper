import React, { Component } from 'react';
import './CenterContent.css';
import Chat from '../../Chat/App';
import TopSideBar from './TopSideBar/TopSideBar';

class CenterContent extends Component {

  render() {
    return (
      <div className="center-content">
        <TopSideBar />
        <Chat/>
      </div>
    );
  }
}

export default CenterContent;