import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function RegForm() {
  return (
    <div className="login-form">
      <h2 className="welcome-text">Create an Account</h2>
      <div className="uname-field">
        <div className="uname-label">EMAIL</div>
        <input type="text" name="" id="" className="uname-input" />
      </div>
      <div className="uname-field">
        <div className="uname-label">USERNAME</div>
        <input type="text" name="" id="" className="uname-input" />
      </div>
      <div className="uname-field">
        <div className="uname-label">PASSWORD</div>
        <input type="password" name="" id="" className="uname-input" />
      </div>
      <div className="uname-field">
        <div className="uname-label">DATE OF BIRTH</div>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          variant="filled"
          style={{ width: "100%" }}
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
      <p className="need-p">
        <span className="link-reg">Already have an Account?</span>
      </p>
    </div>
  );
}

export default RegForm;
