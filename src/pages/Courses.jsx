import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'

export class Courses extends Component {
  render() {
    return (
    <Fragment>
        <Topnavigation title="Courses"/>
        <PageTop pagetitle='Courses'/>
        <AllCourses/>
        <Footer/>
    </Fragment>
    )
  }
}

export default Courses
