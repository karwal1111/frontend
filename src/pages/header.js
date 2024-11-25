import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap';

const Header = ({ size, setShow }) => {
  return (
    
    <Navbar style={{ backgroundColor: '#F0E68C' }} expand="lg">
      <Container fluid>
        {/* Logo and Brand */}
        <Navbar.Brand href="#">
          <img
            src="brand.png"
            alt="Krishna Jewellers Logo"
            width="70"
            height="70"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
          Krishna Jewellers
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Nav Links */}
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link onClick={() => setShow(true)}>Home</Nav.Link>
            
            <NavDropdown title="Jewellery" id="navbarScrollingDropdown" data-bs-theme="dark">
              <NavDropdown.Item href="#action3">Gold Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Rings</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bracelets</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bangles</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Diamonds</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Name Lockets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setShow(true)}>
              Back
            </Nav.Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{margin:"5px"}}>Search</Button>
          </Form>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" classNmae="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
          <div className="my-cart" onClick={() => setShow(false)}>
              <Nav.Link>{size}</Nav.Link>
            </div>
          {/* Cart and Shopping Section */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
