import React, { useState } from "react";
import "./PointsTable.css";

function PointsTable() {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(!toggleState);
  };
  const teamsData = [
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/M.png",
      teamName: "Rajasthan Royals",
      matchesPlayed: 6,
      wins: 4,
      losses: 2,
      noResult: 0,
      cupRating: 4.8,
      netRunRate: "+1.043",
      points: 8,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png",
      teamName: "Lucknow Super Giants",
      matchesPlayed: 6,
      wins: 4,
      losses: 2,
      noResult: 0,
      cupRating: 5.4,
      netRunRate: "+0.709",
      points: 8,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/G.png",
      teamName: "Chennai Super Kings",
      matchesPlayed: 6,
      wins: 4,
      losses: 2,
      noResult: 0,
      cupRating: 6.2,
      netRunRate: "+0.355",
      points: 8,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KB.png",
      teamName: "Gujarat Titans",
      matchesPlayed: 5,
      wins: 3,
      losses: 2,
      noResult: 0,
      cupRating: 5.6,
      netRunRate: "+0.192",
      points: 6,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/K.png",
      teamName: "Royal Challengers Bangalore",
      matchesPlayed: 6,
      wins: 3,
      losses: 3,
      noResult: 0,
      cupRating: 8.6,
      netRunRate: "-0.068",
      points: 6,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/F.png",
      teamName: "Mumbai Indians",
      matchesPlayed: 5,
      wins: 3,
      losses: 2,
      noResult: 0,
      cupRating: 10,
      netRunRate: "-0.164",
      points: 6,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/I.png",
      teamName: "Punjab Kings",
      matchesPlayed: 6,
      wins: 3,
      losses: 3,
      noResult: 0,
      cupRating: 36,
      netRunRate: "-0.298",
      points: 6,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/J.png",
      teamName: "Kolkata Knight Riders",
      matchesPlayed: 6,
      wins: 2,
      losses: 4,
      noResult: 0,
      cupRating: 38,
      netRunRate: "+0.214",
      points: 4,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/L.png",
      teamName: "Sunrisers Hyderabad",
      matchesPlayed: 6,
      wins: 2,
      losses: 4,
      noResult: 0,
      cupRating: 44,
      netRunRate: "-0.794",
      points: 4,
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/H.png",
      teamName: "Delhi Capitals",
      matchesPlayed: 6,
      wins: 1,
      losses: 5,
      noResult: 0,
      cupRating: 110,
      netRunRate: "-1.183",
      points: 2,
    },
  ];

  return (
    <>
      <div className="points__table__head">
        <h1>POINTS TABLE</h1>
        <div className="span__switch">
          <span>Team Form</span>
          <div className="toggle__container" onClick={toggle}>
            <div
              className={`dialog-button ${toggleState ? "active" : ""}`}
            ></div>
          </div>
        </div>
      </div>

      <div className="points__table">
        <div className="head">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>NR</th>
                <th>CupR</th>
                <th>NRR</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {teamsData.map((team) => (
                <tr key={team.teamName}>
                   <img src={team.teamLogo} alt="" />
                  <td className="team__name">{team.teamName}
                  </td>
                  <td>{team.matchesPlayed}</td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                  <td>{team.noResult}</td>
                  <td>{team.cupRating}</td>
                  <td>{team.netRunRate}</td>
                  <td className="pts">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="body"></div>
      </div>
    </>
  );
}

export default PointsTable;
