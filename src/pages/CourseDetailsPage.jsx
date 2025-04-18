import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom';
export class CourseDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state={
      CoursePassedID:props.params.courseID
    }
  }


  render() {
    return (
   <Fragment>
      <Topnavigation title='course details'/>
      <PageTop pagetitle="COURSE DETAILS" />
      <CourseDetails id={this.state.CoursePassedID}/>
      <Footer/>

    </Fragment>
    )
  }
}

export default CourseDetailsPage
