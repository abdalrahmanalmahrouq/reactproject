import React, { Component, Fragment } from 'react'
import Topnavigation from '../components/Topnavigation/Topnavigation'
import PageTop from '../components/PageTop/PageTop'
import Contactus from '../components/Contactus/Contactus'
import Footer from '../components/Footer/Footer'

 class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Topnavigation/>
        <PageTop pagetitle='Contact Us'/>
        <Contactus/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ContactUs
