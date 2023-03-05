import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SearchBar() {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${ query }`);
    };

    return (
        <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
                type="text"
                placeholder="Search movies"
                className="me-2"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}

export default SearchBar;