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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function PendingRequests() {
  const history = useHistory();
  const [userfriends, setuserfriends] = useState([]);
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
      const tokenRes = await axios.get("/api/user/friendRequests", {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/login");
      } else {
        setuserfriends(tokenRes.data);
      }
    })();
  }, []);

  const accept = async (num) => {
    const tokenRes = await axios.post("/api/user/acceptFriend/" + num, null, {
      headers: { "x-auth-token": token },
    });
    setuserfriends((userfriends) =>
      userfriends.filter((userfriends) => userfriends.userid !== num)
    );
  };

  const reject = async (num) => {
    const tokenRes = await axios.post("/api/user/rejectFriend/" + num, null, {
      headers: { "x-auth-token": token },
    });
    setuserfriends((userfriends) =>
      userfriends.filter((userfriends) => userfriends.userid !== num)
    );
  };

  return (
    <div className="chat">
      <FriendHeader />
      <div className="chatbody" style={{ padding: "0px 20px" }}>
        <div className="chat-section">
          <h2 className="fri-info">Pending Requests - {userfriends.length}</h2>

          {userfriends.map((friend) => {
            return (
              <div className="friend-item" key={friend.userid}>
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
                    title="Accept"
                    placement="top"
                    onClick={() => accept(friend.userid)}
                  >
                    <div className="friend-action">
                      <CheckCircleOutlineIcon
                        style={{
                          height: "22px",
                          width: "22px",
                          paddingTop: "2px",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                          color: "green",
                        }}
                      />
                    </div>
                  </Tooltip>
                  <Tooltip
                    title="Reject"
                    placement="top"
                    onClick={() => reject(friend.userid)}
                  >
                    <div className="friend-action">
                      <CancelOutlinedIcon
                        style={{
                          height: "22px",
                          width: "22px",
                          paddingTop: "2px",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                          color: "red",
                        }}
                      />
                    </div>
                  </Tooltip>
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

export default PendingRequests;
