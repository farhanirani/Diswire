import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import ChannelChat from "./ChannelChat";
import HomePage from "./HomePage";
import FriendsPage from "./FriendsPage";
import AddFriendPage from "./AddFriendPage";
import FriendRequests from "./FriendRequests";
import ExplorePage from "./ExplorePage";
import CheckUserLoggedInOrNot from "./CheckUserLoggedInOrNot";
import Redirect from "./Components/Redirect";
import StartPage from "./StartPage";
import LogPage from "./LogPage";

function App() {
  const ttt = localStorage.getItem("auth-token");

  useEffect(() => {
    if (ttt === null) {
      localStorage.setItem("auth-token", "");
    }
  }, []);

  return (
    <BrowserRouter>
      <CheckUserLoggedInOrNot />
      <Switch>
        <Route exact path="/hello" component={StartPage} />
        <Route exact path="/channels/@me" component={FriendsPage} />
        <Route path="/channels/@me" component={HomePage} />
        <Route exact path="/channels/@add" component={AddFriendPage} />
        <Route exact path="/channels/@pending" component={FriendRequests} />
        <Route exact path="/channels/@explore" component={ExplorePage} />
        <Route exact path="/reg" component={LogPage} />
        <Route exact path="/login" component={LogPage} />
        <Route path="/channels/" component={ChannelChat} />
        <Route path="/" component={Redirect} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
