import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'

export class CourseDetailsPage extends Component {
  render() {
    return (
   <Fragment>
      <Topnavigation title='course details'/>
      <PageTop pagetitle="COURSE DETAILS" />
      <CourseDetails/>
      <Footer/>

    </Fragment>
    )
  }
}

export default CourseDetailsPage
