import React,{useState} from "react";
import "./FixturesHeader.css";
import FixturesDays from "./FixturesDays";
import FixturesSeries from "./FixturesSeries";
import FixturesTeams from "./FixturesTeams";
function FixturesHeader() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };
  const ContentsOfNav = () => {
    switch (activeIndex) {
      case 0:
        return <FixturesDays />;
      case 1:
        return <FixturesSeries />;
      case 2:
        return <FixturesTeams />;
      default:
        return null;
    }
  };
  return (
    <div className="fixtures__header">
      <nav>
        <ul className="lists">
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleListItemClick(0)}
          >
            Days
          </li>
          <li
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleListItemClick(1)}
          >
            Series
          </li>
          <li
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleListItemClick(2)}
          >
            Teams
          </li>
        </ul>
      </nav>
      {ContentsOfNav()}
    </div>
  );
}

export default FixturesHeader;
