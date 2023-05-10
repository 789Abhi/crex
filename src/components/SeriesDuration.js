import React from "react";
import "./SeriesDuration.css";
function SeriesDuration() {
  return (
    <div className="Series__Duration">
      <h3>Series Info</h3>
    <div className="series__infos">

    <div className="series__">
        <span>Series</span>
        <h2>Indian Premier League 2023</h2>
      </div>

      <div
        className="Duration"
      >
        <span>Duration</span>
        <h2>Mar 31 - May 28, 2023</h2>
      </div>

      <div className="Format">
        <span>Format</span>
        <h2>74 T20s</h2>
      </div>
      
    </div>
      
    </div>
  );
}

export default SeriesDuration;
