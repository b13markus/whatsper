import React, {useState, useEffect, useCallback} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import {users} from '../../../locale.db'
import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getConversations()
  }, [users])

  const getConversations = () => {
    const chat = []
    users.forEach(({chats}) => {
      chats.forEach(c => {
        chat.push({
          photo: c.avatar,
          name: c.firstName + ' ' + c.secondName,
          text: c.chat[c.chat.length - 1].message,
          status: c.status,
          convWith: 'Me',
          phone: c.phone,
          isActive: false,
          chat: c.chat
        })
      })
    })
    setConversations([...chat])
  }

  const handleActive = (element) => {
    conversations.map(c => c.isActive = false)
    element.isActive = true;
    setConversations(conversations);
    props.setActiveChat(element);
  }

  return (
    <div className="conversation-list">
      <ConversationSearch/>
      {conversations.map(conversation =>
        <ConversationListItem
          handleActive={handleActive}
          key={conversation.name}
          data={conversation}
        />
      )}
    </div>
  );
}