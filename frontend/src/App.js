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
import CheckUserLoggedInOrNot from "./CheckUserLoggedInOrNot";
import Redirect from "./Components/Redirect";

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

      if (tokenRes.data) {
        setUserData({
          token,
          user: tokenRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <CheckUserLoggedInOrNot />
        <Switch>
          <Route exact path="/channels/@me" component={FriendsPage} />
          <Route path="/channels/@me" component={HomePage} />
          <Route exact path="/channels/@add" component={AddFriendPage} />
          <Route exact path="/channels/@explore" component={ExplorePage} />

          <Route path="/channels/" component={ChannelChat} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route path="/" component={Redirect} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
