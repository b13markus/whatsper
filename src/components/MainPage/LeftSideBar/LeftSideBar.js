import React, { Component } from 'react';
import './LeftSideBar.css';
import Logo from '../../../assets/logo.svg';
import Bot from '../../../assets/bot.svg';
import MenuButton from './atoms/MenuButton';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

class LeftSideBar extends Component {

  render() {
    return (
      <div className="left-sidebar">
        <img src={Logo} alt='Logo'/>
        <div className="left-sidebar-menu">
          <MenuButton image={<ChatOutlinedIcon className='menu-button_color'/>}/>
          <MenuButton image={<img src={Bot} alt='Bot'/>}/>
          <MenuButton image={<SettingsOutlinedIcon className='menu-button_color'/>}/>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;