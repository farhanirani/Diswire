import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

function PersonalChatHeader({ otheruser }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader-left">
        <h3>
          <span className="chatHeader-hash">@</span>
          {otheruser}
        </h3>
      </div>
      <div className="chatHeader-right">
        <AddIcCallIcon className="chaticons" />
        <NotificationsIcon className="chaticons" />
        <PersonAddRoundedIcon className="chaticons" />
        <div className="chatHeader-search">
          <input placeholder="Search" />
          <SearchRoundedIcon className="chaticons" />
        </div>
        <HelpRoundedIcon className="chaticons" />
      </div>
    </div>
  );
}

export default PersonalChatHeader;
