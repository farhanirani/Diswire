import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChannelChat from "./ChannelChat";
import HomePage from "./HomePage";
import FriendsPage from "./FriendsPage";
import AddFriendPage from "./AddFriendPage";
import ExplorePage from "./ExplorePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChannelChat} />
        <Route exact path="/@me" component={HomePage} />
        <Route exact path="/@friends" component={FriendsPage} />
        <Route exact path="/@add" component={AddFriendPage} />
        <Route exact path="/@explore" component={ExplorePage} />
        {/* <Route exact path="/signup" component={SignUp} />
          <Route path="/subforum" component={SubForum} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
