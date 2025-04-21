import React, { Component, Fragment } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
 class RefundDescription extends Component {
  constructor(){
    super();
      this.state={
      'policy':'',
      loading:true,
      error:false,
      }
    }
componentDidMount(){
  window.scrollTo(0, 0);
  RestClient.GetRequest(RestUrl.InformationData).then(result=>{

    if (result==null){
      this.setState({error:true,loading:false})
    }
    else{
          this.setState({
            policy:result[0].policy,
            loading:false
          });
        }
      }).catch(error=>{
        this.setState({
        error:true
        });
    })
}    
   
  render() {

    if (this.state.loading==true){
      return <Loading/>
    }
    else if(this.state.loading==false) {
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
  else if(this.state.error==true){
    return <WentWrong/>
  }
}
}

export default RefundDescription
