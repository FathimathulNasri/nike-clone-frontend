import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <div className="header">
      {/* <div className="header-title">Admin Dashboard</div> */}
      <div className="header-user">
        <img
          src="https://randomuser.me/api/portraits/men/30.jpg"
          alt="User Avatar"
          className="user-avatar"
        />
        <span className="user-name">David Mickle</span>
      </div>
    </div>
  );
}

export default Header;

