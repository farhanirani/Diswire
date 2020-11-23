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
  const [scroll, setScroll] = useState(0);
  const [nowBecomeRealtime, setNowBecomeRealtime] = useState(0);

  useEffect(() => {
    (async () => {
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
        setNowBecomeRealtime(2);
        scrollToBottom();

        const otheruserres = await axios.get(
          "/api/user/getusername/" + otheruserid
        );
        console.log(otheruserres.data);
        setUserchatting(otheruserres.data.username);
      })();
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  }, [otheruserid]);

  useEffect(() => {
    if (nowBecomeRealtime > 1) {
      const interval = setInterval(() => {
        (async () => {
          await axios
            .get("/api/messages/personal/" + otheruserid, {
              headers: { "x-auth-token": token },
            })
            .then((res) => {
              console.log(messages.length, res.data.length);
              if (res.data.length != messages.length) {
                setNowBecomeRealtime(0);
                setmessages(res.data);
                scrollToBottom();
                setNowBecomeRealtime(2);
              }
            });
        })();
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [nowBecomeRealtime]);

  const scrollToBottom = (e) => {
    setTimeout(() => {
      console.log("World!");
    }, 50);
    var elem = document.getElementById("scrolldiv");
    elem.scrollTop = elem.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [scroll]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message != "") {
      setNowBecomeRealtime(0);
      try {
        (async () => {
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
              m_sentat: "Now",
              username: userinfo.username,
              profile_pic: userinfo.profile_pic,
            },
          ]);
          setNowBecomeRealtime(2);
          setScroll(scroll + 1);
        })();
      } catch (err) {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    } else {
      alert("Please enter a message");
    }
    scrollToBottom();
    setMessage("");
  };

  return (
    <div className="chat">
      <PersonalChatHeader otheruser={userchatting} oid={otheruserid} />
      <div className="chat-messages" id="scrolldiv">
        {messages.map((message) => (
          <Message
            key={message.m_id}
            body={message.m_body}
            sentby={message.username}
            sentbyid={message.m_sender_id}
            timestamp={message.m_sentat}
            profile_pic={message.profile_pic}
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
