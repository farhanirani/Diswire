import React from "react";
import "./DMList.css";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import Avatar from "@material-ui/core/Avatar";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

function DMList() {
  const history = useHistory();
  const [friends, setFriends] = useState([]);
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const friendsdata = await axios.get("/api/user/displayFriends", {
        headers: { "x-auth-token": token },
      });
      setFriends(friendsdata.data);
      // console.log(friendsdata.data);
    })();
  }, []);

  return (
    <div className="sidebar">
      <div className="friends-header active">
        <h4>
          <span>
            <PeopleRoundedIcon />
          </span>
          Friends
        </h4>
      </div>
      <div className="sidebar-channelsHeader">
        <div className="sidebar-header">
          <h4 style={{ fontWeight: "500" }}>DIRECT MESSAGES</h4>
        </div>
        <AddIcon className="sidebar-addDM" />
      </div>
      <div className="dm-list">
        {friends.map((friend) => {
          return (
            <div
              className="personal-dm"
              onClick={() => history.push("/channels/@me/" + friend.userid)}
            >
              <Avatar style={{ height: "30px", width: "30px" }} />
              <h3>{friend.username}</h3>
            </div>
          );
        })}
      </div>
      <div className="sidebar-voice">
        <SignalCellularAltIcon className="sidebar-voiceicon" fontSize="large" />
        <div className="sidebar-voiceinfo">
          <h3>Voice Connected</h3>
          <p className="voice__channel__p">Stream</p>
        </div>
        <div className="sidebar-voiceicons">
          <InfoIcon className="voiceicons" />
          <CallIcon className="voiceicons" />
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar style={{ height: "30px", width: "30px" }} />
        <div className="sidebar-profileinfo">
          <h3>{userData.user.username}</h3>
          <p>#{userData.user.userid}</p>
        </div>
        <div className="sidebar-profileicons">
          <MicOffIcon className="profileicons" />
          <HeadsetIcon className="profileicons" />
          <Popup
            trigger={<SettingsIcon className="profileicons" />}
            position="top"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
          >
            <div className="menu">
              <div className="menu-item-leave">
                Log Out
                <MeetingRoomTwoToneIcon
                  style={{ paddingTop: "2px" }}
                  fontSize="small"
                />
              </div>
            </div>
          </Popup>{" "}
        </div>
      </div>
    </div>
  );
}

export default DMList;
