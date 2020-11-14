import React from "react";
import "./Sidebar.css";
import SideBarChannel from "./SideBarChannel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import Avatar from "@material-ui/core/Avatar";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import VoiceChannel from "./VoiceChannel";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Popup from "reactjs-popup";
import SecurityIcon from "@material-ui/icons/Security";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SideBar() {
  const history = useHistory();
  const channelid = window.location.pathname.substring(10);
  const [servers, setServers] = useState([]);
  let token = localStorage.getItem("auth-token");
  const [currentChannelName, setcurrentChannelName] = useState("");
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const serverData = await axios.get("/api/group", {
        headers: { "x-auth-token": token },
      });
      setServers(serverData.data);

      for (var i = 0; i < serverData.data.length; i++) {
        // eslint-disable-next-line
        if (serverData.data[i].g_id == channelid) {
          setcurrentChannelName(serverData.data[i].g_name);
          break;
        }
      }
    })();
  }, []);

  useEffect(() => {
    for (var i = 0; i < servers.length; i++) {
      // eslint-disable-next-line
      if (servers[i].g_id == channelid) {
        setcurrentChannelName(servers[i].g_name);
        break;
      }
    }
  }, [channelid]);

  return (
    <div className="sidebar">
      <Popup
        trigger={
          <div className="sidebar-top">
            <h3>{currentChannelName}</h3>
            <ExpandMoreIcon />
          </div>
        }
        position="bottom"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none" }}
        arrow={false}
      >
        <div className="menu">
          <div className="menu-item">
            Privacy Settings
            <SecurityIcon style={{ paddingTop: "2px" }} fontSize="small" />
          </div>
          <div className="menu-item-leave">
            Leave Channel
            <ExitToAppIcon style={{ paddingTop: "2px" }} fontSize="small" />
          </div>
        </div>
      </Popup>
      <div className="sidebar-channels">
        <div className="sidebar-channelsHeader">
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar-addChannel" />
        </div>
        <div className="sidebar-channelsList">
          <SideBarChannel />
        </div>
        <div className="sidebar-channelsHeader" style={{ marginTop: "10px" }}>
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>Voice Channels</h4>
          </div>
          <AddIcon className="sidebar-addChannel" />
        </div>
        <div className="sidebar-channelsList">
          <VoiceChannel />
        </div>
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
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
