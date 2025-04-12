import React, { Component, Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import parse from 'html-react-parser';
 class RefundDescription extends Component {
  constructor(){
    super();
      this.state={
      'terms':'',
      }
    }
componentDidMount(){
  window.scrollTo(0, 0);
  RestClient.GetRequest(RestUrl.InformationData).then(result=>{
          this.setState({
            terms:result[0].terms,
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
       
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12} >
                {parse(this.state.terms)}
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundDescription
