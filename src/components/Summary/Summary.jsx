import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';
import CountUp from 'react-countup';

 class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner p-0'>
          <div className='summaryLayout'>
            <Container className='text-center'>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className='countsection'>
                    <Col>
                    <FontAwesomeIcon className='primeicon' icon={faCheckCircle} />
                 
                    
                            <h2 className='summarytitle'><CountUp start={0} end={1000}>
                                    {({ countUpRef, start }) => (
                                                
                                        <span ref={countUpRef} />            
                                        
                                    )}
                                    </CountUp>+</h2>
                      <h3 className='summarysubtitle'>Projects Completed</h3>
                       
                    </Col>
                    <Col>
                    <FontAwesomeIcon className='primeicon' icon={faUserCheck} />
                      <h2 className='summarytitle'><CountUp start={0} end={500}>
                                    {({ countUpRef, start }) => (
                                                
                                        <span ref={countUpRef} />            
                                        
                                    )}
                                    </CountUp>+</h2>
                      <h3 className='summarysubtitle'>Happy Clients</h3>
                      
                    </Col>
                    <Col>
                    <FontAwesomeIcon className='primeicon' icon={faLifeRing} />
                      <h2 className='summarytitle'>24/7</h2>
                      <h3 className='summarysubtitle'>Support</h3>
                      
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <Card style={{ width: '18rem' }} className='summarycard'>
                        
                      
                        <Card.Body>
                            <Card.Title className='cardtitle'>Our IT Services</Card.Title>
                            <Card.Text >
                                    <p className='cardsubtitle' style={{ textAlign: 'justify' }}>
                                    <FontAwesomeIcon className='secondicon' icon={faCheckSquare} /> IT solutions</p>
                                    <p className='cardsubtitle' style={{ textAlign: 'justify' }}>
                                    <FontAwesomeIcon className='secondicon' icon={faCheckSquare} /> Web development</p>
                                    <p className='cardsubtitle' style={{ textAlign: 'justify' }}>
                                    <FontAwesomeIcon className='secondicon' icon={faCheckSquare} /> App development</p>
                                    <p className='cardsubtitle' style={{ textAlign: 'justify' }}>
                                    <FontAwesomeIcon className='secondicon' icon={faCheckSquare} /> Cloud services</p>
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                            
                
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default Summary
