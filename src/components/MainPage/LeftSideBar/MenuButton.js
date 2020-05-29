import React from 'react';
import './MenuButton.css';
import IconButton from '@material-ui/core/IconButton';

function MenuButton({ image }) {

  return (
    <div className="menu-button">
      <IconButton color="primary" style={{ background: 'linear-gradient(0deg, #637EF5, #637EF5)', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.04)' }}>
        {image}
      </IconButton>
    </div>
  );
}

export default MenuButton;