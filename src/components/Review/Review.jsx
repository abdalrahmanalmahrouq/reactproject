import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class Review extends Component {

  constructor(){
    super();
      this.state={
       mydata:[]
      }
    }
  
    componentDidMount(){
      RestClient.GetRequest(RestUrl.ClienReview).then(result=>{
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
        <div>
            <Row className='text-center '> 
                <Col >
                <img className='imgreview' src={MyList.client_image} alt="" />
                <h3 className='reviewname p-1'>{MyList.client_name}</h3>
                <p className='reviewname'>{MyList.client_description}</p>
                </Col>
                

            </Row>
            </div>
            
      )
    })



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
            {MyListView}
            
            </Slider>
        </Container>
        
        
      </Fragment>
    )
  }
}

export default Review
