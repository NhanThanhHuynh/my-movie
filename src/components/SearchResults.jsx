import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import Loading from './Loading';
import Error from './Error';
import { searchMovies } from '../api';

function SearchResults({ setIsHide }) {
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    searchMovies(query)
      .then((data) => {
        setLoading(false);
        setMovies(data.results);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  if (movies.length === 0) {
    return <p>No results found for "{query}"</p>;
  }

  return (
    <Container>
      <h2>Search results for "{query}"</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={6} sm={6} md={4} lg={6} xl={6} xxl={6}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchResults;