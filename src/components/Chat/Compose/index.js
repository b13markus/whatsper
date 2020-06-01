import React from 'react';
import './Compose.css';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import IconButton from '@material-ui/core/IconButton';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import TextField from "@material-ui/core/TextField";

export default function Compose({activeChat, handleUpdateChat}) {

  const handleSendMessage = (e) => {
    if (e.key === 'Enter') {
      handleUpdateChat(e.target.value)
        e.target.value = ''
    }
  }

  return (
    <div className="compose">
      <IconButton color="primary">
        <MoodOutlinedIcon className="grey-color"/>
      </IconButton>

      {/*<TextField*/}
      {/*  id="standard-basic"*/}
      {/*  className="compose-input"*/}
      {/*  placeholder="Type a message"*/}
      {/*  fullWidth={true}*/}
      {/*  onKeyPress={handleSendMessage}*/}
      {/*/>*/}

      <input
        type="text"
        className="compose-input"
        placeholder="Type a message"
        onKeyPress={handleSendMessage}
      />

      <IconButton color="primary">
        <MicOutlinedIcon className="grey-color"/>
      </IconButton>
    </div>
  );
}