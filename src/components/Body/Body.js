import { Avatar } from '@material-ui/core';
import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="body">
        <div className="bodyTalk">
            <Avatar className="bodyTalkAvatar" src={"https://ca.slack-edge.com/T01GHF6AC4V-USLACKBOT-sv41d8cd98f0-512"} />
            <h4>SlackBot</h4>
            <p>Boa tarde time! 
            </p>
        </div>
        <div className="bodyChat">
            <input placeholder="Envie uma mensagem para team" />
        </div>
    </div>
  );
}
 
export default Body;
