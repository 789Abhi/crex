import React from "react";
import "./PreviousSeasons.css";
function PreviousSeasons() {
    const button=(e)=>{
        e.preventDefault();
    }
  const collections = [
    { boxname: "IPL 2023",},
    { boxname: "IPL 2022" },
    { boxname: "IPL 2021" },
    {boxname: "More Seasons >"}
  ];
  return (
    <>
      <div>
        <h3>Previous Seasons</h3>
      </div>
      <div className="Previous__Seasons">
          {collections.map((e)=>(
         <div className="cards">
            <a href="" onClick={button}>{e.boxname}</a>
        </div>
          ))}
      </div>
    </>
  );
}

export default PreviousSeasons;
