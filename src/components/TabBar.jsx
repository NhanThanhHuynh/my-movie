import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MovieList from './MovieList';

function TabBar({ isHide, setIsHide }) {
  const history = useHistory();

  const handleOnSelect = (key) => {
    setIsHide(false)
    if (key === "now-playing") {
      history.push("/")
    }
    if (key === "top-rated") {
      history.push("/top-rated")
    }
  }

  return (
    <Tabs defaultActiveKey="now-playing" onSelect={(key) => handleOnSelect(key)}>
      <Tab eventKey="now-playing" title="Now Playing">
        <MovieList type="now_playing" isHide={isHide} setIsHide={setIsHide} />
      </Tab>
      <Tab eventKey="top-rated" title="Top Rated">
        <MovieList type="top_rated" isHide={isHide} setIsHide={setIsHide} />
      </Tab>
    </Tabs>
  );
}

export default TabBar;