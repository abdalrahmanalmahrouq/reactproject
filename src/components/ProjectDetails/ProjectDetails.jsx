import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import prjectimg from '../../assets/images/projectdetail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import RestUrl from '../../RestApi/RestUrl'
import RestClient from '../../RestApi/RestClient'
 class ProjectDetails extends Component {
    constructor(props){
        super();
        this.state={
            MyProjectId:props.id,
            img_two:'',
            project_name:'',
            project_description:'',
            prject_features:'',
            live_preview:''

        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        RestClient.GetRequest(RestUrl.SelectProject+this.state.MyProjectId).then(result=>{
          this.setState({
            img_two:result[0]['img_two'],
            project_name:result[0]['project_name'],
            project_description:result[0]['project_description'],
            prject_features:result[0]['prject_features'],
            live_preview:result[0]['live_preview']
         
          })
        })
      }
    

   
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <div  className='about-thumb-wrap after-shape'>
                 <img src={this.state.img_two} alt="" />
                 </div>
                </Col>


                <Col lg={6} md={6} sm={12} className='mt-5'>
                   <div className='project-details'>
                        <h1 className='projectdetailstext'> {this.state.project_name} </h1>
                        <p className='detailsname'> {this.state.project_description} </p>
                        <p className='cardsubtitle '>
                            <FontAwesomeIcon
                            className='iconBullent' icon={faCheckSquare} /> {this.state.prject_features}
                        </p>
                       
                        <Button variant="info" className='buttonproject' href= {this.state.live_preview}>Read More</Button>
                   </div>   
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails
