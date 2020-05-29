import React from 'react';
import './TopBarBotton.css';

function TopBarBotton({ title, numberOfChats, bold, active}) {

  return (
    <div
      className={
        active
        ?
          "top-bar-button active"
        :
          "top-bar-button"
      }
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
          active || bold
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