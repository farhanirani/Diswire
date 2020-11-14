import React from "react";
import "./MemberList.css";
import Avatar from "@material-ui/core/Avatar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function MemberList() {
  const history = useHistory();
  const channelid = window.location.pathname.substring(10);
  const [members, setMembers] = useState([]);
  let token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const serverData = await axios.get(`/api/group/users/ ${channelid} `, {
        headers: { "x-auth-token": token },
      });
      console.log(serverData.data);
      setMembers(serverData.data);
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
              className="member-info"
              onClick={() => {
                history.push("/channels/@me/" + member.userid);
              }}
            >
              <Avatar style={{ height: "30px", width: "30px" }} />
              <h3>{member.username}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemberList;
