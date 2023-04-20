import React from 'react'
import { motion } from "framer-motion";
import Header from './components/Header';
import Slider from './components/Slider';
import LatestNews from './components/LatestNews';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <LatestNews/>
   </>
    
  )
}

export default App