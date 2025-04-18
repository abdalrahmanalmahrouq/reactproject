import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Form,Button } from 'react-bootstrap'
import It from '../../assets/images/it.png'
import Cooking from '../../assets/images/cooking.png'
import Real from '../../assets/images/realstate.png'
import Services from '../Services/Services'

 class AllServices extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
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

export default AllServices
