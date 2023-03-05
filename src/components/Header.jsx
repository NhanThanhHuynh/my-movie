import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import TabBar from './TabBar'

function Header() {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        React Movies
                    </Navbar.Brand> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBar />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Header;