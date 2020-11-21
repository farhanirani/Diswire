import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import axios from "axios";

function PersonalChatHeader({ otheruser, oid }) {
  const token = localStorage.getItem("auth-token");

  const submitfriendreq = async (e) => {
    e.preventDefault();
    try {
      const temp = await axios.post("/api/user/sendRequest/" + oid, null, {
        headers: { "x-auth-token": token },
      });
      alert("Friend request sent to " + otheruser);
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="chatHeader">
      <div className="chatHeader-left">
        <h3>
          <span className="chatHeader-hash">@</span>
          {otheruser}#{oid}
        </h3>
      </div>
      <div className="chatHeader-right">
        <AddIcCallIcon className="chaticons" />
        <NotificationsIcon className="chaticons" />
        <PersonAddRoundedIcon className="chaticons" onClick={submitfriendreq} />
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
