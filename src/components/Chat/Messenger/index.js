import React, {useState} from 'react';
import {users} from '../../../locale.db';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from '../Compose';
import UserInfo from '../UserInfo/UserInfo';

export default function Messenger() {
  const [activeChat, setActiveChat] = useState(null);

  const handleUpdateChat = value => {
    if (activeChat) {
      const updatedChat = {
        ...activeChat,
        chat: [
          ...activeChat.chat,
          {
            id: activeChat.chat.length,
            author: users[0].firstName,
            message: value,
            timestamp: new Date().getTime()
          }
        ]
      }

      setActiveChat(updatedChat)
    }
  }

  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList setActiveChat={setActiveChat}/>
      </div>
      <div className="scrollable content">
        <UserInfo activeChat={activeChat}/>
        <MessageList activeChat={activeChat}/>
        <Compose activeChat={activeChat} handleUpdateChat={handleUpdateChat}/>
      </div>
    </div>
  );
}