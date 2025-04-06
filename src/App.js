import React from 'react';
import TopBanner from './components/topbanner/topbanner';
import Services from './components/Services/Services';
import Topnavigation from './components/Topnavigation/Topnavigation';
function App() {
  return (
    <div >
      <Topnavigation/>
      <TopBanner />
      <Services/>
    </div>
  );
}

export default App;
