import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

 class Contactus extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12} >

                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            Enter you email to contact us
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Your Massage</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
                </Col>

                <Col lg={6} md={6} sm={12} className='text-center'>

                <p className='contactusdescription' style={{ textAlign: 'justify' }}>
                    Address: 19911 1st Ave NE, <br/>
                    Phone: +1 234 567 890<br/>
                    Email:abood@gmail.com<br/>
                    Website: www.abood.com<br/>
                </p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contactus
