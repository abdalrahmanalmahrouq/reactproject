import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import It from '../../assets/images/it.png'
import Cooking from '../../assets/images/cooking.png'
import Real from '../../assets/images/realstate.png'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class Services extends Component {
  constructor(){
    super();
    this.state={
     mydata:[]
    }
  }


  componentDidMount(){
    RestClient.GetRequest(RestUrl.AllServiceData).then(result=>{
      this.setState({
       mydata:result,
      });
    }).catch(error=>{
      this.setState({
        mydata:[],
      });
  })
    
  }


  render() {
    const MyList=this.state.mydata;
    const MyListView=MyList.map(MyList=>{
      return (
        <Col lg={4} md={6} sm={12}  >
        <div className=' serviceCard '>
        <img src={MyList.service_logo} alt="" className='serviceimages'/>
        <h2 className='serviceName' >  {MyList.service_name} </h2>
        <p className='servicedescription '>{MyList.service_description}</p>
        </div>
        </Col>
      )
    })

    return (
      <Fragment>
        <Container className='text-center'>
            <h1 className='text-center servicetitle'>MY SERVICES</h1>
            <div className='buttom'></div>
            <Row className='text-center' >
               
            {MyListView}
               
            </Row>
        </Container>

      </Fragment>
    )
  }
}

export default Services
