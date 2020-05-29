import React from 'react';
import './UserInfo.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { users } from '../../../locale.db'

export default function UserInfo(props) {
  
  return (
    <div className="user-info">
      {
        props.activeChat
          ? (
            <div className="user-info__data">
              <img src={props.activeChat.photo} className='user-info__avatar' />
              <div>
                <div className="user-info__name">
                  {props.activeChat.name}
                </div>

                <div>
                  {props.activeChat.phone}
                </div>
              </div>
            </div>
          ) : (
            <div className="user-info__data">
              <img src={users[0].chats[0].avatar} className='user-info__avatar' />
              <div>
                <div className="user-info__name">
                  {users[0].chats[0].firstName} {users[0].chats[0].secondName}
                </div>

                <div>
                  {users[0].chats[0].phone}
                </div>
              </div>
            </div>
          )
      }

      <IconButton color="primary">
        <MoreVertOutlinedIcon className="grey-color" />
      </IconButton>
    </div>
  );
}