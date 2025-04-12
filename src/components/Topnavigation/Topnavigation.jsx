import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown ,Container} from 'react-bootstrap'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import logodark from '../../assets/images/logodark (2).png'
import logowhite from '../../assets/images/logowhite.png'
import { NavLink } from 'react-router-dom'

 class Topnavigation extends Component {
  


    constructor(props) {
    super();
    this.state = {
      navBarTitle: "Topnavtitle",
      navBarLogo: [logowhite],// because it is object
      navBarBack:"navbarback",
      navItem:'navitem',
      pageheader:props.title,
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
        <title>{this.state.pageheader}</title>
        <Navbar expand="lg" className={this.state.navBarBack} fixed="top">
          <Container fluid>
            <Navbar.Brand to="/" className={this.state.navBarTitle} >
             {/* <img src={this.state.navBarLogo} alt="" style={{height: 51, width: 181}}/> */}
             <NavLink  to="/" className={this.state.navItem}>
              <h4>MAHROUQ SERVICES</h4>
             </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              </Nav>
              <Nav>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/" className={this.state.navItem}>HOME</NavLink></Nav.Link>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/about" className={this.state.navItem}>ABOUT</NavLink></Nav.Link>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/services" className={this.state.navItem}>SERVICES</NavLink></Nav.Link>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/courses" className={this.state.navItem}>COURSES</NavLink></Nav.Link>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/portfolio" className={this.state.navItem}>PORTFOLIO</NavLink></Nav.Link>
                <Nav.Link><NavLink style={({ isActive }) => ({color: isActive ? 'yellow' : 'white',textDecoration: isActive ? 'none' : 'none'})} to="/contact" className={this.state.navItem}>CONTACT US</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default Topnavigation
