import React, { Component } from 'react';
import './LeftSideBar.css';
import Logo from '../../../assets/logo.svg';

class LeftSideBar extends Component {

  render() {
    return (
      <div className="left-sidebar">
        <img src={Logo} alt='Logo'/>
        <div className="left-sidebar-menu">

        </div>
      </div>
    );
  }
}

export default LeftSideBar;