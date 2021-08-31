
import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/searchs/Search';
function App() {
  
  return (
    <div>
      <Navbar title='Weather Application'/>
      <Search title='Search'/>
    </div>
  );
}

export default App;
