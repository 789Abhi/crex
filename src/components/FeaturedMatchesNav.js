import React, { useState } from "react";
import "./FeaturedMatchesNav.css";
import FeaturedMatchBody from "./FeaturedMatchBody";
import Matches from "./Matches";
import PointsTable from "./PointsTable";
import TopHeadlines from "./TopHeadlines";
import TopHeadlinesCard from "./TopHeadlinesCard";
import SeriesDuration from "./SeriesDuration";
import FeaturedMatchCards from "./FeaturedMatchCards";
import Squads from "./Squads";

function FeaturedMatches() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  const ContentsOfNav = () => {
    switch (activeIndex) {
      case 0:
        return <FeaturedMatchBody />;
      case 1:
        return <FeaturedMatchCards />;
      case 2:
        return <Squads />;
      case 3:
        return <PointsTable />;
      case 4:
        return <TopHeadlinesCard/>;
      case 5:
        return <SeriesDuration />;
      default:
        return null;
    }
  };

  return (
    <div className="Featured__Matches">
      <nav>
        <ul className="lists">
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleListItemClick(0)}
          >
            Overview
          </li>
          <li
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleListItemClick(1)}
          >
            Matches
          </li>
          <li
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleListItemClick(2)}
          >
            Squads
          </li>
          <li
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => handleListItemClick(3)}
          >
            Points Table
          </li>
          <li
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => handleListItemClick(4)}
          >
            News
          </li>
          <li
            className={activeIndex === 5 ? "active" : ""}
            onClick={() => handleListItemClick(5)}
          >
            Info
          </li>
        </ul>
      </nav>
      {ContentsOfNav()}
    </div>
  );
}

export default FeaturedMatches;
