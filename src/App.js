import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './components/Detail'
import Home from './routes/Home'
import About from './routes/About'

import './App.css'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie-details' element={<Detail />} />
      </Routes>    
    </HashRouter>
  );
}

export default App;
