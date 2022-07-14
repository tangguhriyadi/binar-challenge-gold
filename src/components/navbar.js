import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

export default class NavbarComp extends Component {
  render() {
    return (
        <Navbar className="navi" >
        <Container>
          <Navbar.Brand href="#home" style={{marginLeft:"11px"}} >Navbar</Navbar.Brand>
          <Nav  style={{marginRight:"124px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
