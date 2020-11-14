import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";

function FriendHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader-left">
        <h3>
          <span className="chatHeader-icon">
            <PeopleRoundedIcon style={{ height: "25px", width: "25px" }} />
          </span>
          Friends
        </h3>
        <div className="friends-nav">
          <h3 className="friends-navitem active">All</h3>
          <h3 className="friends-navitem">Pending</h3>
          <h3 className="friends-navitem">Blocked</h3>
          <a className="friends-addfriend" href="/channels/@add">
            Add Friend
          </a>
        </div>
      </div>
      <div className="chatHeader-right">
        <NotificationsIcon className="chaticons" />
        <PersonAddRoundedIcon className="chaticons" />
        <HelpRoundedIcon className="chaticons" />
      </div>
    </div>
  );
}

export default FriendHeader;
