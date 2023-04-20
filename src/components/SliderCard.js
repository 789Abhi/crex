import React from 'react'
import './Slidercard.css'
function SliderCard() {
  return (
    <div>
          <div className="slider__card">
          <div className="slider__head">
            <h5>|</h5>
            <img src="https://crex.live/assets/icon/rightArrow.svg" alt="" />
          </div>
          <div className="slider__body">
            <span>26th Match</span>
            <div className="live__score">
              <div className="team1__score">
                <img
                  src="https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/M.png"
                  alt=""
                />
                <span>RR</span>
                <span>104/3*</span>
                <span>15.0</span>
              </div>
              <div className="team2__score">
                <img
                  src="https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png"
                  alt=""
                />
                <span>LSG</span>
                <span>104/3*</span>
                <span>15.0</span>
              </div>
            </div>
          </div>
          <div className="slider__tail">
            <span>RR Needs 32 to Win from 15 balls</span>
          </div>
        </div>
    </div>
  )
}

export default SliderCard