import React from 'react';
import './PersonalChat.css'
import PersonalChatHeader from './PersonalChatHeader';
import Message from './Message'

function PersonalChat() {
    return (
        <div className="chat">
            <PersonalChatHeader />
            <div className="chat-messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat-input">
                <form>
                    <input placeholder="Message General" />
                    <button className="chat-inputbutton" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default PersonalChat
