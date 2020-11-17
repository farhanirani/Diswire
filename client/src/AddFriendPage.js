import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";
import AddFriend from "./Components/AddFriend";

function AddFriendsPage() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, []);

  if (token) {
    return (
      <div class="app">
        <Servers />
        <DMList />
        <AddFriend />
      </div>
    );
  } else {
    return <></>;
  }
}

export default AddFriendsPage;
