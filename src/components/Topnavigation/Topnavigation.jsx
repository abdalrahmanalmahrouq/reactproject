import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown ,Container} from 'react-bootstrap'

 class Topnavigation extends Component {
  render() {
    return (
      <Fragment>
        
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{backgroundColor: '#f8f9fa'}}>
      <Container fluid>
        <Navbar.Brand href="#">MAHROUQ SERVICES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll >
           
            
          </Nav>
          <Nav>
            <Nav.Link href="#" className="me-2">Login</Nav.Link>
            <Nav.Link href="#" className="me-2">Register</Nav.Link>
            <Nav.Link href="#" className="me-2">Home</Nav.Link>
            <Nav.Link href="#" className="me-2">Services</Nav.Link>      
            <Nav.Link href="#" className="me-2">Contact</Nav.Link>
            <Nav.Link href="#" className="me-2">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Fragment>
    )
  }
}

export default Topnavigation
