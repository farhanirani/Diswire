import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Chat.css";
import FriendHeader from "./FriendHeader";
import axios from "axios";

function AddFriend() {
  const [ServerFriendTag, setServerFriendTag] = useState("");
  const token = localStorage.getItem("auth-token");

  const submitserverpp = async (e) => {
    e.preventDefault();
    const newFriendTag = ServerFriendTag.substring(
      ServerFriendTag.indexOf("#") + 1
    );
    const isnum = /^\d+$/.test(newFriendTag);
    if (ServerFriendTag == "") {
      alert("Enter the username and tag");
    } else if (!isnum || !(ServerFriendTag.indexOf("#") > -1)) {
      alert("Enter a valid user tag");
    } else {
      try {
        const temp = await axios.post(
          "/api/user/sendRequest/" + newFriendTag,
          null,
          {
            headers: { "x-auth-token": token },
          }
        );
        alert("Friend request sent to " + newFriendTag);
        setServerFriendTag("");
      } catch (err) {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    }
  };

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
            <form onSubmit={submitserverpp}>
              <input
                placeholder="Username#1234"
                value={ServerFriendTag}
                onChange={(e) => setServerFriendTag(e.target.value)}
              />
              <button type="submit" className="friend-search">
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
