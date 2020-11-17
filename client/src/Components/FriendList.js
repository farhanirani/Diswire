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

function FriendList() {
  const history = useHistory();
  const [userfriends, setuserfriends] = useState([]);

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
                  <Avatar style={{ height: "30px", width: "30px" }} />
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
                  <Tooltip
                    title="More"
                    placement="top"
                    onClick={() =>
                      history.push("GAITONDE ADD POPUP THAT SAWS REMOVE FRIEND")
                    }
                  >
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
