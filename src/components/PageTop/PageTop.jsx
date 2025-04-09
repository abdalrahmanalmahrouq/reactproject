import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutimage from '../../assets/images/aboutus.jpg'
 class PageTop extends Component {
  render() {
    return (
        <Fragment>
            
        <Container fluid={true} className='topAboutBanner  p-0'>
                <div className='topPageLayout'>
                    <Container className='topAboutText'>
                        <Row >
                            <Col className='text-center'>
                           <h1 className='topabouttitle'>{this.props.pagetitle}</h1>
                           
                         
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
        </Container>
      </Fragment>
    )
  }
}

export default PageTop
