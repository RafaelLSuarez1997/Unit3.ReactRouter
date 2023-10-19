import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import '../src/index.css'

  function App() {
    return (
      <>
        <div id="container">
          <div id="navbar">
            <>
              <Link to="/">Home</Link>
              <Link to="/red">Red</Link>
              <Link to="/blue">Blue</Link>
            </>
          </div>
          <div id="main-section">
            <Routes>
               <Route path="/red" element={<Red />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
  

export default App
