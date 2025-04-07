import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

class topbanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner  p-0'>
                <div className='topBannerLayout'>
                    <Container className='topBannerText'>
                        <Row >
                            <Col className='text-center'>
                           <h1 className='topbannertitle'> MAHROUQ SERVICES </h1>
                           <h4 className='topbannersubtitle'>This Is My Services Website</h4>
                           <Button variant="primary">Learn More</Button>
                         
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
        </Container>
      </Fragment>
    )
  }
}

export default topbanner
