import React from "react";
import "./App.css";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";
import AddFriend from "./Components/AddFriend";

function AddFriendsPage() {
  return (
    <div class="app">
      <Servers />
      <DMList />
      <AddFriend />
    </div>
  );
}

export default AddFriendsPage;
