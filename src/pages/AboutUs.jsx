import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

 class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title="About Us"/>
        <PageTop pagetitle='About Us'/>
        <About/>
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AboutUs
