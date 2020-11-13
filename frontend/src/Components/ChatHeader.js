import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader-left">
                <h3>
                <span className="chatHeader-hash">#
                </span>
                    Test Channel
                </h3>
            </div>
            <div className="chatHeader-right">
                <NotificationsIcon className="chaticons"/>
                <PeopleAltRoundedIcon className="chaticons" />
                <div className="chatHeader-search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon className="chaticons" />
                </div>
                <HelpRoundedIcon className="chaticons" />
            </div>
        </div>
    )
}

export default ChatHeader
