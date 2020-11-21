import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
  const [cpassword, setCpassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFnameChange = (e) => setfname(e.target.value);
  const handleLnameChange = (e) => setlname(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setemail(e.target.value);
  const handlecPassChange = (e) => setCpassword(e.target.value);

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      history.push("/channles/@me");
    }
  }, []);

  const handlelogin = async (e) => {
    console.log(username, password);
    if (!username || !fname || !lname || !email || !password || !cpassword) {
      alert("Enter all fields");
    } else {
      try {
        const tokenres = await axios.post("/api/user/signUp", {
          username: username,
          firstname: fname,
          lastname: lname,
          email: email,
          password: password,
          confirmPassword: cpassword,
          profile_pic: "",
        });

        alert("Success, you can now login");
        history.push("/login");
        window.location.reload();
      } catch (err) {
        alert(err.response.data.message);
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handlelogin}>
      <h2 className="welcome-text" style={{ marginTop: "10px" }}>
        Create an Account
      </h2>
      <div className="uname-field">
        <div className="uname-label">EMAIL</div>
        <input
          type="email"
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
          }}
        >
          <div className="first__name">
            <div className="uname-label">FIRST NAME</div>
            <input
              id="firstname"
              label="FIRST NAME"
              value={fname}
              className="uname-input"
              onChange={handleFnameChange}
            />
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              paddingTop: "20px",
            }}
          ></div>

          <div className="first__name">
            <div className="uname-label">LAST NAME</div>
            <input
              id="Last Name"
              label="LAST NAME"
              value={lname}
              className="uname-input"
              onChange={handleLnameChange}
            />
          </div>
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

      <div className="uname-field">
        <div className="uname-label">CONFIRM PASSWORD</div>
        <input
          type="password"
          name=""
          id=""
          value={cpassword}
          className="uname-input"
          onChange={handlecPassChange}
        />
      </div>
      <Button
        type="submit"
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
    </form>
  );
}

export default RegForm;
