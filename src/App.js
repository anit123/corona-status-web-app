import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Details from './components/Details';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Details/>
     <Footer/>
    </div>
  );
}

export default App;
