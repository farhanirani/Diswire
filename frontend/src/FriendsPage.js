import React from "react";
import "./App.css";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";
import FriendList from "./Components/FriendList";

function FriendsPage() {
  return (
    <div className="app">
      <Servers />
      <DMList />
      <FriendList />
    </div>
  );
}

export default FriendsPage;
