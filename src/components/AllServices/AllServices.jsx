import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Form,Button } from 'react-bootstrap'
import It from '../../assets/images/it.png'
import Cooking from '../../assets/images/cooking.png'
import Real from '../../assets/images/realstate.png'

 class AllServices extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
    return (
        <Fragment>
        <Container className='text-center mt-5'>
       
            <Row className='text-center' >
                <Col lg={4} md={6} sm={12}  >
                <div className=' serviceCard '>
                <img src={It} alt="" className='serviceimages'/>
                <h2 className='serviceName' >IT Services</h2>
                <p className='servicedescription '>We provide cutting-edge IT solutions, including software development, cloud computing, and cybersecurity, tailored to meet your business needs.</p>
                </div>
                </Col>

                <Col lg={4} md={6} sm={12} >
                <div className=' serviceCard '>
                <img src={Cooking} alt="" className='serviceimages' />
                <h2 className='serviceName' >Cooking Services</h2>
                <p className='servicedescription '>Our cooking services offer personalized meal preparation, catering for events, and culinary workshops to bring delicious experiences to your table.</p>
                </div>
                </Col>

                <Col lg={4} md={6} sm={12} >
                <div className=' serviceCard '> 
                <img src={Real} alt=""  className='serviceimages'/>
                <h2 className='serviceName' >RealState Services</h2>
                <p className='servicedescription '>We specialize in real estate services, including property buying, selling, and rental management, ensuring seamless transactions and expert guidance.</p>
                </div>
                </Col>
            </Row>
            <Row className='text-center' >
                <Col lg={4} md={6} sm={12}  >
                <div className=' serviceCard '>
                <img src={It} alt="" className='serviceimages'/>
                <h2 className='serviceName' >IT Services</h2>
                <p className='servicedescription '>We provide cutting-edge IT solutions, including software development, cloud computing, and cybersecurity, tailored to meet your business needs.</p>
                </div>
                </Col>

                <Col lg={4} md={6} sm={12} >
                <div className=' serviceCard '>
                <img src={Cooking} alt="" className='serviceimages' />
                <h2 className='serviceName' >Cooking Services</h2>
                <p className='servicedescription '>Our cooking services offer personalized meal preparation, catering for events, and culinary workshops to bring delicious experiences to your table.</p>
                </div>
                </Col>

                <Col lg={4} md={6} sm={12} >
                <div className=' serviceCard '> 
                <img src={Real} alt=""  className='serviceimages'/>
                <h2 className='serviceName' >RealState Services</h2>
                <p className='servicedescription '>We specialize in real estate services, including property buying, selling, and rental management, ensuring seamless transactions and expert guidance.</p>
                </div>
                </Col>
            </Row>
          
        </Container>

      </Fragment>
    )
  }
}

export default AllServices
