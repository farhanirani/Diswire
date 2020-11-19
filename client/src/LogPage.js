import "./log.css";
import SpaIcon from "@material-ui/icons/Spa";
import LogForm from "./Components/LogForm";
import RegForm from "./Components/RegForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function LogPage() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (token) {
      history.push("/channels/@me");
    }
  }, []);

  return (
    <div className="body-center">
      <div className="brand-logo">
        {/* <SpaIcon style={{ fontSize: "36px" }} /> */}
        <div className="brand-name">DISWIRE</div>
      </div>
      <div className="center-content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LogForm} />
            <Route exact path="/reg" component={RegForm} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default LogPage;
