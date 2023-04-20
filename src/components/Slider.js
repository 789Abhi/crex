import React from "react";
import "./Slider.css";
import Slidercard from './SliderCard';
function Slider() {
  return (
    <div className="slider">
      <h3>Matches for You</h3>
      {/* live match cards */}
      <div className="Main__slider">
        <Slidercard/>
        <Slidercard/>
        <Slidercard/>
        <Slidercard/>
        <Slidercard/>
        <Slidercard/>
        <Slidercard/>
      </div>
    </div>
  );
}

export default Slider;
