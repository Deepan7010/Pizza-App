import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

const AppBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><h2 style={{color:"tomato"}}><span><i class="bi bi-yelp"></i>
          </span> Pizza Shop</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
              <Nav.Link href="#menu" className="fw-bold">Menu</Nav.Link>
              <Nav.Link href="#musttry" className="fw-bold">Must Try</Nav.Link>
              <Nav.Link href="#contact" className="fw-bold">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
