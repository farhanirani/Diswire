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

function DMList() {
  const history = useHistory();
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
        <div className="personal-dm" onClick={() => history.push("@me/123")}>
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>fiki</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
        </div>
        <div className="personal-dm">
          <Avatar style={{ height: "30px", width: "30px" }} />
          <h3>vincent2528</h3>
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
          <h3>vincent2528</h3>
          <p>#2513</p>
        </div>
        <div className="sidebar-profileicons">
          <MicOffIcon className="profileicons" />
          <HeadsetIcon className="profileicons" />
          <SettingsIcon className="profileicons" />
        </div>
      </div>
    </div>
  );
}

export default DMList;
