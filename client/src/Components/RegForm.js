import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
}));

function RegForm() {
  const history = useHistory();
  const classes = useStyles();

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
      <h2 className="welcome-text" style={{ marginTop: "10px" }}>
        Create an Account
      </h2>
      <div className="uname-field">
        <div className="uname-label">EMAIL</div>
        <input
          type="text"
          name=""
          id=""
          value={email}
          className="uname-input"
          onChange={handleEmailChange}
        />
      </div>
      <div className="uname-field">
        <div className="uname-label">USERNAME</div>
        <input
          type="text"
          name=""
          id=""
          value={username}
          className="uname-input"
          onChange={handleUsernameChange}
        />
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            paddingTop: "20px",
          }}
        >
          <TextField
            id="firstname"
            label="FIRST NAME"
            variant="outlined"
            placeholder="John"
            value={fname}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={handleFnameChange}
          />
          <TextField
            id="Last Name"
            label="LAST NAME"
            placeholder="Wick"
            type="text"
            variant="outlined"
            value={lname}
            style={{ marginLeft: "10px" }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={handleLnameChange}
          />
        </div>
      </div>
      <div className="uname-field">
        <div className="uname-label">PASSWORD</div>
        <input
          type="password"
          name=""
          id=""
          value={password}
          className="uname-input"
          onChange={handlePassChange}
        />
      </div>
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
        Register
      </Button>
      <p className="need-p" style={{ marginBottom: "20px" }}>
        <span className="link-reg" onClick={() => history.push("/login")}>
          Already have an Account?
        </span>
      </p>
    </div>
  );
}

export default RegForm;
