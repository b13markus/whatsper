import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './ConversationSearch.css';

export default function ConversationSearch() {
    return (
      <div className="conversation-search">
        <SearchOutlinedIcon fontSize='small'/>
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Chat"
        />
      </div>
    );
}