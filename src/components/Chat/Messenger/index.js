import React, { useState, useEffect } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Compose from '../Compose';
import ToolbarButton from '../ToolbarButton';
import UserInfo from '../UserInfo/UserInfo';

export default function Messenger(props) {
  const [activeChat, setActiveChat] = useState();

  return (
    <div className="messenger">
      {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

      {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

      <div className="scrollable sidebar">
        <ConversationList setActiveChat={setActiveChat}/>
      </div>

      <div className="scrollable content">
        <UserInfo activeChat={activeChat} />
        <MessageList />
        <Compose />
      </div>
    </div>
  );
}