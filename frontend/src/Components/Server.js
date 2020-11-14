import React from "react";
import "./Servers.css";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";
import Popup from "reactjs-popup";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const currencies = [
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Gaming",
    label: "Gaming",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Science & Tech",
    label: "Science & Tech",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
];

function Server() {
  const history = useHistory();
  const [currency, setCurrency] = useState("ERU");
  const [servers, setServers] = useState([]);
  let token = localStorage.getItem("auth-token");

  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const serverData = await axios.get("/api/group", {
        headers: { "x-auth-token": token },
      });

      // console.log(serverData.data);
      setServers(serverData.data);
    })();
  }, []);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="servers">
      <div
        className="tooltip server-icons active"
        onClick={() => history.push("/channels/@me")}
      >
        <span className="tooltiptext">Home</span>
        <span>@me</span>
      </div>

      <div className="server-seperator"></div>

      {servers.map((server) => {
        return (
          <div
            className="tooltip server-icons "
            onClick={() => history.push("/channels/" + server.g_id)}
          >
            <span className="tooltiptext">{server.g_name}</span>
            <span>{server.g_name.charAt(0).toUpperCase()}</span>
          </div>
        );
      })}

      <div className="server-seperator"></div>
      <Popup
        trigger={
          <div className="tooltip reg-icons">
            <span className="tooltiptext">Add a Server</span>
            <span>
              <AddIcon
                style={{ height: "30px", width: "30px", paddingTop: "6px" }}
              />
            </span>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div className="join-create">
            <form className="modal">
              <div className="create-top">
                <div className="top-left">
                  <div className="create-header"> Create your Server </div>
                </div>
                <div className="top-right">
                  <IconButton onClick={close}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <p className="create-info">
                Your server is where you and your friends hang out. Make yours
                and start talking.
              </p>
              <div className="content">
                {" "}
                <h2>SERVER NAME</h2>
                <input
                  placeholder="Server Name"
                  className="serv-name"
                  required
                ></input>
                <h2 style={{ marginBottom: "10px" }}>SERVER CATEGORY</h2>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={currency}
                  onChange={handleChange}
                  variant="outlined"
                  className="serv-category"
                  required
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    style={{ width: "18px", height: "18px", marginTop: "6px" }}
                    required
                  />
                  <p className="check-info">
                    I am making this server for a club or a community.
                  </p>
                </div>
              </div>
              <div className="actions">
                <button type="submit" className="create-button">
                  Create
                </button>
              </div>
            </form>
            <form
              className="modal"
              style={{
                height: "400px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div className="create-top">
                <div className="top-left">
                  <div className="create-header"> Join a Server </div>
                </div>
                <div className="top-right">
                  <IconButton onClick={close}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <p className="create-info">
                Enter an invite below to join an existing server.
              </p>
              <div className="content">
                {" "}
                <h2>INVITE LINK</h2>
                <input
                  placeholder="https://discord.gg/hTKzmak"
                  className="serv-name"
                  style={{ background: " #CCCCCC", border: "0" }}
                  required
                ></input>
                <h2 style={{ paddingBottom: "10px" }}>
                  INVITE LINK SHOULD LOOK LIKE
                </h2>
                <p className="server-links">hTZmak</p>
                <p className="server-links">https://discord.gg/hTKzmak</p>
                <p className="server-links">https://discord.gg/cool-people</p>
              </div>
              <div className="actions">
                <button type="submit" className="join-button">
                  Join Server
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
      <div
        className="tooltip reg-icons"
        onClick={() => history.push("/channels/@explore")}
      >
        <span className="tooltiptext">Explore Servers</span>
        <span>
          <ExploreIcon
            style={{ height: "30px", width: "30px", paddingTop: "6px" }}
          />
        </span>
      </div>
    </div>
  );
}

export default Server;
