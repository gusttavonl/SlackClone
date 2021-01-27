import { Avatar } from '@material-ui/core';
import { Create, ExpandMoreOutlined, ImageSearch, QuestionAnswer } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarTeam">
            <p>Team </p>
            <ExpandMoreOutlined className="sidebarTeamIcon" />
            <ImageSearch className="sidebarTeamIconCreate"/>
        </div>
        <div className="sidebarMenu">
            <div className="sidebarMenuTalk">
                <QuestionAnswer /> 
                <p> Conversas</p>       
            </div>
            <div className="sidebarMenuChannel">
                <ExpandMoreOutlined /> 
                <p> Canais</p>  
                     
            </div>
            <p className="sidebarMenuChannelItem"># Team</p>
            <div className="sidebarMenuChannel">
                <ExpandMoreOutlined /> 
                <p> Mensagens Diretas</p>  
                
            </div>
            <Avatar className="sidebarMenuChannelItemAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"}/>
            <p className="sidebarMenuChannelItemName"> Gustavo Noronha - Você</p> 
        </div>
    </div>
  );
}
 
export default Sidebar;
