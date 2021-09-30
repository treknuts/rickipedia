import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./navbar.scss";

const MyNavbar = () => {
    return (
      <Navbar className="p-2 border-bottom mb-4">
        <Navbar.Brand href="/">
          <img
        src="././icons8-rick-sanchez-48.png"
        width="48"
        height="48"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>
        <Nav className="bigger-font me-auto">
          <Nav.Link href="/characters">Characters</Nav.Link>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default MyNavbar;