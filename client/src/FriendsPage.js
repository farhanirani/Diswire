import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";
import FriendList from "./Components/FriendList";

import axios from "axios";

function FriendsPage() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, []);

  if (token) {
    return (
      <div className="app">
        <Servers />
        <DMList />
        <FriendList />
      </div>
    );
  } else {
    return <></>;
  }
}

export default FriendsPage;
