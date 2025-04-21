import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import load from '../../assets/images/loader.svg'
 class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                <img src={load} alt="" className='Loading-img' />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Loading
