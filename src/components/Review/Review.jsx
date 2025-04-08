import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
 class Review extends Component {
  render() {

    var settings = {
        autoPlaySpeed: 1000,
        autoPlay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        vertical: true,
    verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
    return (
      <Fragment>
        
        <Container fluid={true} className='reviewcard text-center ' >
        
        <h1 className='text-center reviewtitle p-2'>Reviews</h1>
        <div className='reviewbuttom'></div>
        <Slider {...settings}> 
            <div>
            <Row className='text-center '> 
                <Col >
                <img className='imgreview' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1744126106~exp=1744129706~hmac=1712a2d331d5904a181158d3aa2f18ec7409bebd4c4b604a16d8d6198fcdd88f&w=996" alt="" />
                <h3 className='reviewname p-1'>Abood</h3>
                <p className='reviewname'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </Col>
                

            </Row>
            </div>
            <div>
            <Row className='text-center '> 
                <Col >
                <img className='imgreview' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1744127565~exp=1744131165~hmac=b1a19e9e6ce9102738da9bcc9efbc371ebae04d42f323a15062efccdd32d56f2&w=740" alt="" />
                <h3 className='reviewname p-1'>علي</h3>
                <p className='reviewname'>الموقع بجنن</p>
                </Col>
                

            </Row>
            </div>
            </Slider>
        </Container>
        
        
      </Fragment>
    )
  }
}

export default Review
