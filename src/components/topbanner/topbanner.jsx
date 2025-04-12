import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'

class topbanner extends Component {

  constructor(){
    super();
    this.state={
      'title':'',
      'subtitle':'',
    }
  }

  componentDidMount(){
    RestClient.GetRequest(RestUrl.HomePageTitle).then(result=>{
      this.setState({
        title:result[0]['home_page_title'],
        subtitle:result[0]['home_page_description'],
      });
    }).catch(error=>{
      this.setState({
        title:'Error',
        subtitle:'Error',
      });
  })
    
  }



  
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedBanner  p-0'>
                <div className='topBannerLayout'>
                    <Container className='topBannerText'>
                        <Row >
                            <Col className='text-center'>
                           <h1 className='topbannertitle'>{this.state.title} </h1>
                           <h4 className='topbannersubtitle'>{this.state.subtitle}</h4>
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
