import React from 'react';

import Topbar from './components/Topbar';
import Menu from './components/Menu';
import Principal from './components/Principal';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Menu></Menu>
      <Principal></Principal>
    </div>
  );
}

export default App;
