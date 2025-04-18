import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import coursedetailimg from '../../assets/images/coursedetail.png'
import ReactPlayer from 'react-player'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
export class CourseDetails extends Component {

    constructor(props){
        super();
        this.state={
            MyCourseId:props.id,
            large_title:'',
            large_description:'',
            large_img:'',
            enrolled_students:'',
            duration:'',
            lecutres:'',
            category:'',
            tags:'',
            instructor:'',    
            price:'',
            skill_description:'',
            vstringeo_url:'',
           
            
        }
    }


    componentDidMount(){
        window.scrollTo(0, 0);
        RestClient.GetRequest(RestUrl.SelectCourse+this.state.MyCourseId).then(result=>{
          this.setState({
            // img_two:result[0]['img_two'],
            // project_name:result[0]['project_name'],
            // project_description:result[0]['project_description'],
            // prject_features:result[0]['prject_features'],
            // live_preview:result[0]['live_preview']
            large_title:result[0]['large_title'],
            large_description:result[0]['large_description'],
            large_img:result[0]['large_img'],
            enrolled_students:result[0]['enrolled_students'],
            duration:result[0]['duration'],
            lecutres:result[0]['lecutres'],
            category:result[0]['category'],
            tags:result[0]['tags'],
            instructor:result[0]['instructor'],
            price:result[0]['price'],
            skill_description:result[0]['skill_description'],
            vstringeo_url:result[0]['vstringeo_url'],
            

          })
        })
      }




  render() {
    return (
     <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                <div>
                    <div>
                    <h1 className='coursedetailstext'> {this.state.large_title} </h1>  
                    </div>
                     <img className='coursedetailsimg' src={this.state.large_img} alt="" />
                     <br />
                     <br />
                     <p className='coursedetailsdescription'> 
                     {this.state.large_description}
                     </p>

                </div>
                </Col>


                <Col lg={4} md={6} sm={12}>

                <div className="widget widget_feature mt-5" >
                            <h4 className="widget-title">Course Features</h4>                                 
                            <ul >
                                <li><i className="fa fa-user"></i><span>Enrolled :</span> {this.state.enrolled_students}</li>
                                <li><i className="fa fa-clock-o"></i><span>Duration :</span> {this.state.duration}</li>
                                <li><i className="fa fa-clipboard"></i><span>Lectures :</span> {this.state.lecutres}</li>
                                <li><i className="fa fa-clone"></i><span>Categories:</span> {this.state.category}</li>
                                <li><i className="fa fa-tags"></i><span>Tags:</span> {this.state.tags}</li>
                                <li><i className="fa fa-clipboard"></i><span>Instructor:</span> {this.state.instructor}</li>
                            </ul>
                            <div className="price-wrap text-center">
                                <h5>Price:<span>$54.00</span></h5>
                                <Button variant='warning' className='btn btn-warning'>Enroll Now</Button>
                            </div>
                        </div>
                </Col>

            </Row>

            <Container >
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <div className="widget_feature">
                        <h1 className='coursedetailstext'> Skill You Need</h1>
                        <hr />
                        <ul>
                            {this.state.skill_description}
                        </ul>
                    </div>
                    </Col>


                    <Col lg={6} md={6} sm={12}>
                    
                    <Modal.Body><ReactPlayer url={this.state.vstringeo_url} /></Modal.Body>
                    </Col>
                </Row>
            </Container>
        </Container>
     </Fragment>
    )
  }
}

export default CourseDetails
