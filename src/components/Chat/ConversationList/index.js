import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import {users} from '../../../locale.db'
import './ConversationList.css';
import {set} from "mobx";

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
          text: c.text,
          status: c.status,
          convWith: 'Me',
          phone: c.phone,
          isActive: false
        })
      })
    })
    setConversations([...chat])
  }

  const handleActive = (element) => {
    element.isActive = true;
    setConversations(conversations);
    props.setActiveChat(element);
  }

  return (
    <div className="conversation-list">
      <ConversationSearch/>
      {
        conversations.map(conversation =>
          <ConversationListItem
            handleActive={handleActive}
            key={conversation.name}
            data={conversation}
          />
        )
      }
    </div>
  );
}