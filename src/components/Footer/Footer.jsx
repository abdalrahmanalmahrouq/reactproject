import React, { Component, Fragment } from 'react'
import { Container, Row,Col, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class Footer extends Component {
  constructor(){
    super();
    this.state={
      address:"",
      phone:'',
      email:'',
    }
  }
  componentDidMount(){
    RestClient.GetRequest(RestUrl.FooterData).then(result=>{
      this.setState({
        address:result[0]['address'],
        phone:result[0]['phone'],
        email:result[0]['email'],
     
      })
    })
  }



  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topfooter p-5'>
            <Row className='text-center ' >
                <Col lg={3} md={6} sm={12} className='text-center'>
                <h2 className='footername'>Follow Us</h2>
                <div className='social-container'>
                <a className='facebook social' href="#">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a className='twitter social' href="#">     <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a className='youtube social' href="#">  <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                </div>
                </Col>

                <Col lg={3} md={6} sm={12} style={{ textAlign: 'justify' }} >
                <h2 className='footername text-center'>Address</h2>

                <p className='footerdescription ' >
                    Address: {this.state.address} <br/>
                    Phone: {this.state.phone}<br/>
                    Email:{this.state.email}<br/>
                    Website: www.abood.com<br/>
                </p>
                </Col>

                <Col lg={3} md={6} sm={12} style={{ textAlign: 'justify' }} >
                <h2 className='footername text-center'>Information</h2>
                <div className='footerdescription '  >
                   <Nav.Link><Link  className='footerlink'  to="/about" >About Me</Link></Nav.Link> 
                    <Nav.Link><Link  className='footerlink' to="/portfolio">Company Portfolio</Link></Nav.Link>
                    <Nav.Link><Link className='footerlink'  to="/contact">Contact Us</Link></Nav.Link>
                    </div>
                </Col>
                
                <Col lg={3} md={6} sm={12} style={{ textAlign: 'justify' }}>
                <h2 className='footername text-center'>Policy</h2>
                <div className='footerdescription '  >
                   <Nav.Link><Link  className='footerlink'  to="/policy" >Found Policy</Link></Nav.Link> 
                    <Nav.Link><Link  className='footerlink' to="/terms">Terms And Conditions</Link></Nav.Link>
                    <Nav.Link><Link className='footerlink'  to="/privacy">Privicy</Link></Nav.Link>
                    </div>
                </Col>

            </Row>
        </Container>

      </Fragment>
    )
  }
}

export default Footer
