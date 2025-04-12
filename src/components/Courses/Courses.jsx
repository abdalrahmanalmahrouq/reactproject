import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class Courses extends Component {
  constructor(){
    super();
      this.state={
       mydata:[]
      }
    }
  
    componentDidMount(){
      RestClient.GetRequest(RestUrl.CourseHome).then(result=>{
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
        <Col lg={6} md={6} sm={12}>
        <Row>

        <Col lg={6} md={6} sm={12} className='p-3'>
        <img style={{width:'100%'}} src={MyList.small_img} alt="Python Basics" />
        </Col>

        <Col>
        <h5 className=' serviceName'>{MyList.small_title}</h5>
        <p className='servicedescription  text-justify'> {MyList.small_description}</p>
        
        <Link className='viewdetails' to={'/coursedetails'}> View Details</Link>
        </Col>

        
        </Row>
        </Col>
      )
    })
    return (
     <Fragment>
      <h1 className='text-center servicetitle'>ALL COURSES</h1>
      <div className='buttom'></div>
      <Container>
      <Row>
        
          {MyListView}
       
      </Row>
      </Container>
     </Fragment>
    )
  }
}

export default Courses
