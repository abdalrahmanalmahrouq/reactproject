import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import AllPortfolio from '../components/AllPortfolio/AllPortfolio'
import Footer from '../components/Footer/Footer'

export class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation title="Portfolio"/>
        <PageTop pagetitle='Portfolio'/>
        <AllPortfolio/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Portfolio
