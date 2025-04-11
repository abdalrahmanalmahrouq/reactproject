import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'
import Footer from '../components/Footer/Footer'

 class Terms extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title="Terms"/>
        <PageTop pagetitle='TERMS AND CONDITIONS'/>
        <TermsDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Terms
