import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HookCounterOne from './components/HookCounterOne';
import Mainbar from './components/Mainbar';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainbar />
    </div>
  );
}

export default App;
