import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Card as={Link} to={`/movie/${movie.id}`}>
      <Card.Img variant="top" src={posterUrl} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.release_date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;