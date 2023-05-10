import React from 'react'
import SeriesHeader from './SeriesHeader'
import Header from './Header'
import SeriesCards from './SeriesCards'
import LatestNews from './LatestNews'
import Footer from './Footer'

function Series() {
  return (
    <div>
     <Header/>
    <SeriesCards/>
    <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Series