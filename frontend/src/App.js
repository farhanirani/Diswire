import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import UserContext from "./context/UserContext";

import ChannelChat from "./ChannelChat";
import HomePage from "./HomePage";
import FriendsPage from "./FriendsPage";
import AddFriendPage from "./AddFriendPage";
import ExplorePage from "./ExplorePage";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });
      // console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await axios.get("/api/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={ChannelChat} />
          <Route exact path="/@me" component={HomePage} />
          <Route exact path="/@friends" component={FriendsPage} />
          <Route exact path="/@add" component={AddFriendPage} />
          <Route exact path="/@explore" component={ExplorePage} />
          {/* <Route exact path="/signup" component={SignUp} />
          <Route path="/subforum" component={SubForum} /> */}
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
