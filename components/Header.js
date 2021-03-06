import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {logout} from "../features/userSlice";
import {auth} from "./firebase";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(logout());
        })

    };

    return (
        <div className="header">
           <div className="header_left">
           <IconButton>
               <MenuIcon />
           </IconButton>
           <img 
           src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" 
           alt="" />
           </div>
           
           <div className="header_middle">
            <SearchIcon /> 
           <input type="text" placeholder="Search mail"/>
           <ArrowDropDownIcon classname="header_inputArrow"/>
           </div>

           <div className="header_right">
           <IconButton>
            <AppsIcon />
            </IconButton>
            <IconButton>
            <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoURL} />
           </div>
        </div>
    )
}

export default Header
