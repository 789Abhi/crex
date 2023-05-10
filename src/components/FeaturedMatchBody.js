import React from 'react'
import './FeaturedMatchBody.css'
import FeaturedMatchCards from './FeaturedMatchCards'
import KeyStats from './KeyStats'
import PointsTable from './PointsTable'
import TeamSquads from './TeamSquads'
import SeriesDuration from './SeriesDuration'
import PreviousSeasons from './PreviousSeasons'
import TopHeadlines from './TopHeadlines'
function FeaturedMatchBody() {
  return (
    <>
    <div className='featuredmatch__body'>
        <h2>Featured Matches</h2>
        <a href="">All Matches</a>
        
    </div>
    <div className='FeaturedMatch__Cards__stats'>
    <div className='FeaturedMatch__Cards'>
     <FeaturedMatchCards/>
     <FeaturedMatchCards/>
     <FeaturedMatchCards/>
      <PointsTable/>
      <TeamSquads/>
      <SeriesDuration/>
      <PreviousSeasons/>
      </div> 
      <div className='stats'>
        <KeyStats/>
        <TopHeadlines/>
      </div>
    </div>

    </>
    
  )
}

export default FeaturedMatchBody