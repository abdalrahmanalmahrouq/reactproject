import React from 'react';
import TopBanner from './components/topbanner/topbanner';
import Services from './components/Services/Services';
import Topnavigation from './components/Topnavigation/Topnavigation';
import Analysis from './components/Analysis/Analysis';
function App() {
  return (
    <div >
      <Topnavigation/>
      <TopBanner />
      <Services/>
      <Analysis/>
    </div>
  );
}

export default App;
