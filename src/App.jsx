import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/SearchResults';
import Error from './components/Error';

function App() {
  const [isHide, setIsHide] = useState(false)

  return (
    <Router>
      <Header isHide={isHide} setIsHide={setIsHide}/>
      <Container>
        <Switch>
          {/* <Route path="/" exact>
            <MovieList type="now_playing" />
          </Route> */}

          {/* <Route path="/top-rated">
            <MovieList type="top_rated" />
          </Route> */}

          <Route path="/movie/:id">
            <MovieDetails />
          </Route>

          <Route path="/search/:query">
            <SearchResults />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;