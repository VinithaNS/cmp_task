import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
import { useParams } from "react-router-dom";
const MainBar = () => {
const { name } = useParams();

  return (
    <>
      <Navbar className="title" expand="lg" style={{ textDecoration: "none" }}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-image">
              <img
                className="logo"
                src="https://tse2.mm.bing.net/th?id=OIP.rFa13Da5NsafBcH3S8xfrwAAAA&pid=Api&P=0&h=180"
                alt="logo.name"
              />
            </div>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav
            className="me-auto"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Nav.Link href="/">
              <span
                style={{
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Home
              </span>{" "}
            </Nav.Link>
            <Nav.Link href="/character">
              <span style={{ color: "white", fontWeight: "600" }}>
                Characters
              </span>{" "}
            </Nav.Link>
            
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default MainBar;
