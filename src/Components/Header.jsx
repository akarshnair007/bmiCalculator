import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          {" "}
          <Navbar.Brand style={{ color: "white" }} href="#home">
            <FontAwesomeIcon icon={faDumbbell} beat className="me-2" />
            BMI Calculator
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Nav.Link
                style={{ color: "white" }}
                className="nav-text"
                href="#home"
              >
                Home
              </Nav.Link>
            </Link>
            <Link to={"/bmi"} style={{ textDecoration: "none" }}>
              <Nav.Link
                style={{ color: "white" }}
                className="nav-text"
                href="#mbmi"
              >
                BMI
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
