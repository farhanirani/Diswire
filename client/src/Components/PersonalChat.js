import React from "react";
import "./PersonalChat.css";
import PersonalChatHeader from "./PersonalChatHeader";
import Message from "./Message";

function PersonalChat() {
  const messages = [
    {
      m_id: 2,
      m_body: "message test 1 2",
      m_sender_id: 1,
      m_reciever_id: 2,
      m_sentat: "2020-10-12T07:35:53.000Z",
    },
    {
      m_id: 4,
      m_body: "message test 2 1",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-12T07:35:53.000Z",
    },
    {
      m_id: 7,
      m_body: "message test1 2",
      m_sender_id: 1,
      m_reciever_id: 2,
      m_sentat: "2020-10-12T07:36:24.000Z",
    },
  ];

  return (
    <div className="chat">
      <PersonalChatHeader />
      <div className="chat-messages">
        {messages.map((message) => (
          <Message
            key={message.m_id}
            body={message.m_body}
            sentby={message.m_sender_id}
            timestamp={message.m_sentat}
          />
        ))}
      </div>
      <div className="chat-input">
        <form>
          <input placeholder="Message General" />
          <button className="chat-inputbutton" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalChat;
