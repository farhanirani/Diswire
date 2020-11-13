import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat'
import Servers from './Components/Server'

function ChannelChat() {
  return (
    <div class="app">
      <Servers />
      <SideBar />
      <Chat />
      </div>
  );
}

export default ChannelChat;
