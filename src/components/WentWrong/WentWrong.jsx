import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../assets/images/error.svg'
 class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                <img className='Loading-img' src={error} alt="" />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default WentWrong
