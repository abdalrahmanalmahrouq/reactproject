import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom';
export class ProjectDetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      ProjectPassedID: props.params.projectID
    };
  }

  render() {
    return (
      <Fragment>
        <Topnavigation title='Project Details'/>
        <PageTop pagetitle="PROJECT DETAILS"/>
        <ProjectDetails id={this.state.ProjectPassedID}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ProjectDetailPage
