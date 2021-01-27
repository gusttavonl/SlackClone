import { Avatar } from '@material-ui/core';
import { AccessTime, Help } from '@material-ui/icons';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="headerCenter">
            {/* <AccessTime className="acesstime"/> */}
            <input placeholder="Pesquisar em Team" />
            {/* <Help className="help" /> */}
        </div>
        <div className="headerRight">
            <Avatar src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
        </div>
    </div>
  );
}
 
export default Header;
