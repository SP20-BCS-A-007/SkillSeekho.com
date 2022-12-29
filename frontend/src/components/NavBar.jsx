import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function NavBar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="justify-content-between"
      justify-content-between
    >
      <Container fluid>
        <Navbar.Brand className="logotext" href="/">
          SKILL SEEKHO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            <Link className="link" to="/contact-us">
              Contact Us
            </Link>
            <Link className="link" to="/courses">
              Courses
            </Link>
            <Link className="link" to="/instructors">
              Instructors
            </Link>
          </Nav>
          <Nav>
            <div className="d-flex  gap-2">
              <Button variant="outline-secondary">Login</Button>
              <Button variant="warning">SignUp</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
