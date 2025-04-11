import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'
import Footer from '../components/Footer/Footer'

 class Terms extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title="Policy"/>
        <PageTop pagetitle='POLICY'/>
        <RefundDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Terms
