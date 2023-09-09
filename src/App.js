import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Series from './components/Series';
import SeriesInfo from './components/SeriesInfo';
import FeaturedMatchBody from './components/FeaturedMatchBody';
import Fixtures from './components/Fixtures';

function App() {
  return (
   <div className='app'>
    <Router>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route  path="/series"  element={<Series/>}/>
      <Route  path="/ipl-Series-info"  element={<SeriesInfo/>}/>
      <Route  path="/featuredmatch-body"  element={<FeaturedMatchBody/>}/>
      <Route  path="/fixtures"  element={<Fixtures/>}/>
    </Routes>
    </Router>
    
   </div>  
    
  )
}

export default App