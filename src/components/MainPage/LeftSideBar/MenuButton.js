import React from 'react';
import './MenuButton.css';
import IconButton from '@material-ui/core/IconButton';

function MenuButton({ image }) {

  return (
    <div className="menu-button">
      <IconButton color="primary">
        {image}
      </IconButton>
    </div>
  );
}

export default MenuButton;