import React from "react";
import "./MemberList.css";
import Avatar from "@material-ui/core/Avatar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function MemberList() {
  const history = useHistory();
  const channelid = window.location.pathname.substring(10);
  const [members, setMembers] = useState([]);
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
      const serverData = await axios.get(`/api/group/users/ ${channelid} `, {
        headers: { "x-auth-token": token },
      });
      // check this
      // console.log(serverData.data);
      if (serverData.data) {
        console.log(serverData.data);
        setMembers(serverData.data);
      } else {
        alert("does not exist lol");
        history.push("/channels/@me");
      }
    })();
  }, [channelid]);

  return (
    <div className="members">
      <div className="list-header">
        <h4>
          Members-<span className="member-number">{members.length}</span>
        </h4>
        {members.map((member) => {
          return (
            <div
              key={member.userid}
              className="member-info"
              onClick={() => {
                history.push("/channels/@me/" + member.userid);
              }}
            >
              <div className="member-info-left">
                <Avatar
                  style={{ height: "30px", width: "30px" }}
                  src={member.profile_pic}
                />
                <h3>{member.username}</h3>
              </div>
              <div className="member-info-right">
                <Popup
                  trigger={<MoreVertIcon className="profileicons" />}
                  position="bottom right"
                  closeOnDocumentClick
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  contentStyle={{ padding: "0px", border: "none" }}
                  arrow={false}
                >
                  <div className="menu">
                    <div className="menu-item-leave">
                      Remove User
                      <MeetingRoomTwoToneIcon
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
      </div>
    </div>
  );
}

export default MemberList;
