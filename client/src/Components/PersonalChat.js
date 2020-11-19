import React, { useState, useEffect } from "react";
import "./PersonalChat.css";
import Message from "./Message";
import PersonalChatHeader from "./PersonalChatHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";

function PersonalChat() {
  const [userchatting, setUserchatting] = useState("");
  const otheruserid = window.location.pathname.substring(14);
  const [messages, setmessages] = useState([]);
  const token = localStorage.getItem("auth-token");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [userinfo, setUserinfo] = useState([]);

  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("auth-token");
      const tokenRes = await axios.post("/api/user/checkToken", null, {
        headers: { "x-auth-token": token },
      });

      // console.log(tokenRes.data);
      if (!tokenRes.data) {
        history.push("/login");
      } else {
        setUserinfo(tokenRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const tokenRes = await axios.get(
          "/api/messages/personal/" + otheruserid,
          {
            headers: { "x-auth-token": token },
          }
        );
        setmessages(tokenRes.data);

        const otheruserres = await axios.get(
          "/api/user/getusername/" + otheruserid
        );
        setUserchatting(otheruserres.data.username);
      })();
    } catch (err) {
      console.log(err.response.data.msg);
      alert(err.response.data.msg);
    }
  }, [otheruserid]);

  const scrollToBottom = (e) => {
    setTimeout(() => {
      console.log("World!");
    }, 50);
    var elem = document.getElementById("scrolldiv");
    elem.scrollTop = elem.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        "/api/messages/post/" + otheruserid,
        {
          messagedata: message,
        },
        {
          headers: { "x-auth-token": token },
        }
      );
      setmessages([
        ...messages,
        {
          m_id: 100 + Math.floor(Math.random() * 101),
          m_body: message,
          m_sender_id: userinfo.userid,
          m_sentat: "now",
          username: userinfo.username,
        },
      ]);
    } catch (err) {
      console.log(err.response.data.msg);
      alert(err.response.data.msg);
    }
    scrollToBottom();
    setMessage("");
  };

  return (
    <div className="chat">
      <PersonalChatHeader otheruser={userchatting} />
      <div className="chat-messages" id="scrolldiv">
        {messages.map((message) => (
          <Message
            key={message.m_id}
            body={message.m_body}
            sentby={message.username}
            sentbyid={message.m_sender_id}
            timestamp={message.m_sentat}
          />
        ))}
      </div>
      <div className="chat-input">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Message General"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="chat-inputbutton" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalChat;
