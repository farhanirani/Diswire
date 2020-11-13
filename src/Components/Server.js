import React from "react";
import "./Servers.css";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";
import Popup from 'reactjs-popup';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'Music',
    label: 'Music',
  },
  {
    value: 'Gaming',
    label: 'Gaming',
  },
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'Science & Tech',
    label: 'Science & Tech',
  },
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },
];

function Server() {
  const [currency, setCurrency] = React.useState('ERU');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div class="servers">
      <a class="tooltip server-icons " href="/@friends">
        <span className="tooltiptext">Home</span>
        <span>Atd</span>
      </a>
      <div class="server-seperator"></div>
      <a class="tooltip server-icons active" href="/">
        <span className="tooltiptext">First Server</span>
        <span>V</span>
      </a>
      <a class="tooltip server-icons" href="/">
        <span className="tooltiptext">Second Server</span>
        <span>V</span>
      </a>
      <a class="tooltip server-icons" href="/">
        <span className="tooltiptext">Third Server</span>
        <span>vs</span>
      </a>
      <div class="server-seperator"></div>
      <Popup
    trigger={<div class="tooltip reg-icons">
        <span className="tooltiptext">Add a Server</span>
        <span>
          <AddIcon
            style={{ height: "30px", width: "30px", paddingTop: "6px" }}
          />
        </span>
        </div>}
    modal
    nested
  >{close => (
      <div className="modal">
        <div className="create-top">
              <div className="top-left">
                <div className="create-header"> Create your Server </div>
              </div>
              <div className="top-right">
                <IconButton onClick={close}><CloseIcon/></IconButton>
                </div>
            </div>
            <p className="create-info">Your server is where you and your friends hang out. Make yours and start talking.</p>
        <div className="content">
          {' '}
              <h2>SERVER NAME</h2>
              <input placeholder="Server Name" className="serv-name"></input>
              <h2 style={{marginBottom:'10px'}}>SERVER CATEGORY</h2>
              <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
                variant="outlined"
                className="serv-category"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              <div className="checkbox">
                <input type="checkbox" name="" id="" style={{width:'18px',height:'18px',marginTop:'6px'}}/>
              <p className="check-info">I am making this server for a club or a community.</p>
                </div>
        </div>
            <div className="actions">
              <button className="create-button">Create</button>
        </div>
      </div>
    )}
        </Popup>
      <a class="tooltip reg-icons" href="/@explore">
        <span className="tooltiptext">Explore Servers</span>
        <span>
          <ExploreIcon
            style={{ height: "30px", width: "30px", paddingTop: "6px" }}
          />
        </span>
      </a>
    </div>
  );
}

export default Server;
