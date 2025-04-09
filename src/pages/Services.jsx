import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import AllServices from '../components/AllServices/AllServices'
import Footer from '../components/Footer/Footer'
import Contactus from '../components/Contactus/Contactus'

 class Services extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation/>
        <PageTop pagetitle='Services'/>
        <AllServices/>
        <Contactus/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Services
