import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'

export class ProjectDetailPage extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title='Project Details'/>
        <PageTop pagetitle="PROJECT DETAILS"/>
        <ProjectDetails/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ProjectDetailPage
