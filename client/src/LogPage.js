import React from "react";
import "./log.css";
import SpaIcon from "@material-ui/icons/Spa";
import LogForm from "./Components/LogForm";
import RegForm from "./Components/RegForm";

function LogPage() {
  return (
    <div className="bg-chutiye">
      <div className="brand-logo">
        <SpaIcon style={{ fontSize: "36px" }} />
        <div className="brand-name">DISWIRE</div>
      </div>
      <div className="center-content">
        <RegForm />
      </div>
    </div>
  );
}

export default LogPage;
