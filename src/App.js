import React from 'react';
import TopBanner from './components/topbanner/topbanner';
import Services from './components/Services/Services';
import Topnavigation from './components/Topnavigation/Topnavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProjects from './components/RecentProjects/RecentProjects';
function App() {
  return (
    <div >
      <Topnavigation/>
      <TopBanner />
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProjects/>
    </div>
  );
}

export default App;
