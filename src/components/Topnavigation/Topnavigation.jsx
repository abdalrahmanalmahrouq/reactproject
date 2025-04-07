import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown ,Container} from 'react-bootstrap'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import logodark from '../../assets/images/logodark (2).png'
import logowhite from '../../assets/images/logowhite.png'
 class Topnavigation extends Component {
  
    constructor() {
    super();
    this.state = {
      navBarTitle: "Topnavtitle",
      navBarLogo: [logowhite],// because it is object
      navBarBack:"navbarback",
      navItem:'navitem',
    };
  }


  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navBarTitle: "Topnavtitlescroll" ,navBarLogo: [logodark],navBarBack:"navbarbackscroll" ,navItem:'navitemscroll'});
    } else {
      this.setState({ navBarTitle: "Topnavtitle" ,navBarLogo: [logowhite],navBarBack:'navbarback',navItem:'navitem' });
    }
  }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        }



  render() {


    return (
      <Fragment>
        <Navbar expand="lg" className={this.state.navBarBack} fixed="top">
          <Container fluid>
            <Navbar.Brand href="#" className={this.state.navBarTitle} >
             {/* <img src={this.state.navBarLogo} alt="" style={{height: 51, width: 181}}/> */}
             <h4>MAHROUQ SERVICES</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              </Nav>
              <Nav>
                <Nav.Link href="#" className={this.state.navItem}>Login</Nav.Link>
                <Nav.Link href="#" className={this.state.navItem}>Register</Nav.Link>
                <Nav.Link href="#" className={this.state.navItem}>Home</Nav.Link>
                <Nav.Link href="#" className={this.state.navItem}>Services</Nav.Link>
                <Nav.Link href="#" className={this.state.navItem}>Contact</Nav.Link>
                <Nav.Link href="#" className={this.state.navItem}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default Topnavigation
