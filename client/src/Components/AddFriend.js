import React from "react";
import "./Chat.css";
import FriendHeader from "./FriendHeader";

function AddFriend() {
  return (
    <div className="chat">
      <FriendHeader />
      <div className="chatbody">
        <div className="mid-section">
          <h3 className="add-title">ADD FRIEND</h3>
          <p className="add-info">
            You can add a friend with their User tag. It's cAsE SeNsItIvE!
          </p>
          <div className="search-input">
            <form>
              <input placeholder="Username#1234" />
              <button className="friend-search" type="submit">
                Send Friend Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
