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
import axios from "axios";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import LinkIcon from "@material-ui/icons/Link";

function SideBar() {
  const history = useHistory();
  const channelid = window.location.pathname.substring(10);
  const [servers, setServers] = useState([]);
  let token = localStorage.getItem("auth-token");
  const [currentChannelName, setcurrentChannelName] = useState("");

  const [userinfo, setUserinfo] = useState([]);
  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/login");
      } else {
        setUserinfo(tokenRes.data);
      }
    })();
  }, []);

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

  const [URL, setURL] = useState("");

  const handlePP = async (e) => {
    e.preventDefault();
    if (URL != "") {
      try {
        console.log(URL);
        axios.patch(
          "/api/user/updatePP",
          {
            profile_pic: URL,
          },
          {
            headers: { "x-auth-token": token },
          }
        );
      } catch (err) {
        console.log(err.response.data.msg);
        alert(err.response.data.msg);
      }
    }
    setURL("");
  };

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
          <Popup
            trigger={
              <div className="menu-item">
                Channel Link
                <LinkIcon style={{ paddingTop: "2px" }} fontSize="small" />
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="join-create">
                <form
                  className="modal"
                  style={{
                    height: "240px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <div className="create-top">
                    <div className="top-left">
                      <div className="create-header"> Server Link </div>
                    </div>
                    <div className="top-right">
                      <IconButton onClick={close}>
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                  <p className="create-info">
                    Enter the link given below in Join server section.
                  </p>
                  <div className="content">
                    {" "}
                    <h2>INVITE LINK</h2>
                    <input
                      placeholder="https://discord.gg/hTKzmak"
                      className="serv-name"
                      style={{ background: " #CCCCCC", border: "0" }}
                      required
                    ></input>
                  </div>
                </form>
              </div>
            )}
          </Popup>
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
        <Popup
          trigger={
            <Avatar
              style={{ height: "30px", width: "30px" }}
              src={userinfo.profile_pic}
            />
          }
          position="top left"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >
          <div className="menu" style={{ width: "400px" }}>
            <div>
              <p className="url-label">Add Profile Image URL-</p>
            </div>
            <div className="menu-item-url">
              <input
                type="text"
                placeholder="Enter URL of the image"
                className="url-input"
                onChange={(e) => setURL(e.target.value)}
                value={URL}
              />
              <button type="submit" className="url-submit" onClick={handlePP}>
                Submit
              </button>
            </div>
          </div>
        </Popup>
        <div className="sidebar-profileinfo">
          <h3>{userinfo.username}</h3>
          <p>#{userinfo.userid}</p>
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
