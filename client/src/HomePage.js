import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import PersonalChat from "./Components/PersonalChat";
import Servers from "./Components/Server";
import DMList from "./Components/DMList";

function HomePage() {
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
        <PersonalChat />
      </div>
    );
  } else {
    return <></>;
  }
}

export default HomePage;
