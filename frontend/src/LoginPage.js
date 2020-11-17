import React from "react";
import "./style.css";
import LogForm from "./Components/LogForm";
import RegForm from "./Components/RegForm";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

function LoginPage() {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  const THISFUNCTION = async (e) => {
    e.preventDefault();
    localStorage.setItem(
      "auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJma2lfMjAiLCJpYXQiOjE2MDQ4MzkzNDZ9.H_HxGHB45DNw7XsO-1kbFL3JSmoHuPj1hhnbOvFW9kM"
    );
  };

  useEffect(() => {
    if (token) {
      history.push("/channels/@me");
    }
  }, []);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <button onClick={THISFUNCTION}>CLICK ME TO LOGIN</button>
      <nav className="navbar navbar-expand-md">
        <div className="navbar-collapse collapse w-80 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <div className="navbar-header">
              <a className="navbar-brand" href="/channels/69">
                <span className="glyphicon glyphicon-king" /> DISWIRE
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          {/* <LogForm /> */}
          <RegForm />
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
