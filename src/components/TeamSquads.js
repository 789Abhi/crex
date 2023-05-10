import React from "react";
import "./TeamSquads.css";
import TeamLists from "./TeamLists";
function TeamSquads() {
  return (
    <div className="team__squads">
      <h3>Team Squads</h3>
      <div className="team__lists">
          <TeamLists />   
      </div>
    </div>
  );
}

export default TeamSquads;
