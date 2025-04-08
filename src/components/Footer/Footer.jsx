import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

 class Footer extends Component {
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

                <Col lg={3} md={6} sm={12}  >
                <h2 className='footername '>Address</h2>

                <p className='footerdescription text-center' style={{ textAlign: 'justify' }}>
                    Address: 19911 1st Ave NE, <br/>
                    Phone: +1 234 567 890<br/>
                    Email:abood@gmail.com<br/>
                    Website: www.abood.com<br/>
                </p>
                </Col>

                <Col lg={3} md={6} sm={12}>
                <h2 className='footername'>Information</h2>
                </Col>
                
                <Col lg={3} md={6} sm={12}>
                <h2 className='footername'>Policy</h2>
                </Col>

            </Row>
        </Container>

      </Fragment>
    )
  }
}

export default Footer
