import React from 'react'
import './SeriesCard.css'
import { Link } from 'react-router-dom';
function SeriesCards() {
  return (
   
    <div className='series__cards'>
      <Link to="/ipl-Series-info">
      <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/19W.png" alt="" />
       <h4>IPL 2023</h4>  
      </div>
      </Link>

    <a href="/ipl-Series-info">
     <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/18Y.png" alt="" />
       <h4>PAK VS NZ 2023</h4> 
      </div>
      </a>
      <a href="/ipl-Series-info">
     <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/1BR.png" alt="" />
       <h4>SL VS IRE 2023</h4> 
      </div>
      </a>
      <a href="/ipl-Series-info">
     <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/1BY.png" alt="" />
       <h4>VPL T10 2023</h4> 
      </div>
      </a>
      <a href="/ipl-Series-info">
     <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/1DO.png" alt="" />
       <h4>ACC PREMIER CUP 2023</h4> 
      </div>
      </a>
      <a href="/ipl-Series-info">
     <div className='cards'>
      <img src="https://ik.imagekit.io/c7syb8qpjp/Series/1DU.png" alt="" />
       <h4>THAIW VS ZIMW 2023</h4> 
      </div>
</a>
    </div>
    
  )
}

export default SeriesCards