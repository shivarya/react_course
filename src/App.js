import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
// move all except layout and home 
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>      
    </div>
  );
}

export default App;
