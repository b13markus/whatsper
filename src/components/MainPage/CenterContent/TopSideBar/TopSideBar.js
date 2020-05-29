import React, { Component } from 'react';
import './TopSideBar.css';
import TopBarBotton from './atoms/TopBarBotton';

class TopSideBar extends Component {

  render() {
    return (
      <div className="top-sidebar">
        <TopBarBotton title='Taken' numberOfChats={4} active={true}/>
        <TopBarBotton title='Pending' numberOfChats={2} bold={true}/>
        <TopBarBotton title='All chats' numberOfChats={24}/>
        <TopBarBotton title='With bot' numberOfChats={1}/>
        <TopBarBotton title='Solved' numberOfChats={16}/>
        <TopBarBotton title='Other' numberOfChats={1}/>
      </div>
    );
  }
}

export default TopSideBar;