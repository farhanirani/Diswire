import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ body, sentby, sentbyid, timestamp }) {
  return (
    <div className="message">
      <Avatar />
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
