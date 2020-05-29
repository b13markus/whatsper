import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    const { photo, name, text, status, convWith } = props.data;

    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <div>
            <h1 className="conversation-title">{ name }</h1>
            <p className="conversation-snippet">{ text }</p>
          </div>
          <div>
            <h1 className="conversation-title conversation-status">{ status }</h1>
            <p className="conversation-snippet">{convWith}</p>
          </div>
        </div>
      </div>
    );
}