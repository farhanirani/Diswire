import React from "react";
import Button from "@material-ui/core/Button";

function LogForm() {
  return (
    <div className="login-form">
      <h2 className="welcome-text">Welcome back!</h2>
      <p className="welcome-p">We're so excited to see you again!</p>
      <div className="uname-field">
        <div className="uname-label">EMAIL OR USERNAME</div>
        <input type="text" name="" id="" className="uname-input" />
      </div>
      <div className="uname-field">
        <div className="uname-label">PASSWORD</div>
        <input type="password" name="" id="" className="uname-input" />
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
        Need an Account?<span className="link-reg">Register</span>
      </p>
    </div>
  );
}

export default LogForm;
