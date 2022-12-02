import React from "react";
import { Link } from "react-router-dom";
import { Button, NavDropdown, Navbar, Nav, Container } from "react-bootstrap/";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Container>
            <Navbar.Brand className="head">
              <i className="fa-solid fa-house-chimney" /> Estatery
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav "
              className="toggle"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/data">Rent</Link>
                <Link to="/buy">Buy</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/Favorite">Favourites</Link>
                <NavDropdown
                  title="Manage Property"
                  id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resource" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="loginbtn">
                  <Button variant="outline-success" size="sm">
                    Login
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    Signup
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
