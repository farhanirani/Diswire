import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import { useHistory } from "react-router-dom";

function FriendHeader() {
  const history = useHistory();

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
          <h3
            className="friends-navitem"
            onClick={() => history.push("/channels/@me")}
          >
            All
          </h3>
          <h3
            className="friends-navitem"
            onClick={() => history.push("/channels/@pending")}
          >
            Pending
          </h3>
          <h3
            className="friends-navitem"
            onClick={() => history.push("/channels/@blocked")}
          >
            Blocked
          </h3>
          <h3
            className="friends-addfriend"
            onClick={() => history.push("/channels/@add")}
          >
            Add Friend
          </h3>
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
