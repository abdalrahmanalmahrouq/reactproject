import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import parse from 'html-react-parser';
 class AboutDescription extends Component {

    constructor(){
        super();
          this.state={
          'about':'',
          }
        }
   componentDidMount(){
      RestClient.GetRequest(RestUrl.InformationData).then(result=>{
              this.setState({
                about:result[0].about,
              });
          }).catch(error=>{
            this.setState({
              return :[],
            });
        })
   }    
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>

            <Row>

                <Col lg={12} md={12} sm={12} >
                   {parse(this.state.about)}
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutDescription
