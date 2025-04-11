import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 class Courses extends Component {
  render() {
    return (
     <Fragment>
      <h1 className='text-center servicetitle'>ALL COURSES</h1>
      <div className='buttom'></div>
      <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
        <Row>

        <Col lg={6} md={6} sm={12} className='p-3'>
        <img style={{width:'100%'}} src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1744117831~exp=1744121431~hmac=a62fdd9dd6e0ebda624e4cec9a6d352807237fbef14b1cb8af4d03251d08a87b&w=826" alt="Python Basics" />
        </Col>

        <Col>
        <h5 className=' serviceName'>Introduction to Python</h5>
        <p className='servicedescription  text-justify'>Learn the basics of Python programming, including syntax, data types, and control structures, to build foundational coding skills.</p>
        
        <Link className='viewdetails' to={'/coursedetails'}> View Details</Link>
        </Col>

        <Col lg={6} md={6} sm={12} className='p-3'>
        <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1744117844~exp=1744121444~hmac=2b97a85408e45e13fd4edb94132d8bcddac15499e6e6a7f3a7ee0fa67507362a&w=900" alt="Data Analysis" />
        </Col>

        <Col>
        <h5 className=' serviceName'>Python for Data Analysis</h5>
        <p className='servicedescription  text-justify'>Explore Python libraries like Pandas and NumPy to analyze and visualize data effectively.</p>
        <a href="" className='viewdetails'> View Details</a>
        </Col>
        </Row>
        </Col>

        <Col lg={6} md={6} sm={12}>
        <Row>
        <Col lg={6} md={6} sm={12} className='p-3'>
        <img style={{width:'100%'}} src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1744117490~exp=1744121090~hmac=41341bb8239ce57a827ccd27a4d1173a67ce6370d15e8afe2d6325c1e855a325&w=996" alt="Web Development" />
        </Col>

        <Col>
        <h5 className=' serviceName'>Python for Web Development</h5>
        <p className='servicedescription  text-justify'>Learn how to use Python frameworks like Django and Flask to create dynamic web applications.</p>
        <a href="" className='viewdetails'> View Details</a>
        </Col>

        <Col lg={6} md={6} sm={12} className='p-3'>
        <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010128.jpg?t=st=1744117958~exp=1744121558~hmac=c95ed84f10ac59c94e96d31aa476571c6f049df8c4b03c25ea15754c0f7fca9a&w=996" alt="Machine Learning" />
        </Col>

        <Col>
        <h5 className=' serviceName'>Python for Machine Learning</h5>
        <p className='servicedescription  text-justify'>Dive into machine learning with Python using libraries like scikit-learn and TensorFlow.</p>
        <a href="" className='viewdetails'> View Details</a>
        </Col>
        </Row>
        </Col>
      </Row>
      </Container>
     </Fragment>
    )
  }
}

export default Courses
