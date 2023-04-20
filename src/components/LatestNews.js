import React from 'react'
import './LatestNews.css'
import NewsCard from './NewsCard'
function LatestNews() {
  return (
    <div className='latest__news'>
          <h4>LATEST HOT CRIC NEWS</h4>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>

    </div>
  )
}

export default LatestNews