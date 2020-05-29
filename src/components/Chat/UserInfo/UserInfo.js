import React from 'react';
import './UserInfo.css';
import IconButton from '@material-ui/core/IconButton';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import {users} from '../../../locale.db'

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-info__data">
        <img src={users[0].chats[0].avatar} className='user-info__avatar'/>
        <div>
          <div className="user-info__name">
            {users[0].chats[0].firstName} {users[0].chats[0].secondName}
          </div>

          <div>
            {users[0].chats[0].phone}
          </div>
        </div>
      </div>

      <IconButton color="primary">
        <MoreVertOutlinedIcon className="grey-color"/>
      </IconButton>
    </div>
  );
}