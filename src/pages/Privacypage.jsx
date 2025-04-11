import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'
import Footer from '../components/Footer/Footer'
import Privacy from '../components/Privacy/Privacy'
 class Terms extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title="Privacy"/>
        <PageTop pagetitle='PRIVACY'/>
        <Privacy/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Terms
