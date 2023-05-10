import React from "react";
import "./SquadList.css";

function SquadList({ onSquadClick }) {
  const handleSquadSelect = (squad) => {
    onSquadClick(squad);
  };

  const teamlist = [
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/M.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Rajastan Royals",
      team_strength: "26 ",
      batsman: "11",
      bowler: "11",
      all_rounder: "3",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
      player2_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player2_name: "S Samson (c & wk)",
      player2_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Lucknow Super Giants",
      team_strength: "25 ",
      batsman: "6",
      bowler: "10",
      all_rounder: "9",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/G.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",

      team_name: "Chennai Super Kings",
      team_strength: "22 ",
      batsman: "7",
      bowler: "10",
      all_rounder: "8",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KB.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",

      team_name: "Gujarat Titans",
      team_strength: "25 ",
      batsman: "8",
      bowler: "11",
      all_rounder: "6",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/K.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",

      team_name: "Royal Challengers Bangalore",
      team_strength: "25 ",
      batsman: "5",
      bowler: "11",
      all_rounder: "11",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/F.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Mumbai Indians",
      team_strength: "25 ",
      batsman: "9",
      bowler: "7",
      all_rounder: "9",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/I.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Punjab Kings",
      team_strength: "25 ",
      batsman: "7",
      bowler: "7",
      all_rounder: "8",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/J.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",

      team_name: "Kolkatta Knight Riders",
      team_strength: "25 ",
      batsman: "6",
      bowler: "10",
      all_rounder: "6",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/L.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Sun Risers Hyderbad",
      team_strength: "25 ",
      batsman: "10",
      bowler: "10",
      all_rounder: "5",
      player1_img: "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/H.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/M.png",
      team_name: "Delhi Capitals",
      team_strength: "26 ",
      batsman: "11",
      bowler: "11",
      all_rounder: "4",
      player1_img:
        "https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154",
      player1_name: "S Samson (c & wk)",
      player1_role: "Batsman",
    },
  ];

  return (
    <div className="squad__overflow">
      {teamlist.map((squad) => (
        <div
          key={squad.team_name}
          className="squad__lists"
          onClick={() => handleSquadSelect(squad)}
        >
          <img src={squad.teamLogo} alt="" />
          <div className="right__content">
            <h6>{squad.team_name}</h6>
            <span>{squad.team_strength}Players</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SquadList;
