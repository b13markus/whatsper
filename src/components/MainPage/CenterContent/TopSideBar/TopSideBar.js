import React, { useState } from 'react';
import './TopSideBar.css';
import TopBarBotton from './atoms/TopBarBotton';

function TopSideBar() {
  const [activeChat, setActiveChat] = useState('All chats');



  return (
    <div className="top-sidebar">
      <TopBarBotton
        title='Taken'
        numberOfChats={4}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
      <TopBarBotton
        title='Pending'
        numberOfChats={2}
        bold={true}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
      <TopBarBotton
        title='All chats'
        numberOfChats={24}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
      <TopBarBotton
        title='With bot'
        numberOfChats={1}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
      <TopBarBotton
        title='Solved'
        numberOfChats={16}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
      <TopBarBotton
        title='Other'
        numberOfChats={1}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />
    </div>
  );

}

export default TopSideBar;