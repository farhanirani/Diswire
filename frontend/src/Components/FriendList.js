import React from "react";
import "./Chat.css";
import MemberList from "./MemberList";
import FriendHeader from "./FriendHeader";

function FriendList() {
  return (
    <div className="chat">
      <FriendHeader />
      <div className="chatbody">
        <div className="chat-section">
          <img
            className="rumpus__image"
            src="https://specials-images.forbesimg.com/imageserve/5e6ff2eb37d0440006bc9fe7/960x0.jpg?fit=scale"
            alt="#"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
