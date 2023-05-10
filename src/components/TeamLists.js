import React from "react";
import "./TeamLists.css";

function TeamLists() {
  const teamlist = [
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/M.png",
      team_name: "RR",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png",
      team_name: "LSG",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/G.png",
      team_name: "CSK",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KB.png",
      team_name: "GT",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/K.png",
      team_name: "RCB",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/F.png",
      team_name: "MI",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/I.png",
      team_name: "PBKS",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/J.png",
      team_name: "KKR",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/L.png",
      team_name: "SRH",
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/H.png",
      team_name: "DC",
    },
  ];
  const sortedList=teamlist.sort((a,b)=>{     //to sort the team list
    if (a.team_name  < b.team_name ) return -1;
    if  (a.team_name > b.team_name )  return 1;
    return 0

  })
  const limitedList=sortedList.slice(0,10)   //to limit the contents

  return (
    <div className="team__lists__img">
      {limitedList.map((event) => (
        <div>
          <img src={event.teamLogo} alt="" />
          <h6>{event.team_name}</h6>
        </div>
      ))}
    </div>
  );
}

export default TeamLists;
