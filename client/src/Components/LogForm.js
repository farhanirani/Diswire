import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function LogForm() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFnameChange = (e) => setfname(e.target.value);
  const handleLnameChange = (e) => setlname(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setemail(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);

  return (
    <div className="login-form">
      <h2 className="welcome-text">Welcome back!</h2>
      <p className="welcome-p">We're so excited to see you again!</p>
      <div className="uname-field">
        <div className="uname-label">EMAIL OR USERNAME</div>
        <input
          type="text"
          name=""
          id=""
          value={username}
          className="uname-input"
          onChange={handleUsernameChange}
        />
      </div>
      <div className="uname-field">
        <div className="uname-label">PASSWORD</div>
        <input
          type="password"
          name=""
          value={password}
          id=""
          className="uname-input"
          onChange={handlePassChange}
        />
      </div>
      <p className="forgot-pass">Forgot your password?</p>
      <Button
        variant="contained"
        color="primary"
        style={{
          background: " #7288da",
          margin: "20px",
          marginBottom: "10px",
          width: "90%",
          padding: "10px",
          fontWeight: "600",
        }}
      >
        Login
      </Button>
      <p className="need-p">
        Need an Account?
        <span className="link-reg" onClick={() => history.push("/reg")}>
          Register
        </span>
      </p>
    </div>
  );
}

export default LogForm;
