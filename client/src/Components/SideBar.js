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

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function SideBar() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const history = useHistory();
  const channelid = window.location.pathname.substring(10);
  const [servers, setServers] = useState([]);
  const token = localStorage.getItem("auth-token");
  const [currentChannelName, setcurrentChannelName] = useState("");
  const [channelinvite, setChannelinvite] = useState("");
  const [ServerURL, setServerURL] = useState("");
  const [userinfo, setUserinfo] = useState([]);

  const logout = () => {
    localStorage.setItem("auth-token", "");
    alert("Successfully logged out!");
    history.push("/login");
  };

  useEffect(() => {
    (async () => {
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/hello");
      } else {
        setUserinfo(tokenRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const serverData = await axios.get(
        "/api/group/groupinvite/" + channelid,
        {
          headers: { "x-auth-token": token },
        }
      );
      setChannelinvite(serverData.data.invite);
    })();
  }, [channelid]);

  useEffect(() => {
    (async () => {
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
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    }
    setURL("");
  };

  const submitserverpp = async (e) => {
    console.log("LOLOLO");
    if (ServerURL != "") {
      try {
        console.log(ServerURL);
        axios.post(
          "/api/group/updatepp/" + channelid,
          {
            g_pp: ServerURL,
          },
          {
            headers: { "x-auth-token": token },
          }
        );
      } catch (err) {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    }
    setServerURL("");
    setOpen2(false);
  };

  const leavechannel = async (e) => {
    try {
      console.log(URL);
      const temp = await axios.delete("/api/group/leavegroup/" + channelid, {
        headers: { "x-auth-token": token },
      });
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
    history.push("/channels/@me");
  };

  return (
    <div className="sidebar">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="join-create">
          <div
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
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <p className="create-info">
              Enter the link given below in Join server section.
            </p>
            <div className="content">
              <h2>INVITE LINK</h2>
              <input
                value={channelinvite}
                className="serv-name"
                style={{ background: " #CCCCCC", border: "0" }}
                required
              ></input>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="join-create">
          <div
            className="modal"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <div className="create-top">
              <div className="top-left">
                <div className="create-header">Set Server Profile Picture </div>
              </div>
              <div className="top-right">
                <IconButton onClick={handleClose2}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <div className="content">
              <h2>Server Picture URL</h2>
              <input
                placeholder="URL"
                value={ServerURL}
                onChange={(e) => setServerURL(e.target.value)}
                className="serv-name"
                style={{ background: " #CCCCCC", border: "0" }}
              ></input>
            </div>
            <div className="actions">
              <button className="join-button" onClick={submitserverpp}>
                Set Picture
              </button>
            </div>
          </div>
        </div>
      </Dialog>

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
          <div className="menu-item" onClick={handleClickOpen}>
            Channel Link
            <LinkIcon style={{ paddingTop: "2px" }} fontSize="small" />
          </div>

          <div className="menu-item" onClick={handleClickOpen2}>
            Server Profile URL
            <LinkIcon style={{ paddingTop: "2px" }} fontSize="small" />
          </div>

          <div className="menu-item">
            Privacy Settings
            <SecurityIcon style={{ paddingTop: "2px" }} fontSize="small" />
          </div>
          <div
            className="menu-item-leave"
            onClick={(e) => leavechannel(channelid)}
          >
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
        <div className="sidebar-channelsList active">
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
              <button
                type="submit"
                className="url-submit"
                onClick={(e) => handlePP}
              >
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
              <div className="menu-item-leave" onClick={logout}>
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
