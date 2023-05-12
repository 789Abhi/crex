import React, { useState } from "react";
import "./SquadList.css";

function SquadList({ onSquadClick }) {
  const [activecolor, setactivecolor] = useState("yellow");

  const handleSquadSelect = (squad) => {
    onSquadClick(squad);
    setactivecolor(squad);
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
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KC.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/KC.png",
      team_name: "Lucknow Super Giants",
      team_strength: "25 ",
      batsman: "6",
      bowler: "10",
      all_rounder: "9",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/KB.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/KB.png",

      team_name: "Gujarat Titans",
      team_strength: "25 ",
      batsman: "8",
      bowler: "11",
      all_rounder: "6",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/K.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/K.png",

      team_name: "Royal Challengers Bangalore",
      team_strength: "25 ",
      batsman: "5",
      bowler: "11",
      all_rounder: "11",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/F.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/F.png",
      team_name: "Mumbai Indians",
      team_strength: "25 ",
      batsman: "9",
      bowler: "7",
      all_rounder: "9",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/I.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/I.png",
      team_name: "Punjab Kings",
      team_strength: "25 ",
      batsman: "7",
      bowler: "7",
      all_rounder: "8",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/J.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/J.png",

      team_name: "Kolkatta Knight Riders",
      team_strength: "25 ",
      batsman: "6",
      bowler: "10",
      all_rounder: "6",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/L.png",
      teamjersey_img:"https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/L.png",
      team_name: "Sun Risers Hyderbad",
      team_strength: "25 ",
      batsman: "10",
      bowler: "10",
      all_rounder: "5",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
    {
      teamLogo: "https://ik.imagekit.io/c7syb8qpjp/team-flag/Teams/H.png",
      teamjersey_img:
        "https://ik.imagekit.io/c7syb8qpjp/jersey/limited/org/H.png",
      team_name: "Delhi Capitals",
      team_strength: "26 ",
      batsman: "11",
      bowler: "11",
      all_rounder: "4",
      players:[
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/72.png/tr:w-154',
          name:'S Samson (c & wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/15K.png/tr:w-154',
          name:'Y Jaiswal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/B7.png/tr:w-154',
          name:'S Hetmyer',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EI.png/tr:w-154',
          name:'D Paddikal',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/8J.png/tr:w-154',
          name:'J Bultler (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/16J.png/tr:w-154',
          name:'D Jurel (wk)',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/2OT.png/tr:w-154',
          name:'D Ferreira',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A0Q.png/tr:w-154',
          name:'K S Rathore',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/EX.png/tr:w-154',
          name:'J Root',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E2.png/tr:w-154',
          name:'R Parag',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Basith',
          role:'Batsman'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9M.png/tr:w-154',
          name:'T Boult',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/NR.png/tr:w-154',
          name:'O McCoy',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/DL.png/tr:w-154',
          name:'N Saini',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/5S9.png/tr:w-154',
          name:'K Sen',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/66N.png/tr:w-154',
          name:'K Yadav',
          role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/31.png/tr:w-154',
          name:'Y Chahal',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/C6.png/tr:w-154',
          name:'K Cariappa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9I.png/tr:w-154',
          name:'A Zampa',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/D0.png/tr:w-154',
          name:'M Ashwin',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/E7.png/tr:w-154',
          name:'K Asif',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/A8.png/tr:w-154',
          name:'S Sharma',
            role:'Bowler'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/6.png/tr:w-154',
          name:'R Ashwin',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/9P.png/tr:w-154',
          name:'J Holder',
          role:'AllRounder'
        },
        {
          img:'https://ik.imagekit.io/c7syb8qpjp/player-vector/7DK.png/tr:w-154',
          name:'A Vasisth',
          role:'AllRounder'
        },
         
      ]
    },
  ];

  return (
    <div className="squad__overflow">
      {teamlist.map((squad) => (
        <div
          key={squad.team_name}
          className={`squad__lists ${activecolor === squad ? "actives" : ""}`}   //need to implement this part later
          onClick={(e) => handleSquadSelect(squad)}
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
