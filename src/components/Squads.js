import React, { useState } from "react";
import SquadList from "./SquadList";
import SqadMembers from "./SqadMembers";
import "./Squads.css";

function Squads() {
  const [selectedSquad, setSelectedSquad] = useState(null);

  const handleSquadClick = (squad) => {
    setSelectedSquad(squad);
  };

  return (
    <div>
      <h2>IPL 2023 Squads</h2>
      <div className="squads">
        <div className="squadslist">
          <SquadList onSquadClick={handleSquadClick} />
        </div>
        <div className="squadmembers">
          <SqadMembers selectedSquad={selectedSquad} />
        </div>
      </div>
    </div>
  );
}

export default Squads;
