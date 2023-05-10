import React from 'react'
import Header from './Header'
import Slider from './Slider'
import LatestNews from './LatestNews'
import Footer from './Footer'

function Home() {
  return (
    <div className='home'>
     <Header/>
      <Slider/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Home