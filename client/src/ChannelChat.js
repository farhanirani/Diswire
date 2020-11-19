import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import Chat from "./Components/ChanChat";
import Servers from "./Components/Server";

function ChannelChat() {
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
        <SideBar />
        <Chat />
      </div>
    );
  } else {
    return <></>;
  }
}

export default ChannelChat;
