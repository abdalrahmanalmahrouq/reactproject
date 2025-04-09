import React, { Component, Fragment } from 'react'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Courses from '../pages/Courses'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'
import { Routes ,Route} from 'react-router-dom'

 class AppRouter extends Component {
  render() {
    return (
        <Fragment>
        
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                
            </Routes>
        </Fragment>
    )
  }
}

export default AppRouter
