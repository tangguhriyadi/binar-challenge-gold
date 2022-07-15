import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import "../App.css"

function NavbarComp() {
  return (
   
        <Navbar key={'md'} expand={'md'} className="navi">
          <Container fluid>
            <Navbar.Brand href="#" className="logo"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              style={{width:"50%"}}
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  navli">
                  <Nav.Link href="#ourServices">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      

  );
}

export default NavbarComp;