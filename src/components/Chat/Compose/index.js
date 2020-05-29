import React from 'react';
import './Compose.css';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import IconButton from '@material-ui/core/IconButton';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

export default function Compose() {
  return (
    <div className="compose">
      <IconButton color="primary">
        <MoodOutlinedIcon className="grey-color"/>
      </IconButton>

      <input
        type="text"
        className="compose-input"
        placeholder="Type a message"
      />

      <IconButton color="primary">
        <MicOutlinedIcon className="grey-color"/>
      </IconButton>
    </div>
  );
}