import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import Loading from '../Loading/Loading';
class topbanner extends Component {

  constructor(){
    super();
    this.state={
      title:'',
      subtitle:'',
      loaderClass:"text-center",
      mainDivClass:"d-none"
    }
  }

  componentDidMount(){
    RestClient.GetRequest(RestUrl.HomePageTitle).then(result=>{
      this.setState({
        title:result[0]['home_page_title'],
        subtitle:result[0]['home_page_description'],
        loaderClass:"d-none",
        mainDivClass:"text-center"
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
                          <Col className={this.state.loaderClass}>
                                <Loading/>
                          </Col>
                            <Col className={this.state.mainDivClass}>
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
