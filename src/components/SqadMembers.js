import React from "react";
import "./SqadMembers.css";
function SqadMembers({ selectedSquad }) {
  return (
    <div>
      {selectedSquad ? (
        <>
          <div key={selectedSquad.team_name} className="squad__list">
            <img src={selectedSquad.teamLogo} alt="" />
            <div className="right__content">
              <h6>{selectedSquad.team_name}</h6>
              <span>{selectedSquad.team_strength}Players</span>
            </div>
          </div>

          {/*   Squad members list of individual team */}
          <div className="heading">
            <h6>Bat({selectedSquad.batsman})</h6>
          </div>
          <div className="batsman">
            {selectedSquad.players
              .filter((player) => player.role === "Batsman")
              .map((player,index) => (
                <div className="batsman__details" key={index}>
                  <div className="batsman__image">
                    <img src={player.img} alt="" />
                    <div className="team_jersey">
                      <img src={selectedSquad.teamjersey_img} alt="" />
                    </div>
                  </div>

                  <div className="batsman__info">
                  <h4 style={{color: index === 0 ? '#eaae54' : 'white'}}>{player.name}</h4>
                    <span>{player.role}</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="heading">
            <h6>Bowl({selectedSquad.bowler})</h6>
          </div>
          <div className="bowlers">
            {selectedSquad.players
              .filter((player) => player.role === "Bowler")
              .map((player) => (
                <div className="batsman__details">
                  <div className="batsman__image">
                    <img src={player.img} alt="" />
                    <div className="team_jersey">
                      <img src={selectedSquad.teamjersey_img} alt="" />
                    </div>
                  </div>

                  <div className="batsman__info">
                    <h4>{player.name}</h4>
                    <span>{player.role}</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="heading">
            <h6>Ar({selectedSquad.all_rounder})</h6>
          </div>
          <div className="all__rounders">
            {selectedSquad.players
              .filter((player) => player.role === "AllRounder")
              .map((player) => (
                <div className="batsman__details">
                  <div className="batsman__image">
                    <img src={player.img} alt="" />
                    <div className="team_jersey">
                      <img src={selectedSquad.teamjersey_img} alt="" />
                    </div>
                  </div>

                  <div className="batsman__info">
                    <h4>{player.name}</h4>
                    <span>{player.role}</span>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <span>Please select a squad</span>
      )}
    </div>
  );
}

export default SqadMembers;
