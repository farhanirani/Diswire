import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ body, sentby, sentbyid, timestamp, profile_pic }) {
  return (
    <div className="message">
      <Avatar style={{ height: "30px", width: "30px" }} src={profile_pic} />
      <div className="message-info">
        <h4>
          {sentby}
          <span className="message-timestamp">{timestamp}</span>
        </h4>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Message;
