import React from 'react';
import './App.css';
import PersonalChat from './Components/PersonalChat'
import Servers from './Components/Server'
import DMList from './Components/DMList'

function HomePage() {
  return (
    <div class="app">
      <Servers />
      <DMList />
      <PersonalChat />
      </div>
  );
}

export default HomePage;
