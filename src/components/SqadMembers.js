import React from "react";
import './SqadMembers.css'
function SqadMembers({ selectedSquad }) {
  return (
    <div>
      {selectedSquad ? (
        <>
         <div
          key={selectedSquad.team_name}
          className="squad__list"
        >
          <img src={selectedSquad.teamLogo} alt="" />
          <div className="right__content">
            <h6>{selectedSquad.team_name}</h6>
            <span>{selectedSquad.team_strength}Players</span>
          </div>
        </div>
        
   {/*   Squad members list of individual team */}
        <div className="batsman">
          <h6>Bat({selectedSquad.batsman})</h6>
          
        </div>
        <div className="bowlers">
        <h6>Bowl({selectedSquad.bowler})</h6>   
       
        </div>
        <div className="all__rounders">
        <h6>Ar({selectedSquad.all_rounder})</h6>
        </div>
        </>
      ) : (
        <h1>Please select a squad</h1>
      )}
    </div>
  );
}

export default SqadMembers;
