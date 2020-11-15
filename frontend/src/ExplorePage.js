import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Servers from "./Components/Server";
import DiscoverServer from "./Components/DiscoverServer";
import FeaturedServers from "./Components/FeaturedServer";

function ExplorePage() {
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
        <DiscoverServer />
        <FeaturedServers />
      </div>
    );
  } else {
    return <></>;
  }
}

export default ExplorePage;
