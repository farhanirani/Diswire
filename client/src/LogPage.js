import React from "react";
import "./log.css";
import SpaIcon from "@material-ui/icons/Spa";
import LogForm from "./Components/LogForm";
import RegForm from "./Components/RegForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function LogPage() {
  return (
    <div className="body-center">
      {/* <div className="brand-logo">
        <SpaIcon style={{ fontSize: "36px" }} />
        <div className="brand-name">DISWIRE</div>
      </div>
      <div className="center-content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/log" component={LogForm} />
            <Route exact path="/reg" component={RegForm} />
          </Switch>
        </BrowserRouter>
      </div> */}
    </div>
  );
}

export default LogPage;
