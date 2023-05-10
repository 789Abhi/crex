import React from "react";
import "./FeaturedMatchCards.css";
function FeaturedMatchCards() {
  return (
    <div className="Featured__Match__Cards">
      <div className="team1__info">
        <img
          src="https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png"
          alt=""
        />
        <h4>LSG</h4>
      </div>
      <div className="match__date__time">
        <span>30th T20 On</span>
        <h3>Apr 22 , 3:30 PM</h3>
      </div>
      <div className="team2__info">
        <h4>GT</h4>
        <img
          src="https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KB.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default FeaturedMatchCards;
