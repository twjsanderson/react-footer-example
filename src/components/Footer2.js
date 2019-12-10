import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';


// 

const Footer1 = () => {
  return (
    <Fragment>
    <Nav1 />
    <Container fluid style={{ height: 1000, backgroundColor: "blue" }}>
        <Container style={{ height:1000, backgroundColor: "red" }}></Container>
    </Container>
    <Navbar className="bg-dark">
        <Nav className="mr-auto flex-column">
            <Nav.Link to="/privacy" className="nav-link">
                Privacy
            </Nav.Link>
            <Nav.Link to="/terms" className="nav-link">
                Terms &amp; Conditions
            </Nav.Link>
            <Nav.Link to="/policy" className="nav-link">
                Policy
            </Nav.Link>
        </Nav>
        <Nav className="flex-column">
            <p>John</p>
            <p>place 123</p>
            <p>m6m 7n8</p>
            <p>Toronto</p>
        </Nav>
    </Navbar>
    </Fragment>
  );
}

export default Footer1;
