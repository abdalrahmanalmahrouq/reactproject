import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Form,Button } from 'react-bootstrap'
import It from '../../assets/images/it.png'
import Cooking from '../../assets/images/cooking.png'
import Real from '../../assets/images/realstate.png'
import Services from '../Services/Services'
import Loading from '../Loading/Loading';
 class AllServices extends Component {

  constructor(){
    super();
      this.state={
       loading:true
      }
    }
  


    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
           loading:false
         });
    }

  render() {


    if (this.state.loading==true){
      return <Loading/>
    }

    else{
    return (
        <Fragment>
        <Container className='text-center mt-5'>
       
            <Row className='text-center' >
               <Services/>
            </Row>
          
        </Container>

      </Fragment>
    )
  }
}
 }

export default AllServices
