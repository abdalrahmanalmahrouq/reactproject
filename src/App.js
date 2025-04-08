import React from 'react';
import TopBanner from './components/topbanner/topbanner';
import Services from './components/Services/Services';
import Topnavigation from './components/Topnavigation/Topnavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProjects from './components/RecentProjects/RecentProjects';
import Courses from './components/Courses/Courses';
import Videos from './components/Videos/Videos';
import Review from './components/Review/Review';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div >
      <Topnavigation/>
      <TopBanner />
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
      <Courses/>
      <Videos/>
      <Review/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
