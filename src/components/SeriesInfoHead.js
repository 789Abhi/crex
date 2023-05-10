import React from "react";
import "./SeriesInfoHead.css";
function SeriesInfoHead() {
  return (
    <div className="SeriesInfoHead ">
      <div className="series__image">
        <img src="https://ik.imagekit.io/c7syb8qpjp/Series/19W.png" alt="" />
      </div>
      <div className="series__info">
        <h4>Indian Premier League 2023</h4>
        <p>Mar 31 - May 28</p>
        <a href="#">More Seasons </a>
      </div>
         
    </div>
    
  );
}

export default SeriesInfoHead;
