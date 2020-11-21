import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Chat.css";
import FriendHeader from "./FriendHeader";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import Tooltip from "@material-ui/core/Tooltip";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Popup from "reactjs-popup";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import BlockIcon from "@material-ui/icons/Block";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function FriendList() {
  const history = useHistory();
  const [userfriends, setuserfriends] = useState([]);
  const token = localStorage.getItem("auth-token");

  const removefriend = async (val) => {
    console.log(val);

    try {
      const temp = await axios.post("/api/user/rejectFriend/" + val, null, {
        headers: { "x-auth-token": token },
      });
      window.location.reload();
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("auth-token");
      const tokenRes = await axios.get("/api/user/displayFriends", {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/login");
      } else {
        setuserfriends(tokenRes.data);
        console.log(tokenRes.data);
      }
    })();
  }, []);

  return (
    <div className="chat">
      <FriendHeader />
      <div className="chatbody" style={{ padding: "0px 20px" }}>
        <div className="chat-section">
          <h2 className="fri-info">All Friends - {userfriends.length}</h2>

          {userfriends.map((friend) => {
            return (
              <div className={`friend-item`}>
                <div
                  className="info-left"
                  onClick={() => history.push("/channels/@me/" + friend.userid)}
                >
                  <Avatar
                    style={{ height: "30px", width: "30px" }}
                    src={friend.profile_pic}
                  />
                  <h3>{friend.username}</h3>
                </div>
                <div className="info-right">
                  <Tooltip
                    title="Message"
                    placement="top"
                    onClick={() =>
                      history.push("/channels/@me/" + friend.userid)
                    }
                  >
                    <div className="friend-action">
                      <ChatBubbleRoundedIcon
                        style={{
                          height: "22px",
                          width: "22px",
                          paddingTop: "2px",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      />
                    </div>
                  </Tooltip>
                  <Popup
                    trigger={
                      <Tooltip title="More" placement="top">
                        <div className="friend-action">
                          <MoreVertRoundedIcon
                            style={{
                              height: "22px",
                              width: "22px",
                              paddingTop: "2px",
                              paddingLeft: "2px",
                              paddingRight: "2px",
                            }}
                          />
                        </div>
                      </Tooltip>
                    }
                    position="bottom"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={false}
                  >
                    <div className="menu">
                      <div
                        className="menu-item"
                        onClick={() => removefriend(friend.userid)}
                      >
                        Block Friend
                        <BlockIcon
                          style={{ paddingTop: "2px" }}
                          fontSize="small"
                        />
                      </div>
                      <div
                        className="menu-item-leave"
                        onClick={() => removefriend(friend.userid)}
                      >
                        Remove Friend
                        <RemoveCircleIcon
                          style={{ paddingTop: "2px" }}
                          fontSize="small"
                        />
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
            );
          })}

          {/* <img
            className="rumpus__image"
            src="https://specials-images.forbesimg.com/imageserve/5e6ff2eb37d0440006bc9fe7/960x0.jpg?fit=scale"
            alt="#"
          ></img> */}
        </div>
      </div>
    </div>
  );
}

export default FriendList;
