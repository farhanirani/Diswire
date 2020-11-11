import React from 'react';
import './App.css';
import Servers from './Components/Server'
import DiscoverServer from './Components/DiscoverServer'
import FeaturedServers from './Components/FeaturedServer'

function ExplorePage() {
  return (
    <div class="app">
      <Servers />
      <DiscoverServer />
      <FeaturedServers />
      </div>
  );
}

export default ExplorePage;
