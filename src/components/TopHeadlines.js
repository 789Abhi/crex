import React from 'react'
import './TopHeadlines.css'
import TopHeadlinesCard from './TopHeadlinesCard'
function TopHeadlines() {
  return (
      <>
      <div className='head'>
          <h4>Top headlines</h4>
          <a href="">All News</a>
      </div>
       <TopHeadlinesCard/>
      </>
    
  )
}

export default TopHeadlines