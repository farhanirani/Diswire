import React from "react";
import "./Chat.css";
import MemberList from "./MemberList";
import FriendHeader from "./FriendHeader";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

// const useStyles = makeStyles((theme) => ({
//   wind: {
//     [theme.breakpoints.between('xs','md')]: {
//       width:'100%',
//     },
//   },
// }));

function FriendList() {
    // const classes = useStyles();

  
  return (
    <div className="chat">
      <FriendHeader />
      <div className="chatbody" style={{padding: '0px 20px'}}>
        <div className="chat-section">
          <h2 className="fri-info">All Friends - 2</h2>
          <div
              className={`friend-item`}
          >
            <div className="info-left">
              <Avatar style={{ height: "30px", width: "30px" }} />
              <h3>fki</h3>
            </div>
            <div className="info-right">
              <Tooltip title="Message" placement="top">
            <div className='friend-action'><ChatBubbleRoundedIcon style={{ height: "22px", width: "22px",paddingTop:'2px',paddingLeft:'2px',paddingRight:'2px'  }} />
              </div>
              </Tooltip>
              <Tooltip title="More" placement="top">
            <div className='friend-action'><MoreVertRoundedIcon style={{ height: "22px", width: "22px",paddingTop:'2px',paddingLeft:'2px',paddingRight:'2px' }} />
              </div>
          </Tooltip>
              </div>
          </div>
          <div
              className="friend-item"
          >
            <div className="info-left">
              <Avatar style={{ height: "30px", width: "30px" }} />
              <h3>pyro</h3>
            </div>
            <div className="info-right">
              <Tooltip title="Message" placement="top">
            <div className='friend-action'><ChatBubbleRoundedIcon style={{ height: "22px", width: "22px",paddingTop:'2px',paddingLeft:'2px',paddingRight:'2px'  }} />
              </div>
              </Tooltip>
              <Tooltip title="More" placement="top">
            <div className='friend-action'><MoreVertRoundedIcon style={{ height: "22px", width: "22px",paddingTop:'2px',paddingLeft:'2px',paddingRight:'2px' }} />
              </div>
          </Tooltip>
              </div>
            </div>
          {/* <img
            className="rumpus__image"
            src="https://specials-images.forbesimg.com/imageserve/5e6ff2eb37d0440006bc9fe7/960x0.jpg?fit=scale"
            alt="#"
          ></img> */}
        </div>
      </div>
    </div>
  );
}

export default FriendList;
