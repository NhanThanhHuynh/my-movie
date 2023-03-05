import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=d2d2d2407deeab4037f6ea65a7f19160`
                );
                    console.log(movie,'movie in detail')
                setMovie(response.data);
            } catch (error) {
                console.log(error.response,'error')
                setError(error.message);
            }

            setIsLoading(false);
        };

        fetchMovie();
    }, [id]);

    return (
        <Container className="my-4">
            {isLoading && <Skeleton height={500} />}
            {error && <div>{error}</div>}

            {!isLoading && !error && (
                <>
                    <Row>
                        <Col xs={12} md={4}>
                            <LazyLoadImage
                                effect="opacity"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                className="img-fluid rounded"
                            />
                        </Col>
                        <Col xs={12} md={8}>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h4>Genres</h4>
                                    <ul>
                                        {movie.genres.map((genre) => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                                <Card.Body>
                                    <h4>Cast</h4>
                                    <ul>
                                        {movie?.credits?.cast?.slice(0, 5).map((cast) => (
                                            <li key={cast.id}>{cast.name}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default MovieDetails;