import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./DiscoverServer.css";
import Avatar from "@material-ui/core/Avatar";
import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import ExploreIcon from "@material-ui/icons/Explore";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LiveTvIcon from "@material-ui/icons/LiveTv";

function DiscoverServer() {
  const history = useHistory();
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
        console.log(tokenRes.data);
      }
    })();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-channels">
        <div className="discover-title">Discover</div>
        <div className="server-types">
          <div className="server-info active">
            <h4>
              <span className="server-icon">
                <ExploreIcon />
              </span>
              Home
            </h4>
          </div>
          <div className="server-info">
            <h4>
              <span className="server-icon">
                <SportsEsportsIcon />
              </span>
              Gaming
            </h4>
          </div>
          <div className="server-info">
            <h4>
              <span className="server-icon">
                <LibraryMusicRoundedIcon />
              </span>
              Music
            </h4>
          </div>
          <div className="server-info">
            <h4>
              <span className="server-icon">
                <MenuBookIcon />
              </span>
              Education
            </h4>
          </div>
          <div className="server-info">
            <h4>
              <span className="server-icon">
                <ImportantDevicesIcon />
              </span>
              Science & Tech
            </h4>
          </div>
          <div className="server-info">
            <h4>
              <span className="server-icon">
                <LiveTvIcon />
              </span>
              Entertainment
            </h4>
          </div>
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar style={{ height: "30px", width: "30px" }} />
        <div className="sidebar-profileinfo">
          <h3>{userinfo.username}</h3>
          <p>#{userinfo.userid}</p>
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

export default DiscoverServer;
