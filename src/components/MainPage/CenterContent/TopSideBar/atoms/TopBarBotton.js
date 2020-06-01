import React from 'react';
import './TopBarBotton.css';

function TopBarBotton({ title, numberOfChats, bold, setActiveChat, activeChat}) {

  return (
    <div
      className={
        activeChat === title
        ?
          "top-bar-button active"
        :
          "top-bar-button"
      }
      onClick={() => {setActiveChat(title)}}
    >
      <h1
        className={
          bold
          ?
            "top-bar-button__title bold"
          :
            "top-bar-button__title"
        }
      >{title}</h1>
      <div
        className={
          bold || activeChat === title
          ?
            "top-bar-button__chats active"
          :
            "top-bar-button__chats"
        }
      >{numberOfChats} chats</div>
    </div>
  );
}

export default TopBarBotton;