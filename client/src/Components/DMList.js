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
import axios from "axios";

function DMList() {
  const history = useHistory();
  const [friends, setFriends] = useState([]);
  const [userinfo, setUserinfo] = useState([]);
  const [URL, setURL] = useState("");
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
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
      const friendsdata = await axios.get("/api/user/displayFriends", {
        headers: { "x-auth-token": token },
      });
      setFriends(friendsdata.data);
      // console.log(friendsdata.data);
    })();
  }, []);

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
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    }
    setURL("");
  };

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
              <Avatar
                style={{ height: "30px", width: "30px" }}
                src={friend.profile_pic}
              />

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
          </Popup>{" "}
        </div>
      </div>
    </div>
  );
}

export default DMList;
