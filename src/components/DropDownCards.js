import React from 'react';
import './DropDownCard.css';
import SeriesCards from './SeriesCards';

function DropDownCards() {
  return (
    <div className='dropdown__cards'>
      <div className='series__list'>
       <SeriesCards/>
      </div>  
    </div>
  ); 
}

export default DropDownCards;
