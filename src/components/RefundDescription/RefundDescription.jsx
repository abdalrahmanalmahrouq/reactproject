import React, { Component, Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import parse from 'html-react-parser';
 class RefundDescription extends Component {
  constructor(){
    super();
      this.state={
      'policy':'',
      }
    }
componentDidMount(){
  window.scrollTo(0, 0);
  RestClient.GetRequest(RestUrl.InformationData).then(result=>{
          this.setState({
            policy:result[0].policy,
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
              {parse(this.state.policy)}
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundDescription
