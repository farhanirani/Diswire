import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import MemberList from "./MemberList";

function Chat() {
  const userChattingWith = "Krutik";
  const messages = [
    {
      m_id: 1,
      m_body: "message test1 2",
      m_sender_id: 1,
      m_reciever_id: 2,
      m_sentat: "2020-10-12T07:35:53.000Z",
    },
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
    {
      m_id: 8,
      m_body: "message test 1 2",
      m_sender_id: 1,
      m_reciever_id: 2,
      m_sentat: "2020-10-12T07:36:25.000Z",
    },
    {
      m_id: 10,
      m_body: "message test 2 1",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-12T07:36:25.000Z",
    },
    {
      m_id: 13,
      m_body: "fuck you",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-30T06:48:43.000Z",
    },
    {
      m_id: 13,
      m_body: "fuck you",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-30T06:48:43.000Z",
    },
    {
      m_id: 13,
      m_body: "fuck you",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-30T06:48:43.000Z",
    },
    {
      m_id: 13,
      m_body: "fuck you",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-30T06:48:43.000Z",
    },
    {
      m_id: 13,
      m_body: "fuck you",
      m_sender_id: 2,
      m_reciever_id: 1,
      m_sentat: "2020-10-30T06:48:43.000Z",
    },
  ];

  return (
    <div className="chat">
      <ChatHeader />
      {/* <div className="chat-messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat-input">
                <form>
                    <input placeholder="Message General" />
                    <button className="chat-inputbutton" type="submit">Send</button>
                </form>
            </div> */}
      <div className="chatbody">
        <div className="chat-section">
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
        <MemberList />
      </div>
    </div>
  );
}

export default Chat;
