import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';
import Divider from "@material-ui/core/Divider";

export default function ConversationListItem(
  {
    data: {
      photo,
      name,
      text,
      status,
      convWith,
      isActive
    },
    handleActive,
    data
  }) {

  useEffect(() => {
    shave('.conversation-snippet', 20);
  }, [])

  return (
    <>
      <div
        className={`${isActive ? 'conversation-list-item conversation-list-item-active' : 'conversation-list-item'}`}
        onClick={() => handleActive(data)}
      >
        <img className="conversation-photo" src={photo} alt="conversation"/>
        <div className="conversation-info">
          <div>
            <h1 className="conversation-title">{name}</h1>
            <p className="conversation-snippet">{text}</p>
          </div>
          <div>
            <h1 className="conversation-title conversation-status">{status}</h1>
            <p className="conversation-snippet">{convWith}</p>
          </div>
        </div>
      </div>
      <Divider light className='divider'/>
    </>
  );
}