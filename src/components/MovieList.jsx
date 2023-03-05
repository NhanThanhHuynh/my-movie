import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

function MovieList({ type, isHide, setIsHide }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory()

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${type}?api_key=d2d2d2407deeab4037f6ea65a7f19160`
                );
                setMovies(response.data.results);
            } catch (error) {
                setError(error.message);
            }

            setIsLoading(false);
        };

        fetchMovies();
    }, [type]);

    const handleGoToDetailMovie = (id) => {
        history.push(`/movie/${id}`)
        setIsHide(true)
    }

    return (
        <>
            {isLoading && !isHide && (
                <Row>
                    {[...Array(20)].map((_, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Skeleton height={320} />
                        </Col>
                    ))}
                </Row>
            )}
            {error && <div>{error}</div>}

            {!isLoading && !error && !isHide &&  (
                <Row>
                    {movies.map((movie) => (
                        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                            <Card className="mb-4">
                                <LazyLoadImage
                                    effect="opacity"
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="card-img-top"
                                    onClick={() => handleGoToDetailMovie(movie.id)}
                                />
                                <Card.Body>
                                    <Card.Title className="text-primary" onClick={() => handleGoToDetailMovie(movie.id)}>{movie.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default MovieList;