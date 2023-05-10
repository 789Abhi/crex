import React from 'react'
import SeriesInfoHead from './SeriesInfoHead'
import Header from './Header'
import Footer from './Footer'
import FeaturedMatchesNav from './FeaturedMatchesNav'

function SeriesInfo() {
  return (
    <div>
        <Header/>
       <SeriesInfoHead/>
       <FeaturedMatchesNav/>
    <Footer/>
    </div>
  )
}

export default SeriesInfo