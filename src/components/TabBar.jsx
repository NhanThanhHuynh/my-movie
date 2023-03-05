import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import MovieList from './MovieList';

function TabBar() {
  return (
    <Tabs defaultActiveKey="now-playing">
      <Tab eventKey="now-playing" title="Now Playing">
        <MovieList type="now_playing" />
      </Tab>
      <Tab eventKey="top-rated" title="Top Rated">
        <MovieList type="top_rated" />
      </Tab>
    </Tabs>
  );
}

export default TabBar;