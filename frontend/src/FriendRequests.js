import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";
import PendingRequests from "./Components/PendingRequests";

function FriendRequests() {
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
        <PendingRequests />
      </div>
    );
  } else {
    return <></>;
  }
}

export default FriendRequests;
