import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
