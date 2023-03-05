import React, { useState } from 'react';
import { Navbar, Container, Tab, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import TabBar from './TabBar'

function Header({isHide, setIsHide}) {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" onClick={() => setIsHide(false)}>
                        React Movies
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBar setIsHide={setIsHide}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <TabBar isHide={isHide} setIsHide={setIsHide}></TabBar>
        </>
    );
}

export default Header;