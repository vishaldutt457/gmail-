import Button from '@material-ui/core/Button';
import React from 'react';
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button 
            startIcon={<AddIcon fontSize="large"/>}
            className="sidebar_compose"
            onClick={() => dispatch(openSendMessage())}>
                Compose
            </Button>

            <SidebarOption selected={true} Icon={InboxIcon} title="Inbox" number={67}/>
            <SidebarOption Icon={StarIcon} title="Snoozed" number={67}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={67}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={67}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={67}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={67}/>
        
        <div className="sidebar_footer">
            <div className="sidebar_footerIcons">
            <IconButton>
            <PersonIcon />
            </IconButton>
            <IconButton>
            <DuoIcon />
            </IconButton>
            <IconButton>
            <PhoneIcon />
            </IconButton>
            </div>
        </div>
        
        </div>
    )
}

export default Sidebar
